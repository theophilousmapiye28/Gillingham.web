

import React from 'react';
import Image from 'next/image';
import cap from '@/public/Images/Graduation Cap.svg';
import team from '@/public/Images/Teamwork.svg';
import trust from '@/public/Images/Trust.svg';
import emp from '@/public/Images/Empathy.svg';
import moral from '@/public/Images/Morale.svg';
import opac from '@/public/Images/Opacity.svg';
import container from '@/public/Images/Rectangle 19.png';

const Values = () => {
  return (
    <div className="min-h-[100vh] flex flex-col lg:flex-row flex-wrap-reverse justify-center items-center space-y-5 lg:space-y-0 md:space-x-10 lg:space-x-[10vh] mt-[10vh] p-4">
      
      {/* Values Grid */}
      <div className="flex flex-col space-y-8 lg:ml-[15vh]">
        
        <div className="flex flex-wrap gap-4 lg:gap-8 justify-center">
          {/* Card */}
          <div className="bg-white space-y-3 flex flex-col p-3 rounded-xl items-center justify-center drop-shadow-2xl transform transition-transform duration-300 hover:scale-105 w-28 md:w-36 lg:w-40">
            <Image src={cap} alt="Excellence Icon" />
            <p className="font-bold text-center">EXCELLENCE</p>
          </div>
          
          <div className="bg-white space-y-3 flex flex-col p-3 rounded-xl items-center justify-center drop-shadow-2xl transform transition-transform duration-300 hover:scale-105 w-28 md:w-36 lg:w-40">
            <Image src={team} alt="Teamwork Icon" />
            <p className="font-bold text-center">TEAM WORK</p>
          </div>
          
          <div className="bg-white space-y-3 flex flex-col p-3 rounded-xl items-center justify-center drop-shadow-2xl transform transition-transform duration-300 hover:scale-105 w-28 md:w-36 lg:w-40">
            <Image src={trust} alt="Commitment Icon" />
            <p className="font-bold text-center">COMMITMENT</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 lg:gap-8 justify-center">
          <div className="bg-white space-y-3 flex flex-col p-3 rounded-xl items-center justify-center drop-shadow-2xl transform transition-transform duration-300 hover:scale-105 w-28 md:w-36 lg:w-40">
            <Image src={emp} alt="Empathy Icon" />
            <p className="font-bold text-center">EMPATHY</p>
          </div>
          
          <div className="bg-white space-y-3 flex flex-col p-3 rounded-xl items-center justify-center drop-shadow-2xl transform transition-transform duration-300 hover:scale-105 w-28 md:w-36 lg:w-40">
            <Image src={moral} alt="Integrity Icon" />
            <p className="font-bold text-center">INTEGRITY</p>
          </div>
          
          <div className="bg-white space-y-3 flex flex-col p-3 rounded-xl items-center justify-center drop-shadow-2xl transform transition-transform duration-300 hover:scale-105 w-28 md:w-36 lg:w-40">
            <Image src={opac} alt="Transparency Icon" />
            <p className="font-bold text-center">TRANSPARENCY</p>
          </div>
        </div>
      </div>

      {/* Core Values Image and Title */}
      <div className="min-h-[100vh] flex flex-col lg:flex-row flex-wrap-reverse justify-center items-center space-y-10 lg:space-y-0 lg:space-x-[10vh] mt-[10vh] p-4">
      
      {/* Core Values Image with Particles */}
      <div className="relative text-center lg:text-left particle-container">
        <h3 className="absolute z-10 top-1/4 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-[8vh] text-white text-6xl md:text-4xl lg:text-5xl font-bold">
          Our <br /> Core <br /> Values
        </h3>
        
        <Image src={container} className="h-[65vh] md:text-center w-full max-w-lg mx-auto lg:mx-0" alt="Core Values Background" />
        
        {/* Particle effect */}
        <div className="particles"></div>
      </div>
    </div>
    </div>
  );
};

export default Values;
