import React, { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  profession: string;
};

interface Props {
  setMyName: Dispatch<SetStateAction<string | undefined>>;
}

const HeaderInput: React.FC<Props> = (props: Props) => {
  const { setMyName } = props;
  const Form = useForm<Inputs>({
    defaultValues: {
      name: "Sameep Sawant",
      profession: "Developer",
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

  const { name } = watch();
  setMyName(name);

  return (
    <div>
      Header Input
      <form onSubmit={handleSubmit(submitHeaderInformation)}>
        <div className="flex flex-col mb-6 items-center">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold mb-3 pr-4"
              htmlFor="name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="name"
              {...register("name", { required: "Name cannot be empty!" })}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6 items-center">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold mb-3 pr-4"
              htmlFor="profession"
            >
              Profession
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="profession"
              {...register("profession", {
                required: "Profession cannot be empty!",
              })}
            />
          </div>
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
