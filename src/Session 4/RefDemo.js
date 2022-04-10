import React, {useEffect, useRef} from "react";

const RefDemo = () => {
  // const [first, setfirst] = useState(second)

  // useEffect async?
  //disadvantage of not using useref

  let countref = useRef(0);
  //  console.log(inputref.current, "useref");

  // useCallback(
  //   () => {
  //     first
  //   },
  //   [second],
  // )

  // useMemo(() => first, [second])
  function handleCount() {
    countref.current = countref.current + 1;
    console.log(countref.current);
  }

  return (
    <div>
      <h1>count -{countref.current}</h1>
      <button onClick={handleCount}>Click</button>
    </div>
  );
};

export default RefDemo;
