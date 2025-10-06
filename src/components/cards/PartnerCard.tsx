import { teamMembersAssets } from "@/assets/team-members-assets";
import { ITeamMember } from "@/interfaces/teamMember.interface";
import Image from "next/image";
import React from "react";

const PartnerCard = ({ data }: { data?: ITeamMember }) => {
  const review = data?.personReviews[0];
  return (
    <div className="bg-white p-5 rounded-[20px] space-y-4">
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
      <div className="p-5 border border-black-10 rounded-[20px] space-y-4">
        <div className="w-full max-w-[220px] space-y-2.5 mx-auto text-center">
          <Image
            width={220}
            height={100}
            src={review?.brandLogo ?? ""}
            alt="brand"
          />
          <p className="text-primary font-bold text-lg">{review?.brandName}</p>
        </div>
        <div className="flex flex-col items-center gap-y-5 text-center">
          <p className="text-base text-black-80">{review?.firstComment}</p>
          <p className="text-base text-black-80">{review?.secondComment}</p>
          <p className="text-base text-black-80">{review?.thirdComment}”</p>
          <p className="text-base text-black-80">{review?.fourthComment}</p>
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
            <button className="border border-primary rounded-full text-primary p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </button>
            <button className="border border-primary rounded-full text-primary p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
