import React from 'react';
import { motion } from 'framer-motion';

import Poster1 from '/src/assets/img/poster1.png';
import Poster2 from '/src/assets/img/poster2.png';
import Poster3 from '/src/assets/img/poster3.png';

const Posters = [
  { src: Poster1, alt: 'Poster 1' },
  { src: Poster2, alt: 'Poster 2' },
  { src: Poster3, alt: 'Poster 3' },
];

const Poster = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="text-4xl font-bold text-center mb-10">Poster Design</div>

     <motion.button
          onClick={() => window.history.back()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed left-12 px-4 py-2 rounded-2xl border border-white/30 text-black backdrop-blur-
           bg-white/10 hover:bg-white/20 transition duration-300 shadow-md hover:shadow-lg"
        >
          ←
        </motion.button>

      <div className="space-y-10">
        {Posters.map((poster, index) => (
          <motion.img
            key={index}
            src={poster.src}
            alt={poster.alt}
            className="w-full max-w-5xl mx-auto rounded-xl shadow-lg object-contain"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Poster;
