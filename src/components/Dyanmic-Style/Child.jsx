import React from 'react';

const Child = ({ text, bg, flexBox }) => {
  const userData = [
    {
      id: 1,
      image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740",
      name: "Vikash Sharma",
      Position: "Software Developer",
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740",
      name: "Rajiv Kumar",
      Position: "Web Developer",
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740",
      name: "Saurya Chauhan",
      Position: "JAVA Developer",
    },
    {
      id: 4,
      image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740",
      name: "Vivek Kikani",
      Position: "PHP Developer",
    },
    {
      id: 5,
      image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid&w=740",
      name: "Balram Rathod",
      Position: "Wordpress Developer",
    },
  ];

  return (
    <div className={`gap-6 w-full my-4 px-4 ${flexBox ? "flex items-center justify-center flex-wrap" : "block"}`}>
      {userData.map((item) => (
        <div
          key={item.id}
          className="card w-max mb-4 flex items-center justify-center flex-col pb-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          style={{ backgroundColor: bg, color: text }}
        >
          <img
            className="mb-3 h-[200px] w-[200px] rounded-t-lg object-cover object-center"
            src={item.image}
            alt={item.name}
          />
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-base font-medium mt-1">{item.Position}</p>
        </div>
      ))}
    </div>
  );
};

export default Child;
