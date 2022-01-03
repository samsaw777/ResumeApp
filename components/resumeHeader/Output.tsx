import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

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
      <div className="w-11/12 p-5 bg-white shadow-lg rounded-lg block mx-auto mt-10">
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">
            {information?.name}
          </h2>
          <h6 className="text-gray-800 text-xl font-semibold">
            {information?.profession}
          </h6>
          <p className="mt-2 text-gray-600">{information?.description}</p>
          <p className="mt-2 text-gray-600">{information?.email}</p>
          <p className="mt-2 text-gray-600">{information?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export { Output };
