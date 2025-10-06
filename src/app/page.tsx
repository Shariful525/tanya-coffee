import ClickForCoffeeButton from "@/components/buttons/ClickForCoffeeButton";
import HappyClientsCard from "@/components/cards/HappyClientsCard";
import InnerShadow from "@/components/ui/InnerShadow";
import { happyClientsData } from "@/constants/happyClientsData";
import AdvertisementAndMarketing from "@/components/home/AdvertisementAndMarketing";
import BelovedClients from "@/components/home/BelovedClients";
import TopCountries from "@/components/home/TopCountries";
import React from "react";
import HappyClientThoughts from "@/components/home/HappyClientThoughts";
import MeetYourDreamTeam from "@/components/home/MeetYourDreamTeam";
import TopBrands from "@/components/home/TopBrands";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <AdvertisementAndMarketing className="max-w-[470px] mx-auto my-10" />
      <TopCountries />
      <BelovedClients className="max-w-[470px] mx-auto my-10" />
      <HappyClientThoughts />
      <MeetYourDreamTeam />
    </div>
  );
};

export default Home;
