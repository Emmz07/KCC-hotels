'use client';

import React, { useState, useEffect, useCallback } from 'react';
import CarouselItem from '@/components/PlacesSection/CarouselItem';
import CarouselControls from '@/components/PlacesSection/CarouselControls';
import { Destination } from '@/types/destination';

interface CarouselProps {
  items?: Destination[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items = [],
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    if (items.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items]);

  const prevSlide = useCallback(() => {
    if (items.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items]);

  const goToSlide = useCallback((index: number) => {
    if (items.length === 0) return;
    setCurrentIndex(index);
  }, [items]);

  useEffect(() => {
    if (!isAutoPlaying || items.length === 0) return;

    const intervalId = window.setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide, interval, items]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(autoPlay);
  };

  if (items.length === 0) {
    return <div className="text-center p-4">No items to display.</div>;
  }

  return (
    <div
      className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            destination={item}
            active={index === currentIndex}
          />
        ))}
      </div>

      <CarouselControls
        total={items.length}
        currentIndex={currentIndex}
        onPrev={prevSlide}
        onNext={nextSlide}
        onDotClick={goToSlide}
      />
    </div>
  );
};

export default Carousel;