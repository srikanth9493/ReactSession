import React from "react";
import {useCountContex} from "./ContexProvider";

const Notification = () => {
  let [countState,disptach] = useCountContex();
  console.log(countState, "notification");
  return (
    <div style={{marginLeft: "auto"}}>
      <p>items added {countState.count}</p>
    </div>
  );
};

export default Notification;
