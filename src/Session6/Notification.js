import React from "react";
import {useSelector} from "react-redux";
import {useCountContex} from "./Store";

const Notification = () => {
  // let [countState,disptach] = useCountContex();

  // console.log(countState, "notification");

  let {count} = useSelector((state) => state.count);
  console.log(count, "consumeing state");
  return (
    <div style={{marginLeft: "auto"}}>
      <p>items added {count}</p>
    </div>
  );
};

export default Notification;
