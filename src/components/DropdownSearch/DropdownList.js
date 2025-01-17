import React from "react";

const DropdownList = ({ item }) => {
  return (
    <li className="flex p-1 text-center items-center">
      <img className="rounded-full w-8 h-8" loading="lazy" src={item.avatar} />
      <p className="ml-2">{item.email}</p>
    </li>
  );
};

export default DropdownList;
