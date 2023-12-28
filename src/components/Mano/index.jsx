import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Mano = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] relative">
      <div className="hero-bg  laptop:h-screen h-[80vh] w-screen  relative">
        <div className="custom-container h-full flex justify-center pt-24 tablet:justify-between flex-col-reverse tablet:flex-row pb-12 tablet:pb-0">
          <img
            src="/assets/images/red-cricle.png"
            className="absolute top-0 left-0 w-1/2"
            alt=""
          />
          <img
            src="/assets/images/white-cricle.png"
            className=" absolute -bottom-[10%] left-[15%] w-2/3"
            alt=""
          />
          <div
            className="laptop:w-1/2 w-full h-full flex  justify-start laptop:justify-center tablet:pt-20 pt-0 relative z-50  items-start tablet:items-center laptop:items-start flex-col my-12 laptop:my-0 mt-20"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <div className="flex items-center bg-[#213851] gap-4 relative -z-10 rounded-full w-fit px-4 py-3 mb-12 laptop:mb-2">
              <img src="/assets/icons/arrow-right.svg" alt="" />
              <p>Learn how to make AI generated designs for your store</p>
            </div>
            <h1 className="text-white font-title font-bold desktop:text-5.5xl taxt-start laptop:leading-[1.2] tablet:text-4.4xl text-2xl tablet:text-center w-2/3 mr-auto tablet:mr-0 tablet:w-full laptop:text-start leading-tight mb-4">
              Products which power your
              <span className="gradient-text"> E-Commerce Business</span>
            </h1>
            <p className="text-white font-body mb-8">
              Learn how to make money from AI designs in this step-by-step guide
              to setting up your account and design creation.
            </p>
            <a
              href=""
              className="hover:text-primary   hover:bg-transparent border-2 border-primary duration-300  p-5 rounded-lg w-3/4 bg-primary text-center justify-center text-white text-base flex items-center font-semibold "
            >
              Try with 30 FREE designs monthly
              <img src="/assets/icons/arrow.svg" className="ml-3" alt="" />
            </a>
            <div className="mt-12 hidden laptop:flex  scroll-down">
              <a href="#Appy">
                <img src="/assets/images/bedge.png" alt="" />
              </a>
            </div>
          </div>
          <div
            className="hero-bg-mano h-full laptop:w-2/5 laptop:z-10 absolute bottom-0 right-0 -z-[1] w-full "
            data-aos="fade-left"
            data-aos-delay="1000"
          ></div>
          <img
            src="/assets/images/yellow-circle.png"
            className="absolute right-0 bottom-0 w-1/2"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Mano;
