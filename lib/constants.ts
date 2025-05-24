import { Facebook, Instagram, Twitter, LucideIcon } from "lucide-react"; // Corrected import

// ...existing code...
export type NavItem = {
  title: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Rooms",
    href: "/rooms",
  },
  {
    title: "Restaurant",
    href: "/restaurant",
  },
  {
    title: "Meetings",
    href: "/meetings",
  },
  {
    title: "Picnic",
    href: "/picnic",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export type RoomType = {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  imageUrl: string;
  amenities: string[];
};

export const rooms: RoomType[] = [
  {
    id: "deluxe-single",
    name: "Deluxe Single",
    description: "A comfortable room with all the essentials for a pleasant stay.",
    price: 120,
    capacity: 1,
    imageUrl: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom"],
  },
  {
    id: "deluxe-double",
    name: "Deluxe Double",
    description: "Spacious accommodation perfect for couples or business travelers.",
    price: 150,
    capacity: 2,
    imageUrl: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom", "Mini-bar"],
  },
  {
    id: "deluxe-with-balcony",
    name: "Deluxe with Balcony",
    description: "Luxury room with a private balcony offering stunning views.",
    price: 180,
    capacity: 2,
    imageUrl: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom", "Mini-bar", "Balcony"],
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description: "Premium suite with separate living area and exclusive amenities.",
    price: 250,
    capacity: 2,
    imageUrl: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV", "Private Bathroom", "Mini-bar", "Lounge Area", "Room Service"],
  }
];

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
];

import { Destination } from "@/types";

export const DESTINATIONS: Destination[] = [
  {
    id: "paris",
    name: "Paris",
    country: "France",
    price: 835,
    currency: "$",
    startDate: "11 Jun 2020",
    endDate: "22 Jun 2020",
    image: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "dubai",
    name: "United Arab",
    country: "Emirates",
    price: 750,
    currency: "$",
    startDate: "11 Jul 2020",
    endDate: "22 Jun 2020",
    image: "https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "",
    price: 550,
    currency: "$",
    startDate: "11 Jul 2020",
    endDate: "22 Jun 2020",
    image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "san-francisco",
    name: "San Francisco",
    country: "USA",
    price: 750,
    currency: "$",
    startDate: "11 Jun 2020",
    endDate: "22 Jun 2020",
    image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];