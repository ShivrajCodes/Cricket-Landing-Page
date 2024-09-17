import React, { useState, useEffect } from 'react';
import stadImage from '../assets/stad.jpeg';
import stadImage2 from '../assets/stad2.jpeg';
import stadImage3 from '../assets/stad3.jpeg';
import stadImage4 from '../assets/stad4.jpeg';

const Tournaments: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddListingClick = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const cardData = [
    { image: stadImage, date: '14 Feb 2024', title: '5-over a side tournament in Jaipur', color: '#fff5d2' },
    { image: stadImage2, date: '15 Feb 2024', title: '10-over a side tournament in Pune', color: '#a2cf93' },
    { image: stadImage3, date: '16 Feb 2024', title: '50-over a side tournament in Bangalore', color: '#ffcccb' },
    { image: stadImage4, date: '17 Feb 2024', title: '20-over a side tournament in Hyderabad', color: '#add8e6' },
    { image: stadImage, date: '18 Feb 2024', title: '5-over a side tournament in Kanpur', color: '#fff5d2' },
    { image: stadImage2, date: '19 Feb 2024', title: '10-over a side tournament in Lucknow', color: '#a2cf93' },
    { image: stadImage3, date: '20 Feb 2024', title: '50-over a side tournament in Chandigarh', color: '#ffcccb' },
    { image: stadImage4, date: '21 Feb 2024', title: '20-over a side tournament in Goa', color: '#add8e6' },
    { image: stadImage, date: '22 Feb 2024', title: '5-over a side tournament in Indore', color: '#fff5d2' },
    { image: stadImage2, date: '23 Feb 2024', title: '10-over a side tournament in Nagpur', color: '#a2cf93' },
  ];

  return (
    <div className="relative flex flex-col items-center p-4 sm:p-6 gap-6">
      {showPopup && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg z-50">
          Coming Soon
        </div>
      )}

      {/* Header Text */}
      <div className="text-center">
        <span className="text-black text-[36px] sm:text-[48px] lg:text-[64px] font-semibold font-['Inter']">
          Ongoing Tournaments by
        </span>
        <span className="text-[#a2cf93] text-[36px] sm:text-[48px] lg:text-[64px] font-semibold font-['Inter']">
          &nbsp;XYZ
        </span>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="h-[300px] sm:h-[350px] lg:h-[400px] w-full sm:w-[300px] lg:w-[350px] p-4 sm:p-6 rounded-2xl shadow flex flex-col justify-start items-start gap-3"
            style={{ backgroundColor: card.color }}
          >
            <img src={card.image} alt="Stadium" className="w-full h-[120px] sm:h-[160px] lg:h-[190px] object-cover rounded-2xl" />
            <div className="text-black/50 text-sm sm:text-base font-semibold font-['Inter'] mt-2">{card.date}</div>
            <div className="w-full text-black text-sm sm:text-lg font-semibold font-['Inter'] leading-tight">
              {card.title}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-[#1b1b1b] text-sm sm:text-base font-semibold font-['Inter']">2</div>
              <div className="w-[19px] h-[19px] relative origin-top-left">
                <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
                </svg>
              </div>
            </div>
            <div className="mt-auto w-full flex justify-end">
              <button className="px-4 py-2 bg-[#fbfbfb] rounded-full border border-[#7f7f7f] flex items-center gap-2">
                <span className="text-[#1b1b1b] text-xs sm:text-sm font-semibold font-['Inter']">Read more</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4">
                  <path d="M10 7L15 12L10 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Listing Section */}
      <div className="relative w-full flex justify-center items-center mt-12">
        <div className="absolute -left-8 sm:-left-12">
          <div className="w-[200px] sm:w-[300px] lg:w-[454px] h-[200px] sm:h-[300px] lg:h-[454px] bg-[#fff5d2] rounded-full blur-[150px] sm:blur-[180px] lg:blur-[265.40px]"></div>
        </div>
        <div className="absolute -right-8 sm:-right-12">
          <div className="w-[200px] sm:w-[300px] lg:w-[454px] h-[200px] sm:h-[300px] lg:h-[454px] opacity-30 bg-[#a2cf93] rounded-full blur-[150px] sm:blur-[180px] lg:blur-[265.40px]"></div>
        </div>
        <div className="w-full lg:w-[912px] text-center">
          <span className="text-black text-[36px] sm:text-[48px] lg:text-[84px] font-semibold font-['Inter']">List your own</span>
          <span className="text-[#a2cf93] text-[36px] sm:text-[48px] lg:text-[84px] font-semibold font-['Inter']">&nbsp;Tournament</span>
        </div>
      </div>

      {/* Add Listing Button */}
      <button
        onClick={handleAddListingClick}
        className="h-[50px] sm:h-[60px] lg:h-[71px] px-[20px] sm:px-[25px] lg:px-[33px] py-[12px] sm:py-[16px] lg:py-[21px] bg-[#a2cf93] rounded-[30px] sm:rounded-[33px] border border-[#7f7f7f] flex justify-center items-center gap-2.5 mt-6"
      >
        <div className="text-[#1b1b1b] text-sm sm:text-lg lg:text-2xl font-semibold font-['Inter']">Add Listing</div>
        <div className="w-[20px] sm:w-[25px] lg:w-[29px] h-[20px] sm:h-[25px] lg:h-[29px] relative"></div>
      </button>
    </div>
  );
};

export default Tournaments;
