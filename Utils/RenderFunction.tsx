import { HeaderInput } from "../components/resumeHeader/HeaderInput";
import { EducationInput } from "../components/education/EducationInput";

//function to render the component based on render value.
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

//function to decide which value to be send into the render component.
const passValue = (value: string, setName: any, setRenderValue: any) => {
  switch (value) {
    case "information":
      return renderComponent(value, setName, setRenderValue);
    case "education":
      return renderComponent(value, setName, setRenderValue);
    default:
      return true;
  }
};

export { renderComponent, passValue };
