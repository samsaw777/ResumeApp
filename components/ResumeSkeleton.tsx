import React from "react";
import Link from "next/link";
interface Props {
  title: string;
  id: string;
}

const ResumeSkeleton = ({ title, id }: Props) => {
  return (
    <Link href={`/resume/${id}`}>
      <div className="w-11/12 bg-white shadow-lg rounded block mx-auto pt-5 pb-10 cursor-pointer">
        <div className="flex mx-5 mt-1">
          <div className="text-2xl text-gray-600 font-medium">{title}</div>
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
