import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

interface Props {
  name: string | undefined;
}

const Output: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <div className="bg-gray-300">
      <div className="w-11/12 p-5 bg-white shadow-lg rounded-lg block mx-auto mt-10">
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>
        </div>
      </div>
    </div>
  );
};

export { Output };
