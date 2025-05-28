export interface RoomFeature {
  icon: string;
  label: string;
}

export interface Room {
  id: string;
  name: string;
  type?: string;
  description?: string;
  price?: number;
  image: string;
  features: RoomFeature[];
}

export const roomCategories = [
  { id: 'classic', name: 'Classic' },
  { id: 'budget', name: 'Budget' },
  { id: 'luxury', name: 'Luxury' },
  { id: 'double', name: 'Double' },
  { id: 'single', name: 'Single' },
];

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Single',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      { icon: 'wifi', label: 'Free WiFi' },
      { icon: 'utensils', label: 'Breakfast Included' },
      { icon: 'tv', label: '55" Smart TV' },
      { icon: 'bath', label: 'Luxury Bathroom' },
    ],
  },
  {
    id: '2',
    name: 'Deluxe Double',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      { icon: 'wifi', label: 'Free WiFi' },
      { icon: 'mountain', label: 'Mountain View' },
      { icon: 'tv', label: '42" Smart TV' },
      { icon: 'coffee', label: 'Coffee Maker' },
    ],
  },
  {
    id: '3',
    name: 'Deluxe With Balcony',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      { icon: 'wifi', label: 'Free WiFi' },
      { icon: 'kitchen', label: 'Full Kitchen' },
      { icon: 'tv', label: '65" Smart TV' },
      { icon: 'wind', label: 'Air Conditioning' },
    ],
  },
];