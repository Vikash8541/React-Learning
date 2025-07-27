import React from 'react'
import Items from './Items'
import TotalCartList from './TotalCartList'

const Cart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] py-16 px-6">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-14">
        🛒 Modern Shopping Cart
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <Items name="MacBook Pro" price={20000} />
        <Items name="Android Phone" price={10000} />
        <Items name="iPhone 14" price={5000} />
        <Items name="Gaming PC" price={120000} />
      </div>

      <div className="flex justify-center mt-12">
        <TotalCartList />
      </div>
    </div>
  )
}

export default Cart
