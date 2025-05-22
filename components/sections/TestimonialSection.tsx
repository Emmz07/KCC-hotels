"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "The authentic Tanzanian flavors transported me back to my childhood in Dar es Salaam. The Grilled Fish with Coconut Rice was exceptional!",
    author: "Sarah Mbeki",
    role: "Food Blogger",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
 {
    id: 2,
    content: "My stay at KCC Hotel was unforgettable! The staff were incredibly welcoming, the rooms were spotless, and the amenities exceeded my expectations. I can't wait to return.",
    author: "Michael Johnson",
    role: "Travel Writer",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content: "KCC Hotel is the perfect family getaway. The kids loved the pool, and we enjoyed the delicious breakfast every morning. Highly recommended for anyone visiting the area!",
    author: "Amina Hassan",
    role: "Family Traveler",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(next, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);
  
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className=" text-3xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-muted-foreground">
            Hear from our valued customers about their dining experiences at African Flavors.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-background rounded-xl p-8 shadow-sm border border-border/50">
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-500">{testimonial.author}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-yellow-500 w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 rounded-full bg-background shadow-md"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 rounded-full bg-background shadow-md"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}