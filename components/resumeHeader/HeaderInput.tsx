import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Social from "./Social";
import axios from "axios";
import Router from "next/router";
import { Header } from "../../Utils/Header";
import HeaderOutput from "./HeaderOutput";
import { createInterface } from "readline";
import { urlFetcher } from "../../Utils/urlFetcher";

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
  id: any;
  fetchPointer: boolean;
  setFectchPointer: Dispatch<SetStateAction<boolean>>;
  introductionData: any;
}

const HeaderInput: React.FC<any> = (props: Props) => {
  const [socialName, setSocialName] = useState<string>("");
  console.log(socialName);
  const [createInformation, setCreateInformation] = useState<boolean>(false);

  const cancelInformation = () => {
    setCreateInformation(false);
  };
  const {
    setMyInfo,
    setRenderValue,
    id,
    fetchPointer,
    setFectchPointer,
    introductionData,
  } = props;

  const Form = useForm<Inputs>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = Form;

  console.log(id);
  const checkValue = () => {
    setRenderValue("Education");
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

  const submitIntroduction = (e: any) => {
    const phoneNumber = Number(phone);
    e.preventDefault();
    const body = {
      name,
      profession,
      description,
      email,
      phone: phoneNumber,
      githubLink: github,
      websiteLink: website,
      linkedinLink: linkedin,
      twitterLink: twitter,
      instagramLink: instagram,
      resumeId: id,
    };

    axios
      .post(`${urlFetcher()}/api/userIntroduction`, body)
      .then((res) => {
        setFectchPointer(!fetchPointer);
        setCreateInformation(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // onSubmit={handleSubmit(submitHeaderInformation)}
  return (
    <div className="mx-10">
      <Header
        title="Introduction"
        forward="Education"
        setRenderValue={setRenderValue}
      />
      {!createInformation && (
        <div className="flex justify-end mt-2">
          <button
            onClick={() => setCreateInformation(true)}
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block cursor-pointer"
          >
            Add Introduction
          </button>
        </div>
      )}
      {createInformation && (
        <div className=" w-full bg-white shadow-lg rounded-lg p-5 mt-2">
          <form className="mt-5" onSubmit={(e) => submitIntroduction(e)}>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col mb-6 ">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold mb-3 pr-4"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                </div>
                <div className="w-full">
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="name"
                    placeholder="Your Full Name"
                    {...register("name", { required: "Name cannot be empty!" })}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6 ">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold mb-3 pr-4"
                    htmlFor="profession"
                  >
                    Profession
                  </label>
                </div>
                <div className="w-full">
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="profession"
                    placeholder="Your Profession"
                    {...register("profession", {
                      required: "Profession cannot be empty!",
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col mb-6 ">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold mb-3 pr-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
                <div className="w-full">
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email cannot be empty!",
                    })}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6 ">
                <div className="md:w-1/3">
                  <label
                    className="block text-black font-bold mb-3 pr-4"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                </div>
                <div className="w-full  ">
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="phone"
                    placeholder="Your Phone Number"
                    {...register("phone", {
                      required: "PhoneNumber cannot be empty!",
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-6 ">
              <div className="w-full">
                <label
                  className="block text-black font-bold mb-3 pr-4"
                  htmlFor="description"
                >
                  Decription
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="description"
                  placeholder="About You"
                  {...register("description", {
                    required: "Profession cannot be empty!",
                  })}
                />
              </div>
            </div>
            <div>
              <Social setSocialValue={setSocialName} />
            </div>
            <div className="felx flex-col">
              <div className={socialName ? "text-lg" : "hidden"}>
                Add your {socialName} link below!
              </div>
              <div className="w-full mt-5">
                {socialName === "github" && (
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="anonmus"
                    placeholder="Github Link"
                    {...register("github", {
                      required: "PhoneNumber cannot be empty!",
                    })}
                  />
                )}
                {socialName === "instagram" && (
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="anonmus"
                    placeholder="Instagram Link"
                    {...register("instagram", {
                      required: "PhoneNumber cannot be empty!",
                    })}
                  />
                )}
                {socialName === "website" && (
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="anonmus"
                    placeholder="Webssite Link"
                    {...register("website", {
                      required: "PhoneNumber cannot be empty!",
                    })}
                  />
                )}
                {socialName == "linkedin" && (
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="anonmus"
                    placeholder="Linkedin Link"
                    {...register("linkedin", {
                      required: "PhoneNumber cannot be empty!",
                    })}
                  />
                )}
                {socialName == "twitter" && (
                  <input
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    id="anonmus"
                    placeholder="Twitter Link"
                    {...register("twitter", {
                      required: "PhoneNumber cannot be empty!",
                    })}
                  />
                )}
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-full flex justify-end space-x-2">
                <button
                  type="button"
                  className="shadow bg-white  focus:shadow-outline focus:outline-none text-red-500 font-bold py-2 px-4 rounded border border-red-500"
                  onClick={cancelInformation}
                >
                  Cancle
                </button>
                <button
                  className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded block cursor-pointer"
                  type="submit"
                  onSubmit={(e) => submitIntroduction(e)}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {!createInformation && introductionData && (
        <HeaderOutput
          id={introductionData?.id}
          name={introductionData?.name}
          profession={introductionData?.profession}
          email={introductionData?.email}
          phone={introductionData?.phone}
          description={introductionData?.description}
          github={introductionData?.githubLink}
          website={introductionData?.websiteLink}
          twitter={introductionData?.twitterLink}
          linkedin={introductionData?.linkedinLink}
          instagram={introductionData?.instagramLink}
          fetchPointer={fetchPointer}
          setFectchPointer={setFectchPointer}
        />
      )}
    </div>
  );
};

export { HeaderInput };
