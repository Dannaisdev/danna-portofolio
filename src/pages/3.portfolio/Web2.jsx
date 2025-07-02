import React from 'react';
import { motion } from 'framer-motion';
import { button } from 'framer-motion/client';
import Bp from '/src/assets/img/blueprint.pdf';

const Web2 = () => {
  const Bluep1 = [
    {
      src: Bp,
      title: 'View Blueprint',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-100 py-10 px-10'>
      <div className='text-4xl font-semibold text-center mb-10'>Project Manager</div>
      <motion.button
                onClick={() => window.history.back()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed left-12 px-4 py-2 rounded-2xl border border-white/30 text-black backdrop-blur-
                 bg-white/10 hover:bg-white/20 transition duration-300 shadow-md hover:shadow-lg"
              >
                ←
              </motion.button>
      <div className='space-y-1'>
        {Bluep1.map((item, index) => (
          <motion.a
            key={index}
            href={item.src} // <--- use `href` for links, not `src`
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            whileHover={{ scale: 0.95 }}
            className='flex items-center justify-center text-4xl row-span-5 font-bold text-gray-500 
            bg-white rounded-2xl py-4 h-full shadow hover:shadow-xl transition mt-24'
          >
            {item.title}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Web2;
