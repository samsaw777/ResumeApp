import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Header } from "../../Utils/Header";
import classNames from "classnames";
import { EducationList } from "./EducationList";
import { Education } from "../../Utils/Interfaces";
import axios from "axios";
import { validateCourseName } from "../../Utils/EducationValidation";

interface EducationInput {
  courseName: string | undefined;
  institute: string | undefined;
  startDate: number | undefined;
  endDate: number | undefined;
  location: string | undefined;
}
interface Props {
  id: string;
  setRenderValue: Dispatch<SetStateAction<String>>;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
  educationData: any;
}

const EducationInput: React.FC<Props> = (props) => {
  const { setRenderValue, fetchPointer, setFectchPointer, id, educationData } =
    props;
  // const [education, setEducation] = useState<Education[]>([]);
  // console.log(education);

  // const [course, setCourse] = useState<string>("");
  // const [institute, setInstitute] = useState<string>("");
  // const [startDate, setStartDate] = useState<number>(2000);
  // const [endDate, setEndDate] = useState<number>(2004);
  // const [location, setLocation] = useState<string>("");
  const [createEducation, setCreateEducation] = useState<boolean>(false);
  const [error, setError] = useState<any>({});
  const [educationInfo, setEducationInfo] = useState<Partial<EducationInput>>(
    {}
  );

  console.log(educationInfo);
  console.log(error);

  //validation in each field.
  const validateEducation = (name: string, value: string | number) => {
    setEducationInfo({ ...educationInfo, [name]: value });
    const values = { ...educationInfo, [name]: value };
    setError(validateCourseName(values));
  };

  //add the education in the database.
  const addEducationToList = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      courseName: educationInfo.courseName,
      institute: educationInfo.institute,
      startDate: educationInfo.startDate,
      endDate: educationInfo.endDate,
      location: educationInfo.location,
      resumeId: id,
    };

    //call the api
    axios
      .post("http://localhost:3000/api/addEducation", body)
      .then((res) => {
        console.log(res.data);
        setFectchPointer(!fetchPointer);
        setEducationInfo({});
        // setEducationPointer(!educationPointer);
        setCreateEducation(false);
      })
      .then((error) => {
        console.log(error);
      });

    // setEducation([...education, educationObj]);
  };

  const cancelEducation = () => {
    setEducationInfo({});
    setCreateEducation(false);
    setError({});
  };

  return (
    <div className="mx-10">
      <Header
        title="Education"
        previous="Introduction"
        forward="Skills"
        setRenderValue={setRenderValue}
      />
      {!createEducation && (
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setCreateEducation(true)}
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block cursor-pointer"
          >
            Add Education
          </button>
        </div>
      )}
      {createEducation && (
        <div className=" w-full bg-white shadow-lg rounded-lg p-5 mt-2 ">
          <div className="text-md font-bold text-red-500">
            {error?.courseName ||
              error?.institute ||
              error?.startDate ||
              error?.endDate ||
              error?.location}
          </div>
          <form onSubmit={(e) => addEducationToList(e)}>
            <div className="md:w-1/3 mt-5">
              <label
                className="block text-black font-bold mb-3 pr-4"
                htmlFor="course"
              >
                Course Name
              </label>
            </div>
            <div>
              <input
                type="text"
                id="course"
                name="courseName"
                value={educationInfo.courseName}
                placeholder="Course Name"
                // onChange={(e) => setCourse(e.target.value)}
                onChange={(e) =>
                  validateEducation(e.target.name, e.target.value)
                }
                className={classNames(
                  error.courseName
                    ? " focus:border-red-500"
                    : "focus:border-blue-500",
                  "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  placeholder-gray-900"
                )}
              />
            </div>
            <div className="md:w-1/3 mt-5">
              <label
                className="block text-black font-bold mb-3 pr-4"
                htmlFor="institute"
              >
                Institute
              </label>
            </div>
            <div>
              <input
                type="text"
                id="institute"
                name="institute"
                value={educationInfo.institute}
                placeholder="Institute Name"
                onChange={(e) =>
                  validateEducation(e.target.name, e.target.value)
                }
                className={classNames(
                  error.institute
                    ? " focus:border-red-500"
                    : "focus:border-blue-500",
                  "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  placeholder-gray-900"
                )}
              />
            </div>
            <div className="flex mt-5">
              <div className="flex-col flex">
                <label
                  className="block text-black font-bold mb-3 pr-4"
                  htmlFor="start"
                >
                  Start Year
                </label>
                <input
                  type="text"
                  id="start"
                  name="startDate"
                  value={educationInfo.startDate}
                  placeholder="Start Year"
                  onChange={(e) =>
                    validateEducation(e.target.name, Number(e.target.value))
                  }
                  className={classNames(
                    error.startDate
                      ? " focus:border-red-500"
                      : "focus:border-blue-500",
                    "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  placeholder-gray-900"
                  )}
                />
              </div>
              <div className="flex-col flex ml-5">
                <label
                  className="block text-black font-bold mb-3 pr-4"
                  htmlFor="end"
                >
                  End Year
                </label>
                <input
                  type="text"
                  id="end"
                  name="endDate"
                  value={educationInfo.endDate}
                  placeholder="End Year"
                  onChange={(e) =>
                    validateEducation(e.target.name, Number(e.target.value))
                  }
                  className={classNames(
                    error.endDate
                      ? " focus:border-red-500"
                      : "focus:border-blue-500",
                    "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  placeholder-gray-900"
                  )}
                />
              </div>
              <div className="ml-auto">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold mb-3 pr-4"
                    htmlFor="location"
                  >
                    Location
                  </label>
                </div>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={educationInfo.location}
                  placeholder="Location"
                  onChange={(e) =>
                    validateEducation(e.target.name, e.target.value)
                  }
                  className={classNames(
                    error.location
                      ? " focus:border-red-500"
                      : "focus:border-blue-500",
                    "bg-gray-100 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  placeholder-gray-900"
                  )}
                />
              </div>
            </div>
            <div className="w-full mt-10 flex justify-end space-x-2">
              <button
                type="button"
                className="shadow bg-white  focus:shadow-outline focus:outline-none text-red-500 font-bold py-2 px-4 rounded border border-red-500"
                onClick={cancelEducation}
              >
                Cancle
              </button>
              <button
                type="submit"
                className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
      {/* {education.map(edu:Education,key:number) => {return <EducationList />})} */}
      {!createEducation && educationData && (
        <div className=" overflow-scroll mt-2 h-experienceListHeight">
          {educationData?.map((edu: any, key: number) => {
            return (
              <EducationList
                key={key}
                id={edu.id}
                courseName={edu.courseName}
                institute={edu.institute}
                startDate={edu.startDate}
                endDate={edu.endDate}
                location={edu.location}
                fetchPointer={fetchPointer}
                setFectchPointer={setFectchPointer}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export { EducationInput };
