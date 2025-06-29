import React, { useState } from "react";

const Skills2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState([]);

  // Submit Data
  const submitData = (e) => {
    e.preventDefault();
    alert(
      `Name : ${name}\nEmail: ${email}\nPassword: ${password}\nSkills : ${skills}`
    );
    clearData();
  };

  // Clear Data
  const clearData = () => {
    setName("");
    setEmail("");
    setPassword("");
    setSkills([]);
  };

  // Checkbox Funtionality

  const checkSkills = (e) => {
    // Destructing the target and checked value

    const { value, checked } = e.target;
    checked
      ? setSkills([...skills, value])
      : setSkills(skills.filter((item) => item !== value));
  };

  return (
    <>
      <section>
        <h1 className="text-4xl font-bold text-black my-4">Skills</h1>

        <form action="" onSubmit={submitData}>
          <div className="info-details flex flex-col gap-4 items-center justify-center my-4">
            <input
              onChange={(e) => setName(e.target.value)}
              className="border border-black border-2 py-4 px-2 rounded-md w-[300px]"
              type="text"
              placeholder="Enter you name"
              value={name}
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black border-2 py-4 px-2 rounded-md w-[300px]"
              type="text"
              placeholder="Enter you email"
              value={email}
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black border-2 py-4 px-2 rounded-md w-[300px]"
              type="text"
              placeholder="Enter you password"
              value={password}
              required
            />
          </div>

          <div className="skills-box flex items-center justify-center gap-3 my-3">
            {["PHP", "JS", "HTML", "CSS", "REACT"].map((skill) => (
              <div key={skill} className="flex items-center gap-2 mb-2">
                <label
                  className="text-xl font-semibold text-black"
                  htmlFor={skill}
                >
                  {skill.toUpperCase()}
                </label>
                <input
                  onChange={checkSkills}
                  type="checkbox"
                  id={skill}
                  value={skill}
                  checked={skills.includes(skill)}
                  className="h-[20px] w-[20px]"
                />
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-semibold text-black my-4">
            {skills.length > 0 && (
                <div className="skill-list flex items-center justify-center gap-3">
                    {skills.map((val,i)=>(
                        <span className="bg-blue-600 px-4 text-white py-2 rounded-md text-sm" key={i}>{val}</span>
                    ))}
                </div>
            )}
          </h2>

          <button
            type="submit"
            className="bg-green-500 text-white text-lg font-semibold px-4 py-2 rounded-md mx-3 my-2"
          >
            Submit
          </button>
          <button
            type="reset"
            onClick={clearData}
            className="bg-red-500 text-white text-lg font-semibold px-4 py-2 rounded-md mx-3 my-2"
          >
            Clear
          </button>
        </form>
      </section>
    </>
  );
};

export default Skills2;
