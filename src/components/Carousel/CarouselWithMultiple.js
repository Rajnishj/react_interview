import React, { useState } from "react";
import { carouselData } from "../../utils/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemToShow = 1;
  const totalItems = carouselData.length
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemToShow) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - itemToShow + totalItems) % totalItems
    );
  };

  // Generate items to show, wrapping around if needed
  //const displayedItems = data.slice(currentIndex, currentIndex + itemToShow);

  //For single Item to display we can show this
  let displayedItems =  carouselData.slice(currentIndex, currentIndex + itemToShow);

  //For multiple Items to display we need to use this otherwise last item will break
  //let displayedItems=[]
  // for (let i = 0; i < itemToShow; i++) {
  //   const index = (currentIndex + i) % totalItems;
  //   displayedItems.push(carouselData[index]);
  // }

  return (
    <div className="m-6 relative">
      <h1 className="text-4xl">Carousel Example</h1>
      <div className="mt-6 flex">
        {displayedItems.map((item, idx) => (
          <div key={idx} className="relative">
            <img src={item.photo} alt="photo" className="w-[100%] h-[300px]" />
            <p className="mt-2">{item.title}</p>
          </div>
        ))}
        <ArrowLeft
          onClick={handlePrev}
          className="absolute top-[50%] left-[-4%] cursor-pointer"
        />
        <ArrowRight
          onClick={handleNext}
          className="absolute top-[50%] right-[-4%] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Carousel;
