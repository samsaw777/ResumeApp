import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Colors from "../../components/colorpallete/ColorList";
const CompleteResume = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-2">
        <Colors />
        <div>This is the second part.</div>
      </div>
    </>
  );
};

export default CompleteResume;
