import React from 'react'


// Here I have declared the default props , if any props is not come from parent file so , the default props will be visible.
const Student = ({name="Admin"}) => {
  return (
    <div>
       <h1 className='text-2xl font-semibold my-4'>Hello : {name}</h1>
    </div>
  )
}

export default Student
