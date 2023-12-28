import React from "react";

import { whatWedo } from "../../utils/data";

const WhatWeOffer = () => {
  return (
    <>
      <section
        className="custom-container text-white tablet:py-28 py-12 relative z-50"
        id="Offer"
      >
        <h2 className=" text-center laptop:text-5.5xl tablet:text-4.4xl text-2xl mb-12">
          What We <span className="gradient-text">Offer</span>
        </h2>
        <div
          className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 "
          data-aos="zoom-in"
        >
          {whatWedo.map((item, index) => (
            <div
              key={index}
              className="text-center rounded-3xl px-8 py-12   bg-secondary bg-opacity-50"
            >
              <div className="flex justify-center ">
                <img
                  className="mb-4 border-secondary p-3 rounded-full border-2  w-20 "
                  src={item.img}
                  alt=""
                />
              </div>
              <h4 className="text-center text-xl font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-center text-base opacity-60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
