import React from "react";

const Input1 = ({
   name, // Sets the id and name attributes of the input element
   value, //Sets the intial value of input element
   onChange // This props handle the handleChange callback function
  }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </>
  );
};

export default Input1;
