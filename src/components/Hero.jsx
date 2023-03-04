import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { BsCloudDownload } from './../../node_modules/react-icons/bs/index.esm';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi 👋, I'm <span className='text-[#915EFF]'>Siddhesh Patil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a MERN Stack Developer and <br className='sm:block hidden' />
            Passionate about learning new Technologies
          </p>
          <a href="./assets/Siddhesh_Patil_Resume.pdf" download="Siddhesh_Patil_Resume.pdf" target="_blank" rel="noreferrer">
          <button class="transition duration-500 border-0 text-lg h-12 w-[10rem] bg-[#915EFF] hover:bg-[#543794] text-white mt-10 px-3 rounded-md">
        
          

       <span>Resume </span>
       <BsCloudDownload className="inline-block" />
       
       
       </button>
       </a>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

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
