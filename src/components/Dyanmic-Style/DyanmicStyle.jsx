import React, { useState } from 'react';
import Child from './Child';

const DyanmicStyle = () => {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [flexView, setFlexView] = useState(true);

  const changeTheme = () => {
    setBgColor("crimson");
    setTextColor("white");
  };

  const defaultTheme = () => {
    setBgColor("white");
    setTextColor("black");
  };

  return (
    <>
      <h1 className='text-3xl text-gray-800 font-bold my-6 text-center'>
        Dynamic Design Update with Grid View Also
      </h1>

      <div className='buttons flex flex-wrap justify-center gap-4 mb-8'>
        <button
          onClick={defaultTheme}
          className='bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition duration-300 shadow-md'
        >
          Default Theme
        </button>
        <button
          onClick={changeTheme}
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300 shadow-md'
        >
          Change Theme
        </button>
        <button
          onClick={() => setFlexView(!flexView)}
          className='bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition duration-300 shadow-md'
        >
          Toggle View
        </button>
      </div>

      <Child text={textColor} bg={bgColor} flexBox={flexView} />
    </>
  );
};

export default DyanmicStyle;
