import React from "react";
import CounterDataCustomHook from "./CounterDataCustomHook";

const CustomHook = () => {
  const { toggleValue, toggle ,count, increment, decrement, reset } =
    CounterDataCustomHook(5);

  return (
    <>
      <div className="p-4 border rounded w-60 text-center mx-auto mt-10 shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Count: {count}</h2>
        <div className="space-x-2">
          <button
            onClick={increment}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={reset}
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="toggle-data my-7">
        <button onClick={toggleValue} className="bg-red-600 text-white py-2 px-4 rounded-md">Toggle</button>
        {toggle && <h2 className="text-2xl font-semibold text-3xl mt-5">Toggle Data</h2>}
      </div>
    </>
  );
};

export default CustomHook;
