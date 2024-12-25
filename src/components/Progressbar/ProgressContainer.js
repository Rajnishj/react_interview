import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressContainer = () => {
  const [progress, setProgress] = useState(50);

  const handleIncrease = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleDecrease = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="mb-3">Progress Bar Example</h1>
      <ProgressBar progress={progress} />
      <div style={{ marginTop: "30px" }}>
        <button onClick={handleDecrease} className="bg-purple-400 w-[100px] rounded mr-3 p-3">
          Decrease
        </button>
        <button onClick={handleIncrease} className="bg-purple-400 w-[100px] rounded mr- p-3">
          Increase
        </button>
      </div>
    </div>
  );
};



export default ProgressContainer;