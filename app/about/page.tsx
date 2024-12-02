'use client';

import React, { useState, useEffect } from 'react';
import Navbar from "@/app/components/Navbar";
import slide2 from "@/public/Images/BG img2.svg";
import slide3 from "@/public/Images/AcaBunner.png";
import hero from '@/public/Images/bun.svg';
import History from '@/app/components/History';
import Values from '@/app/components/Values';
import Vision from '@/app/components/Vision';
import Team from '@/app/components/Team';
import Teamcarousel from '@/app/components/Teamcarousel';
import TeamGallary from '@/app/components/TeamGallary';

const Page = () => {
  const images = [slide2.src, slide3.src, hero.src]; // Accessing the src directly

  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide every 4 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-[50vh] md:min-h-[100vh] flex items-center justify-center relative mx-5 sm:mx-10 rounded-[5%] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${images[currentSlide]})` }} // Using the direct image path for background
        ></div>

        {/* Overlay and Text */}
        <div className="min-h-[50vh] md:min-h-[97vh] absolute inset-0 bg-black/50 mx-1  flex items-center justify-center rounded-[5%]">
          <h2 className="text-4xl md:text-6xl z-30 lg:text-8xl text-white font-bold">
            Who we are
          </h2>
        </div>
      </div>

      {/* Content Sections */}
      <div className="sm:mx-5">
        <History />
        <Values />
        <Vision />
        <Team />
        <Teamcarousel />
        <TeamGallary />
      </div>
    </div>
  );
};

export default Page;
