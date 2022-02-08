import React, { Dispatch, SetStateAction } from "react";
const colors = [
  { color: "#f97316" },
  { color: "#42a5f5" },
  { color: "#f43f5e" },
  { color: "#8b5cf6" },
  { color: "#EF5350" },
  { color: "#06b6d4" },
  { color: "#FFCA28" },
  { color: "#64ffda" },
  { color: "#66BB6A" },
  { color: "#6b7280" },
];

interface Props {
  setColor: Dispatch<SetStateAction<string>>;
}
const ColorList = ({ setColor }: Props) => {
  return (
    <div className="grid grid-cols-5 h-20 gap-2 mt-5 mx-20">
      {colors.map((color: any, key: number) => {
        return (
          <div
            onClick={() => setColor(color.color)}
            className={`w-full h-20 rounded block cursor-pointer`}
            style={{ backgroundColor: `${color.color}` }}
            key={key}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorList;
