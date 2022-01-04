import React, { useState } from "react";
import { HeaderInput } from "./HeaderInput";
import { Output } from "./Output";
import { useForm, SubmitHandler } from "react-hook-form";
//Declaring the type of the Inputs.

interface Input {
  name: string | undefined;
  profession: string | undefined;
  description: string | undefined;
  email: string | undefined;
  phone: number | undefined;
}

const Header: React.FC = () => {
  const [name, setName] = useState<any>({});
  return (
    <div className="grid grid-cols-2 gap-1 p-3">
      <HeaderInput setMyInfo={setName} />
      <Output information={name} />
    </div>
  );
};

export { Header };
