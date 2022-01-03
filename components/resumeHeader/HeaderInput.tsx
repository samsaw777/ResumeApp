import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  profession: string;
  description: string;
  email: string;
  phone: number;
};

interface Objects {
  name: string | undefined;
  profession: string | undefined;
  description: string | undefined;
  email: string | undefined;
  phone: number | undefined;
}

interface Props {
  setMyInfo: Dispatch<SetStateAction<Objects | undefined>>;
}

const HeaderInput: React.FC<any> = (props: Props) => {
  const { setMyInfo } = props;
  const Form = useForm<Inputs>({
    defaultValues: {
      name: "Sameep Sawant",
      profession: "Developer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      email: "xyz@gmail.com",
      phone: 1245245210,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = Form;

  const submitHeaderInformation: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const { name, profession, description, email, phone } = watch();
  useEffect(() => {
    setMyInfo({ name, profession, description, email, phone });
  }, [name, profession, description, email, phone]);

  return (
    <div>
      Header Input
      <form onSubmit={handleSubmit(submitHeaderInformation)}>
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
          <div>here the icons will be done</div>
        </div>
        <div className="flex ">
          <div className="w-full">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-auto block"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { HeaderInput };
