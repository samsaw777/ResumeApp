import React from "react";
import { Education } from "../../Utils/Interfaces";
interface Props {
  education: Education;
}

const EducationList: React.FC<Props> = (props) => {
  const { education } = props;
  return (
    <div className="w-11/12  bg-white shadow-lg rounded-lg block mx-auto mt-10 p-5">
      <div className="w-full text-xl font-bold">{education.courseName}</div>
      <div className="w-full text-lg">{education.institute}</div>
      <div className="flex justify-between text-md">
        <div className="flex">
          <span>{education.startDate}</span>/<span>{education.endDate}</span>
        </div>
        <div className="flex">
          <span>{education.location}</span>
        </div>
      </div>
    </div>
  );
};

export { EducationList };
