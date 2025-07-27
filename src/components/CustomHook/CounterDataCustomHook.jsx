import React, { useState } from "react";

const CounterDataCustomHook = (initial = 0) => {
  const [count, setCount] = useState(initial);
  const [toggle , setToggle] = useState(true);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initial);
  const toggleValue = () => setToggle(!toggle);

   return { count, increment, decrement, reset,toggleValue,toggle };
};

export default CounterDataCustomHook;
