import { advertisingAndMarketing } from "@/constants/advertiseAndMarketing.constant";
import React from "react";
import MarketingAndAdvertiseCard from "../cards/MarketingAndAdvertiseCard";
import { IMarketing } from "@/interfaces/advertiseAndMarketing.interface";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";

const AdvertisementAndMarketing = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col gap-y-5 mb-5">
        <InnerShadow
          text="SERVICES"
          className="mx-auto"
          icon={<IconPointFilled className="fill-primary" />}
        />
        <h5 className="font-bold text-xl [@media(min-width:400px)]:text-2xl text-center max-w-[90%] mx-auto">
          ADVERTISING, MARKETING, WEBSITE DESIGN & DEVELOPMENT, EVENT MANAGEMENT
          & MORE <strong className="text-primary">SERVICES</strong>
        </h5>
        <p className="text-center text-sm text-black-70 max-w-[80%] mx-auto">
          Powering The World’s Leading Brands With
          <b className="uppercase text-primary"> Cutting-Edge</b> Advertising,
          Marketing, Website Design & Development, Event Management & more
          Solutions.
        </p>
      </div>
      <div
        className="
          grid 
          grid-cols-1 
          [@media(min-width:400px)]:grid-cols-2 
          md:grid-cols-3 
          gap-5
          px-5 md:px-0
        "
      >
        {advertisingAndMarketing?.map((data: IMarketing, idx: number) => (
          <MarketingAndAdvertiseCard key={idx} data={data} variant="v1" />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementAndMarketing;
