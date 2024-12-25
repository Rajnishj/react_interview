import React, { useState } from "react";
import { accordionData } from "../Pagination/data";
import { ChevronDown, ChevronUp } from "lucide-react";
const Accordion = () => {
  const [showDetails, setShowDetails] = useState(null);
  const handleShowDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };
  return (
    <div className=" mx-6 mt-6 mb-6 w-[400px]">
      {accordionData.map((item) => (
        <div
          onClick={() => handleShowDetails(item.id)}
          className="border-2 border-blue-400 mb-3">
          <div className="border-b-2 border-red-300 p-2 flex items-center justify-between">
            <p>{item.title}</p>
            {showDetails === item.id ? <ChevronUp /> : <ChevronDown />}
          </div>
          {showDetails === item.id && <p className=" p-2">{item.desc}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
