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
import ContactForCoffee from "@/components/home/ContactForCoffee";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="space-y-5">
      <AdvertisementAndMarketing />
      <HappyClientThoughts />
      <MeetYourDreamTeam />
      <TopCountries />
      <BelovedClients />
      <ContactForCoffee />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
