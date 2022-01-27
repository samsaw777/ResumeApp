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

  return (
    <div className="w=11/12 bg-white rounded shadow p-3 mt-2">
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
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />
          </span>
          {!update && (
            <div className="flex space-x-2">
              <div
                className="cursor-pointer w-fit p-2 bg-gray-100 rounded hover:bg-gray-200"
                onClick={() => setUpdate(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className="cursor-pointer w-fit p-2 bg-gray-100 rounded hover:bg-gray-200">
                <a href={githubLink}>
                  <FaGithub className="w-5 h-5  mt-1" />
                </a>
              </span>
              <span className="cursor-pointer w-fit p-2 bg-gray-100 rounded hover:bg-gray-200">
                <a href={website}>
                  <FaGlobe className="w-5 h-5  mt-1" />
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
                : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
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
              className="bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight rounded w-full  "
            />
            <input
              type="text"
              placeholder="Project Website Link"
              value={projectInfo.website}
              onChange={(e) => changeProjectInfo(e)}
              name="website"
              className="bg-gray-200  border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight rounded w-full  focus:outline-none"
            />
          </div>
        )}
        {update && (
          <div className="flex justify-end mt-2 space-x-2">
            <p
              className="p-2 bg-white text-purple-500 border-2 border-purple-500 cursor-pointer"
              onClick={cancelUpdate}
            >
              Cancel
            </p>
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
