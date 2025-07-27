import React, { createContext, useState } from 'react'


export const CounterContext = createContext(null);

const CounterProvider = ({children}) => {

    const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{counter , setCounter, name:"vikash"}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
