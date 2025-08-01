import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);

const CartProvider = ({children}) => {

 const [item , setItem] = useState([]);

  return (
    <CartContext.Provider value={{item,setItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
