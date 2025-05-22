import { BookmarkIcon } from 'lucide-react';
import RatingStars from './star-rating';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function PropertyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(243, 183, 32, 0.75)" }}
      className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(218,165,32,0.3)]"
    >
      <div className="p-8">
        <span className="font-inter text-sm uppercase tracking-wider text-green-500 font-semibold">
          Exclusive Offer
        </span>
        
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#222] mt-2">
          When to Book for<br /> the Best Deals
        </h2>
        
        <div className="flex flex-col md:flex-row md:items-center gap-5 mt-6">
          <div className="flex items-center">
            <p className="font-inter text-gray-700">3 Beds | 5 Guest</p> 
            <div className="ml-2">
              <RatingStars rating={5} />
            </div>
          </div>
          
          <div className="flex-1 md:text-right">
            <p className="font-inter text-sm text-gray-500">Only</p>
            <p className="font-playfair text-2xl font-bold text-[#222]">$1,400</p>
          </div>
        </div>
        
        <div className="mt-4 border-t-2 border-green-500 w-12"></div>
        
        <p className="font-inter text-gray-600 mt-6 leading-relaxed">
          Immerse yourself in Colombia&apos;s natural beauty with a stay at Cristales River Trip, 
          near the vibrant Caño Cristales River.
        </p>
        
        <div className="mt-8">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-green-500 text-green-500 hover:bg-green/5 hover:text-green-200 transition-all duration-300"
          >
            <BookmarkIcon className="w-4 h-4 text-green-500 hover:text-green-200" />
            <span>Book Now</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}