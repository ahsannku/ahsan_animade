import React from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button, FooterBtns, PlatFormCard } from "../../components";

const ChoosePlatform = () => {
  return (
    <>
      <div className=''>
        <h3 className="text-xl md:text-2xl font-bold mb-2.5 font-poppins">
          Where would you like to upload these designs?
        </h3>
        <div className='max-w-[800px] mb-20'>
          <div className='flex items-center justify-between my-5'>
            <h5 className='text-lg md:text-2xl font-bold'>OpenSea - NFT</h5>
            <Link to="/" className='flex items-center gap-1 py-3 px-4 rounded-md text-sm md:text-xl border-[2px] border-white border-solid'>
              <IoIosAdd className='' />
              Link New Account
            </Link>
          </div>
          <div className='flex flex-col gap-5 '>
            {new Array(3).fill("").map((_, i) => (
              <PlatFormCard key={i} type="OpenSea" />
            ))}
          </div>
        </div>
        <div className='max-w-[800px]'>
          <div className='flex flex-col md:flex-row lg:items-center justify-between my-5 gap-5'>
            <h5 className='text-lg md:text-2xl font-bold'>
              Printful Store - Print On Demand
            </h5>
            <Link to="/" className='flex w-fit items-center gap-1 py-3 px-4 rounded-md text-sm md:text-xl border-[2px] border-white border-solid'>
              <IoIosAdd className='' />
              Link New Account
            </Link>
          </div>
          <div className='flex flex-col gap-5 '>
            {new Array(3).fill("").map((_, i) => (
              <PlatFormCard key={i} type="Printful" />
            ))}
          </div>
        </div>
      </div>
      <FooterBtns>
        <div className=" md:ml-auto">
          <Button to="/choose-products">Choose Products</Button>
        </div>
      </FooterBtns>
    </>
  );
};

export default ChoosePlatform;
