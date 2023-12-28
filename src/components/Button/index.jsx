import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, to = '', href, color, type, onClick, loading, disabled, className }) => {
  const buttonClasses = `drop-button ${
    color === "purple" ? 'purple' : color === "gray" ? 'gray' : ""
  } ${className}`;

  if (type === "button" || type === "submit") {
    return (
      <button
        type={type || ""}
        onClick={onClick ? () => onClick() : () => {}}
        disabled={loading || disabled || false}
        className={`${buttonClasses} hover:bg-white hover:text-custom-red hover:border-custom-red`}
      >
        {loading ? <span className="spinner"></span> : children}
      </button>
    );
  } else if (to) {
    return (
      <Link
        to={to}
        className={`${buttonClasses} hover:bg-white hover:text-custom-red hover:border-custom-red`}
      >
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }
};

export default Button;
