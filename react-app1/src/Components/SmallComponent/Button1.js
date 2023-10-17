import React from "react";

const Button1 = ({
  className, // CSS class name for styling
  id, //HTML id attribute for identification
  onClick, // Function to execute when clicke
  children, // Content to be displayed inside the button
}) => {
  return (
    <div>
      <button className={className} id={id} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button1;
