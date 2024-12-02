import React from "react";
import Card from "./Card";

function WhyChooseUs() {
  return (
    <div className="flex bg-white flex-wrap px-5 lg:px-20 w-[100%] pt-12 lg:pt-0">
      
      <div className="lg:w-[55%] flex flex-wrap xl:justify-end">
        <div className="flex flex-wrap lg:flex-col lg:w-[45%]">
          <Card
            color="primaryBlue"
            textColor="#ffffff" 
            image="/images/education_icon.svg"
            heading="Quality Education"
            description="We offer a rigorous curriculum with highly qualified teachers focused on academic excellence."
          />
          <Card
            color="faintBlue"
            textColor="#333333" 
            image="/images/Hollister.svg"
            heading="Holistic Development"
            description="Our diverse environment fosters respect and collaboration among all students."
          />
        </div>
        <img
          src="/images/why_choose_boy.png"
          alt="Student"
          className="lg:w-[55%] xl:w-[53%]"
        />
      </div>
    
      <div className="lg:w-[45%] flex flex-wrap order-first lg:order-none">
        <div className="bg-faintGray flex flex-row lg:flex-col w-[100%] p-[12%] lg:p-[5%] xl:p-[8%] items-end">
          <p className="text-4xl lg:5xl">Why</p>
          <p className="text-4xl lg:5xl font-bold">Choose</p>
          <p className="text-4xl lg:5xl font-bold">US?</p>
        </div>
        <div className="flex">
          <Card
            color="primaryBlue"
            textColor="#ffffff" // White text
            image="/images/User Groups.svg"
            heading="Inclusive Community"
            description="Our diverse environment fosters respect and collaboration among all students."
          />
          <Card
            color="faintBlue"
            textColor="#000000" 
            image="/images/Online_support.svg"
            heading="Strong Support Systems"
            description="We nurture creativity, critical thinking, and leadership for a balanced growth of every student."
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
