import React from 'react';
import kohliImage from '../assets/kohli.jpg';
import hardikImage from '../assets/hardik.jpg';
import sachinImage from '../assets/sachin.jpg';
import dhoniImage from '../assets/dhoni.jpg';
import bumrahImage from '../assets/bumrah.jpg';
import bowlerImage from '../assets/bowler.png';

const About = () => {
  return (
    <div id="about-section" className="w-full h-auto">
      <div className="w-full h-auto bg-green-500 p-10 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={bowlerImage} alt="Bowler" className="w-full max-w-[300px] h-auto md:max-w-[400px] rounded-lg object-cover" />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 fade-in-animation">
          <h2 className="text-white text-4xl md:text-5xl font-bold text-right">About Us</h2>
          <p className="text-white text-lg md:text-xl mt-5 text-right">
            XYZ Organization specializes in hosting cricket competitions across diverse formats, catering to enthusiasts from grassroots to professional levels. Our mission is to provide well-organized, exciting, and competitive cricket events that foster sportsmanship and community engagement. Whether it's local leagues, corporate tournaments, or national championships, we ensure a seamless experience with expert event management, state-of-the-art facilities, and a commitment to fair play. By promoting cricket at all levels, XYZ Organization aims to inspire players and fans alike, creating memorable experiences and nurturing the growth of the sport. Join us in celebrating cricket's passion and prowess through our expertly curated competitions.
          </p>
        </div>
      </div>

      <div className="w-full h-auto p-10 flex justify-center items-center mt-10">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center">
          <div className="flex flex-col mr-10">
            <div className="flex gap-5 mb-5">
              <img
                className="w-[154px] h-[231px] opacity-70 rounded-[32px]"
                src={hardikImage}
                alt="Hardik"
              />
              <img
                className="w-[159px] h-[217px] opacity-70 rounded-[32px]"
                src={sachinImage}
                alt="Sachin"
              />
            </div>
            <div className="flex gap-5">
              <img
                className="w-[198px] h-[242px] opacity-70 rounded-[32px]"
                src={dhoniImage}
                alt="Dhoni"
              />
              <img
                className="w-[189px] h-[231px] opacity-70 rounded-[32px]"
                src={bumrahImage}
                alt="Bumrah"
              />
            </div>
          </div>

          <div className="relative w-[450px] h-[450px] rounded-[11px] shadow border-8 border-[#fff5d2] ml-[110px]">
            <img
              className="w-full h-full object-cover rounded-[11px]"
              src={kohliImage}
              alt="Kohli"
            />
          </div>

          <div className="ml-10 flex flex-col justify-center mt-10 md:mt-0">
            <h1 className="text-black text-5xl font-semibold font-['Inter'] leading-tight">
              Be the next<span className="text-[#a2cf93]"> Big shot</span> in cricket
            </h1>
            <p className="mt-8 text-black text-xl font-medium leading-relaxed">
              Whether you're an aspiring player or seasoned pro, this is your chance to shine, make an impact, and be the next big shot of the game!
              <br />
              <br />
              We provide top-tier facilities for intense matches, showcase your talent and set yourself on the path to cricketing greatness!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-animation {
          animation: fadeIn 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
