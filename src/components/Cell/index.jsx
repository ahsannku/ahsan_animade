import React from "react";
import '../Cell/style.css'


const Cell = ({ children, flex, noborder, size, finicial, type, className }) => {
  return (
    <div
      style={{ flex: flex }}
      className={`cell ${noborder ? 'noborder' : ""} ${
        size === "small" ? 'small' : ""
      } ${finicial ? 'financial' : ""} ${
        type === "head" ? 'head' : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Cell;
