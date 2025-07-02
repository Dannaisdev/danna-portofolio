import React from "react";
import Danna1 from '/src/assets/img/danna1.png'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="md:w-1/2">
            
            <p className="mt-4 text-gray-700 text-2xl mx-20">
                       My name is Danna Ilham Setiawan, a 23-year-old based in Indonesia. I am a dedicated and detail-oriented
individual with a strong work ethic and a passion for continuous learning. Proficient in both spoken and written
English, I am capable of working effectively under pressure and meeting tight deadlines. I have hands-on
experience in both software and hardware operations and am confident in my ability to contribute meaningfully to
any role I undertake. I am committed to fulfilling my responsibilities and exceeding expectations through
professionalism, adaptability, and teamwork.
            </p>
          
          </div>
          <div className="md:w-1/2 flex justify-center px-4">
          <motion.img
                  src={Danna1} 
                  alt='image' 
                  className='w-80 object-contain'/>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-semibold text-white">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div>
              <span className="text-2xl font-bold text-white">JavaScript</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">React</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">TailwindCSS</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Node.js</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Adobe Ai / Ps / Pr / Ae</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">ERP</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">MySQL</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">Microsoft Office</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            PROJECTS
          </h2>
          <p className="mt-4 text-gray-700">
            A curated collection of my work across graphic design and web development,
             showcasing creative solutions, clean visuals, and functional digital experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-black rounded-lg shadow">
              <h3 className="text-xl font-semibold text-white">Graphic Design</h3>
              <p className="text-white mt-2">
                Successfully completed more than
              </p>
              <p className="font-bold text-4xl text-white">50+</p>
            </div>
            <div className="p-6 bg-black rounded-lg shadow">
              <h3 className="text-xl font-semibold text-white">Web Developer</h3>
              <p className="text-white mt-2">
                Successfully completed more than
              </p>
              <p className="font-bold text-4xl text-white">10+</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
