import React from "react";
import Button from "./Button";

const Container = () => {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {new Array(10).fill(0).map((item) => (
        <div
          style={{
            border: "1px solid red",
            width: "25%",
            margin: "10px",
            padding: "10px",
          }}
        >
          <Button />
        </div>
      ))}
    </div>
  );
};

export default Container;
