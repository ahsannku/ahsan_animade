import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const ProductCreationFooter = ({
  edit,
  selected,
  count,
  rightBtnText,
  leftBtnText,
  leftBtnClickHandler,
  rightBtnClickHandler,
  clearSelectionHandler,
  isLoading,
}) => {
  const [confirmBox, setConfirmBox] = useState(false);

  const clearClickHandler = () => {
    clearSelectionHandler();
    setConfirmBox(false);
  }
  return (
    <div className="h-[80px] w-full flex justify-between items-center">
      <div className=" flex">
        <button
          className="flex w-[190px] h-[30px] py-2.5 px-4 justify-center items-center gap-2.5 flex-shrink-0 text-lg bg-[#7B63AB] rounded-[10px] mr-[15px]"
          onClick={leftBtnClickHandler}
        >
          {leftBtnText}
        </button>
        <div className="relative">
          {selected === "collection" && edit === true ? (
            <button
              className="flex w-[190px] h-[30px] py-2.5 px-4 justify-center items-center gap-2.5 flex-shrink-0 text-lg bg-[#434344] rounded-[10px]"
              onClick={() => {
                setConfirmBox(true);
              }}
            >
              Clear Selection
            </button>
          ) : null}
          {confirmBox && (
            <div className="absolute flex bottom-14 text-black left-[-30px] p-2 w-[280px] bg-white border border-gray-400 rounded-md">
              <div className="flex-[0.2] ">
                <AiOutlineExclamationCircle />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-sm text-left font-semibold leading-relaxed">Are you sure you want to clear all changes?</p>
                <div className="flex gap-3 justify-between ">
                  <button className="bg-[#7b63ab] text-white text-base px-4 py-1 rounded-xl" onClick={() => setConfirmBox(false)}>Cancel</button>
                  <button className="text-base underline underline-offset-2 mr-4" onClick={(clearClickHandler)}>Clear all</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" flex items-center">
        {selected === true ? (
          <span className=" mr-[15px] text-[18px] font-normal ">
            {count} Product Selected
          </span>
        ) : null}

        <button
          className="flex w-[190px] h-[30px] py-2.5 px-4 justify-center items-center gap-2.5 flex-shrink-0 text-lg bg-[#C70025] rounded-[10px]"
          onClick={rightBtnClickHandler}
        >
          {rightBtnText}
        </button>
      </div>
    </div>
  );
};

export default ProductCreationFooter;
