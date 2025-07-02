import React, { useRef } from 'react';
import Demo1 from '/src/assets/img/demo1.mp4';
import Demo2 from '/src/assets/img/demo2.mp4';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionGraphic = () => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div>
       
      <div className="space-y-10">

        <motion.button
                      onClick={() => window.history.back()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="fixed left-12 px-4 py-2 rounded-2xl border border-white/30 text-black backdrop-blur-
                       bg-white/10 hover:bg-white/20 transition duration-300 shadow-md hover:shadow-lg"
                    >
                      ←
                    </motion.button>

        <video
          ref={videoRef}
          className="w-full max-w-5xl mx-auto rounded-xl shadow-lg object-contain"
          controls
          playsInline
          onClick={handleVideoClick}
        >
          <source src={Demo1} type="video/mp4" />
        </video>

        <video
          ref={videoRef}
          className="w-full max-w-5xl mx-auto rounded-xl shadow-lg object-contain"
          controls
          playsInline
          onClick={handleVideoClick}
        >
          <source src={Demo2} type="video/mp4" />
        </video>
      </div>
      
    </div>
  );
};

export default MotionGraphic;
