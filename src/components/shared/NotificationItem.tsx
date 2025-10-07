import { assets } from "@/assets/images";
import Image, { StaticImageData } from "next/image";
import React from "react";

const NotificationItem = ({
  photo,
  messege = "DWAAM’s Facebook advertising quiz. Join join join, now now now!",
  date = "Tuesday, 25th March 2025",
}: {
  photo?: StaticImageData;
  messege?: string;
  date?: string;
}) => {
  return (
    <div className="flex items-start gap-x-2.5">
      <div className="bg-white border border-secondary rounded-lg relative w-[80px] h-[68px] shrink-0 overflow-hidden">
        <Image
          src={photo ?? assets.quizDemo}
          alt="quiz demo"
          className="object-contain  w-full h-full inset-0"
          fill
        />
      </div>
      <div className="">
        <p className="text-black-70 font-bold text-base leading-5 line-clamp-2">
          {messege}
        </p>
        <small className="text-black-70 text-sm">{date}</small>
      </div>
    </div>
  );
};

export default NotificationItem;
