import React, { useEffect, useState } from "react";

const HooksEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [val, setVal] = useState(10);
  const [isToggled, setIsToggled] = useState(false);

  // It render every element of data because there is no dependencies so , it will run every time when page have changes any things

  // useEffect(() => {
  //     const handleData = () => {
  //       console.log("Updated everytime");
  //     };
  //     handleData();
  // });

  //   It runs only starting

  //   useEffect(() => {
  //     const handleData = () => {
  //       console.log("Counter Updated");
  //     };
  //     handleData();
  //   },[]);

  // It render every time when the "data" value changed only, because it added dependencies.

  //   useEffect(() => {
  //     const valueData = () => {
  //       console.log("Data Updated");
  //     };
  //     valueData();
  //   },[data]);

  //   Remove the unmounted

  useEffect(() => {
    const intervals = setInterval(() => {
      setVal((prev) => prev - 1);
    }, 1000);

    if (val === 0) clearInterval(intervals);
    return () => clearInterval(intervals);
  }, [val]);

  // useEffect(()=>{

  //   const timeOut = setTimeout(()=>{
  //       setVal((prev) => prev + 1);
  //   },1000)

  //   if(val === 20) clearTimeout(timeOut);
  //   return () => clearTimeout(timeOut);

  // },[val])

  useEffect(() => {
    console.log(`Toggle Value changed : ${isToggled ? "ON" : "OFF"}`);
  }, [isToggled]);

  const toggleValue = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <>
      {/* Now take a example of each lifecycle methods */}

      {/* 1. Mount Life Cycle Methods */}
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-indigo-700">{val}</h1>
            <p className="text-sm text-gray-500 mt-1">Timer</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-700">{count}</h1>
            <p className="text-sm text-gray-500 mt-1">Counter</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-green-700">{data}</h1>
            <p className="text-sm text-gray-500 mt-1">Data</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition"
            onClick={() => setCount(count + 1)}
          >
            Count
          </button>
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-lg transition"
            onClick={() => setData(data + 1)}
          >
            Data
          </button>
        </div>

        <div className="text-center mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Toggle View :{" "}
            <span className={isToggled ? "text-green-600" : "text-red-600"}>
              {isToggled ? "ON" : "OFF"}
            </span>
          </h2>
          <button
            onClick={toggleValue}
            className={`py-2 px-6 rounded-md text-white font-semibold shadow-sm transition ${
              isToggled
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            Toggle
          </button>
        </div>
      </div>
    </>
  );
};

export default HooksEffect;


/*
  useEffect Hook has different lifecycle behaviors, similar to class components.

  1. ✅ Mount Lifecycle – Runs only once when the component mounts

     useEffect(() => {
       Your code here
     }, []);
     Empty dependency array => runs only once (like componentDidMount)


  2. 🔁 Update Lifecycle – Runs every time the component re-renders or when dependencies change

     useEffect(() => {
       Your code here
     });

     No dependency array => runs after every render (mount + update)

     -> OR you can control it by passing specific dependencies:
     
     useEffect(() => {
       Your code here
     }, [name]);

     Runs only when `name` value changes


  3. ❌ Unmount Lifecycle – Used to clean up before the component is removed from the DOM

     useEffect(() => {
       Setup code here

       return () => {
         Cleanup code here (like removing event listeners, clearing intervals etc.)
       };
     }, []);
     Return function runs on unmount (like componentWillUnmount)
*/
