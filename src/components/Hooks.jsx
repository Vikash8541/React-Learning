import React, { useState } from 'react';
import ChildHook from './ChildHook';

const App = () => {
  const [userName, setUserName] = useState("Vikash");

  return (
    <div className="text-center my-8">
      <h1 className="text-2xl font-bold mb-4">Using Props in useEffect</h1>
      <ChildHook name={userName} />

      <button
        className="bg-blue-400 text-white px-4 py-2 mt-4 rounded"
        onClick={() => setUserName("Sharma")}
      >
        Change Name
      </button>
    </div>
  );
};

export default App;
