import React, { useState } from 'react';
import ClockTime from './ClockTime';

const Clock = () => {
  const colorValue = ["red", "green", "blue", "yellow"];
  const [color, setColor] = useState("red");

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Default Props Clock in React JS
      </h2>

      <div className="color-option flex justify-center mb-6">
        <select
          onChange={(e) => setColor(e.target.value)}
          defaultValue={color}
          className="bg-white text-gray-800 border-2 border-purple-600 py-2 px-4 rounded-md text-lg font-medium focus:ring-2 focus:ring-purple-400 outline-none"
          name="color"
          id="color"
        >
          {colorValue.map((item) => (
            <option value={item} key={item} className="capitalize">
              {item}
            </option>
          ))}
        </select>
      </div>

      <ClockTime colorVal={color} />
    </div>
  );
};

export default Clock;
