"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const carouselSlides = [
  {
    id: 1,
    imageUrl: "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Welcome to KCC Hotel",
    description: "Discover the perfect blend of comfort and luxury at KCC Hotel. Enjoy world-class amenities, elegant rooms, and exceptional service for a truly memorable stay."
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Elegant Rooms & Suites",
    description: "Relax in our beautifully designed rooms and suites, each crafted for your comfort. Experience stunning views, plush bedding, and modern conveniences."
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Fine Dining & Cuisine",
    description: "Savor gourmet dishes and international flavors at our in-house restaurant and bar. Enjoy a unique culinary journey in a sophisticated setting."
  },
  {
    id: 4,
    imageUrl: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Meetings & Events",
    description: "Host your meetings, conferences, or special events in our versatile venues. Our dedicated team ensures every detail is perfect for your occasion."
  }
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    
    // Auto-scroll every 6 seconds
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {carouselSlides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] h-full relative">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16 lg:p-24 max-w-4xl">
                <h1 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl">
                  {slide.description}
                </p>
                <Button  
                  size="lg"
                  className="rounded-full px-8 py-6 font-medium bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg transition-colors duration-300"
                >
                  View Prices
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute z-20 bottom-8 right-8 md:bottom-16 md:right-16 flex items-center space-x-4">
        <button
          onClick={scrollPrev}
          className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      {/* Dots */}
      <div className="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === selectedIndex ? "w-8 bg-yellow-500" : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Slide Counter */}
      <div className="absolute z-20 bottom-8 left-8 md:bottom-16 md:left-16 text-white/80 text-sm font-medium ">
        {selectedIndex + 1} / {scrollSnaps.length}
      </div>
    </div>
  );
};

export default HeroCarousel;