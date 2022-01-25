import React, { useState, Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import axios from "axios";

interface Props {
  id: string | undefined;
  name: string | undefined;
  profession: string | undefined;
  email: string | undefined;
  phone: number | undefined;
  description: string | undefined;
  github?: string | undefined;
  website?: string | undefined;
  linkedin?: string | undefined;
  twitter?: string | undefined;
  instagram?: string | undefined;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
}

const HeaderOutput = ({
  name,
  profession,
  id,
  website,
  twitter,
  description,
  github,
  linkedin,
  email,
  phone,
  instagram,
  fetchPointer,
  setFectchPointer,
}: Props) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [introduction, setIntroduction] = useState<any>({
    name,
    profession,
    email,
    phone,
    website,
    description,
    github,
    twitter,
    instagram,
    linkedin,
  });

  console.log(introduction);

  //change the introduction information
  const changeIntroductionDate = (e: any) => {
    setIntroduction({ ...introduction, [e.target.name]: e.target.value });
  };

  //cancel the update.
  const cancelUpdate = () => {
    setUpdate(false);
    setIntroduction({
      name,
      profession,
      email,
      phone,
      website,
      description,
      github,
      twitter,
      instagram,
      linkedin,
    });
  };

  //update introduction
  const updateIntroduction = (e: any) => {
    e.preventDefault();
    const body = {
      name: introduction.name,
      profession: introduction.profession,
      description: introduction.description,
      email: introduction.email,
      phone: introduction.phone,
      githubLink: introduction.github,
      websiteLink: introduction.website,
      twitterLink: introduction.twitter,
      linkedinLink: introduction.linkedin,
      instagramLink: introduction.instagram,
      id,
    };

    axios
      .post("http://localhost:3000/api/updateIntroduction", body)
      .then((res) => {
        setUpdate(false);
        setFectchPointer(!fetchPointer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-2">
      <div className=" w-full bg-white shadow-lg rounded-lg p-5">
        {!update && (
          <div
            className="cursor-pointer w-fit p-2 bg-gray-100 rounded hover:bg-gray-200 block ml-auto"
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
        <form onSubmit={(e) => updateIntroduction(e)}>
          <div className="grid grid-cols-2 gap-2">
            <input
              value={introduction.name}
              readOnly={!update}
              name="name"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none font-bold "
              )}
            />
            <input
              value={introduction.profession}
              readOnly={!update}
              name="profession"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <input
              value={introduction.email}
              readOnly={!update}
              name="email"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />
            <input
              value={introduction.phone}
              readOnly={!update}
              name="phone"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />
          </div>
          <div className="mt-2">
            <input
              value={introduction.description}
              readOnly={!update}
              name="description"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <input
              value={introduction.github}
              readOnly={!update}
              name="github"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />

            <input
              value={introduction.website}
              readOnly={!update}
              name="website"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />

            <input
              value={introduction.linkedin}
              readOnly={!update}
              name="linkedin"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />

            <input
              value={introduction.twitter}
              readOnly={!update}
              name="twitter"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />

            <input
              value={introduction.instagram}
              readOnly={!update}
              name="instagram"
              onChange={(e) => changeIntroductionDate(e)}
              className={classNames(
                update === false
                  ? "bg-white border-none text-md"
                  : "bg-gray-200 focus:outline-none border-2  focus:bg-white focus:border-purple-500 py-2 px-4  leading-tight ",
                "rounded w-full  focus:outline-none "
              )}
            />
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
    </div>
  );
};

export default HeaderOutput;
