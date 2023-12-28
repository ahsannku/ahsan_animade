import React, { useState } from "react";

const CheckBox = ({ label, value, selectedScene, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
    onChange(value);
  };

  return (
    <div className='flex cursor-pointer gap-2'>
      <input
        type="checkbox"
        id={value}
        value={value}
        checked={value === selectedScene} // Set the checkbox's checked state based on the selected scene
        onChange={handleCheckBoxChange}
      />
      <label htmlFor={value} className={`h-[24px] w-[24px] border-2 rounded-md ${isChecked && 'bg-[#ccc]'}`}>
       </label>
      <label htmlFor={value} className='text-base'>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
