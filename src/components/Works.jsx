import React from "react";
import {Tilt} from 'react-tilt'
import { motion } from "framer-motion";
import {live} from "../assets"
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./Work.css"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link
}) => {
 
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          

          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <div
              onClick={() => window.open(live_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={live}
                alt='live link'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
         
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      

      <div className='my-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* see all button */}
      <section>
    <div className="flex flex-wrap justify-center pb-12 my-5">
      <a
        href="https://portfolio-cae4c.web.app/" target="_blank"
        className="button button--nina px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden" 
        data-text="See all projects"
      >
        <span className="align-middle">S</span>
        <span className="align-middle">e</span>
        <span className="align-middle">e</span>
        <span className="align-middle">a</span>
        <span className="align-middle">l</span>
        <span className="align-middle">l</span>
        <span className="align-middle">p</span>
        <span className="align-middle">r</span>
        <span className="align-middle">o</span>
        <span className="align-middle">j</span>
        <span className="align-middle">e</span>
        <span className="align-middle">c</span>
        <span className="align-middle">t</span>
        <span className="align-middle">s</span>
      </a>
    </div>
  </section>
  {/* see all project button */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#work'>
          <div className='w-64 h-5 rounded-3xl border-4 border-green-400 flex justify-center items-center p-2'>
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
              className='w-4 h-4 rounded-full bg-red-500'
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");