import React from 'react';
import Image from "next/image";
import Button from './Buttons';

function WhoWeAre() {
  return (
    <div className="flex flex-col lg:flex-row lg:px-20 pt-10 lg:pt-0 px-5 justify-center bg-white items-center relative lg:h-[100vh]">
      {/* Image section */}
      <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col lg:flex-row relative space-y-5 lg:space-y-0 order-last pt-12 lg:pt-0">
        {/* Dots Image positioned at the top, overlapping the first image */}
        <div className="absolute lg:top-[-20px] lg:left-[-20px] left-[-18px] transform z-0 opacity-75">
          <Image src="/Images/dots.svg" alt="Dotted" width={200} height={200} layout="fixed" />
        </div>

        {/* Kid raising hand image */}
        <div className="relative z-10 w-full sm:w-[54%] flex items-center">
          <Image
            src="/Images/kid_raising_hand.svg"
            alt="Kid Raising"
            layout="responsive"
            width={10}
            height={10}
            className="object-contain"
          />
        </div>

        {/* Kid smiling image */}
        <div className="relative z-10 w-full sm:w-[46%] sm:block flex items-center lg:ml-5">
          <Image
            src="/Images/kid_smiling_who_we_are.svg"
            alt="Kids"
            layout="responsive"
            width={10}
            height={10}
            className="object-contain"
          />
        </div>
      </div>

      {/* Text section */}
      <div className="w-full lg:w-[40%] xl:w-[45%] mt-5 lg:mt-0 lg:ml-10 order-first lg:order-last">
        <h1 className="font-bold text-5xl">Who we are</h1>
        <p className="text-xl lg:text-base lg:leading-[20.5px] xl:text-xl lg:mt-3">
          Gillingham Primary School is the first school to be established in Dzivarasekwa in 1963 under the leadership of Mr. Dzvova, who was replaced by Mr. Akino and then Mr. Mahere. After Mr. Mahere, the school was headed by Mr. Jambawo, who resigned in 2006 on medical grounds.
          <br /><br />
          The school faced a very difficult time from 2007 to 2009, struggling with broken furniture and other challenges during this period.
        </p>
        <div className="pt-5">
          <Button text="Read More" />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
