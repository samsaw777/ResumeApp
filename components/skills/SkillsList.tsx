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
  const [update, setUpdate] = React.useState<boolean>(true);

  const updateSkill = (e: any) => {
    e.preventDefault();
    const body = { skill: newSkill, skillId: id };
    axios
      .post("http://localhost:3000/api/updateSkill", body)
      .then((res) => {
        console.log(res);
        setFectchPointer(!fetchPointer);
        setUpdate(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" bg-white shadow-lg rounded-lg text-center p-2 relative">
      {update ? (
        <div
          className="absolute -top-2 -right-2 cursor-pointer"
          onClick={() => setUpdate(!update)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <div
          className="absolute -top-2 -right-2 cursor-pointer"
          onClick={() => setUpdate(!update)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <form onSubmit={(e) => updateSkill(e)}>
        <input
          value={newSkill}
          readOnly={update}
          onChange={(e) => setNewSkill(e.target.value)}
          className="w-full bg-white appearance-none border-2 border-white rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </form>
    </div>
  );
};

export { SkillsList };
