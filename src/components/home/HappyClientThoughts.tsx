import { happyClientsData } from "@/constants/happyClientsData";
import React from "react";
import HappyClientsCard from "../cards/HappyClientsCard";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";

const HappyClientThoughts = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-y-[30px] max-w-[215px] mx-auto">
        <InnerShadow
          icon={<IconPointFilled className="text-primary" />}
          text="Our Happy Clients"
        />
        <strong className="text-center font-bold text-2xl">
          What Our Clients
          <br /> Say About Us
          <br /> (Seriously!)
        </strong>
      </div>
      <div className="space-y-5">
        {happyClientsData?.map((data, i) => (
          <HappyClientsCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HappyClientThoughts;
