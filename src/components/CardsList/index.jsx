import React from "react";
import Outputo from "../outputo";

const CardsList = ({ list, toggleCardSelection, selectedDesigns }) => {
  console.log(list);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-10'>
      {list.map((image, i) => (
        <Outputo
          key={i}
          data={image}
          isSelected={selectedDesigns.includes(image)} // Check if it's selected
          toggleCardSelection={toggleCardSelection} // Pass the toggleCardSelection function
          // toggleCardSelection={toggleCardSelection} // Pass the toggleCardSelection function
        />
      ))}
    </div>
  );
};

export default CardsList;
