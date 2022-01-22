import React from "react";

const ExperienceList = ({
  position,
  company,
  description,
  location,
  startDate,
  endDate,
  array,
}: any) => {
  return (
    <div className="mt-3 w-full  bg-white shadow-lg rounded-lg block mx-auto  p-5">
      <div className="text-lg font-bold">{position}</div>
      <div className="text-md font-medium mt-1">{company}</div>
      <div className="flex justify-between mt-1">
        <div className="text-sm">
          {startDate} / {endDate}
        </div>
        <div className="text-sm">{location}</div>
      </div>
      <div className="text-md mt-1">{description}</div>
      <div className="mt-2">
        <span className="text-sm font-bold">Task Done</span>
        {array.map((arr: any, key: any) => (
          <div key={key}>{arr.value}</div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
