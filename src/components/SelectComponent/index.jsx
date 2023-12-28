import React, { useState } from 'react';
const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ["xl", "xxl",'xxxl'];
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="w-[87px] h-[30px]  mx-auto" >
     
      <div className="relative">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="block appearance-none w-[87px] h-[35px] text-[18px] text-black border rounded-[20px] py-1 px-4 pr-8  leading-tight focus:outline-none focus:bg-white
          "
          id="grid-state"
        >
          {options.map((option, index) => (
            <option key={index} value={option} className=''>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 font-thin ">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M0 6l10 9 10-9-2-2-8 7-8-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default SelectComponent;