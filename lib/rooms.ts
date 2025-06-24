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
    image: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/79/92/2f41bf85caca9e2555412c0f6d47739e247bb382cd18bf928fa30d626029.jpeg',
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
    image: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/hotelier-images/42/31/1c33a44f16daaa705542aa071a6924c98b5bd1120038e8fae3fb6c63d3e8.jpeg',
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
    image: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_534,q_40,w_800/hotelier-images/30/37/f8500feb5ec598d96e1cb23d50ef06b142f1c64397ebdd522f2ac547fb37.jpeg',
    features: [
      { icon: 'wifi', label: 'Free WiFi' },
      { icon: 'kitchen', label: 'Full Kitchen' },
      { icon: 'tv', label: '65" Smart TV' },
      { icon: 'wind', label: 'Air Conditioning' },
    ],
  },
];