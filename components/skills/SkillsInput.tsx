import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
import { skillError } from "../../Utils/Interfaces";
import { SkillsList } from "./SkillsList";
import classNames from "classnames";
import axios from "axios";
import { skillValidation } from "../../Utils/EducationValidation";
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
  const [skill, setSkill] = useState<string>("");
  const [createSkill, setCreateSkill] = useState<boolean>(false);
  const [errors, setErrors] = useState<skillError>({ skillName: "" });

  //validating the skill.
  const validateSkill = (skillName: string) => {
    setSkill(skillName);
    setErrors(skillValidation({ skillName }));
  };

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
        setCreateSkill(false);
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
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block cursor-pointer"
          >
            Add Skills
          </button>
        </div>
      )}
      {createSkill && (
        <div className="mt-5 w-full bg-white shadow-lg rounded-lg p-5">
          <div className="text-mg font-bold text-red-500">
            {errors.skillName}
          </div>
          <form onSubmit={(e) => addToSkillList(e)}>
            <div className="md:w-1/3 mt-5">
              <label
                className="block text-black font-bold mb-3 pr-4"
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
                name="skill"
                onChange={(e) => validateSkill(e.target.value)}
                className={classNames(
                  errors.skillName
                    ? " focus:border-red-500"
                    : "focus:border-blue-500",
                  "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  placeholder-gray-900"
                )}
              />
            </div>
            <div className="w-full mt-10 flex justify-end space-x-2">
              <button
                type="button"
                className="shadow bg-white  focus:shadow-outline focus:outline-none text-red-500 font-bold py-2 px-4 rounded border border-red-500"
                onClick={cancelSkill}
              >
                Cancle
              </button>
              <button
                type="submit"
                className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}

      {!createSkill && resumeSkills && (
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
