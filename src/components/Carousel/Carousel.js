import React, { useState } from "react";
import { carouselData } from "../../utils/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel = () => {
const [carouselIndex, setCarouselIndex] = useState(0)
const itemsToShow = 1
const totlaItems = carouselData.length


const handleNext = () => {
  setCarouselIndex((prev) => (prev + 1) % totlaItems)
}
const handlePrev = () => {
  setCarouselIndex((prev) => (prev - 1 + totlaItems) % totlaItems)
}
const displayedItems = carouselData.slice(carouselIndex,carouselIndex + itemsToShow)
  return (
    <div className="m-6 relative">
      <h1 className="text-4xl">Carousel Example</h1>
      <div className="mt-6">
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
