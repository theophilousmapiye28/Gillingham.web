import React from "react";

interface Card {
  image: string; // Image path as a string
  heading: string;
  description: string;
  color: string; // Background color
  textColor?: string; // Text color (optional)
}

const Card = (props: Card) => {
  return (
    <div
      className={`flex flex-col bg-${props.color} space-y-3 p-3 lg:p-3 xl:p-3 w-[50%] lg:w-[100%]`}
    >
      <div className="flex flex-col">
        <img
          src={props.image}
          alt="CardImage"
          style={{ width: "39%" }} // Inline styling
          className="lg:w-[39%]"
        />
        <h4
          className={`font-bold xl:text-xl`}
          style={{ color: props.textColor || "inherit" }} // Use textColor prop or fallback
        >
          {props.heading}
        </h4>
      </div>
      <p
        className={`text-xs lg:text-sm xl:text-lg xl:w-[89%]`}
        style={{ color: props.textColor || "inherit" }} // Use textColor prop or fallback
      >
        {props.description}
      </p>
    </div>
  );
};

export default Card;
