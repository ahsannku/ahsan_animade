import React, { useState } from "react";
import OutputCard from "../OutputCard";

const Cardo = ({
  list,
  showImageAttribute,
  setSelectedItems,
  selectedItems = []
}) => {
  const handleCardClick = (item) => {
    if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  if (!list) {
    return <p>Loading...</p>;
  }

  if (list.length === 0) {
    return <p>No designs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 ">
      {list.map((item, i) => (
        <div key={item.id ?? `card${i}`} onClick={() => handleCardClick(item)}>
          <OutputCard
            image={item.image}
            isSelected={selectedItems.some(
              (selectedItem) => selectedItem.id === item.id
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default Cardo;
