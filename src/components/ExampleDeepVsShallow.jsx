import React, { useState } from "react";

const ExampleDeepVsShallow = () => {
  const [objectState, setObjectState] = useState({
    name: "Vikash",
    address: { city: "Delhi" },
  });

  const [arrayState, setArrayState] = useState([
    { id: 1, value: "One" },
    { id: 2, value: "Two" },
  ]);

  // Object Shallow Copy
  const updateObjectShallow = () => {
    const copy = { ...objectState };
    copy.address.city = "Mumbai"; // This mutates the original address
    setObjectState(copy);
  };

  // Object Deep Copy
  const updateObjectDeep = () => {
    const copy = {
      ...objectState,
      address: { ...objectState.address, city: "Mumbai" },
    };
    setObjectState(copy);
  };

  // Array Shallow Copy
  const updateArrayShallow = () => {
    const copy = [...arrayState];
    copy[0].value = "Changed"; // Mutates nested object
    setArrayState(copy);
  };

  // Array Deep Copy
  const updateArrayDeep = () => {
    const copy = arrayState.map(item => ({ ...item }));
    copy[0].value = "Independent";
    setArrayState(copy);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-4xl font-bold text-center text-purple-700">
        🧠 Shallow vs Deep Copy Playground (React)
      </h1>

      {/* Object Section */}
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">🟪 Object Copy</h2>
        <p className="mb-4 text-gray-700">
          <strong>Current City:</strong> {objectState.address.city}
        </p>
        <div className="flex gap-4 items-start justify-center">
          <button
            onClick={updateObjectShallow}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Shallow Copy (Mutates)
          </button>
          <button
            onClick={updateObjectDeep}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Deep Copy (Safe)
          </button>
        </div>
      </div>

      {/* Array Section */}
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🔷 Array Copy</h2>
        <p className="mb-4 text-gray-700">
          <strong>Array Values:</strong>{" "}
          {arrayState.map((item) => item.value).join(", ")}
        </p>
        <div className="flex gap-4 items-start justify-center">
          <button
            onClick={updateArrayShallow}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Shallow Copy (Mutates)
          </button>
          <button
            onClick={updateArrayDeep}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Deep Copy (Safe)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExampleDeepVsShallow;




