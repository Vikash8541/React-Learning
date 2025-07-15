import React, { useState } from 'react'

const UpdateArray = () => {


const [data, setData] = useState([
  "Jonty","Jonny","Muskan"
])


const changeName =(name) =>{

  // Shallow copy
  // data[data.length-1] = name;
  // setData([...data]);

  // Deep Copy
    const copy = JSON.parse(JSON.stringify(data));
    copy[copy.length - 1] = name;
    setData(copy);
    console.log("Original:", data);
    console.log("Updated:", copy);
}

  return (
     <div className="update-array min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Update the Array</h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-5">
        <input
          type="text"
          placeholder="Enter some new name"
          onChange={(e) => changeName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="mt-6 space-y-2">
          {data.map((item, idx) => (
            <h3
              key={idx}
              className="text-lg px-4 py-2 bg-purple-100 text-purple-800 rounded-md shadow-sm"
            >
              {item}
            </h3>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpdateArray
