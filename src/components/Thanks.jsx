import React from 'react';
import { motion } from "framer-motion";

const Thanks = () => {
    return (
        <div className='hidden lg:block'>
            {/* thanks message */}
      <div className='absolute xs:bottom-10 bottom-32 w-full text-center flex justify-center items-center'>
        <a href='#work'>
          <div className='lg:w-[620px] h-10 rounded-3xl border-4 border-gray-400 flex justify-center items-center p-2'>
            <motion.div
              animate={{
                x: [0, 100, -100, 0],
                y: [0, 0, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              className="text-[#00FFFF] text-2xl"
            >
             Thank you for visiting my portfolio.
            </motion.div>
          </div>
        </a>
      </div>
      
    </div>
    );
};

export default Thanks;