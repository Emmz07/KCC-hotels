"use client"

import { DESTINATIONS } from "@/lib/constants";
import DestinationCard from "./DestinationCard";
import { motion } from "framer-motion";

export default function DestinationsGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {DESTINATIONS.map((destination, index) => (
        <DestinationCard 
          key={destination.id} 
          destination={destination}
          variant={index === 0 ? "large" : "small"}
        />
      ))}
    </motion.div>
  );
}