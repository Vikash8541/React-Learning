import React from "react";
import NestStudentData from "./NestStudentData";

const NestedLoop = () => {
  const college = [
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iitdelhi.com",
      student: [
        { name: "Raju", age: 29, id: 1, email: "raju@test.com" },
        { name: "Rancho", age: 23, id: 2, email: "rancho@test.com" },
        { name: "Ravi", age: 26, id: 3, email: "ravi@test.com" },
      ],
    },
    {
      name: "IIT Kanpur",
      city: "Kanpur",
      website: "www.iitKanpur.com",
      student: [
        { name: "Raju", age: 29, id: 1, email: "raju@test.com" },
        { name: "Rancho", age: 23, id: 2, email: "rancho@test.com" },
        { name: "Ravi", age: 26, id: 3, email: "ravi@test.com" },
      ],
    },
    {
      name: "IIT Dhanbad",
      city: "Dhanbad",
      website: "www.iitdhanbad.com",
      student: [
        { name: "Raju", age: 29, id: 1, email: "raju@test.com" },
        { name: "Rancho", age: 23, id: 2, email: "rancho@test.com" },
        { name: "Ravi", age: 26, id: 3, email: "ravi@test.com" },
      ],
    },
  ];

  return (
    <div className="list min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 underline">
        Student Colleges
      </h2>
      <div className="boxes flex items-center justify-center gap-5 flex-wrap md:flex-nowrap">
        {college.map((val, idx) => (
          <div
            className=" w-full md:w-1/3 hover:translate-y-2 transition 0.5s ease-linear mx-auto font-semibold text-2xl my-6 py-6 px-6 rounded-xl bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300"
            key={idx}
          >
            <h2 className="mb-4 bg-gradient-to-r from-lime-300 to-lime-500 text-white rounded-md mt-4 py-3 px-4 shadow-sm">
              {val.name}
            </h2>
            <div className="bg-gray-100 py-3 px-4 rounded-md mb-3 shadow-sm">
              <h4 className="text-[18px] font-medium mb-1">
                City :{" "}
                <span className="font-semibold text-indigo-600">
                  {val.city}
                </span>
              </h4>
              <h4 className="text-[18px] font-medium">
                Website :{" "}
                <span className="font-semibold text-indigo-600">
                  {val.website}
                </span>
              </h4>
            </div>
            <NestStudentData value={val.student} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedLoop;
