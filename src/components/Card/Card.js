import React from "react";

const Card = ({ item }) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 min-w-[300px] max-w-[350px] mx-auto mt-24">
      <div className="relative w-full h-64 overflow-hidden rounded-2xl">
        <img
          src={item?.url}
          alt={item?.author}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">{item?.author}</h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        {String(`${item?.nsfw}`)}
      </div>
    </article>
  );
};

export default Card;
