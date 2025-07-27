import React from "react";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1722426365503-c406f62ed994?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/30 via-transparent to-amber-400/20"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-center px-6">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-rose-600 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
            Welcome to SunGlow
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
              Illuminate
            </span>{" "}
            Your Digital Presence
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            We craft immersive experiences that blend innovative design with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-rose-600 font-medium rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl">
              Explore Work
            </button>
            <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border-2 border-white/30 hover:border-white/60 transition-all backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="w-10 h-16 rounded-3xl border-4 border-white/30 flex justify-center p-1">
            <div className="w-3 h-3 rounded-full bg-white/80 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;