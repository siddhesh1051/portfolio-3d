import React, { useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { eye, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { assignments, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { BsArrowRight, BsEye, BsEyeFill } from "react-icons/bs/index.esm";
import { Link } from "react-router-dom";

const AssignmentCard = ({
  index,
  name,
  role,
  companyName,
  description,
  image,
  live_link,
  isAssignment,
}) => {
  return (
    <div>
      <div
        className={`${
          isAssignment
            ? "bg-tertiary/80 border-2 border-white/30"
            : "bg-tertiary"
        } p-5 rounded-lg sm:w-[360px] w-full`}
      >
        <div className={`relative w-full h-[200px]`}>
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-lg"
            accept="image/*"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-[#a89eec] font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-white/90 text-[16px] font-semibold">
            Company:{" "}
            <span className="mt-2 text-white text-[16px]">{companyName}</span>
          </p>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {" "}
          <p>Role: {role}</p>
          <p className="text-secondary text-[14px]">{description}</p>
        </div>
        <Link
          to={`${live_link}`}
          target="_blank"
          className={`text-charcoal bg-azure rounded-md w-ful h-10 md:text-base text-sm font-bold justify-center items-center gap-2 cursor-pointer mt-6 flex border-2 border-[#b597fb] bg-[#261f4d]`}
        >
          {" "}
          <BsEyeFill className="font-bold ctaIcon" size={18} />
          <span>View</span>
        </Link>
      </div>
    </div>
  );
};

const Assignments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:mt-16 mt-24">
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <h2 className={`${styles.sectionHeadText}`}>Assignments.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate="show"
          className="mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the assignments I have worked on. Assignments that I
          have done during my Job Search given by various companies.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {assignments.map((project, index) => (
          <AssignmentCard
            key={`assignment-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Assignments, "assignments");
