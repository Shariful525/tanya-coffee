import { assets } from "@/assets/images";
import Image from "next/image";
import React from "react";
import TextPlayball from "../shared/TextPlayball";

const ClickForCoffeeButton = ({
  className = "pl-1.5 pr-3.5 py-1.5",
  imageClassName = "w-[55px] h-[42px]",
  textClassName = "text-lg",
  text = "Click",
  handleClick,
}: {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  text?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      type="submit"
      role="button"
      className={`cursor-pointer  bg-secondary text-white flex items-center rounded-full relative ${className}`}
    >
      <div className={`${imageClassName} relative -mt-6`}>
        <Image
          src={assets.coffeeCup}
          alt="Coffee Cup"
          fill
          className="object-contain inset-0 w-full h-full"
        />
      </div>
      <p className={`${textClassName} select-none`}>
        {text} For <TextPlayball>Coffee</TextPlayball>
      </p>
    </button>
  );
};

export default ClickForCoffeeButton;
