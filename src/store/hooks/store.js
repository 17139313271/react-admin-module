import React, { useReducer } from "react";

const initialState = {
  count: 1
};
const myContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ContextProvider = props => {
  const [state, origin_dispatch] = useReducer(reducer, initialState);
  const dispatch = action => {
    console.log(action);
    if (typeof action === "function") {
      return action(origin_dispatch);
    }

    return origin_dispatch(action);
  };
  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};

export { reducer, myContext, ContextProvider };
