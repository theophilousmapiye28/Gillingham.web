import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import coop from '@/public/Images/coop.png';
import hat from '@/public/Images/hat.png';
import group from '@/public/Images/group.png';
import Button from '../components/Buttons';

const Aca2 = () => {
  return (
    <div className="flex flex-wrap justify-around min-h-screen mr-10 mt-[11vh] w-full px-4">
      <div className="ml-2 space-y-4 max-w-lg lg:ml-0 lg:space-y-4 lg:w-1/2 md:w-2/3 sm:w-full">
        <h3 className="text-3xl font-bold md:text-4xl">Empowering Futures:</h3>
        <div className="text-base text-md">
          <p >At our school, we provide a comprehensive education from  
            Grade 1 to Grade 7, preparing students for their academic journey 
            ahead. As an accredited ZIMSEC examination center, we proudly
            maintain a commendable pass rate of 85%, reflecting our 
            commitment to academic excellence.</p>
        </div>
        <div className="text-md ">
          <p>Our dedicated teachers foster a supportive learning environment <br />r
         and offer a wide range of subjects:</p>
          <ul className="list-none ">
            <li><i className="bg-black h-2 w-2 mr-1 rounded-md inline-block" /> English</li>
            <li><i className="bg-black h-2 w-2 mr-1 rounded-md inline-block" /> Mathematics</li>
            <li><i className="bg-black h-2 w-2 mr-1 rounded-md inline-block" /> Social Science</li>
            <li><i className="bg-black h-2 w-2 mr-1 rounded-md inline-block" /> Shona</li>
            <li><i className="bg-black h-2 w-2 mr-1 rounded-md inline-block" /> Science and Technology</li>
            <li><i className="bg-black h-2 w-2 mr-1 rounded-md inline-block" /> VPA</li>
            <li><i className="bg-black h-2 w-2 mr-1 rounded-md inline-block" /> FAREM</li>
          </ul>
        </div>
        <div>
          <Link href="/contact">
            <Button text="Enquire Now" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col  space-y-3 w-full lg:w-1/3 mt-10 lg:mt-0 md:pr-10 items-center sm:w-full sm:mt-5">
        <div className="flex space-x-2 w-full justify-center">
          <Image className="" height={200} width={200} src={coop} alt="" />
          <Image className="" height={200} width={200} src={hat} alt="" />
        </div>
        <Image className="mt-3" height={300} width={500} src={group} alt="" />
      </div>
    </div>
  );
};

export default Aca2;


