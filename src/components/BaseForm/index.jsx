import React from "react";
import HTMLString from "react-html-string";
import Input from "../Input";

const BaseForm = ({ fields, text, extraField }) => {
  return (
    <div className="p-3 border-2 rounded-lg mb-10 flex flex-col gap-1">
      {fields.map((input, i) => (
        <div
          key={i}
          className="mb-5 flex gap-2 flex-col md:flex-row md:items-center"
        >
          <label className="text-lg md:text-xl md:font-bold md:w-1/5 ">
            {input.label}
          </label>
          <Input
            className={"md:flex-1"}
            type={input.type}
            placeholder={input.placeholder}
          />
        </div>
      ))}
      <div className="flex mb-3">
        <p className="text-base md:text-xl md:font-bold">
          {
            <HTMLString
              html={"Provide a detailed description of your creation"}
            />
          }
        </p>
      </div>
      <div className="mb-5 flex gap-2 flex-col md:flex-row md:items-center">
        <label className="text-lg md:text-xl md:font-bold  md:w-1/5">
          {extraField.label}
        </label>
        <Input
          className={"md:flex-1"}
          type={extraField.type}
          placeholder={extraField.placeholder}
        />
      </div>
    </div>
  );
};

export default BaseForm;
