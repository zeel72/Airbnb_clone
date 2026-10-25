export interface Photo {
  id: number;
  url: string;
  thumbnail: string;
  category: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  avatarLetter?: string;
  avatarBg?: string;
  avatarColor?: string;
  rating: number;
  date: string;
  stayDuration: string;
  content: string;
  hasShowMore?: boolean;
}

export interface AmenityItem {
  name: string;
  category: string;
  available: boolean;
  icon: string;
}

export const LISTING_DATA = {
  id: 'mirashya-ug10-candolim',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  type: 'Entire serviced apartment in Candolim, India',
  stats: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    baths: 1,
  },
  rating: 4.95,
  reviewCount: 19,
  isGuestFavorite: true,
  priceTotal: 28499,
  totalNights: 5,
  checkInDate: '10/18/2026',
  checkOutDate: '10/23/2026',
  cancellationDeadline: '17 October',
  location: {
    city: 'Candolim',
    state: 'Goa',
    country: 'India',
  },
  host: {
    name: 'Mirashya Homes',
    avatar: '/assets/images/avatars/host.jpeg',
    isSuperhost: true,
    rating: 4.68,
    reviews: 1463,
    yearsHosting: 2,
    responseTime: 'within an hour',
    responseRate: 100,
    bio: 'Hi, we are Mirashya Homes! We provide curated boutique serviced apartments with private jacuzzis in North Goa. We pride ourselves on sparkling cleanliness and creating unforgettable holiday experiences.',
    coHosts: [
      { name: 'Sharath', avatar: '/assets/images/avatars/rev1.jpeg' },
      { name: 'Aman Dev Pahwa', avatar: '/assets/images/avatars/co1.jpg' },
      { name: 'Maria Karen Priyanka', avatar: '/assets/images/avatars/co3.jpg' },
      { name: 'Simran', avatar: '/assets/images/avatars/rev3.jpeg' },
      { name: 'Pallavi', avatar: '/assets/images/avatars/co2.jpg' },
      { name: 'Sanyukta', avatar: '/assets/images/avatars/rev4.jpeg' },
      { name: 'Shruti', letter: 'S', bg: '#FCE7F3', color: '#9D174D' },
      { name: 'Amisha', letter: 'A', bg: '#E0F2FE', color: '#0369A1' },
    ],
  },
  highlights: [
    {
      title: 'Outdoor entertainment',
      description: 'The pool and alfresco dining are great for summer trips.',
      icon: 'ShoppingBag',
    },
    {
      title: 'Designed for staying cool',
      description: 'Beat the heat with the A/C and ceiling fan.',
      icon: 'Fan',
    },
    {
      title: 'Self check-in',
      description: 'You can check in with the building staff.',
      icon: 'DoorOpen',
    },
  ],
  description: `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍸, it's ideal for couples, families, and remote workers looking for a tranquil escape.`,

  sleepingArrangements: [
    {
      room: 'Bedroom',
      bedType: '1 double bed',
      image: '/assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg',
    },
    {
      room: 'Living room',
      bedType: '1 sofa',
      image: '/assets/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg',
    },
  ],

  amenities: [
    { name: 'Kitchen', category: 'Kitchen and dining', available: true, icon: 'Utensils' },
    { name: 'Wifi', category: 'Internet and office', available: true, icon: 'Wifi' },
    { name: 'Dedicated workspace', category: 'Internet and office', available: true, icon: 'Laptop' },
    { name: 'Free parking on premises', category: 'Parking and facilities', available: true, icon: 'Car' },
    { name: 'Pool', category: 'Outdoor', available: true, icon: 'Waves' },
    { name: 'Hot tub', category: 'Bathroom', available: true, icon: 'Bath' },
    { name: 'Pets allowed', category: 'Services', available: true, icon: 'PawPrint' },
    { name: 'Exterior security cameras on property', category: 'Home safety', available: true, icon: 'Camera' },
    { name: 'Carbon monoxide alarm', category: 'Home safety', available: false, icon: 'Ban' },
    { name: 'Smoke alarm', category: 'Home safety', available: false, icon: 'Ban' },
  ],

  ratingBreakdown: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 5.0,
    location: 4.8,
    value: 4.8,
  },

  reviewTags: [
    { emoji: '🛏️', name: 'Comfort', count: 6, image: '/assets/images/chips/comfort.png' },
    { emoji: '✅', name: 'Accuracy', count: 5, image: '/assets/images/chips/accuracy.png' },
    { emoji: '🛁', name: 'Hot tub', count: 5, image: '/assets/images/chips/hot-tub.png' },
    { emoji: '🍧', name: 'Condition', count: 4, image: '/assets/images/chips/condition.png' },
    { emoji: '🎁', name: 'Hospitality', count: 8, image: '/assets/images/chips/hospitality.png' },
    { emoji: '🧴', name: 'Cleanliness', count: 4, image: '/assets/images/chips/cleanliness.png' },
    { emoji: '🧼', name: 'Amenities', count: 2, image: '/assets/images/chips/amenities.png' },
    { emoji: '🎨', name: 'Decor', count: 2, image: '/assets/images/chips/decor.png' },
    { emoji: '🏠', name: 'Indoor spaces', count: 2, image: '/assets/images/chips/indoor-spaces.png' },
    { emoji: '📍', name: 'Location', count: 2, image: '/assets/images/chips/location.png' },
  ],

  reviews: [
    {
      id: 'rev-1',
      author: 'Amit',
      avatarLetter: 'A',
      avatarBg: '#F5E6CC',
      avatarColor: '#6B4310',
      rating: 5,
      date: '1 week ago',
      stayDuration: '2 months on Airbnb',
      content: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    },
    {
      id: 'rev-2',
      author: 'Aheesh',
      avatar: '/assets/images/avatars/rev1.jpeg',
      rating: 5,
      date: '2 weeks ago',
      stayDuration: '3 years on Airbnb',
      content: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
      hasShowMore: true,
    },
    {
      id: 'rev-3',
      author: 'Samiksha',
      avatar: '/assets/images/avatars/rev2.jpeg',
      rating: 5,
      date: 'May 2026',
      stayDuration: '8 months on Airbnb',
      content: 'the host nitish was really great help',
    },
    {
      id: 'rev-4',
      author: 'Vedant',
      avatarLetter: 'V',
      avatarBg: '#E9E4F5',
      avatarColor: '#4A3B7A',
      rating: 5,
      date: 'May 2026',
      stayDuration: '4 years on Airbnb',
      content: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
      hasShowMore: true,
    },
    {
      id: 'rev-5',
      author: 'Vaibhav S',
      avatar: '/assets/images/avatars/rev3.jpeg',
      rating: 5,
      date: 'May 2026',
      stayDuration: '3 years on Airbnb',
      content: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    },
    {
      id: 'rev-6',
      author: 'Mohd',
      avatar: '/assets/images/avatars/rev4.jpeg',
      rating: 5,
      date: 'May 2026',
      stayDuration: '5 years on Airbnb',
      content: 'Great place. Exactly as described in the listing.',
    },
  ],

  similarListings: [
    { id: 's1', title: 'Beautiful Studio with a view to die for', image: '/assets/images/similar/s1.jpeg', price: 23600, rating: 4.91 },
    { id: 's2', title: 'NAQAB - 1bhk with private pool', image: '/assets/images/similar/s2.jpeg', price: 42218, rating: 4.95 },
    { id: 's3', title: 'Greentique Luxury Flat with plunge pool, Calangute', image: '/assets/images/similar/s3.jpeg', price: 44506, rating: 4.94 },
    { id: 's4', title: 'The Tropical Studio | 5 mins to Beach', image: '/assets/images/similar/s4.jpeg', price: 22824, rating: 4.96 },
    { id: 's5', title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', image: '/assets/images/similar/s5.jpeg', price: 39942, rating: 4.95 },
    { id: 's6', title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool', image: '/assets/images/similar/s6.jpeg', price: 45648, rating: 5.0 },
    { id: 's7', title: 'Luxury Apt | Private Pool | 6 Mins from Beach', image: '/assets/images/similar/s2.jpeg', price: 48786, rating: 4.93 },
    { id: 's8', title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.', image: '/assets/images/similar/s4.jpeg', price: 22824, rating: 4.92 },
  ],

  thingsToKnow: {
    houseRules: [
      { text: 'Check-in: 2:00 PM – 10:00 PM', icon: 'Clock' },
      { text: 'Checkout before 11:00 AM', icon: 'Clock' },
      { text: '3 guests maximum', icon: 'Users' },
      { text: 'No smoking inside apartment', icon: 'Ban' },
      { text: 'Pets allowed upon prior request', icon: 'PawPrint' },
    ],
    safetyAndProperty: [
      { text: 'Exterior security cameras on property', icon: 'Camera' },
      { text: 'Carbon monoxide alarm not reported', icon: 'AlertCircle' },
      { text: 'Smoke alarm not reported', icon: 'AlertCircle' },
    ],
    cancellationPolicy: [
      { text: 'Free cancellation before 17 October.', icon: 'CheckCircle' },
      { text: 'Review host’s full policy for details.', icon: 'Info' },
    ],
  },
};

export const LISTING_PHOTOS: Photo[] = [
  // 5 Hero Photos (Positions 1 to 5)
  {
    id: 1,
    url: '/assets/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg',
    thumbnail: '/assets/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg',
    category: 'Living room 2',
    title: 'Outdoor Patio & Private Jacuzzi Tub',
    description: 'Private patio with hydrotherapy jacuzzi tub surrounded by rich wood accents and ambient warm wall sconces.',
  },
  {
    id: 2,
    url: '/assets/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg',
    thumbnail: '/assets/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg',
    category: 'Living room 2',
    title: 'Outdoor Patio Lounge Seating',
    description: 'Comfortable wicker outdoor sofa with soft cushions, coffee table, and lush planters.',
  },
  {
    id: 3,
    url: '/assets/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg',
    thumbnail: '/assets/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg',
    category: 'Living room 2',
    title: 'Hydrotherapy Jacuzzi Bath',
    description: 'Relaxing jacuzzi tub with multi-jet hydrotherapy and teak deck surround.',
  },
  {
    id: 4,
    url: '/assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg',
    thumbnail: '/assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg',
    category: 'Bedroom',
    title: 'Master Bedroom Suite',
    description: 'Cozy bedroom with plush queen bed, premium linens, wardrobe, ceiling fan, and patio door.',
  },
  {
    id: 5,
    url: '/assets/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg',
    thumbnail: '/assets/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg',
    category: 'Exterior',
    title: 'Amor De Goa Complex Exterior',
    description: 'Terracotta tiled architecture, landscaped palm gardens, and serene outdoor environment.',
  },

  // Category: Living room 1
  {
    id: 6,
    url: '/assets/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg',
    thumbnail: '/assets/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg',
    category: 'Living room 1',
    title: 'Living Room Sofa & Lounge',
    description: 'Inviting living room with comfortable sofa bed, modern art accents, and dining table.',
  },
  {
    id: 7,
    url: '/assets/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg',
    thumbnail: '/assets/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg',
    category: 'Living room 1',
    title: 'Living Room Media & Entertainment',
    description: 'Smart TV, media console, high-speed WiFi router, and bright natural lighting.',
  },
  {
    id: 8,
    url: '/assets/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg',
    thumbnail: '/assets/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg',
    category: 'Living room 1',
    title: 'Dining Area & Workstation',
    description: 'Dining setup perfect for enjoying meals or remote work sessions.',
  },

  // Category: Living room 2
  {
    id: 9,
    url: '/assets/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg',
    thumbnail: '/assets/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg',
    category: 'Living room 2',
    title: 'Patio Veranda View',
    description: 'Covered veranda with garden views and direct access from the living area.',
  },
  {
    id: 10,
    url: '/assets/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg',
    thumbnail: '/assets/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg',
    category: 'Living room 2',
    title: 'Private Deck Night Ambiance',
    description: 'Warm evening lighting illuminating the jacuzzi tub and lounge area.',
  },
  {
    id: 11,
    url: '/assets/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg',
    thumbnail: '/assets/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg',
    category: 'Living room 2',
    title: 'Alfresco Relaxation Nook',
    description: 'Intimate patio corner with comfortable seating and breezy ambiance.',
  },
  {
    id: 12,
    url: '/assets/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg',
    thumbnail: '/assets/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg',
    category: 'Living room 2',
    title: 'Jacuzzi Tub Hydrotherapy Details',
    description: 'Detailed view of jet controls, clean warm water, and wooden deck surrounds.',
  },

  // Category: Full kitchen
  {
    id: 13,
    url: '/assets/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg',
    thumbnail: '/assets/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg',
    category: 'Full kitchen',
    title: 'Fully Equipped Kitchen',
    description: 'Kitchen with modern induction cooktop, refrigerator, microwave, and electric kettle.',
  },
  {
    id: 14,
    url: '/assets/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg',
    thumbnail: '/assets/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg',
    category: 'Full kitchen',
    title: 'Kitchen Cookware & Dishware',
    description: 'Pots, pans, cutlery, wine glasses, and cooking essentials ready for guest use.',
  },

  // Category: Bedroom
  {
    id: 15,
    url: '/assets/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg',
    thumbnail: '/assets/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg',
    category: 'Bedroom',
    title: 'Bedroom Bedside & Reading Lights',
    description: 'Bedside tables with elegant night lamps and accessible charging points.',
  },
  {
    id: 16,
    url: '/assets/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg',
    thumbnail: '/assets/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg',
    category: 'Bedroom',
    title: 'Bedroom Wardrobe & Storage',
    description: 'Spacious wardrobe with hangers, iron, luggage rack, and digital locker.',
  },
  {
    id: 17,
    url: '/assets/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg',
    thumbnail: '/assets/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg',
    category: 'Bedroom',
    title: 'Sunlit Bedroom Window',
    description: 'Large glass door opening out onto private greenery and morning breeze.',
  },
  {
    id: 18,
    url: '/assets/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg',
    thumbnail: '/assets/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg',
    category: 'Bedroom',
    title: 'Bedroom AC & Climate Control',
    description: 'Whisper-quiet air conditioning unit and high-speed ceiling fan.',
  },
  {
    id: 19,
    url: '/assets/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg',
    thumbnail: '/assets/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg',
    category: 'Bedroom',
    title: 'Bedroom Perspective & Decor',
    description: 'Warm neutral tones and serene wall art creating a restful environment.',
  },

  // Category: Full bathroom
  {
    id: 20,
    url: '/assets/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg',
    thumbnail: '/assets/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg',
    category: 'Full bathroom',
    title: 'Modern En-Suite Bathroom',
    description: 'Glass-enclosed rain shower, large vanity mirror, 24/7 hot water geyser, and fresh towels.',
  },

  // Category: Gym
  {
    id: 21,
    url: '/assets/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg',
    thumbnail: '/assets/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg',
    category: 'Gym',
    title: 'Community Fitness Center',
    description: 'Air-conditioned gym with treadmills, elliptical trainer, and strength equipment.',
  },
  {
    id: 22,
    url: '/assets/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg',
    thumbnail: '/assets/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg',
    category: 'Gym',
    title: 'Cardio Workout Station',
    description: 'Modern cardio machines overlooking landscaped garden courtyard.',
  },
  {
    id: 23,
    url: '/assets/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg',
    thumbnail: '/assets/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg',
    category: 'Gym',
    title: 'Free Weights & Dumbbells Rack',
    description: 'Comprehensive dumbbell sets and exercise benches for daily fitness routine.',
  },
  {
    id: 24,
    url: '/assets/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg',
    thumbnail: '/assets/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg',
    category: 'Gym',
    title: 'Resistance Machine Station',
    description: 'Multi-station resistance workout equipment.',
  },
  {
    id: 25,
    url: '/assets/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg',
    thumbnail: '/assets/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg',
    category: 'Gym',
    title: 'Stretching & Yoga Mat Area',
    description: 'Dedicated space with yoga mats and wellness mirrors.',
  },

  // Category: Exterior
  {
    id: 26,
    url: '/assets/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg',
    thumbnail: '/assets/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg',
    category: 'Exterior',
    title: 'Building Entrance & Palm Walkway',
    description: 'Paved walkways lined with royal palm trees and manicured lawns.',
  },
  {
    id: 27,
    url: '/assets/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg',
    thumbnail: '/assets/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg',
    category: 'Exterior',
    title: 'Portuguese Style Architecture',
    description: 'Authentic Goan architectural facades with tiled sloping roofs and private verandas.',
  },
  {
    id: 28,
    url: '/assets/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg',
    thumbnail: '/assets/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg',
    category: 'Exterior',
    title: 'Lush Garden Courtyard',
    description: 'Tropical flowering plants and shaded outdoor sitting benches.',
  },
  {
    id: 29,
    url: '/assets/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg',
    thumbnail: '/assets/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg',
    category: 'Exterior',
    title: 'Night Illumination & Security',
    description: 'Gated community with 24/7 security guard post and illuminated pathways.',
  },
  {
    id: 30,
    url: '/assets/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg',
    thumbnail: '/assets/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg',
    category: 'Exterior',
    title: 'Complex Aerial & Surrounding Foliage',
    description: 'Peaceful residential neighborhood in Candolim surrounded by greenery.',
  },

  // Category: Pool
  {
    id: 31,
    url: '/assets/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg',
    thumbnail: '/assets/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg',
    category: 'Pool',
    title: 'Resort Swimming Pool',
    description: 'Crystal-clear outdoor swimming pool surrounded by sun loungers and umbrella shades.',
  },
  {
    id: 32,
    url: '/assets/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg',
    thumbnail: '/assets/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg',
    category: 'Pool',
    title: 'Pool Deck Sun Loungers',
    description: 'Comfortable recliners for sunbathing and relaxing between dips.',
  },
  {
    id: 33,
    url: '/assets/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg',
    thumbnail: '/assets/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg',
    category: 'Pool',
    title: 'Kids Pool Section',
    description: 'Shallow wading pool section ideal for family relaxation.',
  },

  // Category: Additional photos
  {
    id: 34,
    url: '/assets/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg',
    thumbnail: '/assets/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg',
    category: 'Additional photos',
    title: 'Candolim Sunset Beach Nearby',
    description: 'Golden sands and warm Arabian Sea waves located just 5 minutes from the property.',
  },
  {
    id: 35,
    url: '/assets/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg',
    thumbnail: '/assets/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg',
    category: 'Additional photos',
    title: 'North Goa Coastal Scenery',
    description: 'Scenic palm-lined coastline and beach shack culture nearby.',
  },
  {
    id: 36,
    url: '/assets/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg',
    thumbnail: '/assets/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg',
    category: 'Additional photos',
    title: 'Local Cafés & Dining Strip',
    description: 'Famous restaurants, continental cafés, and cocktail bars within walking distance.',
  },
  {
    id: 37,
    url: '/assets/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg',
    thumbnail: '/assets/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg',
    category: 'Additional photos',
    title: 'Boutique Interior Details',
    description: 'Handcrafted wooden furnishings and artistic lamps.',
  },
  {
    id: 38,
    url: '/assets/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg',
    thumbnail: '/assets/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg',
    category: 'Additional photos',
    title: 'Welcome Amenities & Refreshments',
    description: 'Complimentary tea, coffee, bottled water, and welcome amenities upon arrival.',
  },
  {
    id: 39,
    url: '/assets/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg',
    thumbnail: '/assets/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg',
    category: 'Additional photos',
    title: 'Patio Flowering Bougainvillea',
    description: 'Vibrant pink tropical bougainvillea draping over private patio wall.',
  },
  {
    id: 40,
    url: '/assets/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg',
    thumbnail: '/assets/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg',
    category: 'Additional photos',
    title: 'High-Speed Workstation Setup',
    description: 'Ergonomic table with dual charging plugs and steady 150 Mbps WiFi connection.',
  },
  {
    id: 41,
    url: '/assets/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg',
    thumbnail: '/assets/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg',
    category: 'Additional photos',
    title: 'Evening Patio Mood Lights',
    description: 'Romantic evening mood lighting perfect for candlelit jacuzzi sessions.',
  },
  {
    id: 42,
    url: '/assets/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg',
    thumbnail: '/assets/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg',
    category: 'Additional photos',
    title: 'Community Clubhouse & Reception',
    description: 'Helpful building front desk staff for seamless key handover and local tips.',
  },
  {
    id: 43,
    url: '/assets/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg',
    thumbnail: '/assets/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg',
    category: 'Additional photos',
    title: 'Sunny Morning Veranda',
    description: 'Peaceful morning sunshine filtering through palm fronds over the deck.',
  },
];
