---
name: accessibility-checker
description: Accessibility auditing rules ensuring WCAG 2.1 AA compliance, keyboard navigation, focus management, and screen-reader accessibility.
---

# Accessibility Checker Workflow

## Critical Parity Checks
1. **Keyboard Traps & Modal Trapping**:
   - Every modal (`PhotoTourModal`, `LightboxModal`, `ArchitectureModal`, `AmenitiesModal`) must trap focus and close on `Escape`.
   - Lightbox navigation must support `ArrowLeft` and `ArrowRight`.
2. **Semantic Elements & ARIA Labels**:
   - Use `<header>`, `<main>`, `<nav>`, `<aside>`, `<section>`, `<footer>` instead of plain divs.
   - Interactive buttons must feature descriptive `aria-label` tags (e.g., `aria-label="Save to wishlist"`).
   - Rating elements should communicate numeric ratings and total reviews clearly.
3. **Color Contrast & Focus Rings**:
   - Maintain minimum 4.5:1 contrast for normal text and 3:1 for large text.
   - Clear `:focus-visible` rings with `outline: 2px solid #222222`.
4. **Motion Accessibility**:
   - Support `prefers-reduced-motion` for animations and transitions.
