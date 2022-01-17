import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
interface Props {
  title: string | undefined;
  description: string | undefined;
  website?: string | undefined;
  githubLink?: string | undefined;
}

const ProjectList = ({ title, description, website, githubLink }: Props) => {
  return (
    <div className="w=11/12 bg-white rounded shadow p-3 mt-2">
      <div className="flex justify-between">
        <span className="text-lg font-bold">{title}</span>
        <div className="flex">
          <span className="">
            <a href={githubLink}>
              <FaGithub className="w-4 h-4 mr-2 mt-1 ml-2" />
            </a>
          </span>
          <span>
            <a href={website}>
              <FaGlobe className="w-4 h-4 mr-2 mt-1 ml-2" />
            </a>
          </span>
        </div>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default ProjectList;
