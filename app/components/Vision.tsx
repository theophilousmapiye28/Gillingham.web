import React from 'react'
import Button from '@/app/components/Buttons'
import Link from 'next/link'
import Image from 'next/image';
import v1 from '@/public/Images/preefects.svg'
import v2 from '@/public/Images/v2.svg'

const Vision = () => {
  return (
    <div id='vision' className='min-h-[100vh] flex md:flex-row  flex-col items-center justify-center  space-x-2 mx-5'>
      {/* Text Section */}
      <div className='flex flex-col space-y-6 mb-6 md:mb-0 md:w-1/2'>
        <h2 className='text-5xl mb-[4vh] font-bold md:text-4xl'>Our Vision</h2>
        <p className='text-xl lg:text-base lg:leading-[20.5px] xl:text-xl'>
          Gillingham Primary School aims to provide a <br />
          Welcoming, Safe and Friendly School whilst stilling <br />
          Unhu/Ubuntu in learners at the same time developing <br />
          learners intellectually towards attaining <br />
          Socio-Economic Transformation and Entrepreneurship <br />
          Skills
        </p>
        <Link href="/contact">
          <Button text="Enroll today" />
        </Link>
      </div>

      {/* Image Section */}
      <div className='flex flex-col space-y-5 md:flex-row w-full md:w-1/2 items-center'>
        <Image 
          className='w-full sm:w-[54%] object-contain'  
          src={v1} 
          alt="Vision Image 1" 
        />
        <Image 
          className='w-full sm:w-[46%]  lg:ml-5 object-contain'  
          src={v2} 
          alt="Vision Image 2" 
        />
      </div>
    </div>
  );
}

export default Vision;
