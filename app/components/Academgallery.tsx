"use client";
import React, { useState } from "react";
import Image from "next/image";
import fg1 from "@/public/Images/first1.svg";
import fg2 from "@/public/Images/first 2.svg";
import fg3 from "@/public/Images/first3.svg";
import fg4 from "@/public/Images/first4.svg";
import fg5 from "@/public/Images/first5.svg";
import fg6 from "@/public/Images/first6.svg";
import fg7 from "@/public/Images/first7.svg";
import fg8 from "@/public/Images/first8.svg";

const images = [fg1, fg2, fg3, fg4, fg5, fg6, fg7, fg8];

const Academgallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="gallery" className="px-[7%]">
      <h1 className="text-4xl lg:text-5xl my-10 font-bold text-center">Our Gallery</h1>

      {/* Gallery Rows */}
      <div className="grid gap-4">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.slice(0, 2).map((img, index) => (
            <div key={index} className="relative h-[40vh] w-full">
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="h-full w-full object-cover cursor-pointer transform rounded-3xl transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.slice(2, 5).map((img, index) => (
            <div key={index + 2} className="relative h-[40vh] w-full">
              <Image
                src={img}
                alt={`Gallery Image ${index + 3}`}
                className="h-full w-full object-cover cursor-pointer transform rounded-3xl transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(index + 2)}
              />
            </div>
          ))}
        </div>

        {/* Last Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.slice(5).map((img, index) => (
            <div key={index + 5} className="relative h-[40vh] w-full">
              <Image
                src={img}
                alt={`Gallery Image ${index + 6}`}
                className="h-full w-full object-cover cursor-pointer transform rounded-3xl transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(index + 5)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full flex items-center">
            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
              onClick={prevImage}
            >
              &#10094;
            </button>
            <div className="max-h-[80vh] max-w-full mx-auto">
              <Image
                src={images[currentIndex]}
                alt={`Gallery Image ${currentIndex + 1}`}
                className="object-contain rounded-lg"
              />
            </div>
            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
              onClick={nextImage}
            >
              &#10095;
            </button>
            <button
              className="absolute top-5 right-5 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Academgallery;
