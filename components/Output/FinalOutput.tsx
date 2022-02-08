import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
  FaPhone,
} from "react-icons/fa";

import { MdMail } from "react-icons/md";
interface Props {
  color: string;
  resumeData: any;
}

const FinalOutput = ({ color, resumeData }: Props) => {
  return (
    <div className="overflow-scroll">
      <div className="w-11/12  bg-white shadow-lg rounded-lg block mx-auto mt-10">
        <div className="grid grid-cols-2 gap-1 p-5">
          <div>
            <p className="text-2xl font-bold" style={{ color: `${color}` }}>
              {resumeData.userIntroduction?.name}{" "}
            </p>
            <p className="text-xl text-black">
              {resumeData.userIntroduction?.profession}
            </p>
            <div>{resumeData.userIntroduction?.description}</div>
          </div>
          <div className="flex flex-col">
            <p className="ml-auto flex mb-2 font-thin text-md">
              {resumeData.userIntroduction?.email}{" "}
              <MdMail
                className="w-4 h-4 ml-2 mt-1 "
                style={{ color: `${color}` }}
              />
            </p>
            <p className="ml-auto flex mb-2 font-thin  text-md">
              {resumeData.userIntroduction?.phone}{" "}
              <FaPhone
                className="w-4 h-4 ml-2 mt-1 "
                style={{ color: `${color}` }}
              />
            </p>

            <p className="ml-auto flex mb-2 font-thin  text-md">
              {resumeData.userIntroduction?.websiteLink}{" "}
              <FaGlobe
                className="w-4 h-4 ml-2 mt-1 "
                style={{ color: `${color}` }}
              />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="pl-3 flex">
            <FaGithub
              className="w-4 h-4 mr-2 mt-1 ml-2 "
              style={{ color: `${color}` }}
            />
            {resumeData.userIntroduction?.githubLink}
          </div>

          <div className="pl-3 flex">
            <FaLinkedinIn
              className="w-4 h-4 mr-2 mt-1 ml-2 "
              style={{ color: `${color}` }}
            />
            {resumeData.userIntroduction?.linkedinLink}
          </div>

          <div className="pl-3 flex">
            <FaTwitter
              className="w-4 h-4 mr-2 mt-1 ml-2 "
              style={{ color: `${color}` }}
            />
            {resumeData.userIntroduction?.twitterLink}
          </div>

          <div className="pl-3 flex">
            <FaInstagram
              className="w-4 h-4 mr-2 mt-1 ml-2 "
              style={{ color: `${color}` }}
            />
            {resumeData.userIntroduction?.instagramLink}
          </div>
        </div>

        {/* Education Details Output */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            <span
              className="text-2xl font-bold pl-5 "
              style={{ color: `${color}` }}
            >
              Education
            </span>
            {resumeData.userEducation?.map((edu: any, key: number) => (
              <div className="w-11/12 p-5" key={key}>
                <div className="w-full text-lg font-bold">{edu.courseName}</div>
                <div className="w-full text-lg">{edu.institute}</div>
                <div className="flex justify-between text-md">
                  <div className="flex">
                    <span>{edu.startDate}</span>/<span>{edu.endDate}</span>
                  </div>
                  <div className="flex">
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-5">
              <span
                className="text-2xl font-bold "
                style={{ color: `${color}` }}
              >
                Work Experience
              </span>
              {resumeData.userExperience?.map(
                (experience: any, key: number) => (
                  <div className="mt-3" key={key}>
                    <div className="text-lg font-bold">
                      {experience.position}
                    </div>
                    <div className="text-md font-medium mt-1">
                      {experience.company}
                    </div>
                    <div className="flex justify-between mt-1">
                      <div className="text-sm">
                        {experience.startDate} / {experience.endDate}
                      </div>
                      <div className="text-sm">{experience.location}</div>
                    </div>
                    <div className="text-md mt-1">
                      {experience.aboutCompany}
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-bold">Task Done</span>
                      <ul className="ml-4">
                        {experience.taskDone?.map((task: any, key: number) => (
                          <li key={key} className="list-disc">
                            {task.taskDone}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <div>
              <span
                className="text-2xl font-bold "
                style={{ color: `${color}` }}
              >
                Skills
              </span>
              <div className="grid grid-cols-3 gap-2 mr-2 mt-3">
                {resumeData.userSkills?.map((skill: any, key: number) => (
                  <div
                    className="  text-black  rounded-lg p-2 text-center"
                    key={key}
                    style={{ backgroundColor: `${color}` }}
                  >
                    {skill.skillName}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <span
                className="text-2xl font-bold "
                style={{ color: `${color}` }}
              >
                Projects
              </span>
              <div className="mt-3">
                {/* First Project */}
                {resumeData.userProjects?.map((project: any, key: number) => (
                  <div key={key}>
                    <div className="flex justify-between mt-3">
                      <div>
                        <span>{project.projectName}</span>
                      </div>
                      <div className="flex mr-5">
                        <a
                          href={project.projectGithubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub
                            className="w-4 h-4 mr-2 mt-1 ml-2"
                            style={{ color: `${color}` }}
                          />
                        </a>
                        <a
                          href={project.projectWebsiteLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGlobe
                            className="w-4 h-4 ml-2 mt-1"
                            style={{ color: `${color}` }}
                          />
                        </a>
                      </div>
                    </div>
                    <div>{project.projectDescription}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalOutput;
