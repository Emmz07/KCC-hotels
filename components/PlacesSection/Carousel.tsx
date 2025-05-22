import React, { useState, useEffect, useCallback } from 'react';
import CarouselItem from './CarouselItem';
import CarouselControls from './CarouselControls';
import { Destination } from '../../types/destination';

interface CarouselProps {
  items: Destination[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Handle autoplay
  useEffect(() => {
    let intervalId: number | undefined;
    
    if (isAutoPlaying) {
      intervalId = window.setInterval(() => {
        nextSlide();
      }, interval);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, nextSlide, interval]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(autoPlay);
  };

  return (
    <div 
      className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Items */}
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <CarouselItem 
            key={item.id} 
            destination={item} 
            active={index === currentIndex} 
          />
        ))}
      </div>

      {/* Carousel Controls */}
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