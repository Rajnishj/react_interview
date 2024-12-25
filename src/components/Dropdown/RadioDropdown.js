import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const data = [
  {
    id: 1,
    course: "React",
  },
  {
    id: 2,
    course: "Javascript",
  },
  {
    id: 3,
    course: "Angular",
  },
  {
    id: 4,
    course: "Next",
  },
  {
    id: 5,
    course: "Vue",
  },
];
const RadioDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
const [selected,setSelected] = useState("Check Courses")
  const handleVisibleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div
        className="w-[300px] border mx-7 px-3 border-blue-300 rounded h-12 flex items-center justify-between"
        onClick={handleVisibleDropdown}>
            <p>{selected}</p>
            {showDropdown ? <ChevronUp /> : <ChevronDown />}
        </div>
      {showDropdown && (
        <div className="w-[300px] border mx-7 border-blue-300 rounded mb-6">
          {data.map((item) => (
            <p onClick={
                () => {
                    setSelected(item.course)
                    setShowDropdown(false)
                }
                } key={item.id} className="p-3 cursor-pointer border-b border-b-orange-200 hover:bg-gray-700">
              {item.course}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default RadioDropdown;
