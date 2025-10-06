import { teamMembersAssets } from "@/assets/team-members-assets";
import Image from "next/image";
import React from "react";

const PartnerCard = () => {
  return (
    <div className="bg-white p-5 rounded-[20px] w-full max-w-[400px] space-y-4">
      <div className="w-full space-y-4 text-center">
        <Image
          src={teamMembersAssets.vicePresident}
          alt="team member"
          className="object-contain w-full h-full"
        />
        <div className="flex flex-col gap-y-2">
          <strong className="font-bold text-[26px] leading-8 text-black">
            Tanya Hyacinth D’Silva-Fernandez
          </strong>
          <span className="text-black-70 text-lg">Vice President</span>
        </div>
      </div>
      <div className="p-5 border border-black-10 rounded-[20px]">
        <div className="w-full">
          <Image src={teamMembersAssets.msixAndPartners} alt="brand" />
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
