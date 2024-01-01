const Fees = () => {
  return (
    <section className="relative">
      <div className="hidden-fee-bg pt-20 py-32 relative ">
        <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px]"></div>
        <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px]"></div>
        <div className="custom-container  text-center relative z-10">
          <h2 className="text-center laptop:text-5.5xl tablet:text-4.4xl text-2xl mb-6">
            No
            <span className="gradient-text "> Hidden Fees</span>
          </h2>
          <p className="mb-20">Free to start, pay as you scale</p>
          <div className="flex flex-col-reverse tablet:flex-row gap-4">
            <div
              className="backdrop-blur-[155px] tablet:w-1/2 w-full rounded-[20px] border-2 border-solid border-[#62777D] fee-card text-left p-8"
              data-aos="fade-right"
            >
              <div className="bg-[#243941] h-20 w-20 rounded-full flex justify-center items-center mb-4">
                <img src="/assets/icons/print.svg" alt="" />
              </div>
              <h3 className="text-white text-2xl tablet:text-3xl laptop:text-4xl mb-4">
                Print & Merch Uploads
              </h3>
              <p className="mb-2">
                We handle image creation and uploads to Printful, bringing the
                power of AI to your store.
              </p>
              <p>
                We take payments daily as a percentage of sales - so you pay us
                as you earn.
              </p>
            </div>
            <div
              className="backdrop-blur-[155px] tablet:w-1/2 w-full rounded-[20px] border-2 border-solid border-[#62777D] fee-card text-left p-8"
              data-aos="fade-left"
            >
              <div className="bg-[#243941] h-20 w-20 rounded-full flex justify-center items-center mb-4">
                <img src="/assets/icons/3d-design.svg" alt="" />
              </div>
              <h3 className="text-white  text-2xl tablet:text-3xl laptop:text-4xl mb-4">
                30 Free Designs - Every Month
              </h3>
              <p className="mb-2">
                Design pricing that scales with you. Buy more monthly designs to
                offer more products and reach new audiences.
              </p>
              <p className="mb-12 tablet:mb-20">
                Increase the number of designs with your sales, so you can scale
                your plan as you grow.
              </p>
              <a
                style={{border: '2px solid rgb(199 0 37 / 1)'}}
                href=""
                className="flex justify-around items-center bg-primary rounded-lg py-2 hover:text-primary  hover:bg-transparent border-2 border-primary duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="47"
                  viewBox="0 0 56 47"
                  fill="none"
                >
                  <g clipPath="url(#clip0_129_1565)">
                    <path
                      d="M33.15 20.35L28 18L33.15 15.65L35.5 10.5L37.85 15.65L43 18L37.85 20.35L35.5 25.5L33.15 20.35ZM8 30.5L10.35 25.35L15.5 23L10.35 20.65L8 15.5L5.65 20.65L0.5 23L5.65 25.35L8 30.5ZM19.25 18L21.975 11.975L28 9.25L21.975 6.525L19.25 0.5L16.525 6.525L10.5 9.25L16.525 11.975L19.25 18ZM9.25 46.75L24.25 31.725L34.25 41.725L55.5 17.825L51.975 14.3L34.25 34.225L24.25 24.225L5.5 43L9.25 46.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_129_1565">
                      <rect width="56" height="47" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base tablet:text-xl laptop:text-2xl">
                  Scale up with plans
                  <br /> starting at £4.99
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                >
                  <g clipPath="url(#clip0_129_1568)">
                    <path
                      d="M10.4167 25.5L39.5834 25.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.0833 13L39.5833 25.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.0833 38L39.5833 25.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_129_1568">
                      <rect
                        width="50"
                        height="50"
                        fill="white"
                        transform="translate(0 50.5) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Fees;
