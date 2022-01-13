import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
interface Props {
  setRenderValue: Dispatch<SetStateAction<String>>;
}

const ExperienceInput: React.FC<Props> = (props) => {
  const { setRenderValue } = props;
  return (
    <div className="mx-10">
      <Header
        title="Experience"
        previous="Skills"
        forward="Projects"
        setRenderValue={setRenderValue}
      />
      <div className="mt-5">
        <div>
          <form>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  id="skills"
                  placeholder="Position"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  placeholder="Company"
                  type="text"
                  id="skills"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  id="start"
                  placeholder="Start"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-12"
                />

                <input
                  type="text"
                  placeholder="End"
                  id="end"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-12"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="End"
                  id="end"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-96 h-28"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExperienceInput;
