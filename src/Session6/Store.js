import {useSelector} from "react-redux";
import {createStore} from "redux";
import App from "../App";

export function ADDITEM(uname, pass) {
  return {
    type: "add",
  };
}



let initialState = {
  count: 0,
  todo: [],
  pants: {},
};

function reducer(state = initialState, action) {
  console.log(action, state, "it is  in reducer");

  switch (action.type) {
    case "add":
      return {...state, count: state.count + 1};

    case "remove":
      return {...state, count: state.count - 1};

    default:
      return state;
  }
}

const store = createStore(reducer);

export {store};

// useReducer // reuducer inital state as peramere

//store

// 1)createStore => reducer as input
// 2) wrap App.js with Provider Component and send store as prop to this provider compoenent

//action
// action is an object with type as property
// action creator is function returning an action

// Dispatch
//  after dispatching an action we will get updated state
// we need useDispatchHook() to create dispatch function

// Consume
// we need to cosume the updated state

// to consume value we need useSelector()
//  useSelector takes function as input and perameter of function is state it self
