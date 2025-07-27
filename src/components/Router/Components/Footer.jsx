import React from "react";

const Footer = () => {
  return (
    <footer className="shadow-lg relative bg-gradient-to-b from-white to-rose-100 mt-24 pt-16 pb-8 px-4 text-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-30"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 mb-6">
          {['Twitter', 'Dribbble', 'GitHub'].map((social) => (
            <a 
              key={social}
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-slate-600 hover:text-rose-500"
            >
              <span className="sr-only">{social}</span>
              <span className="text-lg">{social.charAt(0)}</span>
            </a>
          ))}
        </div>
        
        <p className="text-sm text-slate-500 mb-2">
          &copy; {new Date().getFullYear()} SunGlow. All radiance reserved.
        </p>
        <p className="text-xs text-slate-400">
          Crafted with <span className="text-rose-400">♥</span> and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;