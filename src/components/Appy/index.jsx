import { useState } from "react";

import Step from "./Step";
import Slider from "./Slider";
import Form from "./Form";
import "./styles.css";

const videos = [
  "https://animade-ten.vercel.app/assets/videos/about-video.mp4",
  "https://animade-ten.vercel.app/assets/videos/about-video.mp4",
  "https://animade-ten.vercel.app/assets/videos/about-video.mp4",
  "https://animade-ten.vercel.app/assets/videos/about-video.mp4",
  "https://animade-ten.vercel.app/assets/videos/about-video.mp4",
];

const Appy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const _handleNext = (currentIndex) => {
    setCurrentIndex(currentIndex + 1);
  };

  const _handleComplete = () => {};

  return (
    <div className="sr tablet:py-28 py-0 pb-20  overflow-x-hidden" id="Appy">
      <div className="doro">
        <h1 className="text-white font-title font-bold laptop:text-5.5xl mb-12 tablet:text-4.4xl text-2xl text-start tablet:text-center leading-tight">
          Step-By-Step Guide <br />
          <span className="gradient-text"> to Uploading Products </span>
        </h1>
      </div>
      <div className="App flex-col-reverse laptop:flex-row" data-aos="zoom-out">
        <div className="conto">
          <Step currentIndex={currentIndex} />
        </div>
        <div className="flex flex-row ">
          <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
          <div className="flex tablet:flex-row flex-col">
            <div className="form-container tablet:ml-8 ml-0  ">
              <Form currentIndex={currentIndex} handleNext={_handleNext} handleComplete={_handleComplete} />
            </div>
            {/*  */}
            <div className="flex flex-col justify-center items-center">
              <div className="laptop:w-[330px] h-[330px] w-full sm:p-0 p-5 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                <div className="player" style={{ width: "100%", height: "100%", padding:'0.3em', margin:'0.1em' }}>
                  <video
                    key={currentIndex}
                    src={videos[currentIndex]}
                    autoPlay={true}
                    muted={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              {/* <div className="flex justify-center">
                <img
                  src="/assets/images/stepper-bg.png"
                  className="tablet:w-full w-3/4"
                  alt=""
                />
              </div>
              <div className="relative mb-4 w-60 flex">
                <input
                  type="text"
                  className="px-2 py-3  border  border-primary bg-[#1C1521] rounded-lg  outline-none w-full text-white"
                  name=""
                  placeholder="Type Your Prompt Here"
                  id=""
                />
                <div className="bg-primary top-2  hover:text-primary  hover:bg-transparent border-2 border-primary duration-500 font-bold px-2 py-1 absolute right-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_35807)">
                      <path
                        d="M5 12L19 12"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 6L19 12"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 18L19 12"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_35807">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 24) rotate(-90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex justify-end items-center ">
                <button style={{border: '2px solid rgb(199 0 37 / 1)'}} className=" px-4 py-3 bg-primary  hover:text-primary  hover:bg-transparent border-2 border-primary duration-500 font-bold rounded-lg text-white">
                  Make this image a product
                </button>
              </div> */}
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appy;
