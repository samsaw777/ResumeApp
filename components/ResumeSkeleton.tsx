import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import axios from "axios";
interface Props {
  title: string;
  id: string;
  refetchResume: boolean;
  setRefetchResume: Dispatch<SetStateAction<boolean>>;
}

const ResumeSkeleton = ({ title, id }: Props) => {
  const deleteResume = () => {
    console.log(id);
    axios
      .post("http://localhost:3000/api/deleteResume", { resumeId: id })
      .then((res) => {
        console.log(res);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <Link href={`/resume/${id}`}>
      <div className="w-11/12 bg-white shadow-lg rounded block mx-auto pt-5 pb-10 cursor-pointer">
        <div className="flex mx-5 mt-1 justify-between mb-1">
          <div className="text-2xl text-gray-600 font-medium">{title}</div>
          <div
            className="cursor-pointer w-fit p-2  rounded hover:bg-gray-200"
            onClick={deleteResume}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mx-5">
          <div className="block">
            <div className="w-40 h-2 bg-gray-400 rounded mt-1"></div>
            <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
            <div className="w-40 h-10 bg-gray-400 rounded mt-1"></div>
          </div>
          <div>
            <div className="w-40 h-2 bg-gray-400 rounded mt-1 ml-auto"></div>
            <div className="w-32 h-2 bg-gray-400 rounded mt-1 ml-auto"></div>
            <div className="w-20 h-2 bg-gray-400 rounded mt-1 ml-auto"></div>
            <div className="w-32 h-2 bg-gray-400 rounded mt-1 ml-auto"></div>
          </div>
        </div>
        <div className="mt-5 mx-5 flex justify-between">
          <div>
            <div className="w-40 h-2 bg-gray-400 rounded mt-1"></div>
            <div className="mt-3">
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
            </div>
            <div className="mt-3">
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
            </div>
            <div className="w-40 h-2 bg-gray-400 rounded mt-4"></div>
            <div className="mt-3">
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
            </div>
            <div className="mt-3">
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1"></div>
            </div>
          </div>
          <div>
            <div className="w-40 h-2 bg-gray-400 rounded mt-1"></div>
            <div className="mt-3">
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
            </div>
            <div className="mt-3">
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
            </div>
            <div className="w-40 h-2 bg-gray-400 rounded mt-4"></div>
            <div className="mt-3">
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
            </div>
            <div className="mt-3">
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
              <div className="w-32 h-2 bg-gray-400 rounded mt-1  ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResumeSkeleton;
