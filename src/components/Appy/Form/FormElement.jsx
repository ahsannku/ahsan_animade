import React from "react";
import "./style.css";

const FormElement = ({ name, onClick, value, customclass = "" }) => {
  return (
    <div>
      <h3>{name}</h3>
      <input
        className={`bg-[#213851] px-5 mt-4 cursor-pointer py-2 rounded-lg text-white ${customclass}`}
        type={"button"}
        value={value}
        onClick={onClick}
      />
    </div>
  );
};

export default FormElement;
