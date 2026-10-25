# Production-Scale Vacation Rental Marketplace Architecture

This document describes the high-level system architecture and scaling strategy for an enterprise vacation-rental marketplace (like Airbnb) capable of handling **millions of active listings, tens of millions of concurrent searches, and high-throughput real-time bookings worldwide**.

An interactive vector diagram is embedded in the application UI (click the **Architecture Diagram** button in the header) and available as a standalone vector graphic at `public/architecture-diagram.svg`.

---

## 1. High-Level Architectural Topology

```
[Clients: Web / iOS / Android / PWA]
               │
               ▼
[Global Edge CDN & Anycast WAF: Cloudflare / Fastly]
               │  (Sub-50ms Edge Caching & Asset Pipelines)
               ▼
[API Gateway & BFF Layer: Envoy Proxy + Apollo Federation]
   ├── Auth & Session Service (OAuth2 / JWT + Redis)
   └── Realtime WebSocket Fleet (Calendar / Messaging)
               │
               ▼
┌────────────────────────────────────────────────────────┐
│             CORE DOMAIN MICROSERVICES (K8s)           │
├───────────────┬────────────────────────┬───────────────┤
│ Listing       │ Geospatial Search      │ Booking &     │
│ Service       │ Engine (Uber H3)       │ Availability  │
├───────────────┼────────────────────────┼───────────────┤
│ Pricing &     │ Reviews & Trust        │ Payment &     │
│ Yield Engine  │ Scoring (Superhost)    │ Settlement    │
└───────────────┴────────────────────────┴───────────────┘
               │
               ▼
┌────────────────────────────────────────────────────────┐
│            DATA, STORAGE & STREAMING FABRIC            │
├───────────────┬────────────────────────┬───────────────┤
│ PostgreSQL    │ OpenSearch             │ Redis Cluster │
│ (Multi-AZ)    │ (H3 Geospatial Index)  │ (Redlock)     │
├───────────────┼────────────────────────┼───────────────┤
│ AWS S3        │ Apache Kafka           │ ArgoCD        │
│ Multi-Region  │ (Event Bus & CDC)      │ GitOps Canary │
└───────────────┴────────────────────────┴───────────────┘
```

---

## 2. Scaling Strategy by Layer

### A. Frontend & Global Edge Layer
- **Framework**: React / Next.js with Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) for high-intent search pages.
- **Edge Caching**: Cloudflare Anycast CDN with Tiered Cache and Argo Smart Routing. Static assets (images, CSS, JS bundles) cached across 300+ PoPs worldwide.
- **Image Pipeline**: High-res property photography ingested to S3 and transformed into modern WebP/AVIF formats at multiple breakpoints (300px, 800px, 1200px, 1600px) on the fly via serverless Sharp workers with cache headers `Cache-Control: public, max-age=31536000, immutable`.
- **Core Web Vitals SLAs**:
  - **LCP (Largest Contentful Paint)**: < 1.2s via preloaded hero image candidates and edge HTML hydration.
  - **INP (Interaction to Next Paint)**: < 80ms via concurrent React rendering and debounced calendar updates.
  - **CLS (Cumulative Layout Shift)**: 0.00 via fixed aspect-ratio image containers and skeleton loaders.

### B. API Gateway & BFF (Backend-For-Frontend)
- **Envoy Gateway**: Serves as the reverse proxy supporting HTTP/3, TLS 1.3 termination, IP-based rate limiting, DDoS mitigation, and canary routing.
- **Apollo Federation Supergraph**: Aggregates decoupled microservices into a unified GraphQL schema, enabling frontend clients to fetch listing details, host stats, and pricing calculations in a single round-trip.
- **WebSocket & SSE Fleet**: Dedicated push servers maintaining persistent connections for real-time calendar locks and instant messaging between hosts and guests.

### C. Geospatial Search & Discovery Engine
- **Hierarchical Spatial Indexing (Uber H3)**: Traditional bounding-box SQL queries fail when indexing millions of properties. We assign each property an H3 hexagonal cell ID at resolutions 7 (~5 km, metropolitan area) and 9 (~100 m, neighborhood precision).
- **OpenSearch Cluster**: Real-time filtering across H3 indexes, price ranges, amenities, and instant dates. P99 search latency remains under **35ms**.

### D. Booking Engine & Concurrency Control (Zero Double-Bookings)
- **Two-Phase Distributed Locking (Redlock)**:
  1. When a user clicks "Reserve", an atomic Redis lock is acquired on key `lock:listing:{id}:dates:{checkIn}_{checkOut}` with a 15-minute lease time.
  2. The reservation state is saved as `PENDING_PAYMENT`.
  3. Once payment webhook from Stripe/Razorpay is confirmed via idempotent payment ledger, the booking is committed to PostgreSQL in an atomic transaction, marking the calendar dates as `CONFIRMED`.
  4. If payment fails or times out, the Redis lock automatically expires without dangling locks.

### E. Data & Event-Driven Streaming Fabric
- **PostgreSQL Multi-AZ Cluster**: Primary database partitioned by geographical region (e.g., APAC, EMEA, US) with synchronous standbys and multiple read replicas for query distribution.
- **Apache Kafka Event Bus**: Captures all write events using Debezium Change Data Capture (CDC). Emits asynchronous events:
  - `ReservationConfirmedEvent` -> triggers host notification, SMS/email confirmation, and inventory index invalidation.
  - `ReviewPostedEvent` -> triggers host rating recalculation and Superhost badge evaluation.

### F. Multi-Region Deployment & Reliability
- **Kubernetes (EKS)**: Multi-region cluster deployment with Istio Service Mesh handling mutual TLS (mTLS), distributed tracing (OpenTelemetry), and traffic circuit breaking.
- **GitOps & Canary Rollouts**: Automated continuous delivery via ArgoCD. Canary deployments route 10% of production traffic to new releases, automatically rolling back if error rate exceeds 0.01% or P99 latency spikes above 200ms.
