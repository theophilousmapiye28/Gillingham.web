import React from 'react';
import Image from 'next/image';
import HM from '@/public/Images/Rectangle 82.svg';
import line from '@/public/Images/Rectangle 69.svg';

const Team = () => {
  return (
    <div className="p-6">
      <h1 className="text-5xl text-center font-bold mb-6">Meet Our Team</h1>

      <div className="mt-[11vh] flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image className="h-[40vh] md:h-[50vh] w-auto object-cover" src={HM} alt="Team Member" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center text-center md:text-left space-y-3">
          <h3 className="text-4xl font-bold text-gray-900">Mr. Murape</h3>
          <Image className="mx-auto md:mx-0 pr-10" src={line} alt="Line separator" />
          <h2 className="text-xl font-bold text-gray-700">Headmaster</h2>
          <p className="text-lg text-gray-600 ">
   


          Education characterises by an outstanding breadth of opportunity. <br />
           We teach you the right skills. Education characterises by an outstanding <br />
            breadth of opportunity. We teach you the right skills. <br /> <br />
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
