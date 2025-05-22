import Image from 'next/image';
import PropertyCard from './sub-sections/pro-card';
import { motion } from 'framer-motion';

export default function PropertyListing() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Luxury property at night with warm golden lighting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative h-full container mx-auto flex items-center justify-end">
        <motion.div
          className="w-full max-w-xl px-4 py-8 md:py-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <PropertyCard />
        </motion.div>
      </div>
    </section>
  );
}