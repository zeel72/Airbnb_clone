# Sequence of Prompts for AI-Assisted Development

This document tracks the sequence of prompts and architectural decisions utilized in building the pixel-perfect Airbnb listing clone and production architecture deliverables.

---

### Phase 1: Requirements Ingestion & Reference Analysis
- **Prompt 1**: Ingest take-home assignment PDF and target URL (`https://airbnb-clone-umber-two.vercel.app/`). Analyze design fidelity, visual tokens, view states (Listing Page, Photo Tour, Lightbox), animations, accessibility requirements, and production scaling deliverables.
- **Prompt 2**: Extract property identity from reference screenshots: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10", "Entire serviced apartment in Candolim, India", 4.96 rating, 148 reviews, Superhost badge, and curated interior photography.

### Phase 2: Design System & Component Scaffolding
- **Prompt 3**: Scaffold React + Vite + TypeScript application with zero CSS framework baggage (using pure, high-performance vanilla CSS design tokens matching Airbnb's design system).
- **Prompt 4**: Configure design tokens in `index.css`: brand coral (`#FF385C`), charcoal text (`#222222`), muted text (`#717171`), card shadows, border radii, and micro-animation keyframes (`fadeIn`, `slideUp`, `scaleIn`).
- **Prompt 5**: Implement pixel-perfect Airbnb SVG icons in `Icons.tsx` including the Bélo logo, laurel wreath "Guest favorite" badges, bed icons, and amenity symbols.

### Phase 3: Core Listing Page & Sticky Navigation
- **Prompt 6**: Build `Header.tsx` with logo, pill search ("Anywhere | Any week | Add guests"), interactive user menu dropdown, and a quick-access "Architecture Diagram" button with live status pulse.
- **Prompt 7**: Build `ListingHeader.tsx` with title, subtitle ratings, Share button (clipboard copy toast), and Save button (interactive wishlist heart toggle).
- **Prompt 8**: Build `HeroGallery.tsx` with 5-photo asymmetric collage, hover darkening/zoom effects, and floating "Show all 24 photos" pill button.
- **Prompt 9**: Build `StickyNav.tsx` with scrollspy observer automatically tracking "Photos", "Amenities", "Reviews", and "Location" anchors with smooth scrolling and mini Reserve button.

### Phase 4: Overlays & Motion Parity (Photo Tour & Lightbox)
- **Prompt 10**: Build `PhotoTourModal.tsx` (Overlay View 1) featuring full-screen modal, sticky categorized room tabs ("Living room", "Bedroom", "Jacuzzi", "Bathroom", "Kitchen", "Exterior") with thumbnail previews and photo count pills.
- **Prompt 11**: Build `LightboxModal.tsx` (Overlay View 2) featuring single-photo focused view, smooth crossfade transitions, live photo counter (`{current} / {total}`), Left/Right arrow navigation, thumbnail filmstrip with auto-scroll into view, and full keyboard accessibility (`ArrowLeft`, `ArrowRight`, `Escape`).

### Phase 5: Interactive Booking & Details
- **Prompt 12**: Build `BookingCard.tsx` with sticky right column positioning, dynamic nightly pricing calculation, 2-month interactive date picker, guest counters (Adults, Children, Infants, Pets), fee breakdown table, and reservation confirmation modal.
- **Prompt 13**: Build `ListingContent.tsx` with host avatar and Superhost badge, "Guest favorite" banner, property highlights, "About this space" with full description modal, sleeping arrangements, amenities grid with full amenities modal, and 2-month calendar availability.
- **Prompt 14**: Build `ReviewsSection.tsx` with 6-dimension progress bars (Cleanliness, Accuracy, Communication, Location, Check-in, Value) and authentic guest reviews.
- **Prompt 15**: Build `LocationSection.tsx` with interactive Candolim map terrain, pulsing location pin, satellite toggle, and neighborhood guide.
- **Prompt 16**: Build `HostSection.tsx` with host statistics, Superhost verification, and interactive "Contact Host" messaging modal.
- **Prompt 17**: Build `ThingsToKnowSection.tsx` (House rules, Safety, Cancellation) and `Footer.tsx`.

### Phase 6: Production Architecture & Subagent Configs
- **Prompt 18**: Design vector architecture diagram `public/architecture-diagram.svg` and interactive `ArchitectureModal.tsx` explaining global edge scaling, Uber H3 geospatial search, Redlock concurrency control, Kafka CDC, and multi-region Kubernetes GitOps.
- **Prompt 19**: Create subagent skill and rule definitions in `.agents/skills/airbnb-cloning/SKILL.md`, `.agents/skills/accessibility-checker/SKILL.md`, and `.agents/rules/airbnb-design-system.md`.
- **Prompt 20**: Validate production build with `npm run build` and launch dev server on port 5173.
