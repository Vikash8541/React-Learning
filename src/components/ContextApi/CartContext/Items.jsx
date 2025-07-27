import React, { useContext } from 'react'
import { CartContext } from './CartProvider'

const Items = ({ name, price }) => {
  const { item, setItem } = useContext(CartContext)

  return (
    <div className="group relative w-80 rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1">
      <div className="p-6 text-center">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
          {name}
        </h2>
        <p className="text-lg text-gray-600 mb-5">${price.toLocaleString()}</p>
        <button
          onClick={() => setItem([...item, { name, price }])}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-transform active:scale-95"
        >
          Add to Cart
        </button>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-600 rounded-bl-full z-0 opacity-10" />
    </div>
  )
}

export default Items
