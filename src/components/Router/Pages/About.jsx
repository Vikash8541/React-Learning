import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/10 to-amber-400/10"></div>
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-amber-200/40"></div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-rose-600 bg-rose-100 rounded-full">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            We Illuminate <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-400">Digital Experiences</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            SunGlow is a creative agency focused on meaningful digital experiences that resonate with users and drive engagement.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            {['Innovation', 'Quality', 'Passion', 'Results'].map((item) => (
              <div key={item} className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-2">
                  <span className="text-lg">✓</span>
                </div>
                <h3 className="font-medium text-slate-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;