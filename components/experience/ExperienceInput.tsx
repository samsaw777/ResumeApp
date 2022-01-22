import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
import { ExperienceWork } from "./ExperienceWork";
import ExperienceList from "./ExperienceList";
import axios from "axios";
interface Props {
  setRenderValue: Dispatch<SetStateAction<String>>;
  id: any;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
  resumeExperience: any;
}

interface inputArray {
  inttype: string;
  id?: number;
  value: string | undefined;
}

const ExperienceInput: React.FC<Props> = (props) => {
  const {
    setRenderValue,
    fetchPointer,
    setFectchPointer,
    id,
    resumeExperience,
  } = props;

  const [error, setError] = useState<string>("");
  const [experience, setExperience] = useState<any>([]);
  console.log(experience);
  const [position, setPosition] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [inputArr, setInputArr] = useState<inputArray[]>([
    {
      inttype: "text",
      id: 1,
      value: "",
    },
  ]);

  console.log(inputArr);
  console.log(inputArr.length);

  const addExperienceList = (e: any) => {
    e.preventDefault();
    const experienceObj = {
      position,
      company,
      startDate,
      endDate,
      location,
      description,
      inputArr,
      resumeId: id,
    };
    axios
      .post("http://localhost:3000/api/addExperience", experienceObj)
      .then((res) => {
        setFectchPointer(!fetchPointer);
      })
      .catch((error) => {
        console.log(error);
      });
    setExperience([...experience, experienceObj]);
    setPosition("");
    setLocation("");
    setCompany("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setInputArr([
      {
        inttype: "text",
        id: 1,
        value: "",
      },
    ]);
  };

  //Adding the experience work.
  const addExperience = () => {
    const Length = inputArr.length;
    if (Length > 2) {
      setError("Only 3 task are allowed!");
    } else {
      setInputArr((s) => {
        return [...s, { inttype: "text", value: "" }];
      });
    }
  };

  //handle work onChange.
  const handleChange = (e: any) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const index: any = target.id;
    setInputArr((s) => {
      const newArr = s.slice();
      newArr[index].value = target.value;
      return newArr;
    });
  };

  return (
    <div className="mx-10">
      <Header
        title="Experience"
        previous="Skills"
        forward="Projects"
        setRenderValue={setRenderValue}
      />
      <div className="mt-5 w-full bg-white shadow-lg rounded-lg p-5">
        <div>
          <form onSubmit={(e) => addExperienceList(e)}>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Position"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  placeholder="Company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Start"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-12"
                />

                <input
                  type="text"
                  placeholder="End"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-12"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-12"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="About Company"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-28"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <span className="text-lg font-bold">Task Done</span>
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto"
                  onClick={addExperience}
                  type="button"
                >
                  Add task
                </button>
              </div>
              <div>{error}</div>
              <div className="grid grid-rows-1 gap-2 mt-2">
                {inputArr.map((item, i) => {
                  let text = i.toString();
                  return (
                    <ExperienceWork
                      handleChange={handleChange}
                      value={item.value}
                      id={text}
                      type={item.inttype}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
            <div className="mt-4">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto"
                type="submit"
              >
                Add Experience
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {resumeExperience?.map((exp: any, key: number) => (
          <ExperienceList
            position={exp.position}
            company={exp.company}
            startDate={exp.startDate}
            endDate={exp.endDate}
            location={exp.location}
            description={exp.aboutCompany}
            array={exp.taskDone}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceInput;
