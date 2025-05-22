'use client';

import { useState, useRef } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <motion.section 
      className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="relative aspect-video w-full">
        <video
          ref={videoRef}
          src="/hotel-room.mp4" // Place your video in the public folder and update the filename as needed
          poster="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full h-full object-cover"
          controls={isPlaying}
          onPause={() => setIsPlaying(false)}
        />

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <motion.button
              className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/90 dark:bg-white/80 text-teal-500 shadow-lg group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayClick}
              aria-label="Play video"
              type="button"
            >
              <Play className="h-8 w-8 fill-current text-yellow-500 ml-1" />
              <div className="absolute w-full h-full rounded-full bg-yellow-400/20 animate-ping" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.section>
  );
}