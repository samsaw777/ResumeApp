import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../Utils/Variants";
import Link from "next/link";
const LandingHeading = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="w-full p-16 flex flex-col justify-center"
      >
        <motion.div
          variants={fadeIn("down")}
          className="text-5xl w-11/12 font-bold text-gray-600"
        >
          Build Your Resume In The Smart And Easy Way.
        </motion.div>
        <div className="text-2xl mt-3 w-11/12 flex flex-col">
          <motion.span
            variants={fadeIn("down")}
            className="font-bold text-landingHeading"
          >
            Your resputation is often your resume.
          </motion.span>{" "}
          <motion.span variants={fadeIn("down")} className="font-medium mt-2">
            Build it prefectly!
          </motion.span>
        </div>
        <Link href="/resume" passHref>
          <motion.div variants={fadeIn("down")} className="mt-5">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};

export default LandingHeading;
