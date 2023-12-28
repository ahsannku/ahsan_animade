import React, {useEffect} from "react";
import Button from "../Button";
// import { MainSlider } from "../";
// import styles from "./.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    // <section className={styles.hero__section}>
    //   <MainSlider />
    // </section>
    <section className="bg-gradient-to-t from-[#140E18]  to-[#140E1800]">
    <div className="hero-bg h-screen w-screen  relative">
      <div className="custom-container h-full flex justify-center tablet:justify-between items-center flex-col-reverse tablet:flex-row pb-12 tablet:pb-0 relative z-10">
        <img
          src="/assets/images/red-cricle.png"
          className="absolute top-0 left-0 -z-10 w-1/2"
          alt=""
        />
        <img
          src="/assets/images/white-cricle.png"
          className=" absolute -bottom-[10%] left-[15%] -z-50 w-2/3"
          alt=""
        />
        <div
          className="tablet:w-1/2 w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-white font-title font-bold laptop:text-5.5xl tablet:text-4.4xl text-2xl text-center tablet:text-start leading-tight mb-4">
            Turn your dreams into{" "}
            <span className="gradient-text">tangible products</span> using
            <span className="gradient-text2"> AI</span>
          </h1>
          <p className="text-white font-body mb-4">
            Our innovative platform seamlessly integrates the latest AI image
            generation directly to your E-Commerce channels.
          </p>
          <p className="text-white font-body">
            Harness the power of AI to generate high-quality images quickly
            and easily, configure your listing, and upload to your store - All
            in one place, with no upfront costs
          </p>
          <Button>Start Creating for Free</Button>
        </div>

        <div
          className=" tablet:w-1/2 w-3/4 flex justify-center items-end"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="animte-float">
            <img src="/assets/images/hero-image.png" className="" alt="" />
          </div>
          <div className="scroll-down hidden laptop:flex">
            <a href="#Offer">
              <img src="/assets/images/bedge.png" className="" alt="" />
            </a>
          </div>
        </div>

        <img
          src="/assets/images/yellow-circle.png"
          className="absolute right-0 bottom-0 -z-10 w-1/2"
          alt=""
        />
      </div>
    </div>
  </section>
  );
};

export default Hero;
