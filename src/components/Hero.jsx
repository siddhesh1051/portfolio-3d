import { motion } from "framer-motion";
import { styles } from "../styles";
import { BsCloudDownload } from "./../../node_modules/react-icons/bs/index.esm";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi 👋, I'm <span className="text-[#915EFF]">Siddhesh Patil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack Developer
            <br className="sm:block hidden" />
            with a strong passion for exploring and mastering new technologies.
          </p>
          <a
            href="https://drive.google.com/file/d/1M2RYJB-tVrjytPhNcuBgrpgF1ov0tx6H/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="ctaButton text-charcoal bg-azure rounded-md w-40 h-12 md:text-base text-sm font-bold flex justify-center items-center gap-2 cursor-pointer mt-6"
          >
            {" "}
            <span>Resume</span>
            <BsCloudDownload className="font-bold ctaIcon" size={18} />
          </a>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full lg:flex justify-center items-center hidden">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
