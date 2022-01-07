import React, { useState } from "react";
import { HeaderInput } from "./resumeHeader/HeaderInput";
import { Output } from "./Output";
import { EducationInput } from "./education/EducationInput";
import { Education } from "../Utils/Interfaces";
//Declaring the type of the Inputs.

const renderComponent = (value: string, setName: any, setRenderValue: any) => {
  switch (value) {
    case "information":
      return (
        <HeaderInput setMyInfo={setName} setRenderValue={setRenderValue} />
      );
    case "education":
      return <EducationInput />;
    default:
      return true;
  }
};

const Header: React.FC = () => {
  const [name, setName] = useState<any>({});
  const [renderValue, setRenderValue] = useState<string>("education");
  const [educationList, setEducationList] = useState<Education[]>([]);
  return (
    <div className="grid grid-cols-2 gap-1 p-3  h-screen">
      {renderComponent(renderValue, setName, setRenderValue)}
      {/* <HeaderInput setMyInfo={setName} /> */}
      <Output information={name} />
    </div>
  );
};

export { Header };
