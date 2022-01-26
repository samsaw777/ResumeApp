import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MainResume from "../../public/mainresume.svg";
import Experience from "../../public/experience.svg";
import Skill from "../../public/skill.svg";
import Project from "../../public/projectgroup.svg";
import Education from "../../public/education.svg";
import { fadeSide, staggerContainer, fade } from "../../Utils/Variants";

const LandingImages = () => {
  return (
    <motion.div
      className="w-full relative pt-10"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fade}>
        <Image
          src={MainResume}
          width={700}
          height={600}
          alt="Picture of the author"
        />
      </motion.div>
      <motion.div
        className="absolute z-10 top-educationTop left-educationLeft"
        variants={fadeSide("right")}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <Image
          src={Education}
          width={190}
          height={131}
          alt="resume"
          className="shadow-xl"
        />
      </motion.div>
      <motion.div
        className="absolute z-10 top-skillTop right-skillRight"
        variants={fadeSide("left")}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <Image
          src={Skill}
          width={250}
          height={120}
          alt="resume"
          className="shadow-xl"
        />
      </motion.div>
      <motion.div
        className="absolute z-10 top-experienceTop left-experienceLeft"
        variants={fadeSide("right")}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <Image
          src={Experience}
          width={300}
          height={120}
          alt="resume"
          className="shadow-xl"
        />
      </motion.div>

      <motion.div
        className="absolute z-10 top-projectTop right-projectRight"
        variants={fadeSide("left")}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <Image
          src={Project}
          width={300}
          height={120}
          alt="resume"
          className="shadow-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default LandingImages;
