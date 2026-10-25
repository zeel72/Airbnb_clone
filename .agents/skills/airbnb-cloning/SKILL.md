---
name: airbnb-cloning
description: Specialized instructions and design guidelines for creating high-fidelity, accessible Airbnb UI clones with interactive overlays and motion.
---

# Airbnb UI Cloning Workflow & Parity Guide

## 1. Core Visual Tokens
- **Primary Brand Color**: `#FF385C` (Airbnb Coral / Rausch)
- **Primary Gradient**: `linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)`
- **Text Palette**: `#222222` (primary titles & body), `#717171` (secondary metadata), `#B0B0B0` (captions/borders)
- **Borders & Dividers**: `#EBEBEB` (light dividers), `#DDDDDD` (standard borders), `#B0B0B0` (dark inputs)
- **Font Stack**: `Plus Jakarta Sans`, `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`

## 2. Views Parity Checklist
1. **Listing Page**:
   - Header with Bélo logo, pill search bar ("Anywhere | Any week | Add guests"), and user menu.
   - Title row with Share and Save action buttons (animated heart fill).
   - Asymmetric 5-photo hero grid with hover zoom and floating "Show all 24 photos" pill button.
   - Host summary with Superhost badge and guest capacity stats.
   - Laurel wreath "Guest favorite" banner with ratings score (4.96) and review count (148).
   - Property highlights with custom line icons.
   - Expandable "About this space" description with full modal dialog.
   - "Where you'll sleep" bedroom & sofa cards.
   - Categorized amenities grid with "Show all amenities" modal.
   - Sticky booking widget with interactive calendar, guest counter, dynamic price calculation, and reservation modal.
   - Reviews section with 6 rating progress bars and authentic guest review cards.
   - Candolim neighborhood interactive map with pulsing pin and satellite toggle.
   - Meet your host section with contact messaging modal.
   - Things to know: House rules, safety & cancellation policy.
   - Sticky sub-navigation with scrollspy tabs (Photos, Amenities, Reviews, Location).

2. **Photo Tour (Overlay 1)**:
   - Fullscreen modal (`z-index: 1000`) with back button.
   - Sticky room category filter tabs with photo count pills.
   - Categorized room sections (Living room, Bedroom, Jacuzzi, Bathroom, Kitchen, Exterior).
   - Clicking any photo opens the Lightbox directly with that photo active.

3. **Lightbox (Overlay 2)**:
   - Fullscreen dark stage with centered high-resolution photo.
   - Keyboard navigation: `ArrowLeft` (previous), `ArrowRight` (next), `Escape` (close).
   - Live photo counter (`{current} / {total}`) and captions.
   - Filmstrip thumbnail carousel with active state and auto-scroll into view.
