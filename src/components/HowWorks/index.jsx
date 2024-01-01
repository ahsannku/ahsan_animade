import React from "react";

const HowWorks = () => {
  return (
    <div>
      <section className=" whatwedo-bg pt-12 pb-36 hidden tablet:flex relative">
        <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0   w-full h-[200px]"></div>
        <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0  bg-opacity-70 w-full h-[200px]"></div>
        <div className="custom-container relative z-50 " data-aos="fade-left">
          <h2 className="text-5.5xl mb-12 font-semibold text-center text-white">
            What We <span className="gradient-text">Do</span>
          </h2>
          <div className="flex justify-center  ">
            <div className="w-1/4 bg-[#8888881A] bg-opacity-10 py-5 ">
              <p className="text-white text-center text-xl font-bold mb-12">
                What We <span className="gradient-text">Do</span>
              </p>{" "}
              <div className=" flex justify-center items-center bg-[#D9D9D91A] px-4 py-2 gap-4">
                <div className="flex items-center ">
                  <img
                    src="/assets/images/animade.svg"
                    className="w-[4.8rem]"
                    alt=""
                  />
                  <img src="/assets/icons/arrow.svg" className="ml-3" alt="" />
                </div>
                <div className="flex items-center ">
                  <img
                    src="/assets/images/printful.svg"
                    className="w-[4.8rem]"
                    alt=""
                  />
                  <img src="/assets/icons/arrow.svg" className="ml-3" alt="" />
                </div>
              </div>
              <div className="px-4 py-8">
                <p className="text-paraColor mb-4">
                  With Animade you can create stunning products using our
                  state-of-the-art AI Image generation system.
                </p>
                <p className="text-paraColor">
                  We handle design uploads to your Printful account - so you can
                  create products in bulk with prompts and a few clicks.
                </p>
              </div>
              <div className="flex justify-center items-center flex-col gap-6 w-full mt-6 px-4 py-8">
                <a
                  href=""
                  style={{border: '2px solid rgb(199 0 37 / 1)'}}
                  className="btn-lg hover:text-primary  hover:bg-transparent border-2 border-primary duration-300 bg-primary text-center justify-center text-white text-base flex items-center font-semibold "
                >
                  How it works{" "}
                  <img src="/assets/icons/arrow.svg" className="ml-3" alt="" />
                </a>
                <a
                  href=""
                  style={{border: '2px solid rgb(199 0 37 / 1)'}}
                  className="btn-lg bg-primary hover:text-primary  hover:bg-transparent border-2 border-primary duration-300 text-center text-white justify-center text-base flex items-center font-semibold "
                >
                  Sign Up Free now{" "}
                  <img src="/assets/icons/arrow.svg" className="ml-3" alt="" />
                </a>
              </div>
            </div>
            <div className="w-1/2 bg-[#172A3033]  py-5 ">
              <p className="text-white text-center text-xl font-bold mb-12">
                Handled by <span className="gradient-text">Printful</span>
              </p>
              <div className=" flex justify-between items-center text-white bg-[#D9D9D91A] px-4 py-2">
                <img src="/assets/images/shopify.svg" className="w-20" alt="" />
                +
                <img src="/assets/images/e-logo.svg" className="w-20" alt="" />
                +
                <img src="/assets/images/Amazon.svg" className="w-20" alt="" />
                +
                <a
                    href="https://www.printful.com/integrations/a/7660533:1cde999373ced0cdad35ff0e7e6c1ce3"
                  >
                <img
                  src="/assets/images/manymore.png"
                  className="w-20"
                  alt=""
                />
                </a>
              </div>
              <div className="flex justify-between items-center  flex-col h-[80%] px-4 py-8">
                <div>
                  <p className="text-paraColor mb-6">
                    Printful uses Print-On-Demand technology to print and fulfil
                    orders globally, linking directly to{" "}
                    <a href="" className="text-primary">
                      over 23 platforms
                    </a>{" "}
                    so you can build an online store with no upfront costs.
                  </p>
                  <p className="text-paraColor">
                    No stock, no stress. Printful handles printing and shipping
                    to customers once your product has been uploaded - so you
                    can focus on what you do best - selling your products.
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col gap-6  w-full mb-8">
                  <a
                    href="https://www.printful.com/start-your-online-store-without-inventory/a/7660533:1cde999373ced0cdad35ff0e7e6c1ce3"
                    className="btn-lg bg-paraColor flex items-center justify-center"
                  >
                    How does Printful Work?{" "}
                    <img
                      src="/assets/icons/arrow.svg"
                      className="ml-3"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-[#201A2499] bg-opacity-50  py-5 ">
              <p className="text-white text-center text-xl font-bold mb-12">
                Convert <span className="gradient-text ">customers</span>
              </p>
              <div className=" flex justify-center items-center bg-[#D9D9D91A] px-4 py-2">
                <div className="flex items-center ">
                  <img src="/assets/icons/arrow.svg" className="mr-3" alt="" />
                  <img src="/assets/images/$.svg" className="w-20" alt="" />
                </div>
              </div>
              <p className="text-paraColor px-4 py-8">
                With Animade & Printful you can start your own store and convert
                creativity into exceptionally unique products in a few prompts
                and clicks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="whatwedo-bg pt-12 pb-36 flex tablet:hidden relative">
        <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px]"></div>
        <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px]"></div>
        <div className="custom-container relative z-50 " data-aos="fade-left">
          <h2 className="text-center laptop:text-5.5xl tablet:text-4.4xl text-2xl text-white mb-12">
            What We <span className="gradient-text">Do</span>
          </h2>
          <div className="flex justify-center flex-col">
            <div className="w-full bg-[#8888881A] bg-opacity-10  rounded-lg flex">
              <div className=" w-1/4 flex justify-evenly items-center bg-[#D9D9D91A] px-4 py-2 flex-col gap-4 rounded-tl-lg">
                <div className="flex items-center flex-col ">
                  <img
                    src="/assets/images/animade.svg"
                    className="min-w-[2rem] max-w-[5rem]"
                    alt=""
                  />
                  <img
                    src="/assets/icons/arrow.svg"
                    className="mt-3 rotate-90"
                    alt=""
                  />
                </div>
                <div className="flex items-center flex-col ">
                  <img
                    src="/assets/images/printful.svg"
                    className="min-w-[2rem] max-w-[5rem]"
                    alt=""
                  />
                  <img
                    src="/assets/icons/arrow.svg"
                    className="mt-3 rotate-90"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-3/4 px-4 py-8">
                <p className="text-white text-start text-xl font-bold mb-4">
                  What We <span className="gradient-text">Do</span>
                </p>
                <p className="text-paraColor mb-2">
                  With Animade you can create stunning products using our
                  state-of-the-art AI Image generation system.
                </p>
                <p className="text-paraColor">
                  We handle design uploads to your Printful account - so you can
                  create products in bulk with prompts and a few clicks.
                </p>{" "}
                <div className="flex justify-center items-center flex-col gap-6 w-full mt-2 ">
                  <a
                    href=""
                    className="py-3 w-full px-3 hover:text-primary  hover:bg-transparent border-2 border-primary duration-300 bg-primary text-center justify-center text-white text-base flex items-center font-semibold "
                  >
                    How it works{" "}
                    <img
                      src="/assets/icons/arrow.svg"
                      className="ml-3"
                      alt=""
                    />
                  </a>
                  <a
                    href=""
                    className="py-3 w-full px-3 hover:text-primary  hover:bg-transparent border-2 border-primary duration-300 bg-primary text-center justify-center text-white text-base flex items-center font-semibold "
                  >
                    Sign Up Free now{" "}
                    <img
                      src="/assets/icons/arrow.svg"
                      className="ml-3"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#172A3033]  flex">
              <div className="w-1/4 flex justify-between items-center flex-col text-white bg-[#D9D9D91A] px-4 py-4">
                <img
                  src="/assets/images/shopify.svg"
                  className="min-w-[2rem] max-w-[5rem]"
                  alt=""
                />
                +
                <img
                  src="/assets/images/e-logo.svg"
                  className="min-w-[2rem] max-w-[5rem]"
                  alt=""
                />
                +
                <img
                  src="/assets/images/Amazon.svg"
                  className="min-w-[2rem] max-w-[5rem]"
                  alt=""
                />
                +
                <img
                  src="/assets/images/manymore.png"
                  className="min-w-[2rem] max-w-[5rem]"
                  alt=""
                />
              </div>
              <div className="w-3/4 flex justify-between items-center  flex-col h-[80%] px-4 py-8">
                <div>
                  <p className="text-white text-start text-xl font-bold mb-4">
                    Handled by <span className="gradient-text">Printful</span>
                  </p>
                  <p className="text-paraColor mb-2">
                    Printful uses Print-On-Demand technology to print and fulfil
                    orders globally, linking directly to{" "}
                    <a href="" className="text-primary">
                      over 23 platforms
                    </a>{" "}
                    so you can build an online store with no upfront costs.
                  </p>
                  <p className="text-paraColor">
                    No stock, no stress. Printful handles printing and shipping
                    to customers once your product has been uploaded - so you
                    can focus on what you do best - selling your products.
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col gap-6  w-full mt-8">
                  <a
                    href=""
                    className="py-3 w-full px-3 bg-paraColor text-center justify-center text-white text-base flex items-center font-semibold "
                  >
                    How does Printful Work?{" "}
                    <img
                      src="/assets/icons/arrow.svg"
                      className="ml-3"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#201A2499] bg-opacity-50 flex  rounded-lg">
              <div className=" w-1/4 flex justify-center items-center bg-[#D9D9D91A] px-4 py-2 rounded-bl-lg">
                <div className="flex items-center  flex-col gap-4">
                  <img
                    src="/assets/icons/arrow.svg"
                    className="mt-3 rotate-90"
                    alt=""
                  />
                  <img
                    src="/assets/images/$.svg"
                    className="min-w-[2rem] max-w-[5rem]"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-3/4 px-4 py-8">
                <p className="text-white text-start text-xl font-bold mb-4">
                  Convert <span className="gradient-text ">customers</span>
                </p>
                <p className="text-paraColor ">
                  With Animade & Printful you can start your own store and
                  convert creativity into exceptionally unique products in a few
                  prompts and clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWorks;
