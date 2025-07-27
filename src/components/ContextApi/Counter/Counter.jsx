import React, { useContext } from 'react'
import {CounterContext} from "./CounterProvider";
const Counter = () => {

    //1. We will use like this 
    const counterValue  = useContext(CounterContext);

    // 2. We will use like this also i.e destructing method
    const {counter,setCounter,name} = useContext(CounterContext);

  return (
    <div className='counter-data my-4 flex flex-col gap-4 w-max mx-auto'>

     {/* 1. Method option */}
      <h2 className='text-3xl font-semibold'>Counter is {counterValue.counter}</h2>
      <button onClick={()=> counterValue.setCounter(counterValue.counter + 1)} className='bg-green-600 w-[200px] py-2 px-4 text-white rounded-md'>Increment</button>
      <button onClick={()=> counterValue.setCounter(counterValue.counter - 1)} className='bg-red-600 w-[200px] py-2 px-4 text-white rounded-md'>Decrement</button>

    {/* 2. Method option */}
      <h2 className='text-3xl font-semibold'>Counter is {counter}</h2>
      <h2 className='text-3xl font-semibold'>Name : {name}</h2>
      <button onClick={()=>setCounter(counter+1)}  className='bg-green-600 w-[200px] py-2 px-4 text-white rounded-md'>Increment</button>
      <button onClick={()=>setCounter(counter-1)} className='bg-red-600 w-[200px] py-2 px-4 text-white rounded-md'>Decrement</button>
    </div>
  )
}

export default Counter
