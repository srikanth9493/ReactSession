import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";
import Child from "./Child";
import LIst from "./Pokemon/LIst";
import RefDemo from "./Session 4/RefDemo";
import CallbackDemo from "./Session 4/useCallbackDemo";
import MemoDemo from "./Session 4/MemoDemo";

function App() {
  // console.log("i am in app");
  const [toggle, settoggle] = useState(false);

  let [count, setCount] = useState({num: 0});

  console.log(count);

  // const [nums, setnums] = useState([1, 2, 3, 4, 5, 6, 7]);

  // const [char, setchar] = useState("");

  // console.log("render");

  useEffect(() => {
    // console.log("mounter");
  }, []);

  // let count = 0;

  //usestate => return stae variable and function which can change state.

  if (toggle) return <Child />;

  return (
    <div className="App">
      {/* <LIst /> */}
      {/* <RefDemo /> */}
      {/* <CallbackDemo /> */}

      <MemoDemo />
      {/* <h1> count:{count.num}</h1>
      <button
        onClick={() => {
          setCount({...count,num:count.num+1});
          console.log(count);
        }}
      >
        Click
      </button> */}

      {/* <h1>HI-{char}</h1> */}
      {/* <input
        type="text"
        value={char}
        onChange={(e) => setchar(e.target.value)}
      ></input> */}

      {/* {console.log("i am in return ")} */}
      {/* <h1>Count - {count}</h1>
    
      <Child count={count} toggle="hi" /> */}

      {/* {console.log("i am in return ", toggle)} */}

      {/* <button onClick={() => settoggle(!toggle)}>Toggle</button> */}
      {/* {toggle && <Child />} */}

      {/* <button onClick={() => settoggle(!toggle)}>Toggle</button> */}
      {/* {toggle ? <Child /> : "hi thersi no child"} */}

      {/* {nums.map((x) => (
        <li>{x}</li>
      ))} */}
    </div>
  );
}

export default App;
/*

Problem Statement
Design A simple list using a API provided. 
Show Details of the particular item in the list

- Show Detail - Show the following details Name, Weight and Images. Add a loading state and then show the result.
- Search Box - Should filter the result on basis of name.
- Sort Functionality - Ascending, Descending and Reset.


Design Requirements.

- Input Box to search.
- 3 Buttons for sort - ascending, descending and reset.
- Left Section - For List
- Right Section - For Detail.

APIs 
List - https://pokeapi.co/api/v2/pokemon
Detail - https://pokeapi.co/api/v2/pokemon/<pokemon-name>

*/
