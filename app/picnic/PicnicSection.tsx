import { AnimateIn } from '@/components/ui/animations';
import Image from 'next/image';
import React, { useState } from 'react';

const carouselImages = [
  "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/hotelier-images/23/9c/9c33a2f54f2f5c5052a154badbd744e7b698450ab7ca78d124a5cd0213a9.jpeg",
  "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/d0/c6/1d4a7330cac97e1dfa89dd9240ecb31f2d0bd23e7f6ca0aedbad82733706.jpeg",
  "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1020,q_auto,w_2000/partner-images/96/87/d76a25c43585f7136659e21b2abc5b5f45b04b767c7670c39045793d9c4a.jpeg"
];

export function PicnicSection() {
  const [current, setCurrent] = useState(0);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

  return (
    <section id="picnic" className="py-20 mt-17 bg-gray-200 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Picnic & Outdoor Events
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto mb-12"></div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateIn from="left" delay={0.2}>
            <div className="relative rounded-xl overflow-hidden w-full" style={{ height: 400 }}>
              {/* Carousel Image */}
              <Image
                src={carouselImages[current]}
                alt={`Picnic Slide ${current + 1}`}
                fill={false}
                width={1200}
                height={400}
                className="object-cover w-full h-full transition-all duration-700"
                priority
              />
              {/* Carousel Controls */}
              <button
                onClick={prevImage}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/40 rounded-full p-2 shadow hover:bg-lime-500 hover:text-white transition-colors z-10"
                style={{ outline: "none" }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={nextImage}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/40 rounded-full p-2 shadow hover:bg-lime-500 hover:text-white transition-colors z-10"
                style={{ outline: "none" }}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-lime-500 border-lime-500' : 'bg-white/70 dark:bg-black/40 border-gray-300'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn from="right" delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Unforgettable Outdoor Experiences</h3>
              <p className="text-muted-foreground">
                Experience the perfect blend of nature and luxury with our picnic and outdoor event services.
                Our beautifully landscaped gardens provide an idyllic setting for various gatherings, from
                casual family picnics to formal garden parties.
              </p>
              <p className="text-muted-foreground">
                Our events team will create a bespoke experience tailored to your preferences, with gourmet
                catering options, tasteful decorations, and attentive service. Whether you&apos;re planning a
                corporate team-building event or a romantic celebration, our outdoor spaces offer a refreshing
                alternative to traditional indoor venues.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <h4 className="font-medium">Garden Parties</h4>
                    <p className="text-sm text-muted-foreground">Elegant outdoor gatherings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <h4 className="font-medium">Family Picnics</h4>
                    <p className="text-sm text-muted-foreground">Fun-filled days for all ages</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <h4 className="font-medium">Corporate Events</h4>
                    <p className="text-sm text-muted-foreground">Team building in nature</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                  <div>
                    <h4 className="font-medium">Romantic Setups</h4>
                    <p className="text-sm text-muted-foreground">Special occasions for couples</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}