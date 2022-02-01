import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
import classNames from "classnames";
import ProjectList from "./ProjectList";
import axios from "axios";
import { projectValidate } from "../../Utils/EducationValidation";
import { Project, Error } from "../../Utils/Interfaces";

interface Props {
  setRenderValue: Dispatch<SetStateAction<String>>;
  id: any;
  resumeProject: any;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
}

const ProjectInput = ({
  setRenderValue,
  fetchPointer,
  setFectchPointer,
  resumeProject,
  id,
}: Props) => {
  const [createProject, setCreateProject] = useState<boolean>(false);

  const [projectInfo, setProjectInfo] = useState<Project>({
    projectName: "",
    description: "",
    liveLink: "",
    githubLink: "",
  });

  const [errors, setErrors] = useState<Error>({
    projectName: "",
    description: "",
    liveLink: "",
    githubLink: "",
  });

  console.log(projectInfo);
  console.log(errors);

  //validate the project inputFields
  const validateProject = (name: string, value: string) => {
    setProjectInfo({ ...projectInfo, [name]: value });
    setErrors(projectValidate({ ...projectInfo, [name]: value }));
  };

  //add into the list.
  const addProjectList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      projectName: projectInfo.projectName,
      projectDescription: projectInfo.description,
      projectWebsiteLink: projectInfo.liveLink,
      projectGithubLink: projectInfo.githubLink,
      resumeId: id,
    };

    axios
      .post("http://localhost:3000/api/addProjects", body)
      .then((res) => {
        setProjectInfo({
          projectName: "",
          description: "",
          liveLink: "",
          githubLink: "",
        });
        setFectchPointer(!fetchPointer);
        setCreateProject(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cancleProject = () => {
    setProjectInfo({
      projectName: "",
      description: "",
      liveLink: "",
      githubLink: "",
    });
    setErrors({
      projectName: "",
      description: "",
      liveLink: "",
      githubLink: "",
    });
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
            <div className="text-md font-bold text-red-500">
              {errors.projectName ||
                errors.description ||
                errors.githubLink ||
                errors.liveLink}
            </div>
            <form onSubmit={(e) => addProjectList(e)}>
              <label className="font-bold text-black text-md">Name</label>
              <input
                type="text"
                placeholder="Project Name"
                name="projectName"
                value={projectInfo.projectName}
                onChange={(e) => validateProject(e.target.name, e.target.value)}
                className={classNames(
                  errors.projectName
                    ? " focus:border-red-500"
                    : "focus:border-blue-500",
                  "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white placeholder-gray-900"
                )}
              />
              <label className="font-bold text-black pl-1 text-md mt-2">
                Description
              </label>
              <input
                type="text"
                placeholder="Project Description"
                name="description"
                value={projectInfo.description}
                onChange={(e) => validateProject(e.target.name, e.target.value)}
                className={classNames(
                  errors.description
                    ? " focus:border-red-500"
                    : "focus:border-blue-500",
                  "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white placeholder-gray-900 mt-2"
                )}
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <label className="font-bold text-black pl-1 text-md">
                    Github Link
                  </label>
                  <input
                    type="text"
                    placeholder="Project Github Link"
                    name="githubLink"
                    value={projectInfo.githubLink}
                    onChange={(e) =>
                      validateProject(e.target.name, e.target.value)
                    }
                    className={classNames(
                      errors.githubLink
                        ? " focus:border-red-500"
                        : "focus:border-blue-500",
                      "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white placeholder-gray-900"
                    )}
                  />
                </div>
                <div>
                  <label className="font-bold text-black pl-1 text-md">
                    Live
                  </label>
                  <input
                    type="text"
                    placeholder="Project Live Link"
                    name="liveLink"
                    value={projectInfo.liveLink}
                    onChange={(e) =>
                      validateProject(e.target.name, e.target.value)
                    }
                    className={classNames(
                      errors.liveLink
                        ? " focus:border-red-500"
                        : "focus:border-blue-500",
                      "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white placeholder-gray-900"
                    )}
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
