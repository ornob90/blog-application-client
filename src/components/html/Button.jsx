import React from "react";

const Button = ({ className, ...props }) => {
  return (
    <button
      className={` active:scale-95 duration-300 text-sm ${className}`}
      {...props}
    ></button>
  );
};

export default Button;
