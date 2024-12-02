"use client";

import React, { useState } from "react";
import Image from "next/image";

const OurGallery = () => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const handleImageClick = (imagePath: string) => {
    setEnlargedImage(imagePath);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="px-4 bg-white sm:px-20 md:px-5 lg:px-20 pt-20 relative">

      <h1 className="text-4xl lg:text-5xl font-bold pb-5">Our Gallery</h1>

      {/* First Grid with 2 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => handleImageClick("/Images/Certificate_girl.svg")}
        >
          <Image
            src="/Images/Certificate_girl.svg"
            alt="Certificate girl"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity"></div>
        </div>
        <div
          className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => handleImageClick("/Images/Girl_scouts.svg")}
        >
          <Image
            src="/Images/Girl_scouts.svg"
            alt="Girl scout"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity"></div>
        </div>
      </div>

      {/* Second Grid with 3 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div
          className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => handleImageClick("/Images/kids_mic.svg")}
        >
          <Image
            src="/Images/kids_mic.svg"
            alt="Kids singing"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity"></div>
        </div>
        <div
          className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => handleImageClick("/Images/Certificate_girl_with_sir.svg")}
        >
          <Image
            src="/Images/Certificate_girl_with_sir.svg"
            alt="Kid holding a certificate with sir"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity"></div>
        </div>
        <div
          className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => handleImageClick("/Images/Sprout_laptop.svg")}
        >
          <Image
            src="/Images/Sprout_laptop.svg"
            alt="Kid on sprout laptop"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity"></div>
        </div>
      </div>

      {/* Third Grid with 2 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div
          className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => handleImageClick("/Images/kids_dressed_well.svg")}
        >
          <Image
            src="/Images/kids_dressed_well.svg"
            alt="Kids dressed well"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity"></div>
        </div>
        <div
          className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer group"
          onClick={() => handleImageClick("/Images/2_kids_on_laptop.svg")}
        >
          <Image
            src="/Images/2_kids_on_laptop.svg"
            alt="Kids on laptop"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity"></div>
        </div>
      </div>

      {/* Enlarged Image Overlay */}
      {enlargedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeEnlargedImage}
        >
          <Image
            src={enlargedImage}
            alt="Enlarged view"
            fill
            style={{ objectFit: "contain" }}
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeEnlargedImage}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default OurGallery;
