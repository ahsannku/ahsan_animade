import React from "react";
import FormElement from "./FormElement";
import "./style.css";
const formEls = [
  "Enter Prompt",
  "Create a profile & Save image",
  "Link Printful to Animade Account",
  "Choose your products & Add descriptions",
  "Launch products to your store",
];
const Form = ({ currentIndex, handleNext, handleComplete }) => {
  return (
    <div className="form-container">
      <h3 className="flex items-center gap-x-4">
        <span className="bg-[#2E2931] text-white rounded-full text-base px-3 py-[8px] ">
          {" "}
          0{currentIndex + 1}{" "}
        </span>
        {formEls[currentIndex]}
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      {currentIndex === formEls.length - 1 ? (
        <FormElement
          value={"Complete"}
          onClick={() => handleComplete(currentIndex)}
        />
      ) : (
        <div className="flex items-center">
          <FormElement
            value={"Next"}
            onClick={() => handleNext(currentIndex)}
          />
          <FormElement
            value={"Sign Up Free"}
            onClick={() => handleNext(currentIndex)}
            customclass={`underline bg-transparent `}
          />
        </div>
      )}
    </div>
  );
};

export default Form;
