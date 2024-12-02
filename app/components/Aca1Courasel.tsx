"use client";

import React, { useState } from "react";
import Image from "next/image";
import code from "@/public/Images/youth coding.svg";
import trad from "@/public/Images/traditional dance.svg";
import next1 from "@/public/Images/Next page.png";
import next2 from "@/public/Images/Next page (1).png";

const Aca1Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: code,
      title: "Computer Coding",
    },
    {
      image: trad,
      title: "Traditional Dance",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-8">
      <h3 className="text-3xl font-bold md:text-4xl">Extracurricular Activities</h3>

      {/* Slide Display */}
      <div className="flex justify-center items-center w-full">
        <div className="relative w-[45vh] h-[60vh]">
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="object-cover rounded-xl"
            fill
          />
          <div className="absolute inset-0 bg-black  opacity-50 flex items-center justify-center rounded-xl">
            <h2 className="text-white text-3xl font-bold">{slides[currentIndex].title}</h2>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-8">
        <button
          onClick={prevSlide}
          className="transform transition-transform duration-300 hover:scale-105"
           aria-label="Previous Slide"
        >
          <Image src={next2} alt="Previous Slide" width={50} height={50} />
        </button>
        <button
          onClick={nextSlide}
          className="transform transition-transform duration-300 hover:scale-105"
          aria-label="Next Slide"
        >
          <Image src={next1} alt="Next Slide" width={50} height={50} />
        </button>
      </div>
    </div>
  );
};

export default Aca1Carousel;
