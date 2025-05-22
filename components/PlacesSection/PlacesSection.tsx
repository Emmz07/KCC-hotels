import React from 'react';
import Carousel from './Carousel';
import Header from './other/Header';
import DestinationGrid from './other/DestinationGrid';
import { destinations } from '@/data/destinations';
import { motion } from 'framer-motion';

function PlacesSection() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black/50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Header />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Carousel items={destinations} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <DestinationGrid destinations={destinations} />
        </motion.div>
      </div>
    </div>
  );
}

export default PlacesSection;