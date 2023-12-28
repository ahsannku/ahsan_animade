import React from "react";
import { Title } from "..";
import Image1 from "../../assets/imdg.png";
import Image from "../../assets/imdr.png";

const Members = () => {
  return (
    <div className="my-10">
      <div className="container flex flex-col gap-5 items-center">
        <Title>
          <div className="">Meet The Animade Team</div>
        </Title>
        <div className='flex gap-10'>
          <div className='text-center'>
            <img src={Image1} alt="slide__image"  className=""/>
            <p className='text-xl font-bold mt-5'>Luca Bertuzzi</p>
            <p className='text-base'>Founder & Technical Director</p>
          </div>
          <div className='text-center'>
            <img src={Image} alt="slide__image" className="" />
            <p className='text-xl font-bold mt-5'>Benjamin Ellis</p>
            <p className='text-base'>Founder & Managing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
