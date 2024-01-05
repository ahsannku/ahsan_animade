import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import AreaCode from "../AreaCode";

const Input = ({
  type,
  placeholder,
  onChange,
  error,
  required,
  value,
  validation,
  errorMsg,
  data,
  setData,
  className,
  inputClassName = ''
}) => {
  const [hide, setHide] = useState(true);
  const [inputBlur, setInputBlur] = useState(false);
  const enteredValueIsValid = validation && validation(value);
  const errorInput = !enteredValueIsValid && inputBlur;

  if (type === "textarea")
    return (
      <div
        className={`relative w-full bg-white rounded-[20px] px-4 pt-6 text-[20px] min-h-[300px] text-[#0a0a0a] ${className}`}
      >
        <textarea
          placeholder={placeholder}
          className="w-full"
          onChange={(e) => onChange(e)}
          onBlur={() => {
            setInputBlur(true);
          }}
          required={required}
          value={value || ""}
        />
        {error && (
          <p className={`absolute bottom-[-21px] text-[13px] `}>{error}</p>
        )}
        {!error && errorInput && errorMsg && (
          <p
            className={`absolute top-0 left-0 p-[4px] px-[10px] bg-[#ffcccc] h-[fit-content] text-custom-red transform translate-y-[-130%] rounded-md text-left text-[12px]  capitalize`}
          >
            {errorMsg}
          </p>
        )}
      </div>
    );
  return (
    <div
      className={` relative bg-white text-[#140e18] rounded-[10px] h-[54px] sm:h-[60px] px-4 flex items-center text-[20px] ${
        error ? "mb-[10px]" : ""
      } ${className}`}
    >
      {type === "number" && placeholder.includes("Phone") && (
        <AreaCode setData={setData} data={data} />
      )}
      <input
        type={
          type === "password" ? (hide ? "password" : "text") : type || "text"
        }
        placeholder={required ? placeholder + "*" : placeholder}
        onChange={(e) => onChange(e)}
        onBlur={() => {
          setInputBlur(true);
        }}
        required={required}
        value={value || ""}
        className={inputClassName}
      />
      {error && (
        <p className={`absolute bottom-[-21px] text-[13px] `}>{error}</p>
      )}
      {!error && errorInput && errorMsg && (
         <p
          className={`absolute top-0 left-0 p-[2px] px-[10px] bg-[#ffcccc] h-[fit-content] text-[#c70025] transform translate-y-[-100%] rounded-md text-left text-[12px]  capitalize`}
          >
        {/* <p
          className={`absolute top-0 left-0 p-[4px] px-[10px] bg-[#ffcccc] h-[fit-content] text-[#c70025] transform translate-y-[-130%] rounded-md text-left text-[12px]  capitalize`}
        > */}
          {errorMsg}
        </p>
      )}

      {type === "password" && (
        <button
          className={`absolute right-5 opacity-[50%]`}
          onClick={() => setHide((prev) => !prev)}
          type="button"
        >
          {hide ? (
            <BiShow className="h-7 w-7" />
          ) : (
            <BiHide className="h-7 w-7" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
