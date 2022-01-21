import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
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
  resumeData: any;
  information?: {
    name?: string | undefined;
    profession?: string | undefined;
    description?: string | undefined;
    emial?: string | undefined;
    phone?: number | undefined;
  };
}

// props

const Output: React.FC<any> = (props) => {
  const { information, resumeData } = props;

  return (
    <div className="bg-gray-300 overflow-scroll">
      <div className="w-11/12  bg-white shadow-lg rounded-lg block mx-auto mt-10">
        <div className="grid grid-cols-2 gap-1 p-5">
          <div>
            <p className="text-2xl text-black font-bold">
              {resumeData.userIntroduction?.name
                ? resumeData.userIntroduction?.name
                : information?.name || "Chandler Bing"}{" "}
            </p>
            <p className="text-xl text-black">
              {resumeData.userIntroduction?.profession
                ? resumeData.userIntroduction?.profession
                : information?.profession ||
                  "Statistical analysis and Data Reconfiguration"}
            </p>
            <div>
              {resumeData.userIntroduction?.description
                ? resumeData.userIntroduction?.description
                : information?.description ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="ml-auto flex mb-2 font-thin text-md">
              {resumeData.userIntroduction?.email
                ? resumeData.userIntroduction?.email
                : information?.email || "chandlerbing@gmail.com"}{" "}
              <MdMail className="w-4 h-4 ml-2 mt-1" />
            </p>
            <p className="ml-auto flex mb-2 font-thin  text-md">
              {resumeData.userIntroduction?.phone
                ? resumeData.userIntroduction?.phone
                : information?.phone || 1245245210}{" "}
              <FaPhone className="w-4 h-4 ml-2 mt-1" />
            </p>
            {information?.website && (
              <p className="ml-auto flex mb-2 font-thin  text-md">
                {resumeData.userIntroduction?.website
                  ? resumeData.userIntroduction?.website
                  : information?.website}{" "}
                <FaGlobe className="w-4 h-4 ml-2 mt-1" />
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {information?.github && (
            <div className="pl-3 flex">
              <FaGithub className="w-4 h-4 mr-2 mt-1 ml-2" />
              {information?.github}
            </div>
          )}
          {information?.linkedin && (
            <div className="pl-3 flex">
              <FaLinkedinIn className="w-4 h-4 mr-2 mt-1 ml-2" />
              {information?.linkedin}
            </div>
          )}
          {information?.twitter && (
            <div className="pl-3 flex">
              <FaTwitter className="w-4 h-4 mr-2 mt-1 ml-2" />
              {information?.twitter}
            </div>
          )}
          {information?.instagram && (
            <div className="pl-3 flex">
              <FaInstagram className="w-4 h-4 mr-2 mt-1 ml-2" />
              {information?.instagram}
            </div>
          )}
        </div>

        {/* Education Details Output */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="text-2xl font-bold pl-5">Education</span>
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
              <span className="text-2xl font-bold">Work Experience</span>
              <div className="mt-3">
                <div className="text-lg font-bold">Front End Intern</div>
                <div className="text-md font-medium mt-1">Company</div>
                <div className="flex justify-between mt-1">
                  <div className="text-sm">01/2022 / 02/2022</div>
                  <div className="text-sm">WFH</div>
                </div>
                <div className="text-md mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="mt-2">
                  <span className="text-sm font-bold">Task Done</span>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-lg font-bold">Front End Intern</div>
                <div className="text-md font-medium mt-1">Company</div>
                <div className="flex justify-between mt-1">
                  <div className="text-sm">01/2022 / 02/2022</div>
                  <div className="text-sm">WFH</div>
                </div>
                <div className="text-md mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="mt-2">
                  <span className="text-sm font-bold">Task Done</span>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-2xl font-bold">Skills</span>
            <div className="w-full flex h-fit mt-1 space-x-3">
              {resumeData.userSkills?.map((skill: any, key: number) => (
                <div className=" bg-gray-300  rounded-lg p-2" key={key}>
                  {skill.skillName}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Output };
