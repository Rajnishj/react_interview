import React, { useState } from "react";

const DragAndDropList = () => {
  const [items, setItems] = useState([
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
  ]);

  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (index) => {
    console.log(index)
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedItemIndex, 1);
    console.log([draggedItem])
    updatedItems.splice(index, 0, draggedItem);
    setItems(updatedItems);
    setDraggedItemIndex(null); // Clear the dragged item
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          className="p-4 bg-gray-200 rounded shadow cursor-move"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default DragAndDropList;
