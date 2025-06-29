import React, { useEffect } from 'react';

const ChildHook = ({ name }) => {
  useEffect(() => {
    console.log(`User name changed to: ${name}`);
    // You could also fetch data or perform actions based on `name`
  }, [name]); // runs every time the `name` prop changes

  return (
    <div className="text-xl">
      <p>Hello, <strong>{name}</strong> 👋</p>
    </div>
  );
};

export default ChildHook;
