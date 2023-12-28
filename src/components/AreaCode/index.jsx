import React, { useEffect, useRef, useState } from "react";
import { countriesCodes } from "../../utils/data";

const AreaCode = ({ data, setData }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef(null);

  // Function to close the menu when clicking outside the menu
  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };

  // Add click event listener to handle clicks outside the menu
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideMenu);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className='relative mr-2 h-full flex items-center' ref={menuRef}>
      <button
        type="button"
        className='text-base flex items-center h-2/3 pr-2 '
        style={{borderRight: '1px solid #ccc'}}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {data?.code}
      </button>
      {openMenu && (
        <ul className='absolute top-8 border-2  z-[1000] bg-white max-h-[350px] overflow-x-hidden text-base w-[200px] overflow-y-auto'>
          {countriesCodes.map((country, i) => (
            <li
              className={`cursor-pointer text-sm hover:bg-[#f2f2f2] ${
                data.code === country.dial_code ? 'bg-black text-white' : ""
              }`}
              key={i}
              onClick={() => {
                setData({
                  ...data,
                  code: country.dial_code,
                });
                setOpenMenu(false); // Close the menu after selecting an area code
              }}
            >
              {country.dial_code} | {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AreaCode;
