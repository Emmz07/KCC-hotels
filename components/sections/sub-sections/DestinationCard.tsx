"use client"

import { Destination } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
  variant?: "large" | "small";
  className?: string;
}

export default function DestinationCard({ 
  destination, 
  variant = "small",
  className
}: DestinationCardProps) {
  const { name, country, price, currency, startDate, endDate, image } = destination;
  
  return (
    <motion.div 
      className={cn(
        "relative bg-white dark:bg-card rounded-lg overflow-hidden shadow-md group",
        "transition-all duration-300 hover:shadow-xl",
        variant === "large" ? "col-span-2 md:col-span-1" : "",
        className
      )}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-52 overflow-hidden">
        <Image 
          src={image} 
          alt={`${name}, ${country}`} 
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>
      
      <div className="absolute bottom-0 left-0 p-4 text-white w-full">
        <h3 className="text-xl font-semibold">{name}</h3>
        {country && <p className="text-sm text-white/90">{country}</p>}
      </div>
      
      <div className="absolute top-3 right-3 bg-white dark:bg-card p-3 rounded-lg shadow-md">
        <span className="text-sm text-gold-500 dark:text-gold-400 font-bold">{currency}{price}</span>
        <p className="text-xs text-muted-foreground">Per Day</p>
      </div>
      
      <div className="absolute top-3 left-3">
        <div className="text-xs bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md">
          {startDate} - {endDate}
        </div>
      </div>
    </motion.div>
  );
}