import React from 'react';
import stadImage from '../assets/stad.jpeg';
import stadImage2 from '../assets/stad2.jpeg';
import stadImage3 from '../assets/stad3.jpeg';
import stadImage4 from '../assets/stad4.jpeg';

const Tournaments: React.FC = () => {
  const cardData = [
    { image: stadImage, date: '14 Feb 2024', title: '5-over a side tournament in Jaipur', color: '#fff5d2' }, // golden
    { image: stadImage2, date: '15 Feb 2024', title: '10-over a side tournament in Pune', color: '#a2cf93' }, // green
    { image: stadImage3, date: '16 Feb 2024', title: '50-over a side tournament in Bangalore', color: '#ffcccb' }, // pink
    { image: stadImage4, date: '17 Feb 2024', title: '20-over a side tournament in Hyderabad', color: '#add8e6' }, // blue
    { image: stadImage, date: '18 Feb 2024', title: '5-over a side tournament in Kanpur', color: '#fff5d2' }, // golden
    { image: stadImage2, date: '19 Feb 2024', title: '10-over a side tournament in Lucknow', color: '#a2cf93' }, // green
    { image: stadImage3, date: '20 Feb 2024', title: '50-over a side tournament in Chandigarh', color: '#ffcccb' }, // pink
    { image: stadImage4, date: '21 Feb 2024', title: '20-over a side tournament in Goa', color: '#add8e6' }, // blue
    { image: stadImage, date: '22 Feb 2024', title: '5-over a side tournament in Indore', color: '#fff5d2' }, // golden
    { image: stadImage2, date: '23 Feb 2024', title: '10-over a side tournament in Nagpur', color: '#a2cf93' }, // green
  ];
  
  return (
    <div className="flex flex-col items-center p-6 gap-6">
      {/* Centered title */}
      <div className="text-center">
        <span style={{ color: 'black', fontSize: '64px', fontWeight: '600', fontFamily: 'Inter' }}>
          Ongoing Tournaments by
        </span>
        <span style={{ color: '#a2cf93', fontSize: '64px', fontWeight: '600', fontFamily: 'Inter' }}>
          &nbsp;XYZ
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="h-[400px] w-[350px] p-6 rounded-2xl shadow flex flex-col justify-start items-start gap-3"
            style={{ backgroundColor: card.color }}
          >
            {/* Image placeholder */}
            <img src={card.image} alt="Stadium" className="w-full h-[190px] object-cover rounded-2xl" />

            {/* Date */}
            <div className="text-black/50 text-base font-semibold font-['Inter'] mt-2">{card.date}</div>

            {/* Title */}
            <div className="w-full text-black text-lg font-semibold font-['Inter'] leading-tight">
              {card.title}
            </div>

            {/* Icon and number */}
            <div className="flex items-center gap-2 mt-2">
              <div className="text-[#1b1b1b] text-base font-semibold font-['Inter']">46</div>
              <div className="w-[19px] h-[19px] relative origin-top-left rotate-180">
                <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
                </svg>
              </div>
            </div>

            {/* Read more button */}
            <div className="mt-auto w-full flex justify-end" style={{ marginBottom: '-20px' }}>
              <div className="px-4 py-2 bg-[#fbfbfb] rounded-full border border-[#7f7f7f] flex items-center gap-2">
                <span className="text-[#1b1b1b] text-sm font-semibold font-['Inter']">Read more</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M10 7L15 12L10 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
