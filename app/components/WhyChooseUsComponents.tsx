import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface WhyChooseUsComponentsProps {
  imageSrc: string | StaticImageData; // Accept both string and StaticImageData
  altText: string;
  title: string;
  description: string;
  bgColor: string;
  text: string;
}

const WhyChooseUsComponents: React.FC<WhyChooseUsComponentsProps> = ({
  imageSrc,
  altText,
  title,
  description,
  bgColor,
  text,
}) => {
  return (
    <div className={`${bgColor} lg:p-10  flex flex-col gap-3`}>
      <Image
        src={imageSrc}
        alt={altText}
      />
      <h1 className={`${text} font-bold`}>{title}</h1>
      <p className={`${text} text-sm md:text-base pt-3`}>{description}</p>
    </div>
  );
};

export default WhyChooseUsComponents;
