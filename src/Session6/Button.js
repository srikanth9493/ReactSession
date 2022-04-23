import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {ADDITEM, REMOVEITEM, useCountContex} from "./Store";

const Button = () => {
  const [count, setcount] = useState(0);
  let disptach = useDispatch();

  // let [countstate, dispatch] = useCountContex();

  // console.log(countstate, "data");

  const handleClick = () => {
    disptach(ADDITEM("sri", "pass"));
    setcount(count + 1);
  };

  const handleClick2 = () => {
    disptach(REMOVEITEM());
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
