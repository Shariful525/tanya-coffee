import AdvertisementAndMarketing from "@/components/home/AdvertisementAndMarketing";
import BelovedClients from "@/components/home/BelovedClients";
import TopCountries from "@/components/home/TopCountries";
import React from "react";
import HappyClientThoughts from "@/components/home/HappyClientThoughts";
import MeetYourDreamTeam from "@/components/home/MeetYourDreamTeam";
import Hero from "@/components/home/Hero";
import ContactForCoffee from "@/components/home/ContactForCoffee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutUs from "@/components/home/AboutUs";
import OurWork from "@/components/home/OurWork";
import WorkPhilosophy from "@/components/home/WorkPhilosophy";
import WorkSummary from "@/components/home/WorkSummary";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="space-y-5 px-5">
        <AboutUs />
        <AdvertisementAndMarketing className="max-w-[470px] mx-auto my-10" />
        <WorkPhilosophy />
        <TopCountries />
        <BelovedClients className="max-w-[470px] mx-auto my-10" />
        <HappyClientThoughts />
        <WorkSummary />
        <MeetYourDreamTeam />
        <TopCountries />
        <BelovedClients />
        <ContactForCoffee />
        <OurWork />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Home;
