import React from "react";

import "./counter.css";
import { useCounter } from "./hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(10);

  const factor = 2;

  return (
    <>
      {" "}
      <h3>Counter with hooks: {state}</h3>
      <hr />
      <button onClick={() => increment(factor)} className="btn btn-primary m-2">
        Inc
      </button>
      <button onClick={reset} className="btn btn-primary m-2">
        Reset
      </button>
      <button onClick={() => decrement(factor)} className="btn btn-primary m-2">
        Dec
      </button>
    </>
  );
};
