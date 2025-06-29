import React, { useState } from "react";

const RadioSelect = () => {
  const [gen, setGen] = useState("male");
  const [city, setCity] = useState("delhi");

  return (
    <div className="my-10 mx-auto max-w-md p-6 bg-white rounded-xl shadow-lg border">
      <div className="radio mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Select your Gender</h2>
        <div className="Radio flex items-center justify-center gap-6">
          {["male", "female"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <input
                onChange={(e) => setGen(e.target.value)}
                checked={gen === item}
                className="h-5 w-5 text-purple-600 accent-purple-600"
                type="radio"
                id={item}
                value={item}
                name="gender"
              />
              <label
                className={`text-lg font-medium capitalize ${
                  gen === item ? "text-purple-700" : "text-gray-700"
                }`}
                htmlFor={item}
              >
                {item}
              </label>
            </div>
          ))}
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mt-6">
          Selected Gender: <span className="text-purple-700 capitalize">{gen}</span>
        </h4>
      </div>

      <div className="select-option">
        <label htmlFor="city" className="block text-xl font-semibold text-gray-800 mb-2">
          Select Your City
        </label>
        <select
          onChange={(e) => setCity(e.target.value)}
          defaultValue={city}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
          name="city"
          id="city"
        >
          {["Delhi", "Mumbai", "Jharkhand", "Bihar"].map((item) => (
            <option className="bg-white text-black" key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <h4 className="text-xl font-semibold text-gray-800 mt-4">
          Selected City: <span className="text-purple-700 capitalize">{city}</span>
        </h4>
      </div>
    </div>
  );
};

export default RadioSelect;
