import { Star } from "lucide-react";
import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };
  return (
    <>
      <div className="flex px-6 mt-4 items-center">
        {/* {
        Array.from({length:5},(_,index) => (
          <div key={index} onClick={() => handleRating(index)}>
            <Star color={rating > index ? "#FFD700" : "#000000"} size={40} />
          </div>
        ))
      } */}
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div key={index} onClick={() => handleRating(index)}>
              <Star color={rating > index ? "#FFD700" : "#000000"} size={40} />
            </div>
          ))}
      </div>
      <div className="px-6 mt-4">
        {rating === 0 ? null : rating <= 2 ? (
          <h1 className="text-3xl">Poor Rating</h1>
        ) : rating === 3 ? (
          <h1 className="text-3xl">Average Rating</h1>
        ) : (
          <h1 className="text-3xl">Excellent Rating</h1>
        )}
      </div>
    </>
  );
};

export default Rating;
