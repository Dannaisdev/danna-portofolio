import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { button } from 'framer-motion/client'

import W1 from '/src/assets/img/w1.png';
import W2 from '/src/assets/img/w2.png';
import W3 from '/src/assets/img/w3.png';
import W4 from '/src/assets/img/w4.png';
import W5 from '/src/assets/img/w5.png';
import W6 from '/src/assets/img/w6.png';

const Webs1 = [
  { src: W1, alt: 'w1'},
  { src: W2, alt: 'w2'},
  { src: W3, alt: 'w3'},
  { src: W4, alt: 'w4'},
  { src: W5, alt: 'w5'},
  { src: W6, alt: 'w6'}
];



const Web1 = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-10 px-10'>
      <div className='text-4xl font-semibold text-center mb-10'>WAREDAN</div>


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
            {Webs1.map((webs1, index) => (
              <motion.img
                key={index}
                src={webs1.src}
                alt={webs1.alt}
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
  )
}

export default Web1
