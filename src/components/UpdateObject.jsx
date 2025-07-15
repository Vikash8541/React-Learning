import React, { useState } from "react";

const UpdateObject = () => {
  // Initial original value
  const original = {
    name: "Vikash Sharma",
    address: {
      city: "Delhi",
      country: "India",
    },
  };

  // Separate states
  const [originalData] = useState(original); // Immutable
  const [shallowData, setShallowData] = useState(original);
  const [deepData, setDeepData] = useState(original);

  // ✅ Update SHALLOW COPY
  const updateShallow = (field, value) => {
    if (field === "name") {
      setShallowData({ ...shallowData, name: value });
    } else {
      setShallowData({
        ...shallowData,
        address: {
          ...shallowData.address,
          [field]: value,
        },
      });
    }
  };

  // ✅ Update DEEP COPY
  const updateDeep = (field, value) => {
    const copy = JSON.parse(JSON.stringify(deepData));
    if (field === "name") {
      copy.name = value;
    } else {
      copy.address[field] = value;
    }
    setDeepData(copy);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">
        Shallow vs Deep Copy with Original Value
      </h1>

      {/* === Inputs === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shallow Copy Inputs */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Shallow Copy</h2>
          <input
            type="text"
            placeholder="Update Name"
            className="w-full border p-2 rounded mb-3 outline-indigo-500"
            onChange={(e) => updateShallow("name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Update City"
            className="w-full border p-2 rounded mb-3 outline-indigo-500"
            onChange={(e) => updateShallow("city", e.target.value)}
          />
          <input
            type="text"
            placeholder="Update Country"
            className="w-full border p-2 rounded outline-indigo-500"
            onChange={(e) => updateShallow("country", e.target.value)}
          />
        </div>

        {/* Deep Copy Inputs */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold text-green-600 mb-4">Deep Copy</h2>
          <input
            type="text"
            placeholder="Update Name"
            className="w-full border p-2 rounded mb-3 outline-green-500"
            onChange={(e) => updateDeep("name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Update City"
            className="w-full border p-2 rounded mb-3 outline-green-500"
            onChange={(e) => updateDeep("city", e.target.value)}
          />
          <input
            type="text"
            placeholder="Update Country"
            className="w-full border p-2 rounded outline-green-500"
            onChange={(e) => updateDeep("country", e.target.value)}
          />
        </div>
      </div>

      {/* === Output Section === */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base">
        {/* Original */}
        <div className="bg-gray-50 p-4 rounded border border-gray-300">
          <h3 className="text-lg font-bold text-gray-700 mb-2">🟡 Original Value</h3>
          <p><strong>Name:</strong> {originalData.name}</p>
          <p><strong>City:</strong> {originalData.address.city}</p>
          <p><strong>Country:</strong> {originalData.address.country}</p>
        </div>

        {/* Shallow */}
        <div className="bg-indigo-50 p-4 rounded border border-indigo-300">
          <h3 className="text-lg font-bold text-indigo-700 mb-2">🔵 Shallow Copy</h3>
          <p><strong>Name:</strong> {shallowData.name}</p>
          <p><strong>City:</strong> {shallowData.address.city}</p>
          <p><strong>Country:</strong> {shallowData.address.country}</p>
        </div>

        {/* Deep */}
        <div className="bg-green-50 p-4 rounded border border-green-300">
          <h3 className="text-lg font-bold text-green-700 mb-2">🟢 Deep Copy</h3>
          <p><strong>Name:</strong> {deepData.name}</p>
          <p><strong>City:</strong> {deepData.address.city}</p>
          <p><strong>Country:</strong> {deepData.address.country}</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateObject;
