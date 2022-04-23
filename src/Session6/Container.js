import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "./Button";
import {getData} from "./Store";

const Container = () => {
  let disptach = useDispatch();
  let {data, isFetching, fetchError} = useSelector((state) => state.fetch);

  console.log(data, "redux data");

  const handlePosts = () => {
    disptach(getData());
  };

  if (isFetching) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
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

      <button onClick={handlePosts}>Fetch Data</button>

      {data?.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default Container;
