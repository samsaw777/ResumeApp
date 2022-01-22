import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
import ProjectList from "./ProjectList";
import axios from "axios";

interface Props {
  setRenderValue: Dispatch<SetStateAction<String>>;
  id: any;
  resumeProject: any;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
}

interface Project {
  title: string | undefined;
  description: string | undefined;
  website: string | undefined;
  githubLink: string | undefined;
}

const ProjectInput = ({
  setRenderValue,
  fetchPointer,
  setFectchPointer,
  resumeProject,
  id,
}: Props) => {
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [projectGithubLink, setProjectGithubLink] = useState<string>("");
  const [projectsList, setProjectList] = useState<Project[]>([]);

  //add into the list.
  const addProjectList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      projectName: projectTitle,
      projectDescription: projectDescription,
      projectWebsiteLink: projectLink,
      projectGithubLink: projectGithubLink,
      resumeId: id,
    };

    axios
      .post("http://localhost:3000/api/addProjects", body)
      .then((res) => {
        setProjectTitle("");
        setProjectDescription("");
        setProjectLink("");
        setProjectGithubLink("");
        setFectchPointer(!fetchPointer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-10 bg-gray-300">
      <Header
        title="Projects"
        previous="Experience"
        setRenderValue={setRenderValue}
      />
      <div className="mt-5 w-full bg-white shadow-lg rounded-lg p-5">
        <form onSubmit={(e) => addProjectList(e)}>
          <input
            type="text"
            placeholder="Project Name"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            className="bg-gray-200 mt-2 placeholder-gray-500 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="bg-gray-200 mt-2 placeholder-gray-500 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <input
              type="text"
              placeholder="Project Github Link"
              value={projectGithubLink}
              onChange={(e) => setProjectGithubLink(e.target.value)}
              className="bg-gray-200 placeholder-gray-500 appearance-none border-2 border-gray-200  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            <input
              type="text"
              placeholder="Project Website Link"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              className="bg-gray-200 placeholder-gray-500 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
          <div className="mt-4">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto"
              type="submit"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
      <div>
        {resumeProject?.map((project: any, key: number) => {
          return (
            <ProjectList
              title={project.projectName}
              description={project.projectDescription}
              website={project.projectWebsiteLink}
              githubLink={project.projectGithubLink}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInput;
