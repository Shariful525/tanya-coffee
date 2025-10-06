import { assets } from "@/assets/images";
import Image from "next/image";
import React from "react";

const NotificationItem = () => {
  return (
    <div className="flex items-start gap-x-2.5">
      <div className="bg-white border border-secondary rounded-lg w-[80px] h-[68px] shrink-0 overflow-hidden">
        <Image src={assets.quizDemo} alt="quiz demo" />
      </div>
      <div className="">
        <p className="text-black-80 font-bold text-lg leading-5 line-clamp-2">
          DWAAM’s Facebook advertising quiz. Join join join, now now now!
        </p>
        <small className="text-black-70 text-sm">
          Tuesday, 25th March 2025
        </small>
      </div>
    </div>
  );
};

export default NotificationItem;
