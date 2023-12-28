import { Footer, Header, PlanCard } from "../../components";
import { plans } from "../../utils/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Particle from "../../components/Particle";

const Pricing = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Header />
      <main className="pricing-bg py-28 relative">
        <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0  w-full h-[200px]"></div>

        <div className="pricing-gradient absolute top-0 w-full h-[600px] z-10"></div>
        <div className="custom-container flex flex-col items-center relative z-50">
          <div className="laptop:w-[860px] text-center" data-aos="fade-left">
            <h1 className="text-center laptop:text-5xl tablet:text-4xl my-6 text-white text-2xl">
              Launch your business into the Stratosphere & scale up with
              AI-Powered Products.
            </h1>
            <p className=" text-xl font-medum text-[#B6B4B7]">
              First 50 monthly designs on us and cancel anytime.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-4 gap-4 pt-20 pb-10">
              {plans.map((plan, i) => (
                <PlanCard
                  key={i}
                  title={plan?.title}
                  subtitle={plan?.subtitle}
                  price={plan?.price}
                  extra={plan?.extra}
                  designs={plan?.designs}
                  Professional={plan?.Professional}
                  priceId={plan?.price_id}
                  link={plan?.href}
                  image={plan.image}
                  delay={plan.delay}
                />
              ))}
            </div>
            <p className="font-bold text-sm bg-primary  bg-opacity-40 py-4 px-6 rounded-lg text-center">
              Additionally, we take payment as 3% of your sales on Printful - So
              you only pay us as you earn and scale
            </p>
          </div>
        </div>
      </main>
      <Particle />
      <Footer />
    </>
  );
};

export default Pricing;
