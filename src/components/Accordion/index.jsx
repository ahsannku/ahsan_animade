import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(Array(items.length).fill(false));

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    setIsExpanded((prevIsExpanded) => {
      const newIsExpanded = [...prevIsExpanded];
      newIsExpanded[index] = !newIsExpanded[index];
      return newIsExpanded;
    });
  };

  return (
    <div className="hidden-fee-bg relative">
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px]"></div>
      <div className="custom-container py-28 relative z-10">
        <h1 className="text-white font-title  flex justify-center  mb-12 font-bold laptop:text-5.5xl tablet:text-4.4xl text-2xl tablet:text-start leading-tight ">
          Frequently Ask
          <span className="gradient-text"> Question’s</span>
        </h1>
        {items.map((item, index) => (
          <div
            key={item.id}
            className="mb-3 border-[#5D7379] border-2 rounded-lg"
            data-aos="fade-zoom-in"
            data-aos-duration={item.delay}
          >
            <div
              onClick={() => handleClick(index)}
              className="bg-[#253236] p-5  text-lg font-bold text-white flex justify-between items-center"
            >
              <span>{item.title}</span>
              <span>
                {isExpanded[index] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_35910)">
                      <path
                        d="M5 12H19"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_35910">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_35904)">
                      <path
                        d="M12 5V19"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_35904">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div
                style={{ color: "white" }}
                className="bg-[#253236] px-5 pb-5"
              >
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
