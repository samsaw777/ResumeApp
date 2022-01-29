import React from "react";

interface Props {
  value: any;
  id: string;
  type: string;
  handleChange: (e: any) => any;
}

const ExperienceWork = ({ handleChange, value, id, type }: Props) => {
  return (
    <input
      onChange={(e) => handleChange(e)}
      value={value}
      id={id}
      type={type}
      placeholder={`Task ${id}`}
      className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-full placeholder-gray-900"
    />
  );
};

export { ExperienceWork };
