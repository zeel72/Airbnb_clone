# Airbnb Design System & Motion Rules

## 1. Visual Hierarchy
- **Header**: Fixed/sticky 80px height, centered brand logo, center pill search, right actions.
- **Hero**: 5-photo grid, left feature image 50% width, 4 right images in 2x2 grid, 12px outer border radius, floating pill button at bottom right.
- **Content Grid**: 2-column layout (minmax 1fr, 380px sticky booking card on right).

## 2. Motion & Micro-interactions
- **Hover Transitions**: `transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease`.
- **Card Zoom**: Image scales smoothly by `1.04` on hover with cubic-bezier timing.
- **Scrollspy**: Dynamic sticky subnav appearing when hero gallery scrolls past top offset, indicating active section (Photos, Amenities, Reviews, Location).
- **Modals**: Smooth fade-in overlay (`opacity: 0 -> 1`) and scale-in modal content (`scale(0.95) -> scale(1)`).
