import React, { useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import { toast } from "react-toastify";

const PlanCard = ({
  title,
  subtitle,
  price,
  extra,
  designs,
  image,
  link,
  delay,
  priceId = "",
}) => {
  const [accordionVisible, setAccordionVisible] = useState(false);
  const [loading, setloading] = useState(false);

  const toggleAccordion = () => {
    setAccordionVisible(!accordionVisible);
  };

  const handleChoosePlan = async () => {
    try {
      const token = localStorage.getItem('token');
      if(!token){
        toast.error('Please login to upgrade.', {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast__fiy",
        });
        return;
      }
      setloading(true);
      const { data } = await api.post(
        "https://animade-production.up.railway.app/paymentlinks/",
        {
          price_id: priceId,
        },
        { headers: { Authorization: token } }
      );
      console.log(data);
      toast.success('Payment session created. You will be navigated to complete checkout', {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
      setTimeout(() => {
        window.open(data?.PaymentLink);
      }, 4000)
      setloading(false);
    } catch (error) {
      console.error('error:', error);
      setloading(false);
      toast.error('Something went wrong.', {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
    }
  };

  return (
    <div
      className="text-white  plan-bg px-6 pt-0 pb-4"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="text-center flex flex-col justify-center items-center">
        <p className="bg-[#213851] w-fit rounded-b-lg py-4 px-10 font-body text-base font-bold mb-8">
          {title}
        </p>
        <h3 className="font-bold text-4xl">£{price}</h3>
        <p className="text-sm text-[#9C9A9E] capitalize">per month</p>
        <div className="mb-4">
          <img src={image} alt="" />
        </div>
        <p className="pt-1 mb-4 font-medium	text-base w-[160px] text-center h-[50px]">
          {subtitle}
        </p>
        <div className="border-b border-[#8E8B90] h-[1px] w-full"></div>
        <div className="text-left w-full py-4 flex flex-col gap-2">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#B6B4B7] text-sm">What’s included:</p>
            <button
              onClick={toggleAccordion}
              className="laptop:hidden  w-fit rounded-b-lg py-2 px-4 text-white"
            >
              {accordionVisible ? (
                <img
                  src="/assets/icons/arrow-up.svg"
                  alt="Up Arrow"
                  className="ml-2"
                />
              ) : (
                <img
                  src="/assets/icons/arrow-down.svg"
                  alt="Up Arrow"
                  className="ml-2"
                />
              )}
            </button>
          </div>
          <div
            className={`laptop:block  ${accordionVisible ? "block" : "hidden"}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_129_1725)">
                  <path
                    d="M18.3334 9.23818V10.0049C18.3324 11.8019 17.7505 13.5504 16.6745 14.9897C15.5986 16.429 14.0862 17.4819 12.3629 17.9914C10.6396 18.501 8.7978 18.4398 7.11214 17.817C5.42648 17.1942 3.98729 16.0433 3.00921 14.5357C2.03114 13.0282 1.56657 11.2449 1.68481 9.45178C1.80305 7.65865 2.49775 5.95179 3.66531 4.58574C4.83288 3.2197 6.41074 2.26767 8.16357 1.87164C9.91641 1.47561 11.7503 1.6568 13.3918 2.38818M18.3334 3.33341L10.0001 11.6751L7.50008 9.17508"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_129_1725">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium text-sm capitalize">
                {extra} Extra designs
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_129_1725)">
                  <path
                    d="M18.3334 9.23818V10.0049C18.3324 11.8019 17.7505 13.5504 16.6745 14.9897C15.5986 16.429 14.0862 17.4819 12.3629 17.9914C10.6396 18.501 8.7978 18.4398 7.11214 17.817C5.42648 17.1942 3.98729 16.0433 3.00921 14.5357C2.03114 13.0282 1.56657 11.2449 1.68481 9.45178C1.80305 7.65865 2.49775 5.95179 3.66531 4.58574C4.83288 3.2197 6.41074 2.26767 8.16357 1.87164C9.91641 1.47561 11.7503 1.6568 13.3918 2.38818M18.3334 3.33341L10.0001 11.6751L7.50008 9.17508"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_129_1725">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium text-sm capitalize">
                {designs} Designs Monthly
              </p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_129_1725)">
                  <path
                    d="M18.3334 9.23818V10.0049C18.3324 11.8019 17.7505 13.5504 16.6745 14.9897C15.5986 16.429 14.0862 17.4819 12.3629 17.9914C10.6396 18.501 8.7978 18.4398 7.11214 17.817C5.42648 17.1942 3.98729 16.0433 3.00921 14.5357C2.03114 13.0282 1.56657 11.2449 1.68481 9.45178C1.80305 7.65865 2.49775 5.95179 3.66531 4.58574C4.83288 3.2197 6.41074 2.26767 8.16357 1.87164C9.91641 1.47561 11.7503 1.6568 13.3918 2.38818M18.3334 3.33341L10.0001 11.6751L7.50008 9.17508"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_129_1725">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-medium text-sm capitalize">
                24/7 Customer Support
              </p>
            </div>{" "}
          </div>{" "}
        </div>

        <button disabled={loading} onClick={handleChoosePlan} className="btn-md bg-primary w-full hover:text-primary  hover:bg-transparent border-2 border-primary duration-300 font-bold"
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  extra: PropTypes.number.isRequired,
  designs: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  Professional: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default PlanCard;
