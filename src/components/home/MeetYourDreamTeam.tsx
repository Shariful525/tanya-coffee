import React from "react";
import PartnerCard from "../cards/PartnerCard";
import { teamMembersData } from "@/constants/teamMembersData";

const MeetYourDreamTeam = () => {
  return (
    <div className="space-y-3.5 max-w-[470px] mx-auto">
      {teamMembersData?.map((data, i) => (
        <PartnerCard key={i} />
      ))}
    </div>
  );
};

export default MeetYourDreamTeam;
