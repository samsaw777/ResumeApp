import React, { Dispatch, SetStateAction, useState } from "react";
import { Education } from "../../Utils/Interfaces";
import axios from "axios";
import classNames from "classnames";
interface Props {
  id: string;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
  fetchPointer: boolean;
  courseName: string;
  institute: string;
  startDate: number;
  endDate: number;
  location: string;
}

const EducationList: React.FC<Props> = (props) => {
  const {
    id,
    courseName,
    institute,
    startDate,
    endDate,
    location,
    fetchPointer,
    setFectchPointer,
  } = props;

  const [education, setUpdatedEducation] = useState<any>({
    courseName,
    institute,
    startDate,
    endDate,
    location,
  });
  console.log(education);
  const [update, setUpdate] = useState<boolean>(false);

  const cancelUpdate = () => {
    setUpdate(false);
    setUpdatedEducation({
      courseName,
      institute,
      startDate,
      endDate,
      location,
    });
  };

  const updateEducation = async (e: any) => {
    e.preventDefault();
    const body = {
      courseName: education.courseName,
      institute: education.institute,
      startDate: education.startDate,
      endDate: education.endDate,
      location: education.location,
      educationId: id,
    };
    await axios
      .post("http://localhost:3000/api/updateEducation", body)
      .then((res) => {
        setUpdate(false);
        setFectchPointer(!fetchPointer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeEducation = async (e: any) => {
    setUpdatedEducation({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full  bg-white shadow-lg rounded-lg  mt-10 p-5">
      {!update && (
        <div className="flex justify-end">
          <div
            className="cursor-pointer w-fit p-2 bg-gray-100 rounded hover:bg-gray-200"
            onClick={() => setUpdate(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </div>
      )}
      <form onSubmit={(e) => updateEducation(e)}>
        <div
          className={classNames(
            update ? "mt-2" : "mt-0",
            "w-full text-xl font-bold"
          )}
        >
          <input
            value={education.courseName}
            readOnly={!update}
            name="courseName"
            onChange={(e) => changeEducation(e)}
            className={classNames(
              update === false
                ? "bg-white border-none font-bold text-xl"
                : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
              "rounded w-full  focus:outline-none "
            )}
          />
        </div>
        <div className={classNames(update ? "mt-2" : "mt-0", "w-full text-lg")}>
          <input
            value={education.institute}
            readOnly={!update}
            name="institute"
            onChange={(e) => changeEducation(e)}
            className={classNames(
              update === false
                ? "bg-white border-none"
                : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
              "rounded w-full  focus:outline-none "
            )}
          />
        </div>
        <div
          className={classNames(
            update ? "mt-2" : "mt-0",
            "flex justify-between text-md space-x-2"
          )}
        >
          <div className="flex space-x-3">
            <span>
              <input
                value={education.startDate}
                readOnly={!update}
                name="startDate"
                onChange={(e) => changeEducation(e)}
                className={classNames(
                  update === false
                    ? "bg-white border-none"
                    : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                  "rounded w-full  focus:outline-none "
                )}
              />
            </span>
            <span>
              <input
                value={education.endDate}
                readOnly={!update}
                name="endDate"
                onChange={(e) => changeEducation(e)}
                className={classNames(
                  update === false
                    ? "bg-white border-none"
                    : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                  "rounded w-full focus:outline-none "
                )}
              />
            </span>
          </div>
          <div className="flex">
            <span>
              <input
                value={education.location}
                readOnly={!update}
                name="location"
                onChange={(e) => changeEducation(e)}
                className={classNames(
                  update === false
                    ? "bg-white border-none"
                    : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                  "rounded w-full  focus:outline-none "
                )}
              />
            </span>
          </div>
        </div>
        {update && (
          <div className="flex justify-end mt-2 space-x-2">
            <p
              className="p-2 bg-white text-purple-500 border-2 border-purple-500 cursor-pointer"
              onClick={cancelUpdate}
            >
              Cancel
            </p>
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export { EducationList };
