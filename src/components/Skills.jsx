import React, { useState } from 'react'

const Skills = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [val, setVal] = useState([])

  const resetData = () => {
    setName("")
    setEmail("")
    setPass("")
    setVal([])
  }

  const submitForm = (e) => {
    e.preventDefault()
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${pass}\nSkills : ${val}`)
    resetData()
  }

  const handleCheck = (e) => {
    const { value, checked } = e.target
    checked ? setVal([...val, value]) : setVal(val.filter((item) => item !== value))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-5">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">🚀 Skills Form</h1>
        <form onSubmit={submitForm} className="space-y-6">
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
          />
          <input
            type="password"
            value={pass}
            required
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter your Password"
            className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition"
          />

          {/* Skills Section */}
          <div>
            <label className="block text-lg font-semibold text-purple-700 mb-2">Select Your Skills</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["php", "js", "html", "css", "react"].map((skill) => (
                <label
                  key={skill}
                  htmlFor={skill}
                  className="flex items-center space-x-2 bg-purple-100 p-3 rounded-lg cursor-pointer hover:bg-purple-200 transition"
                >
                  <input
                    type="checkbox"
                    id={skill}
                    value={skill}
                    onChange={handleCheck}
                    checked={val.includes(skill)}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="capitalize font-medium text-purple-800">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={resetData}
              className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Clear
            </button>
          </div>

          {/* Skills Output */}
          <div className="pt-4">
            {val.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {val.map((skill, index) => (
                  <span key={index} className="bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Skills
