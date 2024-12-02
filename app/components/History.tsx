import React from 'react';
import Image from 'next/image';
import pre from '@/public/Images/pre.svg';

const History = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-10 mx-5 mb-10 min-h-[100vh]">
      {/* Text Section */}
      <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl mb-5 font-bold md:text-6xl">Our History</h1>
        <p className="text-base font-light leading-relaxed md:text-xl">
          Gillingham Primary School is the first school to be established in Dzivarasekwa in 
          1963 under the leadership of Mr Dzvova, who was replaced by Mr Akino then Mr Mahere. 
          After Mahere, the school was headed by Mr Jambawo, who resigned in 2006 on medical grounds. 
          The school faced many difficulties from 2007 to 2009, such as broken furniture, and infrastructure 
          was run down. Pupils were literally sitting on the floor as there was no furniture, and the textbook 
          ratio was 1:50. Toilets were in very bad condition.<br /><br />
          When Mrs Madzokere took over as Head of the school in September 2009, she was faced with these challenges, 
          which she has managed to overcome. As we speak, the school now has enough furniture for everyone, and 
          pupils have enough textbooks for every subject.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-5 md:mt-0 flex justify-center">
        <Image className="object-cover rounded-lg" src={pre} alt="History Image" />
      </div>
    </div>
  );
};

export default History;
