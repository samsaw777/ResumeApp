import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/Variants";
import { urlFetcher } from "../Utils/urlFetcher";
interface Props {
  title: string;
  id: string;
  refetchResume: boolean;
  setRefetchResume: Dispatch<SetStateAction<boolean>>;
}

const ResumeSkeleton = ({
  title,
  id,
  refetchResume,
  setRefetchResume,
}: Props) => {
  //deleting the resume.
  const deleteResume = () => {
    axios
      .post(`${urlFetcher()}/api/deleteResume`, { resumeId: id })
      .then((res) => {
        setRefetchResume(!refetchResume);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <motion.div
      className="w-11/12 bg-white shadow-lg rounded-lg block mx-auto pt-5 pb-10 cursor-pointer"
      variants={fadeIn("down")}
    >
      <div className="flex mx-5 mt-1 justify-between">
        <div className="text-2xl text-navbarBackground font-bold">{title}</div>
        <div className="flex space-x-2">
          <Link href={`/resume/${id}`} passHref>
            <div className="group cursor-pointer p-2  rounded hover:bg-blue-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </Link>
          <div
            className="group cursor-pointer p-2  rounded hover:bg-red-100"
            onClick={deleteResume}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500 group-hover:text-red-600"
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
        </div>
      </div>
      <div className="flex justify-between mx-5">
        <div className="block">
          <div className="w-40 h-2 bg-gray-400 rounded mt-1"></div>
          <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
          <div className="w-40 h-10 bg-gray-200 rounded mt-1"></div>
        </div>
        <div>
          <div className="w-40 h-2 bg-gray-400 rounded mt-1 ml-auto"></div>
          <div className="w-32 h-2 bg-gray-300 rounded mt-1 ml-auto"></div>
          <div className="w-20 h-2 bg-gray-300 rounded mt-1 ml-auto"></div>
          <div className="w-32 h-2 bg-gray-200 rounded mt-1 ml-auto"></div>
        </div>
      </div>
      <div className="mt-5 mx-5 flex justify-between">
        <div>
          <div className="w-40 h-2 bg-gray-400 rounded mt-1"></div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
          </div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-gray-200 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1"></div>
          </div>
          <div className="w-40 h-2 bg-gray-400 rounded mt-4"></div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1"></div>
          </div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-gray-200 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1"></div>
          </div>
        </div>
        <div>
          <div className="w-40 h-2 bg-gray-400 rounded mt-1"></div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-gray-300 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1  ml-auto"></div>
          </div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-gray-300 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-300 rounded mt-1  ml-auto"></div>
          </div>
          <div className="w-40 h-2 bg-gray-400 rounded mt-4"></div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-gray-200 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1  ml-auto"></div>
          </div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-gray-200 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-gray-200 rounded mt-1  ml-auto"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeSkeleton;
