import React from 'react';
import DropdownList from './DropdownList';

const DropdownSearch = ({ data }) => {
  const dynamicHeight = data.length * 50; // Assuming each item takes 50px in height
  const adjustedHeight = Math.min(dynamicHeight, 400); // Cap the height at 400px

  return (
    <ul
      className={`bg-white w-[400px] ${data.length > 0 && "overflow-auto"} border border-cyan-300 rounded`}
      style={{ height: data.length > 0 ? `${adjustedHeight}px` : "40px" }}
    >
      {data.length > 0 ? (
        data.map((item) => <DropdownList key={item.userId} item={item} />)
      ) : (
        <li className="text-center py-1">No data found</li>
      )}
    </ul>
  );
};

export default DropdownSearch;
