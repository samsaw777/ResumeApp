import React, { useState, useEffect } from "react";
import classNames from "classnames";
const ExperienceList = ({
  position,
  company,
  description,
  location,
  startDate,
  endDate,
  array,
}: any) => {
  const [experience, setExperience] = useState<any>({
    position: position,
    company: company,
    startDate: startDate,
    endDate: endDate,
    location: location,
    description: description,
  });
  const [update, setUpdate] = useState<boolean>(false);

  const [newTaskDone, setNewTaskDone] = useState<any>([...array]);
  console.log(newTaskDone);
  console.log(array);
  const changeNewTaskDone = (e: any) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const changeTaskDone = (e: any) => {
    const newArray = [...newTaskDone];
    newArray[e.target.id] = e.target.value;
    setNewTaskDone(newArray);
  };

  const cancelUpdate = () => {
    setUpdate(false);
    setExperience({
      position: position,
      company: company,
      startDate: startDate,
      endDate: endDate,
      location: location,
      description: description,
    });
    setNewTaskDone([...array]);
    console.log(newTaskDone);
  };
  return (
    <div className="mt-3 w-full  bg-white shadow-lg rounded-lg block mx-auto  p-5">
      <form>
        <div className="flex justify-between">
          <div className="text-lg font-bold">
            <input
              value={experience.position}
              readOnly={!update}
              onChange={(e) => changeNewTaskDone(e)}
              name="position"
              className={
                (classNames(
                  update === false
                    ? "bg-white"
                    : "bg-gray-200 border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500 "
                ),
                " appearance-none rounded py-2 px-4 text-gray-700 leading-tight w-full  focus:outline-none border-none")
              }
            />
          </div>
          {!update && (
            <div
              className="cursor-pointer p-2 bg-gray-100 rounded hover:bg-gray-200"
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
          )}
        </div>
        <div className="text-md font-medium mt-1">
          <input
            name="company"
            readOnly={!update}
            value={experience.company}
            onChange={(e) => changeNewTaskDone(e)}
            className={
              (classNames(
                update === false
                  ? "bg-white"
                  : "bg-gray-200 border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500 "
              ),
              " appearance-none rounded py-2 px-4 text-gray-700 leading-tight w-full  focus:outline-none border-none")
            }
          />
        </div>
        <div className="flex justify-between mt-1">
          <div className="text-sm flex">
            <input
              name="startDate"
              readOnly={!update}
              value={experience.startDate}
              onChange={(e) => changeNewTaskDone(e)}
              className={
                (classNames(
                  update === false
                    ? "bg-white"
                    : "bg-gray-200 border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500 "
                ),
                " appearance-none rounded py-2 px-4 text-gray-700 leading-tight w-full  focus:outline-none border-none")
              }
            />{" "}
            /{" "}
            <input
              name="endDate"
              readOnly={!update}
              value={experience.endDate}
              onChange={(e) => changeNewTaskDone(e)}
              className={
                (classNames(
                  update === false
                    ? "bg-white"
                    : "bg-gray-200 border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500 "
                ),
                " appearance-none rounded py-2 px-4 text-gray-700 leading-tight w-full  focus:outline-none border-none")
              }
            />
          </div>
          <div className="text-sm">
            <input
              name="location"
              readOnly={!update}
              value={experience.location}
              onChange={(e) => changeNewTaskDone(e)}
              className={
                (classNames(
                  update === false
                    ? "bg-white"
                    : "bg-gray-200 border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500 "
                ),
                " appearance-none rounded py-2 px-4 text-gray-700 leading-tight w-full  focus:outline-none border-none")
              }
            />
          </div>
        </div>
        <div className="text-md mt-1">
          <input
            name="description"
            readOnly={!update}
            value={experience.description}
            onChange={(e) => changeNewTaskDone(e)}
            className={
              (classNames(
                update === false
                  ? "bg-white"
                  : "bg-gray-200 border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500 "
              ),
              " appearance-none rounded py-2 px-4 text-gray-700 leading-tight w-full  focus:outline-none border-none")
            }
          />
        </div>
        <div className="mt-2">
          <span className="text-sm font-bold">Task Done</span>
          {newTaskDone?.map((arr: any, key: any) => (
            <input
              key={key}
              readOnly={!update}
              onChange={(e) => changeTaskDone(e)}
              value={arr.taskDone}
              id={key}
              className={
                (classNames(
                  update === true
                    ? "bg-gray-200 border-2 border-gray-200 focus:outline-none focus:bg-white focus:border-purple-500 "
                    : "bg-white"
                ),
                " appearance-none rounded py-2 px-4 text-gray-700 leading-tight w-full  focus:outline-none border-none mt-1")
              }
            />
          ))}
        </div>
        {update && (
          <div className="flex justify-end mt-2 space-x-2">
            <p
              className="p-2 bg-white text-purple-500 border-2 border-purple-500 cursor-pointer"
              onClick={cancelUpdate}
            >
              Cancel
            </p>
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Update
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ExperienceList;
