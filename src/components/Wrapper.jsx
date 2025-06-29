import React from 'react'


// Now how to see the children props
const Wrapper = ({children , color="purple"}) => {
  return (
    <div className='border border-green-600 border-2 p-2 my-3 w-[300px] flex items-center justify-center mx-auto' style={{color}}>
      {children}
    </div>
  )
}

export default Wrapper
