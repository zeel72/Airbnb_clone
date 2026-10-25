# Airbnb Clone Assets & Layout Mapping Blueprint

This directory (`reference_site_assets/`) contains all **73 authentic, high-resolution media assets** extracted directly from the reference deployment at [`https://airbnb-clone-umber-two.vercel.app/`](https://airbnb-clone-umber-two.vercel.app/).

All assets have been organized into intuitive subdirectories with full metadata and precise placement instructions so you can build a 100% pixel-perfect Airbnb listing clone.

---

## 📁 Directory Structure Overview

```
reference_site_assets/
├── photos/             (43 high-resolution property listing photos, ~11 MB)
├── avatars/            (9 avatars: 1 host, 5 reviewers, 3 co-hosts)
├── chips/              (10 review category rating badges)
├── ui/                 (4 core UI graphics: Search icon, Discount badge, Laurel wreath)
├── similar/            (6 similar stay listing preview cards)
├── fonts/              (1 authentic Airbnb Cereal variable font: AirbnbCerealVF.woff2)
├── manifest.json       (Machine-readable catalog with dimensions, bytes & URLs)
├── MAPPING_GUIDE.md    (Step-by-step layout & component placement guide)
└── README.md           (This documentation)
```

---

## 🎯 Component-by-Component Placement Guide

### 1. Hero Photo Grid (Top of Listing Page)
The main listing page features an asymmetrical 5-photo collage with 1 large hero on the left and a 2x2 grid on the right:

| Position | Local File Path | Description | Original Reference URL |
| :--- | :--- | :--- | :--- |
| **Large Left (Hero 1)** | `photos/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg` | Outdoor patio & hydrotherapy jacuzzi with mood lighting | `/assets/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg` |
| **Top Middle (Hero 2)** | `photos/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg` | Outdoor patio lounge wicker seating | `/assets/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg` |
| **Top Right (Hero 3)** | `photos/9be71047-fc52-438a-9270-75cb470f6752.jpeg` | Hydrotherapy tub with wooden deck surround | `/assets/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg` |
| **Bottom Middle (Hero 4)** | `photos/67c61c6f-6260-4809-9510-0360e58a345d.jpeg` | Bedroom suite with queen bed & crisp linens | `/assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg` |
| **Bottom Right (Hero 5)** | `photos/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg` | Building exterior & terracotta roof | `/assets/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg` |

*Note: Bottom-right photo contains the floating "Show all 43 photos" pill button.*

---

### 2. "Where you'll sleep" Sleeping Arrangement Cards
Located midway down the listing page before the amenities section:

| Room Card | Local File Path | Bed Info | Original URL |
| :--- | :--- | :--- | :--- |
| **Bedroom** | `photos/67c61c6f-6260-4809-9510-0360e58a345d.jpeg` | 1 queen bed | `/assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg` |
| **Living room** | `photos/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg` | 1 sofa bed | `/assets/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg` |

---

### 3. Full Photo Tour Modal (Overlay View 1)
Triggered by clicking any hero photo or the "Show all photos" button. Grouped into 9 sticky category tabs:

#### 🛋️ Living room 1 (3 photos)
- `photos/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg` *(Tab Thumbnail)*
- `photos/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg`
- `photos/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg`

#### ☕ Living room 2 (7 photos)
- `photos/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg` *(Tab Thumbnail)*
- `photos/9be71047-fc52-438a-9270-75cb470f6752.jpeg`
- `photos/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg`
- `photos/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg`
- `photos/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg`
- `photos/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg`
- `photos/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg`

#### 🍳 Full kitchen (2 photos)
- `photos/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg` *(Tab Thumbnail)*
- `photos/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg`

#### 🛏️ Bedroom (6 photos)
- `photos/67c61c6f-6260-4809-9510-0360e58a345d.jpeg` *(Tab Thumbnail)*
- `photos/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg`
- `photos/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg`
- `photos/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg`
- `photos/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg`
- `photos/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg`

#### 🚿 Full bathroom (1 photo)
- `photos/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg` *(Tab Thumbnail)*

#### 🏋️ Gym (5 photos)
- `photos/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg` *(Tab Thumbnail)*
- `photos/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg`
- `photos/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg`
- `photos/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg`
- `photos/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg`

#### 🌴 Exterior (6 photos)
- `photos/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg` *(Tab Thumbnail)*
- `photos/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg`
- `photos/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg`
- `photos/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg`
- `photos/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg`
- `photos/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg`

#### 🏊 Pool (3 photos)
- `photos/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg` *(Tab Thumbnail)*
- `photos/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg`
- `photos/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg`

#### 📸 Additional photos (10 photos)
- `photos/70325367-cbae-4993-b560-18cd3f6edd53.jpeg` *(Tab Thumbnail)*
- `photos/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg`
- `photos/30ad93b2-293f-494d-b645-626303c6cb93.jpeg`
- `photos/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg`
- `photos/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg`
- `photos/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg`
- `photos/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg`
- `photos/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg`
- `photos/862d936c-0f34-4e50-af87-b519e2781d19.jpeg`
- `photos/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg`

---

### 4. UI Elements & Brand Badges
| Asset | Local File Path | Where to Use |
| :--- | :--- | :--- |
| **Search House** | `ui/searchbar-house.png` | Search bar pill indicator icon |
| **Discount Badge** | `ui/discount.svg` | Sticky booking widget discount pill |
| **Laurel Left** | `ui/laurel-left.png` | Left side of "Guest favorite" wreath |
| **Laurel Right** | `ui/laurel-right.png` | Right side of "Guest favorite" wreath |

---

### 5. Review Rating Chips (Top of Reviews Section)
Used horizontally across the top of the reviews block:
- `chips/comfort.png` (Comfort)
- `chips/accuracy.png` (Accuracy)
- `chips/hot-tub.png` (Hot tub)
- `chips/condition.png` (Condition)
- `chips/hospitality.png` (Hospitality)
- `chips/cleanliness.png` (Cleanliness)
- `chips/amenities.png` (Amenities)
- `chips/decor.png` (Decor)
- `chips/indoor-spaces.png` (Indoor spaces)
- `chips/location.png` (Location)

---

### 6. Host & Reviewer Avatars
| Person | File Path | Role / Location |
| :--- | :--- | :--- |
| **Mirashya Homes** | `avatars/host.jpeg` | Host summary and "Meet your host" profile |
| **Co-host 1** | `avatars/co1.jpg` | Co-host listing in Host section |
| **Co-host 2** | `avatars/co2.jpg` | Co-host listing in Host section |
| **Co-host 3** | `avatars/co3.jpg` | Co-host listing in Host section |
| **Amit** | `avatars/rev1.jpeg` | Review card 1 |
| **Aheesh** | `avatars/rev2.jpeg` | Review card 2 |
| **Pooja** | `avatars/rev3.jpeg` | Review card 3 |
| **Karan** | `avatars/rev4.jpeg` | Review card 4 |
| **Guest 5** | `avatars/rev5.jpeg` | Review card 5 |

---

### 7. Similar Stays Carousel ("More stays nearby")
Cards at the bottom of the page before the footer:
- `similar/s1.jpeg` (Stay 1: Luxury Pool Villa)
- `similar/s2.jpeg` (Stay 2: Beachfront Cottage)
- `similar/s3.jpeg` (Stay 3: Modern Loft)
- `similar/s4.jpeg` (Stay 4: Garden Studio)
- `similar/s5.jpeg` (Stay 5: Sunset Suite)
- `similar/s6.jpeg` (Stay 6: Heritage Portuguese Home)

---

### 8. Authentic Airbnb Typography
- `fonts/AirbnbCerealVF.woff2`: Official Airbnb Cereal variable font.
  Include in CSS:
  ```css
  @font-face {
    font-family: 'Airbnb Cereal';
    src: url('/assets/fonts/AirbnbCerealVF.woff2') format('woff2');
    font-weight: 100 900;
    font-display: swap;
  }
  ```
