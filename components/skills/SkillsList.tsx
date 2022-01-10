import React from "react";
import { Skill } from "../../Utils/Interfaces";

interface Props {
  skill: Skill;
}

const SkillsList = ({ skill }: Props) => {
  return (
    <div className="w-fit bg-white shadow-lg rounded-lg  mt-10 p-2">
      {skill.skill}
    </div>
  );
};

export { SkillsList };
