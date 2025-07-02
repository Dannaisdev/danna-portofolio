import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { button } from "framer-motion/client";

const DisplayDesign = () => {
  const designItems = [
    { id: 1, title: "Logo", link: "/Logo" },
    { id: 2, title: "Poster", link: "/Poster" },
    { id: 3, title: "UI/UX", link: "/UIUX" },
    { id: 4, title: "Motion Graphic", link: "/Motiongraphic" },
  ];

  return (
    
    <div className="min-h-screen bg-gray-100 py-24 flex flex-col items-center px-6 font-sans">
      


    <motion.button
      onClick={() => window.history.back()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed left-12 px-4 py-2 rounded-2xl border border-white/30 text-black backdrop-blur-
       bg-white/10 hover:bg-white/20 transition duration-300 shadow-md hover:shadow-lg"
    >
      ←
    </motion.button>
      

      <div className="grid grid-cols-2 grid-rows-2 gap-24 w-full max-w-5xl mt-6 p-2 rounded-2xl shadow-lg">
        {designItems.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.link}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center text-4xl row-span-4 font-bold text-gray-500 
            bg-white rounded-2xl py-4 h-full shadow hover:shadow-xl transition"
          >
            {item.title}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default DisplayDesign;
