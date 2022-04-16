import React, {useState} from "react";
import {useCountContex} from "./ContexProvider";

const Button = () => {
  const [count, setcount] = useState(0);

  let [countstate, dispatch] = useCountContex();

  console.log(countstate, "data");

  const handleClick = () => {
    dispatch({
      type: "add",
    });

    setcount(count + 1);
  };

  const handleClick2 = () => {
    dispatch({
      type: "remove",
    });
    setcount(count - 1);
  };

  return (
    <div>
      <p>Count -{count}</p>
      <button onClick={handleClick}>ADD</button>
      <button onClick={handleClick2}>REMOVE</button>
    </div>
  );
};

export default Button;
