import React from "react";
import {Tilt} from 'react-tilt'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       As a ReactJS developer, I have a strong foundation in HTML, CSS, and JavaScript, which allows me to create beautiful and responsive user interfaces. I am also proficient in Redux, which enables me to manage the state of complex applications with ease. In addition to ReactJS, I have experience with NodeJS, Firebase, and ExpressJS, which allows me to create robust server-side applications and APIs. I am also familiar with NextJS, which enables me to create server-rendered React applications that are optimized for SEO and performance.
      </motion.p>

      <div className='my-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-64 h-5 rounded-3xl border-4 border-cyan-400 flex justify-center items-center p-2'>
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
              className='w-4 h-4 rounded-full bg-indigo-400'
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
