# Master Asset & Component Mapping Guide

This document maps all 73 downloaded assets from `https://airbnb-clone-umber-two.vercel.app/` directly to their exact UI components, CSS classes, DOM selectors, and screen positions for a 100% pixel-perfect Airbnb clone.

---

## 1. 🖼️ Property Photo Gallery (43 Photos)

All property photos are stored in `reference_site_assets/photos/` and mirrored in `public/assets/images/`.

### A. The 5 Hero Grid Photos (Main Listing Page Header)
Located in component `HeroGallery.tsx` inside `.hero-grid`.

| Hero Slot | Filename | Aspect Ratio / Size | Visual Content |
| :--- | :--- | :--- | :--- |
| **Hero 1 (Large Left)** | `2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg` | Landscape (~2:1) / 293 KB | Patio hydrotherapy jacuzzi tub surrounded by rich wood accents and mood wall sconces |
| **Hero 2 (Top Middle)** | `090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg` | Landscape (16:10) / 249 KB | Outdoor patio wicker couch with cushions, coffee table, and planters |
| **Hero 3 (Top Right)** | `9be71047-fc52-438a-9270-75cb470f6752.jpeg` | Landscape (16:10) / 231 KB | In-suite private jacuzzi hydrotherapy tub with wooden deck surround |
| **Hero 4 (Bottom Middle)** | `67c61c6f-6260-4809-9510-0360e58a345d.jpeg` | Landscape (16:10) / 305 KB | Master bedroom suite with queen bed, white linens, and bedside lamp |
| **Hero 5 (Bottom Right)** | `c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg` | Landscape (16:10) / 244 KB | Amor De Goa complex exterior with terracotta roofs and palm gardens |

---

### B. "Where you'll sleep" Cards
Located in component `ListingContent.tsx` inside `.sleeping-cards-container`.

| Room | Filename | Bed Info |
| :--- | :--- | :--- |
| **Bedroom** | `67c61c6f-6260-4809-9510-0360e58a345d.jpeg` | 1 queen bed |
| **Living room** | `a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg` | 1 sofa bed |

---

### C. Photo Tour Modal (Overlay View 1) — 9 Categorized Sections
Triggered by clicking "Show all photos" or any hero image. Located in `PhotoTourModal.tsx`.

#### 1. Living room 1 (3 photos)
- `a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg` *(Tab Thumbnail)* — Living Room Sofa & Lounge
- `a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg` — Media Console & Smart TV
- `f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg` — Dining Table & Remote Work Setup

#### 2. Living room 2 (7 photos)
- `090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg` *(Tab Thumbnail)* — Covered Patio Veranda
- `9be71047-fc52-438a-9270-75cb470f6752.jpeg` — Hydrotherapy Jacuzzi Tub
- `f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg` — Veranda Garden View
- `2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg` — Patio Jacuzzi Wide Perspective
- `34529829-a971-44d3-ac2f-90ea3678a34d.jpeg` — Night Lighting on Deck
- `153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg` — Outdoor Alfresco Sitting Nook
- `3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg` — Jacuzzi Jet Details & Wooden Surrounds

#### 3. Full kitchen (2 photos)
- `56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg` *(Tab Thumbnail)* — Fully Equipped Kitchen
- `ddc853d7-e658-405c-bedc-8f31106c447e.jpeg` — Cookware, Glasses & Amenities

#### 4. Bedroom (6 photos)
- `67c61c6f-6260-4809-9510-0360e58a345d.jpeg` *(Tab Thumbnail)* — Master Bedroom Suite
- `1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg` — Nightstand & Reading Lamp
- `0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg` — Wardrobe & Storage Space
- `a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg` — Sunlight Bedroom Window
- `48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg` — Climate Control A/C Unit
- `3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg` — Bedroom Wall Decor & Lighting

#### 5. Full bathroom (1 photo)
- `97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg` *(Tab Thumbnail)* — Modern Bathroom with Rain Shower

#### 6. Gym (5 photos)
- `9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg` *(Tab Thumbnail)* — Fitness Center Overview
- `246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg` — Cardio Treadmills & Elliptical
- `4fede77d-7a71-446f-89e3-263af937f3fa.jpeg` — Free Weights & Dumbbells
- `79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg` — Multi-Station Resistance Machine
- `f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg` — Stretching & Yoga Mat Space

#### 7. Exterior (6 photos)
- `23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg` *(Tab Thumbnail)* — Entrance Walkway & Royal Palms
- `5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg` — Portuguese Architectural Villa
- `608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg` — Landscaped Courtyard Garden
- `5b856fde-a393-41bf-b373-c9d02e64221f.jpeg` — Complex Night Illumination & Security
- `c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg` — Aerial Courtyard Perspective
- `42befad7-fb29-473d-91db-b03e7a544d1d.jpeg` — Candolim Greenery Surrounds

#### 8. Pool (3 photos)
- `fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg` *(Tab Thumbnail)* — Swimming Pool & Loungers
- `929545d3-e241-46c0-8a70-c24531ce7b54.jpeg` — Sunbathing Deck Recliners
- `8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg` — Wading Kids Pool Area

#### 9. Additional photos (10 photos)
- `70325367-cbae-4993-b560-18cd3f6edd53.jpeg` *(Tab Thumbnail)* — Candolim Sunset Beach
- `cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg` — Coastal Beach Palms
- `30ad93b2-293f-494d-b645-626303c6cb93.jpeg` — Local Café & Dining Strip
- `9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg` — Handcrafted Wooden Furniture
- `b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg` — Welcome Amenities & Coffee Tray
- `dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg` — Tropical Pink Bougainvillea
- `fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg` — Work Desk & Laptop Setup
- `3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg` — Candlelit Patio Evening Atmosphere
- `862d936c-0f34-4e50-af87-b519e2781d19.jpeg` — Front Desk Concierge Area
- `79addceb-8c2d-419b-80ff-e29af426a94c.jpeg` — Morning Sunlight on Deck

---

## 2. 👤 Avatars & Profiles

Located in `reference_site_assets/avatars/`:

| Filename | Role | Display Location |
| :--- | :--- | :--- |
| `host.jpeg` | Primary Host: Mirashya Homes | Host badge row & "Meet your host" section |
| `co1.jpg` | Co-Host 1 | "Meet your host" co-hosts list |
| `co2.jpg` | Co-Host 2 | "Meet your host" co-hosts list |
| `co3.jpg` | Co-Host 3 | "Meet your host" co-hosts list |
| `rev1.jpeg` | Guest Reviewer: Amit | Review Card 1 |
| `rev2.jpeg` | Guest Reviewer: Aheesh | Review Card 2 |
| `rev3.jpeg` | Guest Reviewer: Pooja | Review Card 3 |
| `rev4.jpeg` | Guest Reviewer: Karan | Review Card 4 |
| `rev5.jpeg` | Guest Reviewer: Guest 5 | Review Card 5 |

---

## 3. 🏷️ Review Rating Chips

Located in `reference_site_assets/chips/`. Displayed horizontally above the review cards:

| Filename | Rating Tag |
| :--- | :--- |
| `comfort.png` | Comfort (🛏️) |
| `accuracy.png` | Accuracy (✅) |
| `hot-tub.png` | Hot tub (🛁) |
| `condition.png` | Condition (🍧) |
| `hospitality.png` | Hospitality (🎁) |
| `cleanliness.png` | Cleanliness (🧴) |
| `amenities.png` | Amenities (🧼) |
| `decor.png` | Decor (🎨) |
| `indoor-spaces.png` | Indoor spaces (🏠) |
| `location.png` | Location (📍) |

---

## 4. 🎨 UI Assets

Located in `reference_site_assets/ui/`:

- `searchbar-house.png`: Icon displayed inside search input pills.
- `discount.svg`: Special promotion/discount ribbon badge in sticky booking widget.
- `laurel-left.png`: Left laurel wreath for the "Guest favorite" banner.
- `laurel-right.png`: Right laurel wreath for the "Guest favorite" banner.

---

## 5. 🏡 Similar Stays Cards

Located in `reference_site_assets/similar/`. Displayed in "More stays nearby" section:

- `s1.jpeg`: Luxury Villa with Private Pool
- `s2.jpeg`: Beachfront Candolim Cottage
- `s3.jpeg`: Modern Designer Studio
- `s4.jpeg`: Chic 1BHK with Jacuzzi
- `s5.jpeg`: Sunset View Penthouse
- `s6.jpeg`: Heritage Portuguese Home

---

## 6. 🔤 Authentic Airbnb Font

Located in `reference_site_assets/fonts/`:
- `AirbnbCerealVF.woff2`: Official variable-weight font used across all Airbnb listings.
