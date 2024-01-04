import React, { useEffect, useState } from "react";

const CollectionCard = ({  item }) => {
  const { image, title, variant_count, files = [] } = item;
  const [priceLimits, setPriceLimits] = useState({lower: 0, upper: 0});

  useEffect(() => {
    const _priceLimits = {lower: parseFloat(files?.[0]?.additional_price), upper: parseFloat(files?.[0]?.additional_price)};
    _priceLimits.lower = isNaN(_priceLimits.lower) ? 0 : _priceLimits.lower;
    _priceLimits.upper = isNaN(_priceLimits.upper) ? 0 : _priceLimits.upper;
    
    files.forEach(file => {
      const currentPrice = parseFloat(file?.additional_price) ?? 0;
      // localLogger('currentPrice', currentPrice);
      if(currentPrice < _priceLimits.lower){
        _priceLimits.lower = currentPrice;
      }
      if(currentPrice > _priceLimits.upper){
        _priceLimits.upper = currentPrice;
      }
    });
    setPriceLimits({lower: _priceLimits.lower ? _priceLimits.lower : _priceLimits.upper ?  _priceLimits.upper : 0 ,
       upper: _priceLimits.upper ?? 0})
  }, [item]);

  // const localLogger = (...args) => {
  //   if(item?.id === 362){
  //     console.log(args)
  //   }
  // }

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
        <span>£{priceLimits.lower}-{priceLimits.upper}</span>
      </div>
    </div>
  );
};

export default CollectionCard;
