import React, { useState, Dispatch, SetStateAction } from "react";
import { HeaderInput } from "./resumeHeader/HeaderInput";
import { Output } from "./Output";
import { EducationInput } from "./education/EducationInput";
import { SkillsInput } from "./skills/SkillsInput";
import { Education } from "../Utils/Interfaces";
import ExperienceInput from "./experience/ExperienceInput";
import ProjectInput from "./projects/ProjectInput";
//Declaring the type of the Inputs.
interface Props {
  id: any;
  resumeData: any;
  fetchPointer: boolean;
  loading: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
}

const renderComponent = (
  value: string,
  setName: any,
  setRenderValue: any,
  id: any,
  fetchPointer: boolean,

  setFectchPointer: Dispatch<SetStateAction<boolean>>,
  loading: boolean
) => {
  switch (value) {
    case "Introduction":
      return (
        <HeaderInput
          setMyInfo={setName}
          setRenderValue={setRenderValue}
          id={id}
          fetchPointer={fetchPointer}
          setFectchPointer={setFectchPointer}
        />
      );
    case "Education":
      return (
        <EducationInput
          setRenderValue={setRenderValue}
          fetchPointer={fetchPointer}
          id={id}
          setFectchPointer={setFectchPointer}
        />
      );
    case "Skills":
      return <SkillsInput setRenderValue={setRenderValue} />;
    case "Experience":
      return <ExperienceInput setRenderValue={setRenderValue} />;
    case "Projects":
      return <ProjectInput setRenderValue={setRenderValue} />;
    default:
      return true;
  }
};

const Header = ({
  id,
  resumeData,
  fetchPointer,
  setFectchPointer,
  loading,
}: Props) => {
  const [name, setName] = useState<any>({});
  const [renderValue, setRenderValue] = useState<string>("Introduction");
  const [educationList, setEducationList] = useState<Education[]>([]);
  return (
    <div className="grid grid-cols-2 gap-1 p-3  h-screen bg-gray-400">
      {renderComponent(
        renderValue,
        setName,
        setRenderValue,
        id,
        fetchPointer,
        setFectchPointer,
        loading
      )}
      {/* <HeaderInput setMyInfo={setName} /> */}
      {!loading && <Output information={name} resumeData={resumeData} />}
    </div>
  );
};

export { Header };
