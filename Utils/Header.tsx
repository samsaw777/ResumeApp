import React, { Dispatch, SetStateAction } from "react";

interface Props {
  title: string;
  previous?: string;
  forward?: string;
  setRenderValue: Dispatch<SetStateAction<String>>;
}

const Header: React.FC<Props> = (props) => {
  const { title, previous, forward, setRenderValue } = props;
  return (
    <div className="flex mt-10 bg-white shadow-lg rounded-lg p-2">
      <div className="text-lg font-bold mt-1 ml-1">{title}</div>
      <div className="flex ml-auto">
        {previous && (
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block"
            type="submit"
            onClick={() => setRenderValue(previous)}
          >
            {previous}
          </button>
        )}
        {forward && (
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-5"
            type="submit"
            onClick={() => setRenderValue(forward)}
          >
            {forward}
          </button>
        )}
      </div>
    </div>
  );
};

export { Header };
