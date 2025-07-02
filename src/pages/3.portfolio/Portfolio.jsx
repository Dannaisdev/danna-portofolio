import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-white to-black flex">
      {/* LEFT SIDE */}
      <Link
        to="/displaydesign"
        className="w-1/2 h-full flex items-center justify-center group transition duration-300"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-black group-hover:text-white"
        >
          DESIGN GRAPHIC
        </motion.div>
      </Link>

      {/* RIGHT SIDE */}
      <Link
        to="/webdeveloper"
        className="w-1/2 h-full flex items-center justify-center group transition duration-300"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-white group-hover:text-black"
        >
          WEB DEVELOPER
        </motion.div>
      </Link>
    </div>
  );
};

export default Portfolio;
