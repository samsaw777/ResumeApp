import React from "react";
import LandingImage from "./LandingImages";
import LandingHeader from "./LandingHeading";
const Landing = () => {
  return (
    <div className="h-landingHeight bg-white">
      <div className="grid grid-cols-2 gap-3">
        <LandingHeader />
        <LandingImage />
      </div>
    </div>
  );
};

export default Landing;
