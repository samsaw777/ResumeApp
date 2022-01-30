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
  const router = useRouter();
  const [name, setName] = useState<any>({});
  const [renderValue, setRenderValue] = useState<string>("Introduction");
  // const [resumeData, setResumeData] = useState<any>({});
  // const [fetchPointer, setFectchPointer] = useState<boolean>(false);
  // const [id, setId] = useState<string | undefined | string[]>("");
  // const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   if (router.isReady) {
  //     setId(router.query.id);
  //   }
  // }, [router.isReady, router.query.id]);

  // useEffect(() => {
  //   const body = {
  //     resumeId: id,
  //   };
  //   setLoading(true);
  //   axios
  //     .post("http://localhost:3000/api/fetchResumeInfo", body)
  //     .then((res) => {
  //       console.log(res.data);
  //       setResumeData(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, [id, fetchPointer]);

  return (
    <div className="h-screen">
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
