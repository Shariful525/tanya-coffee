import ClickForCoffeeButton from "@/components/buttons/ClickForCoffeeButton";
import HappyClientsCard from "@/components/cards/HappyClientsCard";
import InnerShadow from "@/components/ui/InnerShadow";
import { happyClientsData } from "@/constants/happyClientsData";
import AdvertisementAndMarketing from "@/components/home/AdvertisementAndMarketing";
import TopCountries from "@/components/home/TopCountries";
import React from "react";
import HappyClientThoughts from "@/components/home/HappyClientThoughts";
import MeetYourDreamTeam from "@/components/home/MeetYourDreamTeam";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center  p-5">
      <HappyClientThoughts />
      <MeetYourDreamTeam />
      <AdvertisementAndMarketing />
      <TopCountries />
    </div>
  );
};

export default Home;
