import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="w-full px-6 py-4 flex justify-between items-center bg-white">
    <div className="text-black text-2xl font-bold leading-10 font-['Inter']">
      XYZ
    </div>
    <nav className="hidden md:flex items-center gap-6">
      <Link to="/" className="text-black text-base font-semibold font-['Inter']">Home</Link>
      <Link to="/about" className="text-black text-base font-semibold font-['Inter']">About</Link>
      <Link to="/tournaments" className="text-black text-base font-semibold font-['Inter']">Tournaments</Link>
      <Link to="/contact" className="text-black text-base font-semibold font-['Inter']">Contact</Link>
    </nav>
    <Link to="/register" className="px-4 py-2 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex items-center justify-center">
      <div className="text-[#1b1b1b] text-base font-semibold font-['Inter']">
        Register/Login
      </div>
    </Link>
  </header>
);

export default Header;
