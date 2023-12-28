import React from "react";
import { Title } from "..";
import Image from "../../assets/getoo.png";

const Slidp = () => {
  return (
    <div className={`h-[88%] flex items-center justify-between px-2 lg:px-20 flex-col-reverse lg:flex-col mx-auto mt-auto`}>
      <div className='flex-1 flex  justify-around gap-2 lg:gap-10 mt-5 lg:mt-14'>
        <div className='flex flex-col'>
          <Title>
            <div className='text-2xl text-center lg:text-left lg:text-[50px] font-bold text-white font-poppins'>
               Our platform is <span>Designed</span><br /> to simplify the <span>process</span>
            </div>
          </Title>
          <p className='text-sm text-center lg:text-left font-normal w-fit lg:font-bold lg:w-[670px] pt-2 lg:pt-8'>
          Creating and selling digital art, providing artists with the tools and resources they need to thrive in a rapidly-evolving digital landscape.
          </p>
        </div>
      </div>
      <div className='flex-1 max-w-[900px] h-full'>
        <img src={Image} alt="slide__image" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default Slidp;
