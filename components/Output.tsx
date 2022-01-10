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
  const { information } = props;
  return (
    <div className="bg-gray-300">
      <div className="w-11/12  bg-white shadow-lg rounded-lg block mx-auto mt-10">
        <div className="grid grid-cols-2 gap-1 p-5">
          <div>
            <p className="text-2xl text-black font-bold">
              {information?.name || "Chandler Bing"}{" "}
            </p>
            <p className="text-xl text-black">
              {information?.profession ||
                "Statistical analysis and Data Reconfiguration"}
            </p>
            <div>
              {information?.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="ml-auto flex mb-2 font-thin text-md">
              {information?.email || "chandlerbing@gmail.com"}{" "}
              <MdMail className="w-4 h-4 ml-2 mt-1" />
            </p>
            <p className="ml-auto flex mb-2 font-thin  text-md">
              {information?.phone || 1245245210}{" "}
              <FaPhone className="w-4 h-4 ml-2 mt-1" />
            </p>
            {information?.website && (
              <p className="ml-auto flex mb-2 font-thin  text-md">
                {information?.website} <FaGlobe className="w-4 h-4 ml-2 mt-1" />
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
            <div className="w-11/12 p-5">
              <div className="w-full text-xl font-bold">
                BE. Computer science
              </div>
              <div className="w-full text-lg">VIT</div>
              <div className="flex justify-between text-md">
                <div className="flex">
                  <span>2020</span>/<span>2024</span>
                </div>
                <div className="flex">
                  <span>Mumbai</span>
                </div>
              </div>
            </div>
            <div className="w-11/12 p-5">
              <div className="w-full text-xl font-bold">
                BE. Computer science
              </div>
              <div className="w-full text-lg">VIT</div>
              <div className="flex justify-between text-md">
                <div className="flex">
                  <span>2020</span>/<span>2024</span>
                </div>
                <div className="flex">
                  <span>Mumbai</span>
                </div>
              </div>
            </div>
            <div className="w-11/12 p-5">
              <div className="w-full text-xl font-bold">
                BE. Computer science
              </div>
              <div className="w-full text-lg">VIT</div>
              <div className="flex justify-between text-md">
                <div className="flex">
                  <span>2020</span>/<span>2024</span>
                </div>
                <div className="flex">
                  <span>Mumbai</span>
                </div>
              </div>
            </div>
          </div>
          <div>This is for skills.</div>
        </div>
      </div>
    </div>
  );
};

export { Output };
