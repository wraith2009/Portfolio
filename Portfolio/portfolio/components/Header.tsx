"use client";

import React from "react";
import ShineBorder from "./shineBorder";

const Header: React.FC = () => {
  return (
    <ShineBorder
      borderRadius={10} // Customize the radius of the shine border
      borderWidth={2}   // Customize the width of the border
      duration={10}     // Customize the shine animation duration
      color={["#00FFAA", "#00D1FF", "#0096FF"]} // Colors for the shine effect
      className="w-[300px] h-[60px] left-1/2 transform -translate-x-1/2 mt-10 bg-black "
    >
      <div
        className="w-[298px] h-[58px] shadow-lg rounded-lg py-4 px-6 -mt-[11px] -ml-[11px]"
        style={{
          background: "linear-gradient(135deg, #060d1e, #2b2d34, #060d1e)",
        }}
      >
        <nav className="flex justify-center space-x-4">
          <a
            href="#home"
            className="text-slate-200 font-mono hover:text-white cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-slate-200 font-mono hover:text-white cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-slate-200 font-mono hover:text-white cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-slate-200 font-mono hover:text-white cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </div>
    </ShineBorder>
  );
};

export default Header;
