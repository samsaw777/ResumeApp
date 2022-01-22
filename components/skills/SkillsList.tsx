import React from "react";
import { Skill } from "../../Utils/Interfaces";

interface Props {
  skill: any;
}

const SkillsList = ({ skill }: Props) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg text-center p-2">
      {skill}
    </div>
  );
};

export { SkillsList };
