'use client'

import { motion } from 'framer-motion'

export default function MapEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full max-w-5xl mx-auto px-4 py-12"
    >
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.921120475299!2d38.986137274538926!3d-6.779454566298107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c42817870c0b9%3A0x74e369761057ff9a!2sKCC%20Hotels!5e0!3m2!1sen!2sng!4v1749079519169!5m2!1sen!2sng"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </motion.div>
  );
}

