import { motion } from "framer-motion";
import { image } from "../assets";
import { styles } from "../styles";
import ReactTypingEffect from "react-typing-effect";
import resume from "../../public/pdf file/Rifat-resume.pdf"
import { Icon } from '@iconify/react';




const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rifat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <ReactTypingEffect
              className="text-2xl font-bold"
              text={[
                " a Front-End Web Developer",
                " a MERN Stack Developer",
                " a Full Stack Developer",
              ]}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1 className="mt-5">
                    <span className="text-3xl font-bold">
                      I am
                    </span>
                    {text.split("").map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span key={key} className="text-teal-500">
                          {char}
                        </span>
                      );
                    })}
                  </h1>
                );
              }}
            />
          </p>
         <div className="lg:flex py-10">
            <button className=" border-2 border-indigo-500 px-4 py-2 mr-7"> 
            <a href="#contact" className="flex items-center">
            <Icon icon="la:hire-a-helper" width="25" className="mr-2"/>
              Hire Me
            </a>
            </button>
            <button className=" border-2 hover:bg-indigo-500 hover:text-white border-indigo-500 px-4 py-2">
            <a href={resume} download target="_blank" className="flex items-center">
            <Icon icon="material-symbols:download-rounded" width="25" className="mr-2"/>
              Download Resume
            </a>  
            </button>
         </div>
        </div>
        <div className="mx-auto">
        <img src={image} alt='image' className='w-80 object-contain border rounded-full hidden lg:block' />
          </div>
      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;