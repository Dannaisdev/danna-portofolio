import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { button } from 'framer-motion/client';

// Importing images from your assets folder
import Logo1 from '/src/assets/img/Logo1.png';
import Logo2 from '/src/assets/img/Logo2.png';
import Logo3 from '/src/assets/img/Logo3.png';
import Logo4 from '/src/assets/img/Logo4.png';

const logos = [
  { src: '/src/assets/img/Logo1.png', alt: 'Logo 1' },
  { src: '/src/assets/img/Logo2.png', alt: 'Logo 2' },
  { src: '/src/assets/img/Logo3.png', alt: 'Logo 3' },
  { src: '/src/assets/img/Logo4.png', alt: 'Logo 4' },
];

const Logo = () => {
    return (
      <div className="min-h-screen bg-white py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Logo Portfolio</h1>
        
        <motion.button
      onClick={() => window.history.back()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed px-5 py-2 rounded-2xl shadow-lg font-medium text-green-800 bg-gradient-to-r
       from-green-100 to-white border border-green-300 hover:from-green-200 hover:to-green-50
        transition duration-300"
    >
      ←
    </motion.button>

        <div className="space-y-10">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.src}
              alt={logo.alt}
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

export default Logo;
