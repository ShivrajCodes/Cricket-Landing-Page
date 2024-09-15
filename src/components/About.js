import React, { useEffect, useRef, useState } from 'react';
import kohliImage from '../assets/kohli.jpg';
import hardikImage from '../assets/hardik.jpg';
import sachinImage from '../assets/sachin.jpg';
import dhoniImage from '../assets/dhoni.jpg';
import bumrahImage from '../assets/bumrah.jpg';
import bowlerImage from '../assets/bowler.png';
import customerImg from '../assets/customerimg.jpeg';

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

const About = React.forwardRef((props, ref) => {
  const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [imageRef, imageVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [textRef, textVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div id="about-section" ref={ref} className="w-full h-auto overflow-x-hidden">
      
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

      
      <div
        ref={imageRef}
        className={`w-full h-auto p-5 md:p-10 flex justify-center items-center mt-10 transition-opacity duration-1000 ${
          imageVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center">
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

          <div className="relative w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] rounded-[11px] shadow border-8 border-[#fff5d2]">
            <img
              className="w-full h-full object-cover rounded-[11px]"
              src={kohliImage}
              alt="Kohli"
            />
          </div>

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
      <div className="w-full h-auto flex flex-col justify-center items-center mt-20">
  <div className="w-full max-w-[935px] h-auto flex flex-wrap items-center justify-center text-center px-4 sm:px-0">
    <span className="text-black text-[40px] sm:text-[84px] font-semibold font-['Inter']">
      What are
    </span>
    <span className="text-[#a2cf93] text-[40px] sm:text-[84px] font-semibold font-['Inter']">
      &nbsp;they
    </span>
    <span className="text-black text-[40px] sm:text-[84px] font-semibold font-['Inter']">
      &nbsp;saying
    </span>
  </div>

  
  <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 mt-10">
    
    <div className="w-full h-auto px-[15px] sm:px-[23px] py-[22px] bg-[#f9f9f9] rounded-[20px] border border-[#e2e2e2] flex flex-col justify-start items-start gap-[21px]">
      <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
      XYZ Organization is the best when it comes to hosting cricket tournaments! They ensure everything runs smoothly, from scheduling matches to managing the teams. The staff is incredibly supportive, and the facilities are top-notch. Our team felt well taken care of throughout the tournament. The organization also puts a strong emphasis on fair play, which made the experience even more enjoyable. If you're looking for a professionally run cricket tournament, XYZ Organization is the way to go. We can’t wait to participate again next season!
      </div>
      <div className="flex justify-start items-center gap-[17px]">
        <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full flex justify-center items-center">
          <img className="w-full h-full object-cover" src={customerImg} alt="Sarah Smith" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="text-black text-lg sm:text-xl font-medium font-['Inter']">
            Sam Smith
          </div>
          <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
            Cricketer
          </div>
        </div>
      </div>
    </div>

    
    <div className="w-full h-auto px-[15px] sm:px-[23px] py-[22px] bg-[#f9f9f9] rounded-[20px] border border-[#e2e2e2] flex flex-col justify-start items-start gap-[21px]">
      <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
      I’ve been part of several cricket tournaments over the years, but XYZ Organization stands out for their professionalism and attention to detail. They provide great infrastructure, smooth communication, and an overall wonderful experience. The pitches were in excellent condition, and they had well-trained umpires ensuring fair gameplay. The event management was also exceptional, and the atmosphere was perfect for both players and spectators. I highly recommend XYZ Organization for any cricket enthusiast looking to compete in well-organized tournaments
      </div>
      <div className="flex justify-start items-center gap-[17px]">
        <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full flex justify-center items-center">
          <img className="w-full h-full object-cover" src={customerImg} alt="John Doe" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="text-black text-lg sm:text-xl font-medium font-['Inter']">
            Joe Byers
          </div>
          <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
            Cricketer
          </div>
        </div>
      </div>
    </div>

    
    <div className="w-full h-auto px-[15px] sm:px-[23px] py-[22px] bg-[#f9f9f9] rounded-[20px] border border-[#e2e2e2] flex flex-col justify-start items-start gap-[21px]">
      <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
      Our team participated in a tournament organized by XYZ Organization, and it was an incredible experience. The tournament was well-planned and executed with precision. The staff was helpful, and everything from the registration process to the final match was seamless. The level of competition was high, and we enjoyed every moment. XYZ Organization truly knows how to create a competitive but friendly environment, which made the tournament more enjoyable for everyone. We look forward to joining their future events!
      </div>
      <div className="flex justify-start items-center gap-[17px]">
        <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full flex justify-center items-center">
          <img className="w-full h-full object-cover" src={customerImg} alt="Jane Doe" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="text-black text-lg sm:text-xl font-medium font-['Inter']">
            Tim Smith
          </div>
          <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
            Cricketer
          </div>
        </div>
      </div>
    </div>

    
    <div className="w-full h-auto px-[15px] sm:px-[23px] py-[22px] bg-[#f9f9f9] rounded-[20px] border border-[#e2e2e2] flex flex-col justify-start items-start gap-[21px]">
      <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
      XYZ Organization exceeded our expectations with their cricket tournament. The venues were top-quality, and the entire event was organized with professionalism. The communication was excellent, and they kept everyone informed throughout the tournament. The rules were clear, and the matches were conducted fairly. What stood out the most was their commitment to ensuring that both players and spectators had a great experience. I highly recommend XYZ Organization to anyone looking for a well-run cricket event.
      </div>
      <div className="flex justify-start items-center gap-[17px]">
        <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full flex justify-center items-center">
          <img className="w-full h-full object-cover" src={customerImg} alt="Mark Lee" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="text-black text-lg sm:text-xl font-medium font-['Inter']">
            David Oak
          </div>
          <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
            Cricketer
          </div>
        </div>
      </div>
    </div>

    
    <div className="w-full h-auto px-[15px] sm:px-[23px] py-[22px] bg-[#f9f9f9] rounded-[20px] border border-[#e2e2e2] flex flex-col justify-start items-start gap-[21px]">
      <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
      I had the pleasure of participating in a cricket tournament hosted by XYZ Organization, and I must say, they did an outstanding job! The event was meticulously organized, with no delays or confusion. The facilities were impressive, and the tournament was a fantastic experience for both players and fans. XYZ Organization created an atmosphere that was both competitive and fun, which is exactly what you want in a sports event. Their professionalism and dedication to the sport are clear. I would definitely participate in their tournaments again
      </div>
      <div className="flex justify-start items-center gap-[17px]">
        <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full flex justify-center items-center">
          <img className="w-full h-full object-cover" src={customerImg} alt="Emily White" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="text-black text-lg sm:text-xl font-medium font-['Inter']">
            John Walsh
          </div>
          <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
            Cricketer
          </div>
        </div>
      </div>
    </div>

    
    <div className="w-full h-auto px-[15px] sm:px-[23px] py-[22px] bg-[#f9f9f9] rounded-[20px] border border-[#e2e2e2] flex flex-col justify-start items-start gap-[21px]">
      <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
      XYZ Organization knows how to put together a great cricket tournament. The pitches were fantastic, and the facilities were well-maintained. What impressed me most was their organization – everything ran on time, and the whole event was stress-free for us as participants. The staff was friendly and attentive, making sure all teams had what they needed. The competition was fierce, but it was all in the spirit of sportsmanship, thanks to the positive environment created by XYZ Organization. Highly recommended for anyone looking to join a quality cricket tournament
      </div>
      <div className="flex justify-start items-center gap-[17px]">
        <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] rounded-full flex justify-center items-center">
          <img className="w-full h-full object-cover" src={customerImg} alt="David Brown" />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="text-black text-lg sm:text-xl font-medium font-['Inter']">
            Mitchell Brown
          </div>
          <div className="text-black text-sm sm:text-base font-normal font-['Inter']">
            Cricketer
          </div>
        </div>
      </div>
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
});

export default About;
