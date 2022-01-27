import React, { Dispatch, SetStateAction } from "react";
import { Skill } from "../../Utils/Interfaces";
import axios from "axios";

interface Props {
  skill: any;
  id: string;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
}

const SkillsList = ({ skill, id, setFectchPointer, fetchPointer }: Props) => {
  const [newSkill, setNewSkill] = React.useState<string>(skill);
  // const [update, setUpdate] = React.useState<boolean>(true);

  const updateSkill = (e: any) => {
    e.preventDefault();
    const body = { skill: newSkill, skillId: id };
    axios
      .post("http://localhost:3000/api/updateSkill", body)
      .then((res) => {
        setFectchPointer(!fetchPointer);
        // setUpdate(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" bg-white shadow-lg rounded-lg text-center p-2 ">
      <form onSubmit={(e) => updateSkill(e)}>
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="w-full bg-white appearance-none border-2 border-white rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </form>
    </div>
  );
};

export { SkillsList };
