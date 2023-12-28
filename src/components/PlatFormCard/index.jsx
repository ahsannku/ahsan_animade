import React from "react";

const PlatFormCard = ({ type }) => {
  return (
    <div
      className={`p-8 border-[5px] border-[#00a959] flex gap-8 rounded-3xl ${
        type === "Printful" ? 'border-[#355fe6]' : ""
      } `}
    >
      <span className=''>Profile Name</span>
      {type === "Printful" && <span className={`type ${type === 'Printful' && 'Printful'}`}>Etsy</span>}
      <span className={`type ${type === 'Printful' && 'Printful'}`}>12 Items Created</span>
    </div>
  );
};

export default PlatFormCard;
