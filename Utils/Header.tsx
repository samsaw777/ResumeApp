import React from "react";

interface Props {
  title: string;
  previous?: string;
  forward?: string;
}

const Header: React.FC<Props> = (props) => {
  const { title, previous, forward } = props;
  return (
    <div className="flex mt-10">
      <div className="text-xl font-bold">{title}</div>
      <div className="flex ml-auto">
        {previous && (
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block"
            type="submit"
          >
            Intorduction
          </button>
        )}
        {forward && (
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-5"
            type="submit"
          >
            {forward}
          </button>
        )}
      </div>
    </div>
  );
};

export { Header };
