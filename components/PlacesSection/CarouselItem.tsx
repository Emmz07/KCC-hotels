import React from 'react';
import { Destination } from '../../types/destination';
import { motion } from 'framer-motion';

interface CarouselItemProps {
  destination: Destination;
  active: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ destination, active }) => {
  return (
    <motion.div
      className={`carousel-item absolute w-full h-full`}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={active ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.98 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ zIndex: active ? 10 : 0, pointerEvents: active ? 'auto' : 'none' }}
    >
      <div className="relative w-full h-full">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg transform transition-transform duration-500 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-sm text-amber-300 mb-2">
                {destination.date} | {destination.category}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{destination.title}</h2>
              <p className="text-sm md:text-base mb-4 line-clamp-3 md:line-clamp-4">
                {destination.description}
              </p>
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors duration-300 text-sm font-medium">
                Read More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselItem;