import React, { useState } from "react";

const Checkbox = () => {
  const [open, setOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const options = [
    "React",
    "Javascript",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Next",
    "Node",
  ];

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleCheckbox = (option) => {
    if (selectedItems.includes(option)) {
      setSelectedItems(selectedItems.filter((item) => item !== option));
    } else {
      setSelectedItems([...selectedItems, option]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
      setSelectAll(false);
    } else {
      setSelectedItems([...options]);
      setSelectAll(true);
    }
  };
  return (
    <div>
      <h1 className="text-4xl">Checkbox Dropdown</h1>
      <div className="mt-4 mb-6">
        <p
          onClick={handleToggle}
          className="border p-2 border-blue-950 w-[400px]">
          {selectedItems.length > 0
            ? selectedItems.join(",")
            : "Select Options"}
        </p>
        {open && (
          <div className="border p-2 border-blue-950 w-[400px]">
            <div onClick={handleSelectAll}>
              <input checked={selectAll} className="mr-3" type="checkbox" />
              <button>{selectAll ? "DeSelectAll" : "SelectAll"}</button>
            </div>
            {options.map((item, i) => (
              <div
                onClick={() => handleCheckbox(item)}
                className="flex p-2 border-b border-pink-400 cursor-pointer hover:bg-slate-500">
                <input
                  checked={selectedItems.includes(item)}
                  className="mr-3"
                  type="checkbox"
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
