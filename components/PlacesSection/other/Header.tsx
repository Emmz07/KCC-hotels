import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      className="text-center py-8 md:py-12 bg-white dark:bg-black/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-3">
        Places to Visit
      </h2>
      <div className="bg-amber-500 w-20 h-1 mx-auto mb-4"></div>
      <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 px-4">
        Get a holiday deal the whole family enjoy as you spend quality time at KCC Hotels, your home 
        away from home. Experience KCC Hotels and learn why it is a great destination for a family 
        friendly getaway or vacation any time of the year.
      </p>
    </motion.header>
  );
};

export default Header;