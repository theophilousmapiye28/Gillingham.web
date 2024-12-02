import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aca from '@/public/Images/firstimage1.svg';
import aca1 from '@/public/Images/fance.png';
import aca2 from '@/public/Images/class.png';
import aca3 from '@/public/Images/grade.png';
import Button from '../components/Buttons';

const Aca1 = () => {
  return (
    <div className="min-h-[100vh] p-5">
      
      {/* Main Section */}
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 md:ml-7 mt-5">
      <div className="w-full md:w-[32%]">
        <Image 
          src={aca} 
          height={250}
          width={300}
          className="mr-[10vh] w-full h-[250px] rounded-xl object-cover" 
          alt="Preschool" 
        />
       </div>
        <div className="space-y-5 md:space-y-8">
          <h3 className="text-4xl md:text-6xl font-bold font-sans leading-tight">
            Preschool
          </h3>
          
          <p className="text-lg space-y-3 md:text-xl font-light">
            We offer ECD A to ECD B programs designed to <br />
            nurture and develop your child’s early learning and <br />
            social skills in a supportive, engaging environment.
          </p>
          
          <div>
            <Link href="/contact">
              <Button text="Enquire Now" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Image Grid Section */}
      <div className="flex flex-col md:flex-row flex-wrap md:space-x-10 mt-5 md:mt-10 space-y-5 md:space-y-0 ml-5 md:space-x-5">
        <div className="w-full md:w-[32%]">
          <Image 
            height={250}
            width={300}
            src={aca1} 
            alt="Activity 1" 
            className="w-full h-[250px] rounded-xl object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="w-full md:w-[32%]">
          <Image 
            src={aca2} 
            alt="Activity 2" 
            className="w-full h-[250px] rounded-xl object-cover  transform transition-transform duration-300 hover:scale-105"
            height={250}
          />
        </div>
        
        <div className="w-full md:w-[32%]">
          <Image 
            src={aca3} 
            alt="Activity 3" 
            className="w-full h-[250px] rounded-xl object-cover  transform transition-transform duration-300 hover:scale-105"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Aca1;
