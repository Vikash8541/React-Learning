import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/users", label: "User" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between backdrop-blur-md bg-white/80 px-6 py-3 rounded-full shadow-lg shadow-rose-100/50 border border-white/20">
          <div className="flex space-x-1">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === item.to
                    ? "bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-300/30"
                    : "text-slate-600 hover:text-rose-600 hover:bg-rose-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 shadow-md"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;