import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ aboutRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const activeLink = (path) => {
    return location.pathname === path
      ? 'md:relative md:after:absolute md:after:left-0 md:after:right-0 md:after:bottom-[-5px] md:after:w-full md:after:h-[4px] md:after:bg-red-500 md:after:rounded-full'
      : '';
  };

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
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
        } flex-col md:flex-row md:flex md:items-center gap-6 fixed md:static top-0 left-0 w-full md:w-auto bg-green-500 md:bg-transparent z-50`}
        style={{ height: menuOpen ? '100vh' : '0px', paddingTop: menuOpen ? '20px' : '0' }}
      >
        {menuOpen && (
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={closeMenu}
          >
            &times;
          </button>
        )}

        <Link
          to="/"
          className={`text-white md:text-black text-base font-semibold font-['Inter'] px-2 ${activeLink('/')}`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <button
          onClick={handleScrollToAbout}
          className={`text-white md:text-black text-base font-semibold font-['Inter'] px-2 ${activeLink('/about')} text-left`}
        >
          About
        </button>
        <Link
          to="/tournaments"
          className={`text-white md:text-black text-base font-semibold font-['Inter'] px-2 ${activeLink('/tournaments')}`}
          onClick={closeMenu}
        >
          Tournaments
        </Link>
        <Link
          to="/contact"
          className={`text-white md:text-black text-base font-semibold font-['Inter'] px-2 ${activeLink('/contact')}`}
          onClick={closeMenu}
        >
          Contact
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex items-center justify-center md:hidden"
          onClick={closeMenu}
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
