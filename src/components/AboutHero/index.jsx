// import VideoPlayer from "../VideoPlayer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHero = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="hero-bg relative  ">
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] pb-12 tablet:pb-28">
        <div className="custom-container  h-full flex flex-row justify-between relative z-50 items-center pt-36">
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
          <div className="text-center w-full flex flex-col justify-center items-center">
            <div
              className="laptop:w-[750px] w-full mb-8"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h1 className="text-white font-title font-bold desktop:text-5.5xl  laptop:leading-[1.2] tablet:text-4.4xl text-2xl text-center leading-tight mb-4">
                Our platform is <span className="gradient-text">designed</span>{" "}
                to simplify the <span className="gradient-text">process</span>
              </h1>
              <p className="text-lg font-medium text-center">
                Creating and selling digital art, providing artists with the
                tools and resources they need to thrive in a rapidly-evolving
                digital landscape.
              </p>
            </div>
            <div
              className="laptop:w-[950px] w-full"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {/* <VideoPlayer videofile="/assets/videos/about-video.mp4" /> */}
            </div>
          </div>

          <img
            src="/assets/images/yellow-circle.png"
            className="absolute right-0 bottom-0 w-1/2"
            alt=""
          />
        </div>{" "}
      </div>
    </section>
  );
};

export default AboutHero;
