import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const activeLink = (path) => {
    return location.pathname === path
      ? 'relative after:absolute after:left-0 after:right-0 after:bottom-[-5px] after:w-full after:h-[4px] after:bg-red-500 after:rounded-full md:after:h-[6px]'
      : '';
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
        } flex-col md:flex-row md:flex md:items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto md:top-auto bg-white md:bg-transparent`}
      >
        <Link
          to="/"
          className={`text-black text-base font-semibold font-['Inter'] px-2 ${activeLink('/')}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-black text-base font-semibold font-['Inter'] px-2 ${activeLink('/about')}`}
        >
          About
        </Link>
        <Link
          to="/tournaments"
          className={`text-black text-base font-semibold font-['Inter'] px-2 ${activeLink('/tournaments')}`}
        >
          Tournaments
        </Link>
        <Link
          to="/contact"
          className={`text-black text-base font-semibold font-['Inter'] px-2 ${activeLink('/contact')}`}
        >
          Contact
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex items-center justify-center md:hidden"
        >
          <div className="text-[#1b1b1b] text-base font-semibold font-['Inter']">
            Register/Login
          </div>
        </Link>
      </nav>

      <Link
        to="/register"
        className="px-4 py-2 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex items-center justify-center hidden md:flex"
      >
        <div className="text-[#1b1b1b] text-base font-semibold font-['Inter']">
          Register/Login
        </div>
      </Link>
    </header>
  );
};

export default Header;
