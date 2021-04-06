import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decrement, increamentCustom } from "./CounterReducer";

const Counter = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counterObject = useSelector((s) => s.counter);
  return (
    <>
      <p>this is a counter component</p>
      <h1> Counter {counterObject.value} </h1>
      <button onClick={() => dispatch(increament())}>increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>increment</button>
      <br />
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(increamentCustom({ value }))}>
        increment
      </button>
    </>
  );
};

export default Counter;
