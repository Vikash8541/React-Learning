const ShallowDeepCopy = () => {
  // Shallow Copy Example
  function shallowCopy() {
    const original = {
      name: "Vikash",
      address: {
        city: "Delhi",
      },
    };

    const shallowCopy = { ...original };
    shallowCopy.name = "Sharma";
    shallowCopy.address.city = "Mumbai";

    return {
      shallowCopy,
      original,
    };
  }

  const shallowCopyValue = shallowCopy();

  // Deep Copy Example
  function deepCopy() {
    const original = {
      name: "Vikash",
      address: {
        city: "Delhi",
      },
    };

    const deepCopy = JSON.parse(JSON.stringify(original));
    deepCopy.address.city = "Mumbai";

    return {
      deepCopy,
      original,
    };
  }

  const deepCopyValue = deepCopy();

  return (
    <div className="my-10 px-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-800">
        Difference between Shallow Copy and Deep Copy in React JS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shallow Copy Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-purple-600 mb-3">
            🟣 What is Shallow Copy?
          </h2>
          <p className="text-gray-700 mb-4">
            A shallow copy only duplicates the top-level of an object. Nested
            objects still point to the same memory reference.
          </p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
            <pre>
              {`// Original Object
${JSON.stringify(shallowCopyValue.original, null, 2)}

// Shallow Copy
${JSON.stringify(shallowCopyValue.shallowCopy, null, 2)}`}
            </pre>
          </div>
        </div>

        {/* Deep Copy Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            🟢 What is Deep Copy?
          </h2>
          <p className="text-gray-700 mb-4">
            A deep copy creates an entirely new object, recursively copying all
            nested values so that changes do not affect the original.
          </p>

          <div className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
            <pre>
              {`// Original Object
${JSON.stringify(deepCopyValue.original, null, 2)}

// Deep Copy
${JSON.stringify(deepCopyValue.deepCopy, null, 2)}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShallowDeepCopy;


/* - WHERE TO USE THESE 

| Use Case                       | Shallow or Deep?      | Notes                                 |
| ------------------------------ | --------------------- | ------------------------------------- |
| React `useState`, `useReducer` | ✅ Both (depends)      | Use shallow copy unless nested        |
| Arrays of objects              | ❌ Shallow ❗️Deep ✅    | Shallow will mutate inner objects     |
| DOM elements                   | ✅ Use `.cloneNode()`  | JS spread doesn't work on DOM nodes   |
| Class instances                | ❌ Shallow ❗️Deep ✅    | Use constructors to recreate properly |
| localStorage / JSON data       | ✅ Deep Copy           | Use `JSON.parse(JSON.stringify(...))` |
| Redux Toolkit / Immer          | ❌ Not needed manually | Immer handles it internally           |
| Custom functions / closures    | ⚠️ Reference remains  | Re-invoke function for isolated state |

*/