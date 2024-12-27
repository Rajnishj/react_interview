import React, { useState } from "react";
import { data } from "../../utils/data";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5; // Number of items to show per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Get the current items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="px-6 mt-5">
      {currentItems.map((item) => (
        <div
          key={item.userId}
          className="p-3 mb-2 cursor-pointer border border-cyan-700 flex items-center justify-between hover:bg-slate-300">
          <img className="w-11 h-11 rounded-full" src={item.avatar} />
          <span className="ml-4 mr-4">{item.username}</span>
          <span>{item.email}</span>
        </div>
      ))}
      <div style={{ marginTop: "20px", marginBottom: "30px" }}>
        <button
          className="bg-purple-400 w-[100px] rounded mr-3 p-3"
          onClick={handlePrev}
          disabled={currentPage === 1}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-purple-400 w-[100px] rounded mr-3 p-3"
          onClick={handleNext}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
