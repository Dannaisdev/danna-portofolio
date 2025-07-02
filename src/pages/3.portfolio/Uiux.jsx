import React from 'react';
import { motion } from 'framer-motion';

import Uiux1 from '/src/assets/img/uiux1.png';
import Uiux2 from '/src/assets/img/uiux2.png';
import Uiux3 from '/src/assets/img/uiux3.png';
import Uiux4 from '/src/assets/img/uiux4.png';

const Uiuxs = [
  { src: Uiux4, alt: 'Uiux 4' },
  { src: Uiux2, alt: 'Uiux 2' },
  { src: Uiux3, alt: 'Uiux 3' },
  { src: Uiux1, alt: 'Uiux 1' }
];

const Uiux = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="text-4xl font-bold text-center mb-10">Poster Design</div>


       <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed left-12 px-4 py-2 rounded-2xl border border-white/30 text-black backdrop-blur-
             bg-white/10 hover:bg-white/20 transition duration-300 shadow-md hover:shadow-lg"
          >←
          </motion.button>

      <div className="space-y-10">
        {Uiuxs.map((uiux, index) => (
          <motion.img
            key={index}
            src={uiux.src}
            alt={uiux.alt}
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

export default Uiux;
