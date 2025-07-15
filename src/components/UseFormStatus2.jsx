import React from "react";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

const UseFormStatus2 = () => {


const formHandle = async () =>{
    await new Promise((val)=> setTimeout(val,3000));
}



  const CustomForm = () => {
    const { pending } = useFormStatus(null);

    return (
      <>
        <input className="border bg-blue-100 border-blue-900 py-2 px-4 border-2 rounded-md" type="text" placeholder="Enter your Name" />
        <br />
        <br />
        <input className="border bg-blue-100 border-blue-900 py-2 px-4 border-2 rounded-md" type="password" placeholder="Enter your Password" />
        <br />
        <br />
        <button className={`${pending ? "bg-red-900 text-white py-2 w-[200px] px-4 rounded-md":" bg-green-800  w-[200px] py-2 text-white px-4 rounded-md"}`} type="submit" disabled={pending}>{pending ? <div className="flex items-center justify-center gap-2"><Spinner/>Submitting....</div> : "Submit"}</button>
      </>
    );
  };

  return (
    <div className="form my-4">
      <h2 className="text-3xl font-semibold text-black mb-4">
        UseFormStatus in React 19
      </h2>
      <form action={formHandle}>
         <CustomForm/>
      </form>
    </div>
  );
};

export default UseFormStatus2;
