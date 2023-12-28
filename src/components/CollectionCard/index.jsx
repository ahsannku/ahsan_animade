import React from "react";

const CollectionCard = ({  item }) => {
  const { image, title, variant_count } = item;

  return (
    <div className="h-[392px] w-[295px] cursor-pointer ">
      <div
        className="h-[295px] w-[295px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <span className='text-[17px] font-normal"'>{title}</span>
      <div className=" flex justify-between font-normal text-[15px] my-[5px]">
        <span className="text-[#7B63AB]">{variant_count} Variants</span>
        <span>£12.45-17.50</span>
      </div>
    </div>
  );
};

export default CollectionCard;
