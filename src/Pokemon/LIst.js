import React, {useEffect, useState} from "react";

const LIst = () => {
  const [pdata, setpdata] = useState();
  const [detail, setdetail] = useState({});

  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setisLoading(true);
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await resp.json();
    setpdata(data.results);
    setisLoading(false);
    console.log(data.results);
  }

  async function getDetails(pname) {
    // setisLoading(true);
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pname}`);
    const data = await resp.json();
    setdetail({name: pname, weight: data.weight, images: data.sprites});

    // setpdata(data.results);
    // setisLoading(false);
    // console.log(data.results);
  }

  function showDetails(name) {
    console.log(name);
    getDetails(name);
  }

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div
      style={{
        width: "100vw",

        border: "5px solid red",
        padding: "10px",
      }}
    >
      <div>
        <input></input>
        <button>Ascending</button>
        <button>Decending</button>
        <button>Reset</button>
      </div>
      <div style={{display: "flex"}}>
        <div
          style={{
            width: "50%",
            height: "100vh",
            border: "5px solid green",
            padding: "10px",
            margin: "5px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {pdata?.map((item) => (
            <div
              style={{
                padding: "10px",
                border: "1px solid green",
                margin: "5px",
                width: "25%",
                cursor: "pointer",
              }}
              onClick={() => showDetails(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div
          style={{
            width: "50%",
            height: "100vh",
            border: "5px solid blue",
            padding: "10px",
            margin: "5px",
          }}
        >
          <h1>{detail.name}</h1>
          <h1>Weight:{detail.weight}</h1>
          {detail.images &&
            Object.keys(detail.images).map((key) => (
              <img alt="" src={detail.images[key]}></img>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LIst;
