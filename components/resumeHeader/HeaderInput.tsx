import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Social from "./Social";
import Router from "next/router";
type Inputs = {
  name: string;
  profession: string;
  description: string;
  email: string;
  phone: number;
  website: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
};

interface Objects {
  name: string | undefined;
  profession: string | undefined;
  description: string | undefined;
  email: string | undefined;
  phone: number | undefined;
  website?: string | undefined;
  github?: string | undefined;
  linkedin?: string | undefined;
  twitter?: string | undefined;
  instagram?: string | undefined;
}

interface Props {
  setMyInfo: Dispatch<SetStateAction<Objects | undefined>>;
  setRenderValue: Dispatch<SetStateAction<String>>;
}

const HeaderInput: React.FC<any> = (props: Props) => {
  const [socialName, setSocialName] = useState<string>("");
  console.log(socialName);

  const { setMyInfo, setRenderValue } = props;

  const Form = useForm<Inputs>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = Form;

  const submitHeaderInformation: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    // const body = {
    //   name,
    //   profession,
    //   description,
    //   email,
    //   phone,
    //   github,
    //   twitter,
    //   instagram,
    //   linkedin,
    //   website,
    // };
    // const response = await fetch("http://localhost:3000/api/addInformation", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(body), // body data type must match "Content-Type" header
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    // Router.push("/new");
  };

  const checkValue = () => {
    setRenderValue("education");
  };

  const {
    name,
    profession,
    description,
    email,
    phone,
    github,
    linkedin,
    website,
    instagram,
    twitter,
  } = watch();
  useEffect(() => {
    setMyInfo({
      name,
      profession,
      description,
      email,
      phone,
      github,
      linkedin,
      website,
      instagram,
      twitter,
    });
  }, [
    name,
    profession,
    description,
    email,
    phone,
    github,
    linkedin,
    website,
    instagram,
    twitter,
  ]);

  // onSubmit={handleSubmit(submitHeaderInformation)}
  return (
    <div>
      <h1>Introduction</h1>
      <form>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold mb-3 pr-4"
                htmlFor="name"
              >
                Full Name
              </label>
            </div>
            <div className="w-11/12">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="name"
                {...register("name", { required: "Name cannot be empty!" })}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold mb-3 pr-4"
                htmlFor="profession"
              >
                Profession
              </label>
            </div>
            <div className="w-11/12">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="profession"
                {...register("profession", {
                  required: "Profession cannot be empty!",
                })}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-6 ">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold mb-3 pr-4"
              htmlFor="description"
            >
              Decription
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="description"
              {...register("description", {
                required: "Profession cannot be empty!",
              })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold mb-3 pr-4"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="w-11/12">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="email"
                {...register("email", { required: "Email cannot be empty!" })}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6 ">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold mb-3 pr-4"
                htmlFor="phone"
              >
                Phone
              </label>
            </div>
            <div className="w-11/12">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="phone"
                {...register("phone", {
                  required: "PhoneNumber cannot be empty!",
                })}
              />
            </div>
          </div>
        </div>
        <div>
          <Social setSocialValue={setSocialName} />
        </div>
        <div className="felx flex-col">
          <div className={socialName ? "text-lg" : "hidden"}>
            Add your {socialName} link below!
          </div>
          <div className="w-1/2 block mx-auto mt-5">
            {socialName === "github" && (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="anonmus"
                placeholder="Link"
                {...register("github", {
                  required: "PhoneNumber cannot be empty!",
                })}
              />
            )}
            {socialName === "instagram" && (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="anonmus"
                placeholder="Link"
                {...register("instagram", {
                  required: "PhoneNumber cannot be empty!",
                })}
              />
            )}
            {socialName === "website" && (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="anonmus"
                placeholder="Link"
                {...register("website", {
                  required: "PhoneNumber cannot be empty!",
                })}
              />
            )}
            {socialName == "linkedin" && (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="anonmus"
                placeholder="Link"
                {...register("linkedin", {
                  required: "PhoneNumber cannot be empty!",
                })}
              />
            )}
            {socialName == "twitter" && (
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="anonmus"
                placeholder="Link"
                {...register("twitter", {
                  required: "PhoneNumber cannot be empty!",
                })}
              />
            )}
          </div>
        </div>
        <div className="flex mt-10">
          <div className="w-full">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block ml-auto mr-10"
              type="submit"
              onClick={() => checkValue()}
            >
              Education
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { HeaderInput };
