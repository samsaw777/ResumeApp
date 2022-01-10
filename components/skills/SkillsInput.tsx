import React, { Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";

interface Props {
  setRenderValue: Dispatch<SetStateAction<String>>;
}

const SkillsInput = ({ setRenderValue }: Props) => {
  return (
    <div className="mx-10">
      <Header
        title="Skills"
        previous="Education"
        forward="Eperience"
        setRenderValue={setRenderValue}
      />
    </div>
  );
};

export { SkillsInput };
