import React from "react";

const steps = [
  "Enter Prompt",
  "Create a profile & Save image",
  "Link Printful to Animade Account",
  "Choose your products & Add descriptions",
  "Launch products to your store",
];

const Step = ({ currentIndex }) => {
  return (
    <div className="steps-container">
      {steps.map((step, index) => {
        let color = currentIndex === index ? "white" : "grey";

        return (
          <div className="steps-item flex items-center gap-x-3">
            <span className="bg-[#2E2931] text-white rounded-full px-3 py-[5px] ">
              {index + 1}
            </span>
            <h3
              style={{
                margin: 0,
                color: color,
              }}
              className=""
            >
              {step}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Step;
