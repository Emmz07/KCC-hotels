'use'

import React from 'react';
import { Destination } from '@/types/destination';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface DestinationGridProps {
  destinations: Destination[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" }
  }),
};

const DestinationGrid: React.FC<DestinationGridProps> = ({ destinations }) => {
  return (
    <div className="mt-12 mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, i) => (
          <motion.div
            key={destination.id}
            className="group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            custom={i}
          >
            <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg bg-white dark:bg-black/50">
              <div className=" relative h-64 overflow-hidden relative">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{destination.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-lime-600">{destination.date}</span>
                  <Link href="/" className="text-lime-600 hover:text-lime-800 dark:hover:text-lime-400 font-medium transition-colors duration-300">
                  Read More →
                 </Link>
                </div> 
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DestinationGrid;