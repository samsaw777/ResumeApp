import React, { useState } from "react";
import { HeaderInput } from "./HeaderInput";
import { Output } from "./Output";
import { useForm, SubmitHandler } from "react-hook-form";
//Declaring the type of the Inputs.

const Header: React.FC = () => {
  const [name, setName] = useState<string | undefined>("");
  return (
    <div className="grid grid-cols-2 gap-4 p-3">
      <HeaderInput setMyName={setName} />
      <Output name={name} />
    </div>
  );
};

export { Header };
