import React, { useState } from 'react'

const Input = () => {

    const [val,setVal] = useState("");

  return (
    <div className='input'>
        <input value={val} onChange={((e)=> setVal(e.target.value))} className='my-3 border border-blue-900 border-2 p-3' type="text" placeholder='Enter the User Name'/>
        <h1 className='font-semibold text-black text-3xl p-2 w-max mx-auto'>{val}</h1>
        <button onClick={(()=> setVal(""))} className='bg-red-950 py-3 px-5 border-none rounded-sm my-3  text-white'>Clear</button>
    </div>
  )
}

export default Input
