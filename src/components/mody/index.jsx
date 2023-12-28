import React from "react";
import Title from "../Title";

const Mody = ({ children, title, setState, buttons }) => {
  return (
    <div className="popup">
      <div className="overlay" onClick={() => setState(false)}></div>
      <div className="card">
        <div className={` popup__card`}>
          <Title align="center">
            <span>{title}</span>
          </Title>
          <div className='py-5 md:p-5 xl:p-8 border-t border-white'>{children}</div>
          {buttons}
        </div>
      </div>
    </div>
  );
};

export default Mody;
