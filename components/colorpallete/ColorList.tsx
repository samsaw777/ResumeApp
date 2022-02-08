import React from "react";
const colors = [
  { color: "purple" },
  { color: "blue" },
  { color: "green" },
  { color: "green" },
  { color: "green" },
  { color: "green" },
  { color: "green" },
  { color: "green" },
  { color: "green" },
  { color: "green" },
];
const ColorList = () => {
  return (
    <div className="flex space-x-3 mt-5">
      {colors.map((color: any, key: number) => {
        return (
          <div
            className={`w-10 h-10 rounded bg-${color.color}-500 block cursor-pointer`}
            key={key}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorList;
