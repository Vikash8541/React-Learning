import React from "react";

const NestStudentData = ({ value }) => {
  return (
    <div>
      {value.map((stu) => (
        <div className="details bg-indigo-50 px-4 py-3 my-2 rounded-lg shadow-sm" key={stu.id}>
          <div className="ml-2 text-gray-700">
            <h4 className="text-lg font-semibold">👤 {stu.name}</h4>
            <p className="text-sm text-gray-600">📧 {stu.email}</p>
            <p className="text-sm text-gray-600">🎂 Age: {stu.age}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NestStudentData;
