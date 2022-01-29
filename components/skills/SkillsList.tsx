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

  const deleteSkill = () => {
    axios
      .post("http://localhost:3000/api/deleteSkill", { skillId: id })
      .then((res) => setFectchPointer(!fetchPointer))
      .catch((err) => console.log(err));
  };
  return (
    <div className=" bg-white shadow-lg rounded-lg text-center p-2 relative mt-2">
      <form onSubmit={(e) => updateSkill(e)}>
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="w-full bg-white appearance-none border-2 border-white rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        />
      </form>
      <div
        className="cursor-pointer p-2  rounded hover:bg-red-100 absolute -top-5 -right-3"
        onClick={deleteSkill}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  );
};

export { SkillsList };
