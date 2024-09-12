import React, { useEffect, useRef, useState } from 'react';
import kohliImage from '../assets/kohli.jpg';
import hardikImage from '../assets/hardik.jpg';
import sachinImage from '../assets/sachin.jpg';
import dhoniImage from '../assets/dhoni.jpg';
import bumrahImage from '../assets/bumrah.jpg';
import bowlerImage from '../assets/bowler.png';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const About = () => {
  const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [imageRef, imageVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [textRef, textVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div id="about-section" className="w-full h-auto overflow-x-hidden">
      {/* First Section: About */}
      <div
        ref={aboutRef}
        className={`w-full h-auto bg-green-500 p-5 md:p-10 flex flex-col md:flex-row justify-between items-center transition-opacity duration-1000 ${
          aboutVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={bowlerImage}
            alt="Bowler"
            className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 fade-in-animation text-center md:text-right">
          <h2 className="text-white text-3xl md:text-5xl font-bold">About Us</h2>
          <p className="text-white text-base md:text-xl mt-5">
            XYZ Organization specializes in hosting cricket competitions across
            diverse formats, catering to enthusiasts from grassroots to
            professional levels. Our mission is to provide well-organized,
            exciting, and competitive cricket events that foster sportsmanship
            and community engagement. Whether it's local leagues, corporate
            tournaments, or national championships, we ensure a seamless
            experience with expert event management, state-of-the-art
            facilities, and a commitment to fair play. By promoting cricket at
            all levels, XYZ Organization aims to inspire players and fans alike.
          </p>
        </div>
      </div>

      {/* Second Section: Player Images */}
      <div
        ref={imageRef}
        className={`w-full h-auto p-5 md:p-10 flex justify-center items-center mt-10 transition-opacity duration-1000 ${
          imageVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center">
          {/* Player Image Grid */}
          <div className="flex flex-col mb-10 lg:mb-0 lg:mr-10">
            <div className="flex gap-5 mb-5 justify-center">
              <img
                className="w-[100px] md:w-[154px] h-[150px] md:h-[231px] opacity-70 rounded-[32px]"
                src={hardikImage}
                alt="Hardik"
              />
              <img
                className="w-[100px] md:w-[159px] h-[150px] md:h-[217px] opacity-70 rounded-[32px]"
                src={sachinImage}
                alt="Sachin"
              />
            </div>
            <div className="flex gap-5 justify-center">
              <img
                className="w-[120px] md:w-[198px] h-[150px] md:h-[242px] opacity-70 rounded-[32px]"
                src={dhoniImage}
                alt="Dhoni"
              />
              <img
                className="w-[120px] md:w-[189px] h-[150px] md:h-[231px] opacity-70 rounded-[32px]"
                src={bumrahImage}
                alt="Bumrah"
              />
            </div>
          </div>

          {/* Kohli's Image in the Center */}
          <div className="relative w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] rounded-[11px] shadow border-8 border-[#fff5d2]">
            <img
              className="w-full h-full object-cover rounded-[11px]"
              src={kohliImage}
              alt="Kohli"
            />
          </div>

          {/* Text Section */}
          <div
            ref={textRef}
            className={`mt-10 lg:mt-0 lg:ml-10 flex flex-col justify-center text-center lg:text-left transition-opacity duration-1000 ${
              textVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-black text-3xl md:text-5xl font-semibold leading-tight">
              Be the next
              <span className="text-[#a2cf93]"> Big shot</span> in cricket
            </h1>
            <p className="mt-8 text-black text-base md:text-xl leading-relaxed">
              Whether you're an aspiring player or seasoned pro, this is your
              chance to shine, make an impact, and be the next big shot of the
              game! We provide top-tier facilities for intense matches, showcase
              your talent and set yourself on the path to cricketing greatness!
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
      `}</style>
    </div>
  );
};

export default About;
