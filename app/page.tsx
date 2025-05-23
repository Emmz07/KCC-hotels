'use client';

import { HeroSection } from '@/components/sections/Hero';
import { useEffect } from 'react';
import { FadeIn } from '@/components/ui/animations';
import { RoomsSection } from '@/components/sections/RoomSection';
import { BlogSection } from '@/components/sections/BlogSection';
import HeroCarousel from '@/components/sections/CarouselSection';
import PropertyListing from '@/components/sections/ExclusiveSection';
import PlacesSection from '@/components/PlacesSection/PlacesSection';
import TestimonialsSection from '@/components/sections/TestimonialSection';
import PopularDishesSection from './restaurant/RestaurantSection';

export default function Home() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');
      
      if (anchorElement) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <FadeIn>
      <HeroSection />
      <RoomsSection />
      <HeroCarousel />
      <PlacesSection />
      <BlogSection />
      <PropertyListing />
      <PopularDishesSection />
      <TestimonialsSection />      
    </FadeIn>
  );
}
