import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { HeaderInput } from "./resumeHeader/HeaderInput";
import { Output } from "./Output";
import { EducationInput } from "./education/EducationInput";
import { SkillsInput } from "./skills/SkillsInput";
import { Education } from "../Utils/Interfaces";
import ExperienceInput from "./experience/ExperienceInput";
import ProjectInput from "./projects/ProjectInput";
import { useRouter } from "next/router";

//Declaring the type of the Inputs.

const renderComponent = (
  value: string,
  setName: any,
  setRenderValue: any,
  id: any,
  fetchPointer: boolean,
  setFectchPointer: Dispatch<SetStateAction<boolean>>,
  resumeData: any
) => {
  switch (value) {
    case "Introduction":
      return (
        <HeaderInput
          setMyInfo={setName}
          setRenderValue={setRenderValue}
          id={id}
          introductionData={resumeData?.userIntroduction}
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
          educationData={resumeData?.userEducation}
        />
      );
    case "Skills":
      return (
        <SkillsInput
          setRenderValue={setRenderValue}
          fetchPointer={fetchPointer}
          id={id}
          setFectchPointer={setFectchPointer}
          resumeSkills={resumeData?.userSkills}
        />
      );
    case "Experience":
      return (
        <ExperienceInput
          setRenderValue={setRenderValue}
          fetchPointer={fetchPointer}
          id={id}
          setFectchPointer={setFectchPointer}
          resumeExperience={resumeData?.userExperience}
        />
      );
    case "Projects":
      return (
        <ProjectInput
          setRenderValue={setRenderValue}
          fetchPointer={fetchPointer}
          id={id}
          setFectchPointer={setFectchPointer}
          resumeProject={resumeData?.userProjects}
        />
      );
    default:
      return true;
  }
};

interface Props {
  id: string | undefined | string[];
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
  resumeData: any;
}

const Header = ({ resumeData, fetchPointer, setFectchPointer, id }: Props) => {
  const [name, setName] = useState<any>({});
  const [renderValue, setRenderValue] = useState<string>("Introduction");

  return (
    <div>
      <div className="grid grid-cols-2 gap-1 p-3 h-resumeHeight bg-landingBackground ">
        {renderComponent(
          renderValue,
          setName,
          setRenderValue,
          id,
          fetchPointer,
          setFectchPointer,
          resumeData
        )}
        {/* <HeaderInput setMyInfo={setName} /> */}
        <Output information={name} resumeData={resumeData} />
      </div>
    </div>
  );
};

export { Header };
