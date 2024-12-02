'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import teamG1 from '@/public/Images/teamg1.svg';
import teamG2 from '@/public/Images/teamG2.svg';
import teamG3 from '@/public/Images/firsttg.svg';
import teamG4 from '@/public/Images/teamg.svg';
import teamG5 from '@/public/Images/team2r3.svg';

const images = [teamG1, teamG2, teamG3, teamG4, teamG5];

const TeamGallary: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (image: string) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-[70vh] flex flex-col mr-2 ml-2 space-y-2 md:space-y-4 items-center justify-center">
      <div className="flex flex-wrap">
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className="relative h-[45vh] w-[45vh] m-2">
            <Image
              className="cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg"
              src={image}
              alt={`Team Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              onClick={() => openImage(image.src)} // Pass the image source
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-1 space-y-3 mr-2 ml-2 flex-wrap">
        {images.slice(2).map((image, index) => (
          <div key={index + 2} className="relative h-[40vh] w-[40vh] m-2">
            <Image
              className="cursor-pointer transition-transform duration-300 hover:scale-105 rounded-lg"
              src={image}
              alt={`Team Image ${index + 3}`}
              layout="fill"
              objectFit="cover"
              onClick={() => openImage(image.src)} // Pass the image source
            />
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div className="relative animate-pop max-w-[90vw] max-h-[90vh]">
            <Image
              className="rounded-lg"
              src={selectedImage}
              alt="Enlarged Team Image"
              layout="intrinsic"
              width={800}
              height={600}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeImage}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamGallary;
