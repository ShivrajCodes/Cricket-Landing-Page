import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white">
      <div className="text-black text-2xl font-bold leading-10 font-['Inter']">
        XYZ
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        <div className="flex flex-col space-y-1">
          <span className="block w-6 h-[2px] bg-black"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
        </div>
      </div>

      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row md:flex md:items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto md:top-auto bg-white md:bg-transparent bg-opacity-90 md:bg-opacity-100`}
      >
        {/* Links updated with anchor tags for smooth scrolling */}
        <a href="#home" className="text-black text-base font-semibold font-['Inter'] px-2">
          Home
        </a>
        <a href="#about-section" className="text-black text-base font-semibold font-['Inter'] px-2">
          About
        </a>
        <a href="#tournaments" className="text-black text-base font-semibold font-['Inter'] px-2">
          Tournaments
        </a>
        <a href="#contact" className="text-black text-base font-semibold font-['Inter'] px-2">
          Contact
        </a>
        <a href="#register" className="px-4 py-2 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex items-center justify-center md:hidden">
          <div className="text-[#1b1b1b] text-base font-semibold font-['Inter']">
            Register/Login
          </div>
        </a>
      </nav>

      <a href="#register" className="px-4 py-2 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex items-center justify-center hidden md:flex">
        <div className="text-[#1b1b1b] text-base font-semibold font-['Inter']">
          Register/Login
        </div>
      </a>
    </header>
  );
};

export default Header;
