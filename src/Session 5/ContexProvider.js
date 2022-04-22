import {createContext, useContext, useReducer} from "react";

let context = createContext();

let init = {
  count: 0,
};

function reducer(state = [], action) {
  switch (action.type) {
    case "add":
      return {...state, count: state.count + 1};

    case "remove":
      return {...state, count: state.count - 1};

    default:
      return state;
  }
}

// useReducer // reuducer inital state as peramere

export const ContextProvider = ({children}) => {
  return (
    <context.Provider value={useReducer(reducer, init)}>
      {children}
    </context.Provider>
  );
};

export function useCountContex() {
  return useContext(context);
}

export {context};
