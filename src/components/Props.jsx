import React, { useState } from 'react'
import User from './User'
import Student from './Student'
import Wrapper from './Wrapper';

const Props = () => {

    // Using Object
    // const nameObj = {
    //     name: "Vikash",
    //     age : 26,
    //     college : "GURU NANAK COLLEGE",
    // }

    // Using array
    // const arrayName = ["IIT","NIT","BIT","DU","IIM"];

    const [name, setName] = useState();

  return (
    <div className='Props'>

        {/* <User name = "Vikash Sharma" age={28}/> */}

        {/* Now using Object */}


        {/* There is two ways two call the value of nameObj , 1. using spread operator , 2. Destructing in the user.jsx file */}

        {/* 1. Using spread operator */}
        {/* {<User {...nameObj}/> } */}

        {/* {<User arr={arrayName}/>} */}




      {/* On Clicked change the name  using props*/}
       
       <button className='border my-4 border-none bg-green-500 text-white p-3 rounded-md' onClick={()=> setName("Raju")}>Change Name</button>

      {/* We have work depend on the condition , if the student value have , then show data others not show data in intially phase */}
       {/* {name && <Student name = {name}/>} */}

      {<Student name={"Vikash"}/>}

       {/* Props more concept  */}

       {/* 1. Default Props */}
        {<Student name={name}/>}


        {/* Here we declared the children props value to get in wrapper.jsx file i.e JSX HTML pass using children*/}
        <Wrapper>
          <h1>Hello {"Vikash"}</h1>
        </Wrapper>

        {/* Dynamic color props pass */}
        <Wrapper>
          <h1 style={{color:"orange"}}>Hello {"Rajiv"}</h1>
        </Wrapper>
       

    </div>
  )
}

export default Props
