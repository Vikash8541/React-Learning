import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-600 bg-amber-100 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Let's Create <span className="text-rose-500">Together</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto">
            Have a project in mind or want to collaborate? Drop us a message and we'll get back to you.
          </p>
        </div>

        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-xl shadow-rose-100/50 border border-slate-100">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="peer w-full px-4 py-3 border-0 border-b-2 border-slate-200 focus:border-rose-500 focus:ring-0 placeholder-transparent"
              placeholder="Your Name"
            />
            <label 
              htmlFor="name" 
              className="absolute left-0 -top-3.5 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-slate-600 peer-focus:text-sm"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full px-4 py-3 border-0 border-b-2 border-slate-200 focus:border-amber-500 focus:ring-0 placeholder-transparent"
              placeholder="Your Email"
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 -top-3.5 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-slate-600 peer-focus:text-sm"
            >
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows="4"
              className="peer w-full px-4 py-3 border-0 border-b-2 border-slate-200 focus:border-rose-500 focus:ring-0 placeholder-transparent"
              placeholder="Your Message"
            ></textarea>
            <label 
              htmlFor="message" 
              className="absolute left-0 -top-3.5 text-slate-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-slate-600 peer-focus:text-sm"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90"
          >
            Send Message
            <span className="ml-2">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;