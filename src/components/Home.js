import React from 'react';
import { Link } from 'react-router-dom';  
import cricketGif from '../assets/cricket.gif';

const Home = () => {
  return (
    <div className="w-full h-auto relative mt-20 flex flex-col md:flex-row">
      <div className="flex flex-col justify-start items-start gap-14 w-full md:w-1/2 px-10 md:px-14">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="pl-1.5 pr-5 py-1.5 bg-[#fff5d2]/50 rounded-[78px] justify-center items-center gap-2.5 inline-flex">
            <div className="p-1.5 bg-[#fff5d2] rounded-[25px] flex-col justify-center items-center gap-2.5 inline-flex"></div>
            <div>
              <span className="text-black text-base font-semibold font-['Inter']">Trusted by </span>
              <span className="text-[#a2cf93] text-base font-semibold font-['Inter']">241</span>
              <span className="text-black text-base font-semibold font-['Inter']"> people</span>
            </div>
          </div>
          <div className="text-black text-5xl md:text-6xl lg:text-8xl font-semibold font-['Inter'] leading-tight">
            Concerned About Hosting Tournaments? <span className="text-[#a2cf93]">Hit those worries out of the park!</span>
          </div>
          <div className="text-black text-lg md:text-xl lg:text-2xl font-medium font-['Inter'] max-w-[600px]">
            Our work is to host cricket competitions focused on delivering thrilling and competitive cricket experiences, organizing tournaments in various formats, and fostering a vibrant community of players and fans alike.
          </div>
        </div>
        <div className="flex justify-start items-start gap-5">
          <Link to="/register" className="px-7 py-4 bg-[#a2cf93] rounded-[33px] border border-[#7f7f7f] justify-center items-center gap-2.5 flex">
            <div className="text-[#1b1b1b] text-lg md:text-xl font-semibold font-['Inter']">Register for a tournament</div>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full mt-10 md:mt-0 md:ml-10">
        <img src={cricketGif} alt="Cricket" className="w-full h-auto object-cover rounded-[14px]" />
      </div>
    </div>
  );
};

export default Home;
