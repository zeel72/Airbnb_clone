export interface CategorizedAmenity {
  name: string;
  icon: string;
  description?: string;
  available: boolean;
}

export interface AmenityCategory {
  category: string;
  items: CategorizedAmenity[];
}

export const ALL_AMENITIES_DATA: AmenityCategory[] = [
  {
    category: 'Bathroom',
    items: [
      { name: 'Hairdryer', icon: 'Hairdryer', available: true },
      { name: 'Cleaning products', icon: 'CleaningProducts', available: true },
      { name: 'Shampoo', icon: 'Shampoo', available: true },
      { name: 'Hot water', icon: 'HotWater', available: true },
      { name: 'Shower gel', icon: 'ShowerGel', available: true },
      { name: 'Body soap', icon: 'ShowerGel', available: true },
      { name: 'Hot tub', icon: 'Bath', description: 'Private jacuzzi available 24/7', available: true },
    ],
  },
  {
    category: 'Bedroom and laundry',
    items: [
      { name: 'Washing machine', icon: 'WashingMachine', available: true },
      { name: 'Hangers', icon: 'Hangers', available: true },
      { name: 'Bed linen', icon: 'BedLinen', available: true },
      { name: 'Room-darkening blinds', icon: 'Blinds', available: true },
      { name: 'Iron', icon: 'Iron', available: true },
      { name: 'Clothes drying rack', icon: 'Shirt', available: true },
      { name: 'Clothes storage: wardrobe', icon: 'Shirt', available: true },
      { name: 'Extra pillows and blankets', icon: 'BedLinen', available: true },
    ],
  },
  {
    category: 'Entertainment',
    items: [
      { name: 'TV', icon: 'Tv', description: '55" HDTV with standard cable/satellite and Netflix', available: true },
      { name: 'Sound system', icon: 'VolumeX', available: true },
    ],
  },
  {
    category: 'Heating and cooling',
    items: [
      { name: 'Air conditioning', icon: 'Wind', available: true },
      { name: 'Ceiling fan', icon: 'Fan', available: true },
    ],
  },
  {
    category: 'Home safety',
    items: [
      {
        name: 'Exterior security cameras on property',
        icon: 'Camera',
        description: 'Installed at the front entrance and parking area for guest security',
        available: true,
      },
      { name: 'Fire extinguisher', icon: 'Flame', available: true },
      { name: 'First aid kit', icon: 'ShieldCheck', available: true },
      { name: 'Carbon monoxide alarm', icon: 'Ban', description: 'Not included', available: false },
      { name: 'Smoke alarm', icon: 'Ban', description: 'Not included', available: false },
    ],
  },
  {
    category: 'Internet and office',
    items: [
      { name: 'Wifi', icon: 'Wifi', description: 'Fast optical fiber 150 Mbps connection', available: true },
      { name: 'Dedicated workspace', icon: 'Laptop', description: 'In the bedroom with ergonomic chair and desk', available: true },
    ],
  },
  {
    category: 'Kitchen and dining',
    items: [
      { name: 'Kitchen', icon: 'Utensils', description: 'Space where guests can cook their own meals', available: true },
      { name: 'Refrigerator', icon: 'Microwave', available: true },
      { name: 'Microwave', icon: 'Microwave', available: true },
      { name: 'Cooking basics', icon: 'Utensils', description: 'Pots and pans, oil, salt and pepper', available: true },
      { name: 'Dishes and silverware', icon: 'Utensils', description: 'Bowls, chopsticks, plates, cups, etc.', available: true },
      { name: 'Freezer', icon: 'Microwave', available: true },
      { name: 'Cooker', icon: 'Flame', available: true },
      { name: 'Kettle', icon: 'Coffee', available: true },
      { name: 'Toaster', icon: 'Microwave', available: true },
      { name: 'Blender', icon: 'Utensils', available: true },
      { name: 'Coffee maker', icon: 'Coffee', available: true },
      { name: 'Wine glasses', icon: 'Utensils', available: true },
    ],
  },
  {
    category: 'Location features',
    items: [
      { name: 'Private entrance', icon: 'DoorOpen', description: 'Separate street or building entrance', available: true },
      { name: 'Resort access', icon: 'Waves', description: 'Guests can use nearby resort facilities', available: true },
    ],
  },
  {
    category: 'Outdoor',
    items: [
      { name: 'Patio or balcony', icon: 'Trees', available: true },
      { name: 'Outdoor dining area', icon: 'Utensils', available: true },
      { name: 'Private hot tub', icon: 'Bath', available: true },
      { name: 'Shared outdoor pool', icon: 'Waves', description: 'Available all year, open specific hours', available: true },
      { name: 'Garden', icon: 'Trees', available: true },
    ],
  },
  {
    category: 'Parking and facilities',
    items: [
      { name: 'Free parking on premises', icon: 'Car', available: true },
      { name: 'Free street parking', icon: 'Car', available: true },
      { name: 'Shared gym in building', icon: 'Zap', available: true },
    ],
  },
  {
    category: 'Services',
    items: [
      { name: 'Pets allowed', icon: 'PawPrint', description: 'Assistance animals are always allowed', available: true },
      { name: 'Self check-in', icon: 'KeyRound', available: true },
      { name: 'Building staff', icon: 'Users', description: 'Someone is available 24 hours a day to let guests in', available: true },
      { name: 'Long-term stays allowed', icon: 'CalendarCheck', description: 'Allow stay of 28 days or more', available: true },
      { name: 'Cleaning available during stay', icon: 'Sparkles', available: true },
    ],
  },
];
