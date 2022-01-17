import React from "react";

interface Props {
  title: string;
}

const ResumeSkeleton = ({ title }: Props) => {
  return (
    <div className="w-11/12 bg-gray-600 shadow-lg rounded block mx-auto pt-5 pb-5">
      <div className="flex mx-5 mt-1">
        <div className="text-lg text-white">{title}</div>
      </div>
      <div className="flex justify-between mx-5">
        <div className="block">
          <div className="w-40 h-2 bg-white rounded mt-1"></div>
          <div className="w-32 h-2 bg-white rounded mt-1"></div>
          <div className="w-40 h-10 bg-white rounded mt-1"></div>
        </div>
        <div>
          <div className="w-40 h-2 bg-white rounded mt-1 ml-auto"></div>
          <div className="w-32 h-2 bg-white rounded mt-1 ml-auto"></div>
          <div className="w-20 h-2 bg-white rounded mt-1 ml-auto"></div>
          <div className="w-32 h-2 bg-white rounded mt-1 ml-auto"></div>
        </div>
      </div>
      <div className="mt-5 mx-5 flex justify-between">
        <div>
          <div className="w-40 h-2 bg-white rounded mt-1"></div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
          </div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
          </div>
          <div className="w-40 h-2 bg-white rounded mt-4"></div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
          </div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
            <div className="w-32 h-2 bg-white rounded mt-1"></div>
          </div>
        </div>
        <div>
          <div className="w-40 h-2 bg-white rounded mt-1"></div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
          </div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
          </div>
          <div className="w-40 h-2 bg-white rounded mt-4"></div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
          </div>
          <div className="mt-3">
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
            <div className="w-32 h-2 bg-white rounded mt-1  ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSkeleton;
