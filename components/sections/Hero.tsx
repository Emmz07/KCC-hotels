'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';



export function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // State for showing the back-to-top button
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/hero.mp4" type="video/mp4" />
          {/* Fallback text */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="container px-4 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-100 mb-4">
            Experience <span className='text-green-500'>Luxury</span> <br /> Like Never Before
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            A perfect hide out from the hassles of the city life and work In a welcoming atmosphere of serenity, tranquility and relaxation<br /> KCC Hotel offers it all...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          
          <Button size="lg" className="text-base bg-yellow-500">
            Book Now
          </Button>
          <Button size="lg" variant="outline" className="text-base border-yellow-500 text-yellow-500 hover:bg-yellow-500 transition-colors duration-700 border-white hover:bg-white/20 hover:text-white">
            Explore Rooms
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
        <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer group"
        animate={{
            y: [0, 10, 0],
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
        }}
        onClick={() => {
            // Scroll to the next section after HeroSection
            const heroSection = document.getElementById('rooms') || document.querySelector('section[id]:not([id=""])');
            if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        }}
        >
        <ArrowDownCircle className="h-10 w-10 text-yellow-100 group-hover:text-yellow-500 transition-colors duration-300 animate-bounce" />
        </motion.div>
         {/* Sticky Back to Top Button */}
        {showTop && (
        <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-yellow-500/20 hover:bg-yellow-400/40 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center group backdrop-blur"
        aria-label="Back to top"
        >
        <ArrowUpCircle className="h-8 w-8 text-white group-hover:text-yellow-700 transition-colors duration-300" />
        </button>
      )}
    </section>
  );
}