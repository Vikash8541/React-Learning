import React, { useState } from 'react';

const Derived = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  const addNewUserHandle = () => {
    if (newUser.trim() === '') {
      alert('Add a user');
      return;
    }
    setUsers([...users, newUser]);
    setNewUser('');
  };

  // Derived values
  const totalUser = users.length;
  const lastUser = users[users.length - 1] || 'Please type';
  const uniqueUser = [...new Set(users)].length;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-6">User Tracker</h1>

      <div className="space-y-2 mb-6">
        <h2 className="text-xl font-medium text-gray-700">👥 Total Users: <span className="font-bold text-black">{totalUser}</span></h2>
        <h2 className="text-xl font-medium text-gray-700">🧍 Last User: <span className="font-bold text-black">{lastUser}</span></h2>
        <h2 className="text-xl font-medium text-gray-700">🔁 Unique Users: <span className="font-bold text-black">{uniqueUser}</span></h2>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <input
          className="flex-1 py-2 px-4 rounded-md border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter the user"
        />
        <button
          className="py-2 px-6 bg-green-800 hover:bg-green-900 text-white rounded-md transition duration-200"
          onClick={addNewUserHandle}
        >
          Add User
        </button>
      </div>

      <div className="space-y-3">
        {users.map((item, index) => (
          <h4
            key={index}
            className="text-lg font-semibold bg-green-100 text-green-900 py-2 px-4 rounded-md shadow-sm"
          >
            {index + 1}. {item}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Derived;


// In Derived State , actually we are declared very less amount of state , so the performance of application will be fast. I have declared a examples.