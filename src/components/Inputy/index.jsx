import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import AreaCode from "../AreaCode";

const Inputy = ({
  type,
  placeholder,
  name,
  onChange,
  error,
  required,
  value,
  validation,
  errorMsg,
  data,
  setData,
}) => {
  const [hide, setHide] = useState(true);
  const [inputBlur, setInputBlur] = useState(false);
  const enteredValueIsValid = validation && validation(value);
  const errorInput = !enteredValueIsValid && inputBlur;

  if (type === "textarea")
    return (
      <div>
        <div className="bg-[#353b40] w-fit px-5 rounded-md mt-3 pt-1 pb-2 mb-[-10px]">
          {name}
        </div>
        <div
          className={`bg-[#353b40] text-lg  pl-3 py-5 rounded-md relative min-h-[300px]`}
        >
          <textarea
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            onBlur={() => {
              setInputBlur(true);
            }}
            required={required}
            value={value || ""}
          />
          {error && <p className="bg-red-500">{error}</p>}
          {!error && errorInput && errorMsg && (
            <p className={`errors`}>{errorMsg}</p>
          )}
        </div>
      </div>
    );
  return (
    <div className="">
      <div className="bg-[#353b40] w-fit px-5 rounded-md mt-3 pt-1 pb-2 mb-[-10px]">
        {name}
      </div>
      <div className={`bg-[#353b40 text-lg  pl-3 py-5 rounded-md relative`}>
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
        />
        {error && <p className="bg-red-500">{error}</p>}
        {!error && errorInput && errorMsg && (
          <p className={`errors`}>{errorMsg}</p>
        )}
        {type === "password" && (
          <button
            className="flex items-center justify-center"
            onClick={() => setHide((prev) => !prev)}
            type="button"
          >
            {hide ? <BiShow /> : <BiHide />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Inputy;
