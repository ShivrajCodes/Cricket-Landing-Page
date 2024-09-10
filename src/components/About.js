import React from 'react';
import bowlerImage from '../assets/bowler.png';  

const About = () => {
  return (
    <div id="about-section" className="w-full h-auto bg-green-500 p-10 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img src={bowlerImage} alt="Bowler" className="w-full max-w-[300px] h-auto md:max-w-[400px] rounded-lg object-cover" />
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 fade-in-animation">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-right">About Us</h2>
        <p className="text-white text-lg md:text-xl mt-5 text-right">
          
          
        XYZ Organization specializes in hosting cricket competitions across diverse formats, catering to enthusiasts from grassroots to professional levels. Our mission is to provide well-organized, exciting, and competitive cricket events that foster sportsmanship and community engagement. Whether it's local leagues, corporate tournaments, or national championships, we ensure a seamless experience with expert event management, state-of-the-art facilities, and a commitment to fair play. By promoting cricket at all levels, XYZ Organization aims to inspire players and fans alike, creating memorable experiences and nurturing the growth of the sport. Join us in celebrating cricket's passion and prowess through our expertly curated competitions.
        </p>
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
