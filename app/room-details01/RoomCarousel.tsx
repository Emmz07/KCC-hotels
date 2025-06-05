'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Expand, Play, Pause } from 'lucide-react'
import { cn } from '@/lib/utils'

type RoomImage = {
  src: string
  alt: string
}

interface RoomCarouselProps {
  images: RoomImage[]
  className?: string
}

export default function RoomCarousel({ images, className }: RoomCarouselProps) {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true })
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [fullscreen, setFullscreen] = useState(false)
  
  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev()
  }, [emblaMainApi])
  
  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext()
  }, [emblaMainApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaMainApi) emblaMainApi.scrollTo(index)
    },
    [emblaMainApi]
  )
  
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi])
  
  useEffect(() => {
    if (!emblaMainApi) return
    
    onSelect()
    emblaMainApi.on('select', onSelect)
    
    return () => {
      emblaMainApi.off('select', onSelect)
    }
  }, [emblaMainApi, onSelect])
  
  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (autoplay && emblaMainApi) {
      interval = setInterval(() => {
        emblaMainApi.scrollNext()
      }, 5000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, emblaMainApi])

  return (
    <div className={cn("relative rounded-lg overflow-hidden", className, 
      fullscreen && "fixed inset-0 z-50 bg-background flex items-center justify-center p-4"
    )}>
      {/* Main carousel */}
      <div 
        className="overflow-hidden rounded-lg" 
        ref={emblaMainRef}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div 
              className="relative flex-grow-0 flex-shrink-0 w-full min-w-0 overflow-hidden transition-opacity duration-500" 
              key={index}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity"
        onClick={scrollPrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity"
        onClick={scrollNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity"
          onClick={() => setAutoplay(!autoplay)}
          aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
        >
          {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        
        <button
          className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-80 hover:opacity-100 transition-opacity"
          onClick={() => setFullscreen(!fullscreen)}
          aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <Expand className="h-4 w-4" />
        </button>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              selectedIndex === index 
                ? "w-4 bg-primary" 
                : "bg-primary/40"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex space-x-2 py-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "flex-shrink-0 w-16 h-16 relative rounded overflow-hidden transition-all duration-300",
                selectedIndex === index 
                  ? "opacity-100 ring-2 ring-primary" 
                  : "opacity-70 hover:opacity-100"
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Select ${image.alt}`}
            >
              <Image 
                src={image.src} 
                alt={`Thumbnail for ${image.alt}`} 
                fill
                className="object-cover" 
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}