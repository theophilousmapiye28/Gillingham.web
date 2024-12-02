import React from "react";
import Button from "./Buttons";
import Image from "next/image";

function OurMission() {
  return (
    <div className="flex bg-white flex-col lg:flex-row items-center align-middle pt-20 lg:px-20 md:px-5 px-5 gap-10 lg:h-[100vh]">
      {/* Text Section */}
      <div className="lg:w-1/2 w-full xl:space-y-12">
        <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold">Our Mission</h1>
        <p className="pt-6 text-gray-700 xl:text-xl">
          Our School endeavours to promote our pupils to become literate and numerate.
        </p>
        <ul className="list-disc pl-6 pt-3 text-gray-700 leading-relaxed xl:leading-snug xl:text-xl">
          <li>
            To develop essential skills in the acquisition of relevant knowledge, adaptability to their social and physical environment.
          </li>
          <li>
            To create mutual co-operation between school administration, parents, teachers, and pupils, and to enhance that togetherness for the achievement of set goals.
          </li>
        </ul>
        <div className="pt-6 lg:pt-0 lg:pb-3">
          <Button text="Enroll Today" />
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex flex-col lg:flex-row gap-6 relative">
        {/* Left Image Column */}
        <div className="flex flex-col gap-5 lg:w-1/3 w-full">
          <div className="relative w-full h-[calc(50%)] lg:h-[calc(60%)] xl:h-[calc(70%)]">
            <Image
              src="/Images/our_mission_kid.svg"
              alt="Refurbished School"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="relative w-full h-[calc(50%)] lg:h-[calc(60%)] xl:h-[calc(70%)]">
            <Image
              src="/Images/our_mission_kids.svg"
              alt="Refurbished School"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-2/3 w-full flex items-center relative">
          {/* Dotted Image positioned behind the "kid holding certificate" image */}
          <div className="absolute top-5 left-40 lg:left-36 xl:left-44 transform translate-x-4 -translate-y-10 z-0 opacity-75">
            <Image
              src="/Images/dots.svg"
              alt="Dotted"
              width={200}
              height={200}
              layout="fixed"
              className="z-0"
            />
          </div>

          <div className="relative w-full aspect-[1/2] lg:aspect-[3/4] xl:aspect-[2/3] z-10">
            <Image
              src="/Images/Certificate_kid.svg"
              alt="Young Boy"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
