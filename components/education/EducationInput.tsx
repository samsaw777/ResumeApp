import React, { useState } from "react";
import { Header } from "../../Utils/Header";
import { EducationList } from "./EducationList";
import { Education } from "../../Utils/Interfaces";

const EducationInput: React.FC = () => {
  const [education, setEducation] = useState<Education[]>([]);
  const [course, setCourse] = useState<string>("");
  const [institute, setInstitute] = useState<string>("");
  const [startDate, setStartDate] = useState<number>(2000);
  const [endDate, setEndDate] = useState<number>(2004);
  const [location, setLocation] = useState<string>("");

  //the education list into the component.
  const addEducationToList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const educationObj = {
      course,
      institute,
      startYear: startDate,
      endYear: endDate,
      place: location,
    };

    setEducation([...education, educationObj]);
    setCourse("");
    setLocation("");
    setStartDate(2000);
    setEndDate(2004);
    setInstitute("");
  };
  return (
    <div className="mx-10">
      <Header title="Education" previous="Information" forward="Skills" />
      <form onSubmit={(e) => addEducationToList(e)}>
        <div className="md:w-1/3 mt-5">
          <label
            className="block text-gray-500 font-bold mb-3 pr-4"
            htmlFor="course"
          >
            Course Name
          </label>
        </div>
        <div>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="md:w-1/3 mt-5">
          <label
            className="block text-gray-500 font-bold mb-3 pr-4"
            htmlFor="institute"
          >
            institute
          </label>
        </div>
        <div>
          <input
            type="text"
            id="institute"
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="flex mt-5">
          <div className="flex-col flex">
            <label
              className="block text-gray-500 font-bold mb-3 pr-4"
              htmlFor="start"
            >
              Start
            </label>
            <input
              type="text"
              id="start"
              value={startDate}
              onChange={(e) => setStartDate(Number(e.target.value))}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-28"
            />
          </div>
          <div className="flex-col flex ml-5">
            <label
              className="block text-gray-500 font-bold mb-3 pr-4"
              htmlFor="end"
            >
              End
            </label>
            <input
              type="text"
              id="end"
              value={endDate}
              onChange={(e) => setEndDate(Number(e.target.value))}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-28"
            />
          </div>
          <div className="ml-auto">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold mb-3 pr-4"
                htmlFor="location"
              >
                Location
              </label>
            </div>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-30"
            />
          </div>
        </div>
        <div className="w-full mt-10">
          <button
            type="submit"
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto"
          >
            Add
          </button>
        </div>
      </form>
      {/* {education.map(edu:Education,key:number) => {return <EducationList />})} */}
      <div>
        {education.map((edu: Education, key: number) => {
          return <EducationList education={edu} key={key} />;
        })}
      </div>
    </div>
  );
};

export { EducationInput };
