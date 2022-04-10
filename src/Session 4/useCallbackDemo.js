import React, {useCallback, useState} from "react";
import Button from "./Button";

const CallbackDemo = () => {
  const [counter1, setcounter1] = useState(0);
  const [counter2, setcounter2] = useState(0);

  const handleClick = useCallback(() => {
    setcounter1(counter1 + 1);
  }, [counter1]);

  const handlClick2 = useCallback(() => {
    setcounter2(counter2 + 1);
  }, [counter2]);

  console.log("Parent Render");

  return (
    <div>
      <h1>Counter 1 -{counter1}</h1>
      <Button onClick={handleClick}>Click1</Button>

      <h2>Counter 2 -{counter2}</h2>
      <Button onClick={handlClick2}>Click2</Button>
    </div>
  );
};

export default CallbackDemo;
