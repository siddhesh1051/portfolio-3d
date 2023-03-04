import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from './../utils/motion';

const Tech = () => {
  return (
    <><motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>Tech Stack I Use</p>
      <h2 className={`${styles.sectionHeadText} mb-10 text-center`}>Skills</h2>
    </motion.div><div className='flex flex-row flex-wrap justify-center gap-10'>

        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div></>
  );
};

export default SectionWrapper(Tech, "");
