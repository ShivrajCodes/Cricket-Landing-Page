import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(''); // Clear email after form submission
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1"></main>
      <footer className="w-full bg-gradient-to-r from-[#292929] to-[#1b1b1b] px-4 py-8">
        <div className="max-w-[1728px] mx-auto">
          <div className="text-white text-4xl font-bold leading-10 mb-4">
            XYZ
          </div>
          <div className="w-full border-t border-[#7f7f7f] my-4"></div>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
            <div className="flex gap-8 text-white text-base font-semibold">
              <div>Home</div>
              <div>About</div>
              <div>Tournaments</div>
              <div>Contact</div>
            </div>
            <div className="text-white text-base text-center md:text-left">
              Created with ❤ by Shivraj. Copyright © 2024. All Rights Reserved.
            </div>
          </div>
          <div className="text-[#7f7f7f] text-xl mt-6">
            Bringing Cricketing action your way!
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white text-xl mb-4 md:mb-0">
              Want to receive weekly updates on the latest tournaments?
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <div className="text-white text-2xl font-semibold mb-2 md:mb-0">
                Subscribe to our newsletter!
              </div>
              <div className="flex gap-4 items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="px-5 py-3.5 bg-[#fbfbfb] rounded-[57px] text-[#7f7f7f] text-base font-medium outline-none w-full md:w-auto"
                  required
                />
                <button
                  type="submit"
                  className="p-3 bg-[#fbfbfb] rounded-full text-[#7f7f7f] hover:bg-gray-300 focus:outline-none"
                >
                  <FiArrowRight className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
          <div className="mt-6 flex gap-6">
            <a
              href="https://github.com/ShivrajCodes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex justify-center items-center"
            >
              <FaGithub className="text-[#292929] w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivraj-bhattacharya-516287282/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex justify-center items-center"
            >
              <FaLinkedin className="text-[#292929] w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/shivrajitsokay/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#fff5d2] rounded-[33px] border border-[#7f7f7f] flex justify-center items-center"
            >
              <FaInstagram className="text-[#292929] w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
