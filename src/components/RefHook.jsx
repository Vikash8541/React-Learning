import React, { useRef } from 'react';

const RefHook = () => {
  const inputRef = useRef(null); 
  console.log(inputRef);
  

  const refHandle = (e) => {
    e.preventDefault(); 

    if (inputRef.current) {
      alert(`You typed: ${inputRef.current.value}`); 
      inputRef.current.focus(); 
      inputRef.current.style.backgroundColor = '#d1fae5'; 
      inputRef.current.placeholder="enter the password";
    }
  };

  return (
    <div className='my-4 mx-auto'>
      <form>
        <input
          ref={inputRef}
          type="text"
          className='border border-2 border-green-500 py-2 px-4 rounded-md'
          placeholder='Enter the Text'
        />
        <button
          onClick={refHandle}
          className='py-2 px-4 rounded-md bg-green-700 text-white mx-4'
        >
          Clicked Ref
        </button>
      </form>
    </div>
  );
};

export default RefHook;
