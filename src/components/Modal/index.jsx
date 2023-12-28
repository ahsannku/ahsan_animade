import React from "react";
import Title from "../Title";

const Modal = ({ children, title, setState, buttons, type }) => {

  console.log(type)
  return (
    
    <div className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center z-[100000] ">
      <div className="absolute top-0 left-0 w-full h-full bg-dark-blue-1 opacity-80" onClick={() => setState(false)}></div>
      <div className="z-[10000] relative flex items-center justify-center">
        <div className={`bg-[#2c3135] py-6 px-8 rounded-md border-2`}>
          {/* <Title align="center">
            <span>{title}</span>
          </Title> */}
          <div className='p-8 border-t text-base text-center md:text-2xl border-b mb-5'>{children}</div>
          {/* {buttons} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
