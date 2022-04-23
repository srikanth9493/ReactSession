import {useSelector} from "react-redux";
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "../App";

export function ADDITEM(uname, pass) {
  return {
    type: "add",
  };
}

export function REMOVEITEM(uname, pass) {
  return {
    type: "remove",
  };
}

let initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
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

//reducer

const initState = {
  isFetching: false,
  fetchError: false,
  data: [],
};

function fetchDataReducer(state = initState, {type, payload}) {
  switch (type) {
    case "INIT_API":
      return {...initState, isFetching: true};

    case "API_SUCCESS":
      return {...initState, data: payload.data};

    case "API_FAIL":
      return {...initState, fetchError: payload.error};

    default:
      return state;
  }
}

let rootReducer = combineReducers({
  count: countReducer,
  fetch: fetchDataReducer,
});

//action creator

export function getData() {
  return async (dispatch) => {
    dispatch({type: "INIT_API"});
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts1");
      let data = await res.json();

      dispatch({
        type: "API_SUCCESS",
        payload: {
          data: data,
        },
      });
    } catch (ex) {
      console.log(ex, "exceptin");
      dispatch({type: "API_FAIL", payload: ex});
    }
  };
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export {store};

// https://jsonplaceholder.typicode.com/posts

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
