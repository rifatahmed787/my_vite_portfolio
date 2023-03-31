import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
  <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 mb-20'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt="" className="w-32"/>
          
        </div>
      ))}
    </div>
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href=''>
          <div className='w-64 h-5 rounded-3xl border-4 border-indigo-400 flex justify-center items-center p-2'>
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
              className='w-4 h-4 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
  </>
  );
};

export default SectionWrapper(Tech, "");
