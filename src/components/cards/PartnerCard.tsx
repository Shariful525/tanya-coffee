"use client";
import { ITeamMember } from "@/interfaces/teamMember.interface";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";

const PartnerCard = ({ data }: { data?: ITeamMember }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = data?.personReviews ?? [];
  const review = reviews[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white p-5 rounded-[20px] space-y-4">
      {/* profile info */}
      <div className="w-full space-y-4 text-center">
        <div className="w-full h-[400px] relative group">
          <Image
            src={data?.profilePhoto ?? ""}
            alt="team member"
            className="object-contain inset-0 w-full h-full group-hover:scale-105 transition-all duration-300"
            fill
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <div
            dangerouslySetInnerHTML={
              data?.fullName ? { __html: data.fullName } : undefined
            }
            className="font-bold text-[26px] leading-8 text-black"
          ></div>
          <span className="text-black-70 text-lg">{data?.role}</span>
        </div>
      </div>

      {/* feedback card */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-full p-5 border border-black-10 rounded-[20px] space-y-4"
            >
              <div className="w-full max-w-[220px] space-y-2.5 mx-auto text-center">
                <Image
                  width={220}
                  height={100}
                  src={review?.brandLogo ?? ""}
                  alt="brand"
                />
                <p className="text-primary font-bold text-lg">
                  {review?.brandName}
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-5 text-center">
                <p className="text-base text-black-80">
                  “{review?.firstComment}
                </p>
                <p className="text-base text-black-80">
                  {review?.secondComment}
                </p>
                <p className="text-base text-black-80">
                  {review?.thirdComment}
                  {review?.fourthComment ? "" : "”"}
                </p>
                {review?.fourthComment ? (
                  <p className="text-base text-black-80">
                    {review?.fourthComment}
                  </p>
                ) : null}
              </div>
              <div className="border-t border-black-10 pt-4 space-y-2.5">
                <div className="flex flex-col items-center">
                  <strong className="font-bold text-primary text-lg">
                    {review?.designation}
                  </strong>
                  <strong className="font-bold text-black-80 text-base">
                    {review?.brandName} {review?.country}
                  </strong>
                </div>
                <div className="flex items-center justify-center gap-x-2.5">
                  <button
                    onClick={handlePrev}
                    className="border border-primary rounded-full text-primary p-3 flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary transition"
                  >
                    <IconChevronLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="border border-primary rounded-full text-primary p-3 flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary transition"
                  >
                    <IconChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
