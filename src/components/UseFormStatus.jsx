import React from "react";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

const submitHandle = async () => {
  await new Promise((res) => setTimeout(res, 2000));
};

function CustomForm() {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex flex-col gap-4">
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          placeholder="Enter your name"
        />

        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          placeholder="Enter your password"
        />

        <button
          disabled={pending}
          type="submit"
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-white font-semibold transition-colors duration-300 ${
            pending
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-purple-700 hover:bg-purple-800"
          }`}
        >
          {pending ? ( <> <Spinner /> Submitting...</>) : ("Submit")}
        </button>
      </div>
    </>
  );
}

const UseFormStatus = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
          UseFormStatus Hook in React 19
        </h2>
        <form action={submitHandle}>
          <CustomForm />
        </form>
      </div>
    </div>
  );
};

export default UseFormStatus;
