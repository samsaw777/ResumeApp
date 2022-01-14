import React, { useState, Dispatch, SetStateAction } from "react";
import { Header } from "../../Utils/Header";
import { ExperienceWork } from "./ExperienceWork";
interface Props {
  setRenderValue: Dispatch<SetStateAction<String>>;
}

interface inputArray {
  inttype: string;
  id?: number;
  value: string | undefined;
}

// interface ExperienceInput {
//   position: string | undefined;
//   company: string | undefined;
//   startDate: string | undefined;
//   endDate: string | undefined;
//   location: string | undefined;
//   about: string | undefined;
//   task: inputArray[];
// }

const ExperienceInput: React.FC<Props> = (props) => {
  const { setRenderValue } = props;
  const [error, setError] = useState<string>("");
  const [inputArr, setInputArr] = useState<inputArray[]>([
    {
      inttype: "text",
      id: 1,
      value: "",
    },
  ]);

  console.log(inputArr);
  console.log(inputArr.length);
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
      <div className="mt-5">
        <div>
          <form>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  id="skills"
                  placeholder="Position"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  placeholder="Company"
                  type="text"
                  id="skills"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  id="start"
                  placeholder="Start"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-12"
                />

                <input
                  type="text"
                  placeholder="End"
                  id="end"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-12"
                />
                <input
                  type="text"
                  placeholder="Location"
                  id="location"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-full h-12"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="About Company"
                  id="end"
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
    </div>
  );
};

export default ExperienceInput;
