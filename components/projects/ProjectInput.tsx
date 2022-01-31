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
  const [createProject, setCreateProject] = useState<boolean>(false);

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
        setCreateProject(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancleProject = () => {
    setProjectTitle("");
    setProjectDescription("");
    setProjectLink("");
    setProjectGithubLink("");
    setCreateProject(false);
  };

  return (
    <div className="px-10">
      <Header
        title="Projects"
        previous="Experience"
        setRenderValue={setRenderValue}
      />
      {!createProject && (
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setCreateProject(true)}
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block cursor-pointer"
          >
            Add Project
          </button>
        </div>
      )}
      {createProject && (
        <div className="h-projectInputHeight">
          <div className="mt-5 w-full bg-white shadow-lg rounded-lg p-5">
            <form onSubmit={(e) => addProjectList(e)}>
              <label className="font-bold text-black text-md">Title</label>
              <input
                type="text"
                placeholder="Project Name"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="bg-gray-100 mt-2 placeholder-gray-900 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 mb-2"
              />
              <label className="font-bold text-black pl-1 text-md">
                Description
              </label>
              <input
                type="text"
                placeholder="Project Description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="bg-gray-100 mt-2 placeholder-gray-900 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <label className="font-bold text-black pl-1 text-md">
                    Github Link
                  </label>
                  <input
                    type="text"
                    placeholder="Project Github Link"
                    value={projectGithubLink}
                    onChange={(e) => setProjectGithubLink(e.target.value)}
                    className="mt-1 bg-gray-100 placeholder-gray-900 appearance-none border-2 border-gray-100  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-black pl-1 text-md">
                    Live
                  </label>
                  <input
                    type="text"
                    placeholder="Project Live Link"
                    value={projectLink}
                    onChange={(e) => setProjectLink(e.target.value)}
                    className="mt-1 bg-gray-100 placeholder-gray-900 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="button"
                  className="shadow bg-white  focus:shadow-outline focus:outline-none text-red-500 font-bold py-2 px-4 rounded border border-red-500"
                  onClick={cancleProject}
                >
                  Cancle
                </button>
                <button
                  className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!createProject && resumeProject && (
        <div className="h-projectListHeight mt-2 overflow-scroll">
          {resumeProject?.map((project: any, key: number) => {
            return (
              <ProjectList
                title={project.projectName}
                description={project.projectDescription}
                website={project.projectWebsiteLink}
                githubLink={project.projectGithubLink}
                key={key}
                id={project.id}
                fetchPointer={fetchPointer}
                setFectchPointer={setFectchPointer}
              />
            );
          })}
        </div>
      )}
      <div className="w-full flex justify-end mt-2">
        <button
          className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          Create Resume
        </button>
      </div>
    </div>
  );
};

export default ProjectInput;
