import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
interface Props {
  setRenderValue: Dispatch<SetStateAction<String>>;
}

const ExperienceInput: React.FC<Props> = (props) => {
  const { setRenderValue } = props;
  return (
    <div className="mx-10">
      <Header
        title="Experience"
        previous="Skills"
        forward="Projects"
        setRenderValue={setRenderValue}
      />
    </div>
  );
};

export default ExperienceInput;
