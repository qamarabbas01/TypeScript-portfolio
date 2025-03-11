import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
  const flexBetween = "flex items-center justify-between";
  const hover = "hover:text-slate-300";
  const fontfamily = "italic font-bold";

  return (
    <nav className={`${flexBetween} fixed z-30 w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        <h1 className={`${fontfamily} text-3xl text-white`}>
          Personal <span className="text-yellow-300">Logo</span>
        </h1>
        <div className="flex items-center space-x-6">
          <a className={`${hover} text-white`} href="#home">
            Home
          </a>
          <a className={`${hover} text-white`} href="#about">
            About Us
          </a>
          <a className={`${hover} text-white`} href="#contact">
            Contact Us
          </a>
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
