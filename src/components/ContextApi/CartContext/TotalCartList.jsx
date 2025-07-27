import React, { useContext } from 'react'
import { CartContext } from './CartProvider'

const TotalCartList = () => {
  const { item } = useContext(CartContext)
  const totalBill = item.reduce((a, b) => a + b.price, 0)

  return (
    <div className="mt-16 max-w-xl w-full rounded-3xl bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-8 border border-gray-200">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">🧾 Your Cart Summary</h3>

      <ul className="divide-y divide-gray-200">
        {item.map((item, index) => (
          <li key={index} className="flex justify-between py-3 text-lg text-gray-700 font-medium">
            <span>{item.name}</span>
            <span>${item.price.toLocaleString()}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t text-2xl font-bold text-green-600 text-center">
        Total: ${totalBill.toLocaleString()}
      </div>
    </div>
  )
}

export default TotalCartList
