
"use client";

import React, { useState } from "react";
import Image from "next/image";
import nextIcon from "@/public/Images/Next page.png";
import prevIcon from "@/public/Images/Next page (1).png";
import Mrs1 from "@/public/Images/Mrs Meza.svg";
import Mrs2 from "@/public/Images/Mrs Mrs Mabaire.svg";
import Mrs3 from "@/public/Images/Mrs Chibaya.svg";
import line from "@/public/Images/Rectangle 69.svg";

const teamMembers = [
  { name: "Mrs Meza", role: "Deputy Head", image: Mrs1 },
  { name: "Mrs Mabaire", role: "Deputy Head", image: Mrs2 },
  { name: "Mrs Chibaya", role: "Teacher In Charge", image: Mrs3 },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate the teamMembers array to ensure seamless looping
  const duplicatedTeamMembers = [
    ...teamMembers,
    ...teamMembers, // Duplicate the array
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-10">
      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100)}%)`,
          }}
        >
          {duplicatedTeamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[45vh] w-full m-2  md:w-1/3 flex flex-col  space-y-3 items-center text-center  "
            >
              <Image
                className="h-[45vh] w-[40vh] object-cover rounded-md"
                src={member.image}
                alt={member.name}
              />
              <h2  className="text-xl md:text-2xl font-bold mt-2">
                {member.name}
              </h2>
              <Image src={line} alt="line" className="mx-auto" />
              <p className="mt-1 mb-2">{member.role}</p>
            </div>

          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 flex justify-between w-full max-w-7xl mx-auto mt-5">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center p-3 bg-white text-white rounded-full hover:bg-gray-900 transition"
        >
          <Image
            src={prevIcon}
            alt="Previous"
            className="h-8 w-8 md:h-10 md:w-10"
          />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center p-3 bg-white text-white rounded-full hover:bg-gray-900 transition"
        >
          <Image
            src={nextIcon}
            alt="Next"
            className="h-8 w-8 md:h-10 md:w-10"
          />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
