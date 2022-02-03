import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
import { ExperienceWork } from "./ExperienceWork";
import ExperienceList from "./ExperienceList";
import axios from "axios";
import { ExperienceValidation } from "../../Utils/EducationValidation";
import toast from "react-hot-toast";
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
  name: string | undefined;
}

const ExperienceInput: React.FC<Props> = (props) => {
  const {
    setRenderValue,
    fetchPointer,
    setFectchPointer,
    id,
    resumeExperience,
  } = props;
  console.log(resumeExperience);
  const [error, setError] = useState<string>("");
  const [experienceInfo, setExperienceInfo] = useState<any>({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  console.log(experienceInfo);
  const [errors, setErrors] = useState<any>({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const [inputArr, setInputArr] = useState<inputArray[]>([
    {
      inttype: "text",
      id: 1,
      value: "",
      name: "",
    },
  ]);
  const [showExperienceInput, setShowExperienceInput] = useState<boolean>(true);

  console.log(inputArr);
  console.log(inputArr.length);

  const isExperience = () => {
    let errorStatus = false;
    Object.keys(errors).map((key: any, index: any) => {
      if (errors[key]) {
        errorStatus = true;
      } else {
        errorStatus = false;
      }
    });

    return errorStatus;
  };

  const addExperienceList = (e: any) => {
    e.preventDefault();
    const experienceObj = {
      position: experienceInfo.position,
      company: experienceInfo.company,
      startDate: experienceInfo.startDate,
      endDate: experienceInfo.endDate,
      location: experienceInfo.location,
      description: experienceInfo.description,
      inputArr,
      resumeId: id,
    };
    if (!isExperience()) {
      axios
        .post("http://localhost:3000/api/addExperience", experienceObj)
        .then((res) => {
          setFectchPointer(!fetchPointer);
          setShowExperienceInput(true);
          toast.success("Experience Added", {
            className: "font-bold",
          });
          setExperienceInfo({
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
          });
          setInputArr([
            {
              inttype: "text",
              id: 1,
              value: "",
              name: "",
            },
          ]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Invalid fields detected!", { className: "font-bold" });
    }
  };

  //Adding the experience work.
  const addExperience = () => {
    const Length = inputArr.length;
    if (Length > 2) {
      setError("Only 3 task are allowed!");
    } else {
      setInputArr((s) => {
        return [...s, { inttype: "text", value: "", name: "" }];
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
      newArr[index].name = target.name;
      return newArr;
    });
  };

  //onchanging validating the input fields.
  const validatingExperience = (name: string, value: string) => {
    setExperienceInfo({ ...experienceInfo, [name]: value });
    const values = { ...experienceInfo, [name]: value };
    setErrors(ExperienceValidation(values));
  };

  //canling the inputs.
  const cancelExperience = () => {
    setExperienceInfo({
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setInputArr([
      {
        inttype: "text",
        id: 1,
        value: "",
        name: "",
      },
    ]);
    setShowExperienceInput(true);
  };

  return (
    <div className="mx-10">
      <Header
        title="Experience"
        previous="Skills"
        forward="Projects"
        setRenderValue={setRenderValue}
      />
      {showExperienceInput && (
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setShowExperienceInput(false)}
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block cursor-pointer"
          >
            Add Experience
          </button>
        </div>
      )}
      {!showExperienceInput && (
        <div className="mt-5 w-full bg-white shadow-lg rounded-lg p-5">
          <div>
            <div className="text-md font-bold text-red-500">
              {errors.position ||
                errors.company ||
                errors.location ||
                errors.description ||
                errors.startDate ||
                errors.endDate}
            </div>
            <form onSubmit={(e) => addExperienceList(e)}>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="text"
                    value={experienceInfo.position}
                    name="position"
                    onChange={(e) =>
                      validatingExperience(e.target.name, e.target.value)
                    }
                    placeholder="Position"
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-blue-500 placeholder-gray-900"
                  />
                </div>
                <div>
                  <input
                    placeholder="Company"
                    type="text"
                    value={experienceInfo.company}
                    name="company"
                    onChange={(e) =>
                      validatingExperience(e.target.name, e.target.value)
                    }
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-blue-500 placeholder-gray-900"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-5">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={experienceInfo.startDate}
                    name="startDate"
                    onChange={(e) =>
                      validatingExperience(e.target.name, e.target.value)
                    }
                    placeholder="Start"
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-full h-12 placeholder-gray-900"
                  />

                  <input
                    type="text"
                    placeholder="End"
                    name="endDate"
                    value={experienceInfo.endDate}
                    onChange={(e) =>
                      validatingExperience(e.target.name, e.target.value)
                    }
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-full h-12 placeholder-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={experienceInfo.location}
                    onChange={(e) =>
                      validatingExperience(e.target.name, e.target.value)
                    }
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-full h-12 placeholder-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="About Company"
                    name="description"
                    value={experienceInfo.description}
                    onChange={(e) =>
                      validatingExperience(e.target.name, e.target.value)
                    }
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-blue-500 w-full h-28 placeholder-gray-900"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Task Done</span>
                  <button
                    className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto placeholder-gray-900"
                    onClick={addExperience}
                    type="button"
                  >
                    Add task
                  </button>
                </div>
                <div>{error}</div>
                <div className="grid grid-rows-1 gap-2 mt-2">
                  {inputArr.map((item, i) => {
                    console.log(i);
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
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  type="button"
                  className="shadow bg-white  focus:shadow-outline focus:outline-none text-red-500 font-bold py-2 px-4 rounded border border-red-500"
                  onClick={cancelExperience}
                >
                  Cancle
                </button>
                <button
                  className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showExperienceInput && resumeExperience && (
        <div className="h-experienceListHeight mt-2 overflow-scroll">
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
              id={exp.id}
              fetchPointer={fetchPointer}
              setFectchPointer={setFectchPointer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceInput;
