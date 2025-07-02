import React from 'react'
import myImage from '/src/assets/img/me.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='w-full h-200 object-cover object-right scale-x-1 lg:items-center lg:w-auto lg:flex-grow-0
    bg-gradient-to-r from-white from-10%  to-black to-100%'>
      <motion.section variants={{
              hidden: {opacity: 0},
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className='grid grid-col-1 p-8 gap-12'>
      <div className='max-w-[700px] m-auto h-92 w-full flex flex-col justify-center lg:items-start items-center '>        
                  {/* <div className='w-96 h-96 rounded-full border-2 border-gray-500 ml-72 scale-100'></div> */}
                  {/* <motion.img
                  src={myImage} alt='image' className='flex w-28.5 md:w-80 justify-center scale-100 motion-translate-y-in-100'/> */}
                  <motion.div 
                  variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
                  className='absolute font-font2 tracking-tight font-semibold lg:text-19xl left-28 top-96
                   bg-gradient-to-r from-black  to-white to-99% bg-clip-text text-transparent'>DANNA ILHAM SETIAWAN</motion.div>
                  <motion.a 
                  variants={{hidden: {opacity: 0}, show: {opacity: 1}}}
                  className='absolute font-font3 font-medium text-white md:text-4xl inset-y-2 right-32 
                  top-2/3 motion-translate-y-in-100'>Design Graphic & Web Developer</motion.a>
        </div>
        </motion.section>
    </div>
  )
}

export default Home
