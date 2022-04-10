import React from "react";

const Button = (props) => {
    console.log("Button render ", props.children);
    
  return (
    <button
      onClick={props.onClick}
      style={{color: "red", padding: "10px", backgroundColor: "yellowgreen"}}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
