import React, { useState, Dispatch, SetStateAction } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import classNames from "classnames";
import axios from "axios";

interface Props {
  title: string | undefined;
  description: string | undefined;
  website?: string | undefined;
  githubLink?: string | undefined;
  id?: string | undefined;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
}

const ProjectList = ({
  title,
  description,
  website,
  githubLink,
  id,
  fetchPointer,
  setFectchPointer,
}: Props) => {
  const [projectInfo, setProjectInfo] = useState<any>({
    title,
    description,
    website,
    githubLink,
  });
  const [update, setUpdate] = useState<boolean>(false);
  const cancelUpdate = () => {
    setUpdate(false);
    setProjectInfo({
      title,
      description,
      website,
      githubLink,
    });
  };

  //function to update the projects information.
  const updateProjectInfo = async (e: any) => {
    e.preventDefault();
    const body = {
      projectName: projectInfo.title,
      projectDescription: projectInfo.description,
      projectWebsiteLink: projectInfo.website,
      projectgithubLink: projectInfo.githubLink,
      projectId: id,
    };

    await axios
      .post("http://localhost:3000/api/updateProjects", body)
      .then((res) => {
        setUpdate(false);
        setFectchPointer(!fetchPointer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //change the input for the project.
  const changeProjectInfo = (e: any) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };

  const deleteProject = () => {
    axios
      .post("http://localhost:3000/api/deleteProjects", { projectId: id })
      .then((res) => {
        setFectchPointer(!fetchPointer);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w=11/12 bg-white rounded shadow p-5 mt-2">
      <form onSubmit={(e) => updateProjectInfo(e)}>
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            <input
              value={projectInfo.title}
              readOnly={!update}
              name="title"
              onChange={(e) => changeProjectInfo(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none font-bold text-xl"
                  : "bg-gray-100 focus:outline-none border-2 border-gray-100 focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />
          </span>
          {!update && (
            <div className="flex space-x-2">
              <div
                className="cursor-pointer w-fit p-2  rounded hover:bg-blue-200"
                onClick={() => setUpdate(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div
                className="cursor-pointer p-2  rounded hover:bg-red-200"
                onClick={deleteProject}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
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
              <span className="cursor-pointer w-fit p-2  rounded hover:bg-purple-200">
                <a href={githubLink}>
                  <FaGithub className="w-5 h-5 text-github mt-1" />
                </a>
              </span>
              <span className="cursor-pointer w-fit p-2  rounded hover:bg-gray-100">
                <a href={website}>
                  <FaGlobe className="w-5 h-5 text-gray-500  mt-1" />
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="mt-1">
          {" "}
          <input
            value={projectInfo.description}
            readOnly={!update}
            onChange={(e) => changeProjectInfo(e)}
            name="description"
            className={classNames(
              update === false
                ? "bg-white border-none text-md"
                : "bg-gray-100 focus:outline-none border-2 border-gray-100 focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
              "rounded w-full  focus:outline-none "
            )}
          />
        </div>
        {update && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            <input
              type="text"
              placeholder="Project Github Link"
              value={projectInfo.githubLink}
              onChange={(e) => changeProjectInfo(e)}
              name="githubLink"
              className="bg-gray-100 focus:outline-none border-2 border-gray-100  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight rounded w-full  "
            />
            <input
              type="text"
              placeholder="Project Website Link"
              value={projectInfo.website}
              onChange={(e) => changeProjectInfo(e)}
              name="website"
              className="bg-gray-100  border-2 border-gray-100 focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight rounded w-full  focus:outline-none"
            />
          </div>
        )}
        {update && (
          <div className="flex justify-end mt-2 space-x-2">
            <p
              className="p-2 bg-white text-red-500 border-2 border-red-500 cursor-pointer"
              onClick={cancelUpdate}
            >
              Cancel
            </p>
            <button
              className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProjectList;
