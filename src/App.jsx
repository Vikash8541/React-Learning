// import { useState } from "react";
import User from "./components/User";
import Props from "./components/Props";
import Input from "./components/Input";
import Skills from "./components/Skills";
import Skills2 from "./components/Skills2";
import RadioSelect from "./components/RadioSelect";
import Clock from "./components/Clock";
import NestedLoop from "./components/NestedLoop";
import Hooks from "./components/Hooks";
import HooksEffect from "./components/HooksEffect";
import DyanmicStyle from "./components/Dyanmic-Style/DyanmicStyle";
import RefHook from "./components/RefHook";
import UseFormStatus from "./components/UseFormStatus";
import UseFormStatus2 from "./components/UseFormStatus2";
import Derived from "./components/Derived";
import ShallowDeepCopy from "./components/ShallowDeepCopy";
import ExampleDeepVsShallow from "./components/ExampleDeepVsShallow";
import UpdateObject from "./components/UpdateObject";
import UpdateArray from "./components/UpdateArray";
import UseActionHook from "./components/UseActionHook";

export default function App() {
  // const [value, setValue] = useState(true);
  // const [count, setCount] = useState(0);

  // Best way use object mapping or use switch case
  // This is object mapping
  // const Condition = {
  //   0: <h1>Condition 0</h1>,
  //   1: <h1>Condition 1</h1>,
  //   2: <h1>Condition 2</h1>,
  //   3: <h1>Condition 3</h1>,
  //   4: <h1>Condition 4</h1>,
  // };


  // use switch case
  // const renderValue = () => {
  //   switch (count) {
  //     case 0:
  //       return <h1>Condition 0</h1>;
  //     case 1:
  //       return <h1>Condition 1</h1>;
  //     case 2:
  //       return <h1>Condition 2</h1>;
  //     case 3:
  //       return <h1>Condition 3</h1>;
  //     case 4:
  //       return <h1>Condition 4</h1>;
  //     default:
  //       return <h1>Others Condtions</h1>;
  //   }
  // };

  return (
    <div className="text-center">
      {/* <h1 className="text-2xl font-semibold text-center mt-3">
        Hide and Show or Toggle Functionality
      </h1>
      <button
        className="btn border my-4 border-red-500 bg-red-500 text-white p-3 rounded-md"
        onClick={() => setValue(!value)}
      >
        Change Value
      </button>
      <div className="font-semibold text-3xl">{value ? <User /> : null}</div> */}

      {/* User multiple conditons - Best way use object mapping or use switch case*/}

      <div>

        {/* Use object mapping */}
        {/* <h2>{count}</h2> */}

        {/* Button and count value are same call for both cases */}
        {/* <button
          className="btn border my-4 border-none bg-green-500 text-white p-3 rounded-md"
          onClick={() => setCount((prev) => prev + 1)}
        >Counting</button>
        {Condition[count] || <h1>Others Conditons</h1>} */}


        {/* Use Switch case render */}
        {/* <h4>{renderValue ()}</h4> */}

        {/* Props */}
        {/* <Props/> */}
        {/* <Input/> */}
        {/* <Skills/> */}
          {/* <Skills2/> */}
          {/* <RadioSelect/>
          <Clock/>
          <NestedLoop/>
          <Hooks/>
          <HooksEffect/>
          <DyanmicStyle/> */}
          {/* <RefHook/> */}
          {/* <UseFormStatus/> */}
          {/* <UseFormStatus2/> */}
          {/* <Derived/> */}
          {/* <ShallowDeepCopy/> */}
          {/* <ExampleDeepVsShallow/> */}
          {/* <UpdateObject/> */}
          <UpdateArray/>
          <UseActionHook/>
      </div>
    </div>
  );
}
