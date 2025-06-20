import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { eye, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BsArrowRight, BsCloudDownload } from "react-icons/bs/index.esm";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_link,
  source_code_link,
  isAssignment,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className={`${
          isAssignment
            ? "bg-tertiary/80 border-2 border-white/30"
            : "bg-tertiary"
        } p-5 rounded-2xl sm:w-[360px] w-full`}
      >
        <div className={`relative w-full h-[230px]`}>
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            accept="image/*"
          />

          <div
            className={`absolute inset-0 flex justify-end m-3 card-img_hover ${
              isAssignment ? "hidden" : "flex"
            }`}
          >
            {/* live demo */}
            <div
              onClick={() => window.open(live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
            >
              <img
                src={eye}
                alt="Live"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
            {/* Github Link */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-2"
            >
              <img
                src={github}
                alt="source code"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <Link
          to="/assignments"
          className={`ctaButton text-charcoal bg-azure rounded-md w-ful h-12 md:text-base text-sm font-bold flex justify-center items-center gap-2 cursor-pointer mt-6 ${
            isAssignment ? "flex" : "hidden"
          }`}
        >
          {" "}
          <span>See All</span>
          <BsArrowRight className="font-bold ctaIcon" size={18} />
        </Link>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        id="projects"
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");