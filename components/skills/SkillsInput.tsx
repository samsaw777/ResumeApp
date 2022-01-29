import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
import { Skill } from "../../Utils/Interfaces";
import { SkillsList } from "./SkillsList";
import axios from "axios";
interface Props {
  id: string;
  setRenderValue: Dispatch<SetStateAction<String>>;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
  resumeSkills: any;
}

const SkillsInput = ({
  setRenderValue,
  id,
  fetchPointer,
  resumeSkills,
  setFectchPointer,
}: Props) => {
  console.log(resumeSkills);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skill, setSkill] = useState<string>("");
  const [createSkill, setCreateSkill] = useState<boolean>(false);
  const addToSkillList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      skill,
      resumeId: id,
    };
    axios
      .post("http://localhost:3000/api/addSkills", body)
      .then((res) => {
        console.log(res.data);
        setFectchPointer(!fetchPointer);
        setSkill("");
      })
      .catch((error) => console.log(error));
    // const skillObj = {
    //   skill,
    // };
    // setSkills([...skills, skillObj]);
    // setSkill("");
  };

  const cancelSkill = () => {
    setCreateSkill(false);
    setSkill("");
  };

  return (
    <div className="mx-10">
      <Header
        title="Skills"
        previous="Education"
        forward="Experience"
        setRenderValue={setRenderValue}
      />
      {!createSkill && (
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setCreateSkill(true)}
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block cursor-pointer"
          >
            Add Experience
          </button>
        </div>
      )}
      {createSkill && (
        <div className="mt-5 w-full bg-white shadow-lg rounded-lg p-5">
          <form onSubmit={(e) => addToSkillList(e)}>
            <div className="md:w-1/3 mt-5">
              <label
                className="block text-gray-900 font-bold mb-3 pr-4"
                htmlFor="skills"
              >
                Add your skills
              </label>
            </div>
            <div>
              <input
                type="text"
                id="skills"
                placeholder="Add a skill here"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 placeholder-gray-500"
              />
            </div>
            <div className="w-full mt-10 flex justify-end space-x-2">
              <button
                type="button"
                className="shadow bg-white  focus:shadow-outline focus:outline-none text-blue-500 font-bold py-2 px-4 rounded border border-blue-500"
                onClick={cancelSkill}
              >
                Cancle
              </button>
              <button
                type="submit"
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}

      {!createSkill && (
        <div className="grid grid-cols-5 mt-5 gap-2">
          {resumeSkills?.map((s: any, key: number) => {
            return (
              <SkillsList
                skill={s.skillName}
                key={key}
                id={s.id}
                fetchPointer={fetchPointer}
                setFectchPointer={setFectchPointer}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export { SkillsInput };
