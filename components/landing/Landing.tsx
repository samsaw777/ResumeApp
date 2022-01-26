import React from "react";
import LandingImage from "./LandingImages";
import { motion } from "framer-motion";
const Landing = () => {
  return (
    <div className="h-landingHeight bg-white">
      <div className="grid grid-cols-2 gap-3">
        <motion.div>This is landing page.</motion.div>
        <LandingImage />
      </div>
    </div>
  );
};

export default Landing;
