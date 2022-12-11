import React from "react";
import "./Button.scss";
const Button = ({ name, method, methodArgument, classes }) => {
  // razmotriti izbacivanje methodArgument
  return (
    <>
      <button onClick={() => method(methodArgument)} className={classes}>
        {name}
      </button>
    </>
  );
};
export default Button;
