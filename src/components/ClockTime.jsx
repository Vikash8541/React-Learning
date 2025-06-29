import React, { useState, useEffect } from 'react';

const ClockTime = ({ colorVal }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Current Time</h1>
      <h4 className="text-xl font-medium text-gray-700 mb-2">
        Current Color:
        <span className="capitalize ml-2 font-bold" style={{ color: colorVal }}>
          {colorVal}
        </span>
      </h4>
      <p
        className="text-xl font-semibold text-white mt-4 py-4 w-[220px] mx-auto rounded-lg shadow-md transition-all duration-300"
        style={{ backgroundColor: colorVal }}
      >
        {formattedTime}
      </p>
    </div>
  );
};

export default ClockTime;
