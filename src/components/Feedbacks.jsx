import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  // testimonial,
  username,
  designation,
  company,
  image,
  link
}) => (
  <a href={link} target='_blank'>

  
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 py-10 px-6 rounded-3xl xs:w-[220px] w-full'
  >
    <div
              
              className='bg-gradient-to-b from-[#af9bbd] to-[#17205c] w-20 h-20 rounded-full flex justify-center items-center cursor-pointer mx-auto mb-6'
            >
              <img
                src={image}
                alt='source code'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
    {/* <img
          src={image}
          alt={`feedback_by-${username}`}
          className=' w-20 h-20 rounded-full object-cover mx-auto mb-5 bg-black-500'
        /> */}
    <p className='text-white font-black text-[24px] text-center'>{company}</p>

    <div className='mt-1'>
      {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {username}
          </p>
          {/* <a href={link}>Link</a> */}
        </div>

        
      </div>
    </div>
  </motion.div>
  </a>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={styles.sectionHeadText}>Find Me Here.......</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
