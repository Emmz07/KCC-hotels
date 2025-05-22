"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="mb-12">
      <motion.span 
        className="inline-block text-sm font-medium text-emerald-500 dark:text-emerald-400 mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Popular Destination
      </motion.span>
      
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Choose Your{" "}
        <span className="text-gold-500 dark:text-gold-400">Country</span>
      </motion.h1>
      
      <motion.p 
        className="text-muted-foreground max-w-xl mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised words
        which don&apos;t look even slightly believable.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button 
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          Discover More
        </Button>
      </motion.div>
    </div>
  );
}