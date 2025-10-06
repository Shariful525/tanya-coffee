import ClickForCoffeeButton from "@/components/buttons/ClickForCoffeeButton";
import HappyClientsCard from "@/components/cards/HappyClientsCard";
import InnerShadow from "@/components/ui/InnerShadow";
import { happyClientsData } from "@/constants/happyClientsData";
import AdvertisementAndMarketing from "@/components/home/AdvertisementAndMarketing";
import BelovedClients from "@/components/home/BelovedClients";
import TopCountries from "@/components/home/TopCountries";
import React from "react";

const Home = () => {
  return (
    <div>
      <AdvertisementAndMarketing />
      <TopCountries />
      <BelovedClients />
      <div className="flex flex-col items-center gap-5 justify-center px-5">
        <InnerShadow />
        <ClickForCoffeeButton />
        {happyClientsData?.map((data, i) => (
          <HappyClientsCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
