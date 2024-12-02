import React from 'react'
import Navbar from "@/app/components/Navbar";
import Aca1  from  "@/app/components/Aca1";
import Aca2  from  "@/app/components/Aca2";
import Aca3   from "@/app/components/Aca1Courasel"
import Academgallery from "@/app/components/Academgallery"
import Image from 'next/image';

import bunner from "@/public/Images/AcaBunner.png"




const page = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
   
      <div className="min-h-[40vh] md:h-[100vh] flex items-center mr-5 ml-5 justify-center w-auto relative academic">
  {/* Background Image */}
  <Image 
    src={bunner} 
    alt="" 
    layout="fill" 

    className="absolute inset-0 z-0"
  />

  {/* Overlay and Text */}
  <div className="absolute mb-5 min-h-[40vh] md:mt-2 md:h-[97vh] mr-2 ml-4 md:mb-7 rounded-[6%] inset-0 bg-black/50 z-5 flex items-center justify-center">
    <h2 className="text-4xl md:text-6xl lg:text-8xl text-white  font-bold">
      Academics
    </h2>
  </div>
</div>
      <Aca1 />
      <Aca2 />
      <Aca3/>
      <Academgallery/>
    </div>
  )
}

export default page
