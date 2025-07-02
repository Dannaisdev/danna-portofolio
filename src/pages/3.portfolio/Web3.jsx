import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { button } from 'framer-motion/client'

import b1 from '/src/assets/img/b1.png';
import b2 from '/src/assets/img/b2.png';
import b3 from '/src/assets/img/b3.png';
import b4 from '/src/assets/img/b4.png';
import b5 from '/src/assets/img/b5.png';
import b6 from '/src/assets/img/b6.png';
import b7 from '/src/assets/img/b7.png';
import b8 from '/src/assets/img/b8.png';
import b9 from '/src/assets/img/b9.png';
import b10 from '/src/assets/img/b10.png';
import b11 from '/src/assets/img/b11.png';
import b12 from '/src/assets/img/b12.png';
import b13 from '/src/assets/img/b13.png';
import b14 from '/src/assets/img/b14.png';
import b15 from '/src/assets/img/b15.png';
import b16 from '/src/assets/img/b16.png';
import b17 from '/src/assets/img/b17.png';

const Webs3 = [
    { src: b1, alt:'b1'},
    { src: b2, alt:'b2'},
    { src: b3, alt:'b3'},
    { src: b4, alt:'b4'},
    { src: b5, alt:'b5'},
    { src: b6, alt:'b6'},
    { src: b7, alt:'b7'},
    { src: b8, alt:'b8'},
    { src: b9, alt:'b9'},
    { src: b10, alt:'b10'},
    { src: b11, alt:'b11'},
    { src: b12, alt:'b12'},
    { src: b13, alt:'b13'},
    { src: b14, alt:'b14'},
    { src: b15, alt:'b15'},
    { src: b16, alt:'b16'},
    { src: b17, alt:'b17'}
];

const Web3 = () => {
  return (
    <div className='min-h-screen bg-gray-100 py-10 px-10'>
      <div className='text-4xl font-semibold text-center mb-10'>WAREHOUSE

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
                          {Webs3.map((webs3, index) => (
                            <motion.img
                              key={index}
                              src={webs3.src}
                              alt={webs3.alt}
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
    </div>
  )
}

export default Web3
