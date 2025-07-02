import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { button } from 'framer-motion/client';

const webdeveloper = () => {
  const webItems = [
    { id: 1, title: "WAREDAN", link: "/Web1"},
    { id: 1, title: "Warehouse System (Blue Print)", link: "/Web2"},
    { id: 1, title: "Booking", link: "/Web3"},
  ];

  return (
    <div className='bg-black w-screen h-screen py-24 flex flex-col items-center px-6 font-sans'>
        <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="fixed left-12 px-4 py-2 rounded-2xl border border-white/30 text-white backdrop-blur-
               bg-white/10 hover:bg-white/20 transition duration-300 shadow-md hover:shadow-lg"
            >
              ←
            </motion.button>
      <div className='grid grid-cols-3 grid-rows-2 gap-24 w-
      max-w-5xl mt-6 p-2 rounded-2xl shadow-lg'>
        {webItems.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.link}
            initial={{ opacity: 0, y: 60}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.2, delay: index * 0.2}}
            whileHover={{ scale: 1.05}}
            className='flex items-center justify-center text-4xl row-span-5 font-bold text-gray-500 
            bg-white rounded-2xl py-4 h-full shadow hover:shadow-xl transition mt-24 text-center'
          >
          {item.title}
          </motion.a>
        ))}
        WEB DEVELOPER PROJECTS</div>
    </div>
  )
}

export default webdeveloper;
