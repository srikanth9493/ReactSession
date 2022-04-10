import React, {useMemo, useState} from "react";

const MemoDemo = () => {
  const [num, setnum] = useState(0);
  const [dark, setdark] = useState(false);

  const heaveyWork = (number) => {
    console.log("functiono is running");
    for (let i = 0; i < 1000000000; i++) {}
    return 2 * number;
  };

//   const doubleNumber = heaveyWork(num);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

    const doubleNumber = useMemo(() => {
      return heaveyWork(num);
    }, [num]);

  return (
    <div>
      <p>Double number</p>{" "}
      <input value={num} onChange={(e) => setnum(e.target.value)}></input>
      <button onClick={() => setdark((prevDark) => !prevDark)}>
        Switch Mode
      </button>
      <div style={themeStyle}> {doubleNumber}</div>
    </div>
  );
};

export default MemoDemo;
