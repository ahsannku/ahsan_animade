import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/productLogo.png";

const ProductCreationHeader = ({ type, onSearchChange }) => {

  const [data, setData] = useState({})

  const inputChangeHandler = (e, id) => {
    const value = e.target.value;
    setData({
      ...data,
      [id]: e.target.value,
    });
    onSearchChange(value);
  };
  const navigate = useNavigate();
  return (
    <div className=" w-full flex items-center justify-between">
      <div className="flex h-full">
        <div
          className=" h-full flex pr-5 items-center border-r-[1px] border-[#FFFFFF]"
        >
          <button className="" onClick={() => navigate(-1)}>
            <IoIosArrowBack fontSize={40} />
          </button>
        </div>

        <div className="flex items-center ml-[50px]">
          <span className=" text-base lg:text-xl xl:text-[32px] mr-1 font-normal">
            Your Selected Designs
          </span>
          <IoIosArrowForward fontSize={25} />
          <span className="text-base lg:text-xl xl:text-[32px] font-bold ml-1">
            Choose Your Products
          </span>
        </div>
      </div>

      {type === "product" ? (
        <button className="flex py-2.5 px-4 justify-center items-center gap-2.5 flex-shrink-0 text-base lg:text-lg bg-[#7B63AB] rounded-[15px]">
          Create New Product
        </button>
      ) : (
        <div className=" flex items-center text-black">
          <input
            className="w-[314px] h-[50px] bg-white mr-[20px] px-5 rounded-2xl placeholder-text-gray-100 text-base"
            placeholder="Search"
            type="text"
            onChange={(e) => inputChangeHandler(e, 'searchitem')}
            value={data?.searchitem}
          />
          <Link to="">
            <img src={Logo} alt="logo" width={70} height={70} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCreationHeader;
