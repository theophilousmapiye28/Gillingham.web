import React from 'react';
import Button from '../components/Buttons';
import OutlineButton from '../components/OutlineButton';
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className='px-5 lg:px-20 bg-white'>
      {/* Start Hero */}
      <div className='grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:justify-between items-center align-middle xl:h-[100vh]'>
        <div className='flex flex-col lg:justify-center'>
          {/* Centered Text */}
          <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h1 className='text-6xl md:text-[145px] xl:text-8xl lg:text-7xl font-bold pt-10'>
              Gillingham
            </h1>
            <h2 className='text-[40px] md:text-[100px] xl:text-7xl lg:text-[45px] font-bold text-primaryBlue lg:pt-2 md:pt-0'>
              Primary School
            </h2>
            <p className='pt-5 lg:w-96 text-xl lg:text-xl md:text-3xl'>
              Education characterized by an outstanding breadth of opportunity. We teach you the right skills.
            </p>
          </div>
          {/* Buttons */}
          <div className='flex flex-col justify-center md:justify-center lg:justify-start lg:flex-row md:flex-col pt-5'>
            <Button text="Enroll Today" />
            <OutlineButton text="Learn More" />
          </div>
        </div>
        <div className='pt-4 sm:pt-0'>
          {/* Specifying layout as responsive for Hero image */}
          <Image src="/Images/Hero_Image.svg" alt="Hero image" width={500} height={500} layout="responsive" />
        </div>
      </div>
      {/* End Hero */}
    </div>
  );
};

export default HeroSection;

