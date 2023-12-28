import React from "react";

const ExpandedProductBar = () => {
  return (
    <div className=" h-[140px] w-full flex items-center px-[20px]">
      <div className="flex items-center w-[30%] ">
        <div className="flex items-center flex-col">
          <span className="">|</span>
          <div
            className="w-[108px] h-[108px] rounded-[10px]"
            style={{ border: "1px solid white" }}
          ></div>
        </div>

        <span className="ml-[20px] font-normal mt-[40px]">Chosen Design</span>
      </div>

      <div
        className="flex  items-center justify-center w-[30%]"
        style={{
          borderLeft: "1px solid white",
          borderRight: "1px solid white",
        }}
      >
        <div className="flex flex-col items-center">
          <span>0</span>
          <span>Products</span>
        </div>
      </div>

      <div className="flex  items-center justify-center w-[30%]">
        <div
          className="w-[50%] h-full flex justify-center items-center"
          style={{
            borderRight: "1px solid white",
          }}
        >
          <button className="flex w-[135px] h-[30px] py-2.5 px-4 justify-center items-center gap-2.5 flex-shrink-0 text-lg bg-[#6F6F6F] rounded-[10px]">
            Remove
          </button>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <button className="flex w-[135px] h-[30px] py-2.5 px-4 justify-center items-center gap-2.5 flex-shrink-0 text-lg bg-[#7B63AB] rounded-[10px]">
            Edit
          </button>
        </div>
      </div>

      <div
        className="h-[70px] flex items-center w-[10%] justify-center"
        style={{
          borderLeft: "1px solid white",
        }}
      ></div>
    </div>
  );
};

export default ExpandedProductBar;
