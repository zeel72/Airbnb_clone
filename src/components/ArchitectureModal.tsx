import React, { useState, useEffect } from 'react';
import { X, Cpu, Database, Cloud, Layers, ExternalLink } from './Icons';
import './ArchitectureModal.css';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'diagram' | 'scaling' | 'search' | 'storage'>('diagram');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="arch-modal-backdrop animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="arch-modal-title"
    >
      <div
        className="arch-modal-container animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="arch-modal-header">
          <div className="arch-modal-title" id="arch-modal-title">
            <Cpu className="w-5 h-5 text-[#15803D]" />
            <span>Production-Scale Vacation Rental Architecture</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="/architecture-diagram.svg"
              download="airbnb-production-architecture.svg"
              className="btn-outline"
              style={{ fontSize: '12px', padding: '6px 12px' }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Download SVG</span>
            </a>

            <button
              className="btn-icon"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="arch-tabs-bar">
          <button
            className={`arch-tab-btn ${activeTab === 'diagram' ? 'active' : ''}`}
            onClick={() => setActiveTab('diagram')}
          >
            Architecture Diagram
          </button>
          <button
            className={`arch-tab-btn ${activeTab === 'scaling' ? 'active' : ''}`}
            onClick={() => setActiveTab('scaling')}
          >
            Scaling &amp; Microservices Strategy
          </button>
          <button
            className={`arch-tab-btn ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            Geospatial Search &amp; Redlock
          </button>
          <button
            className={`arch-tab-btn ${activeTab === 'storage' ? 'active' : ''}`}
            onClick={() => setActiveTab('storage')}
          >
            Storage &amp; Multi-Region GitOps
          </button>
        </div>

        {/* Body Content */}
        <div className="arch-modal-body">
          {activeTab === 'diagram' && (
            <div>
              <div className="arch-diagram-wrapper">
                <img
                  src="/architecture-diagram.svg"
                  alt="Production-scale Airbnb marketplace system architecture diagram"
                  className="arch-diagram-svg"
                />
              </div>

              <div className="arch-details-grid">
                <div className="arch-card">
                  <div className="arch-card-title">
                    <Cloud className="w-4 h-4 text-[#38BDF8]" />
                    <span>Edge &amp; Frontend Tier</span>
                  </div>
                  <p className="arch-card-desc">
                    Cloudflare Anycast CDN, DDoS protection, edge caching, and Next.js / React SSR hydration ensuring sub-1.2s Largest Contentful Paint worldwide.
                  </p>
                </div>

                <div className="arch-card">
                  <div className="arch-card-title">
                    <Layers className="w-4 h-4 text-[#818CF8]" />
                    <span>API Gateway &amp; BFF</span>
                  </div>
                  <p className="arch-card-desc">
                    Envoy Gateway + Apollo Federation supergraph routing requests, rate limiting by tenant IP, and real-time WebSocket fleet for live availability.
                  </p>
                </div>

                <div className="arch-card">
                  <div className="arch-card-title">
                    <Database className="w-4 h-4 text-[#10B981]" />
                    <span>Data &amp; Event Bus</span>
                  </div>
                  <p className="arch-card-desc">
                    PostgreSQL partitioned multi-AZ cluster, Redis Enterprise distributed locking (Redlock), OpenSearch spatial index, and Kafka async CDC.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scaling' && (
            <div style={{ lineHeight: 1.7, color: 'var(--color-text-primary)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
                1. Microservices Decomposition &amp; Scaling Principles
              </h3>
              <p style={{ marginBottom: '16px' }}>
                At production scale (millions of concurrent guests and hosts), a monolithic architecture collapses under write lock contention on calendar inventory and heavy geospatial read queries. We decouple into bounded domain contexts:
              </p>

              <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
                <li><strong>Listing Service:</strong> Manages property metadata, photo assets, host profiles, and house rules. Backed by multi-AZ PostgreSQL with read replicas and aggressive Edge CDN caching (TTL 10 mins with stale-while-revalidate).</li>
                <li><strong>Booking &amp; Availability Engine:</strong> Implements 2-phase reservations using Redis Redlock distributed locks to guarantee strict single-lease concurrency and prevent double bookings across time zones.</li>
                <li><strong>Pricing &amp; Yield Engine:</strong> Computes real-time dynamic rates, discounts, cleaning fees, and multi-currency taxes (e.g. GST) based on seasonal demand curves.</li>
                <li><strong>Reviews &amp; Trust Service:</strong> Computes the 6-dimension ratings breakdown (Cleanliness, Accuracy, Communication, Location, Check-in, Value) and evaluates Superhost &amp; Guest Favorite badges.</li>
              </ul>
            </div>
          )}

          {activeTab === 'search' && (
            <div style={{ lineHeight: 1.7, color: 'var(--color-text-primary)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
                2. Geospatial Search &amp; Double-Booking Prevention
              </h3>
              <p style={{ marginBottom: '16px' }}>
                Search is the highest throughput subsystem in a vacation rental marketplace. Traditional SQL bounding-box queries fail under millions of listings and complex filter faceting:
              </p>

              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>
                  Uber H3 Hexagonal Hierarchical Indexing
                </h4>
                <p style={{ fontSize: '14px', color: '#475569' }}>
                  Every property (e.g., Mirashya UG10 in Candolim, Goa) is indexed at multiple H3 resolutions (Resolution 7 ~5km for city search, Resolution 9 ~100m for neighborhood search). OpenSearch evaluates polygon intersections in memory with P99 search latencies under 35ms.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>
                  Two-Phase Distributed Locking (Redlock)
                </h4>
                <p style={{ fontSize: '14px', color: '#475569' }}>
                  When a guest clicks "Reserve", an atomic Redis lock is acquired for key <code>lock:listing:{`{id}`}:dates:{`{checkIn}`}_{`{checkOut}`}</code> with a 15-minute lease. If payment succeeds, a PostgreSQL transaction commits the reservation and emits a CDC event to Kafka. If payment fails or times out, the lease expires automatically without dangling locks.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'storage' && (
            <div style={{ lineHeight: 1.7, color: 'var(--color-text-primary)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
                3. Storage Strategy &amp; Multi-Region GitOps Deployment
              </h3>
              <p style={{ marginBottom: '16px' }}>
                A vacation rental platform requires high storage throughput for high-resolution imagery and robust disaster recovery:
              </p>

              <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                <li><strong>Media Pipeline:</strong> Uploaded guest and host photos are ingested into AWS S3 buckets. An automated serverless Sharp worker generates optimized WebP and AVIF variants in multiple resolutions (thumbnail 300px, preview 800px, hero 1600px).</li>
                <li><strong>Multi-Region Kubernetes (EKS):</strong> Services run as containerized pods across US-East, EU-Central, and AP-South (India) with Istio service mesh handling cross-cluster mTLS and intelligent traffic steering.</li>
                <li><strong>GitOps Deployment:</strong> ArgoCD applies declarative infrastructure as code with automated Canary rollouts (10% -&gt; 50% -&gt; 100%) and instant rollback triggered if error budget burn rate exceeds 0.01%.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
