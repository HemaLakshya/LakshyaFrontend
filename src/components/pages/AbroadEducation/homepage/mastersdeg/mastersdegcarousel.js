import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 
import techtribe from '../../../../../static/design/techtribe.svg'

import Degree2Card from './mastersdegcard'

const degree2 = [
  {
    id: 1,
    title:'Course 1',
    onlinedur:'3 weeks',
    offlinedur:'4 weeks',
    onlinefees:'₹1000',
    offlinefees:'₹1000',
    image:techtribe

  },
  {
    id: 2,
    title:'Course 2',
    onlinedur:'3 weeks',
    offlinedur:'4 weeks',
    onlinefees:'₹1000',
    offlinefees:'₹1000',
    image:techtribe
  },
  {
    id: 3,
    title:'Course 3',
    onlinedur:'3 weeks',
    offlinedur:'4 weeks',
    onlinefees:'₹1000',
    offlinefees:'₹1000',
    image:techtribe
  },
  {
    id: 4,
    title:'Course 4',
    onlinedur:'3 weeks',
    offlinedur:'4 weeks',
    onlinefees:'₹1000',
    offlinefees:'₹1000',
    image:techtribe
  },
  {
    id: 5,
    title:'Course 5',
    onlinedur:'3 weeks',
    offlinedur:'4 weeks',
    onlinefees:'₹1000',
    offlinefees:'₹1000',
    image:techtribe
  },
  {
    id: 6,
    title:'Course 6',
    onlinedur:'3 weeks',
    offlinedur:'4 weeks',
    onlinefees:'₹1000',
    offlinefees:'₹1000',
    image:techtribe
  },
  {
    id: 7,
    title:'Course 7',
    onlinedur:'3 weeks',
    offlinedur:'4 weeks',
    onlinefees:'₹1000',
    offlinefees:'₹1000rs',
    image:techtribe
  },
  {
    id: 8,
    title:'Course 8',
    onlinedur:'3 weeks',
    offlinedur:'4 weeks',
    onlinefees:'₹1000rs',
    offlinefees:'₹1000rs',
    image:techtribe
  },
  
];

const MastersDegCarousel = () => {
  const [degree2Data, setdegree2Data] = useState(degree2);

  const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 400;
  };

  const scrollRight = () => {
    document.getElementById('content').scrollLeft += 400;
  };

  return (
    <div className="relative bg-white mx-12 mb-16">
      <div className="text-center py-8 mt-8 text-[32px] font-oxygen font-semibold text-black">Programs for Masters</div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollLeft}
          className="p-3 rounded-full text-black bg-slate-400 hover:bg-slate-200"
        >
          <FiChevronLeft />
        </button>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollRight}
          className="p-3 rounded-full text-black bg-slate-400 hover:bg-slate-200"
        >
          <FiChevronRight />
        </button>
      </div>

      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {degree2Data.map((deg2) => (
          <div key={deg2.id} className="mr-4">
            <Degree2Card deg2={deg2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MastersDegCarousel;
