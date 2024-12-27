import React from "react";
import "./CardShimmer.css"; // Create a CSS file for shimmer styles

const CardShimmer = () => {
  return Array(12).fill(0).map((_,index) => (
    <article key={index} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 min-w-[300px] max-w-[350px] mx-auto mt-24 bg-gray-800">
      <div className="relative w-full h-64 overflow-hidden rounded-2xl shimmer-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 h-8 w-3/4 shimmer-bg rounded"></h3>
      <div className="z-10 mt-2 h-5 w-1/2 shimmer-bg rounded"></div>
      <div className="z-10 mt-1 h-5 w-1/4 shimmer-bg rounded"></div>
    </article>
  ));
};

export default CardShimmer;
