import {useEffect} from "react";

function Child({count, toggle}) {
  // console.log("render  -1 ");

  console.log(count, toggle);

  return (
    <div>
      <p>
        Hi This is child - {count} and flage is {toggle}
      </p>
    </div>
  );
}

export default Child;
