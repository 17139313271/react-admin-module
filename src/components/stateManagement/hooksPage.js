import React, { useContext } from "react";
import { myContext } from "../../store/hooks/store";

function HooksPage() {
  const { state, dispatch } = useContext(myContext);
  return (
    <div>
      Counter Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default HooksPage;
