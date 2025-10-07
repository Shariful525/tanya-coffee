import React from "react";
import PartnerCard from "../cards/PartnerCard";
import { teamMembersData } from "@/constants/teamMembersData";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";

const MeetYourDreamTeam = () => {
  return (
    <div className="mt-[30px]">
      <div className="flex flex-col items-center gap-y-5 mx-auto text-center">
        <InnerShadow
          icon={<IconPointFilled className="text-primary" />}
          text="Meet Your Dream Team"
        />
        <strong className="text-black font-bold text-2xl">
          Lots Of Talent
          <br /> (& Even More Passion)
        </strong>
      </div>
      <div className="space-y-5 mt-5">
        {teamMembersData?.map((data, i) => (
        <PartnerCard data={data} key={i} />
      ))}
      </div>
    </div>
  );
};

export default MeetYourDreamTeam;
