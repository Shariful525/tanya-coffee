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

const Home = () => {
  return (
    <div className="space-y-10">
      <Hero />
      <div className="max-w-[470px] mx-auto px-5 md:px-0 space-y-10">
        <AboutUs />
        <AdvertisementAndMarketing />
        <WorkPhilosophy />
        <HappyClientThoughts />
        <OurWork />
        <MeetYourDreamTeam />
        <TopCountries />
        <BelovedClients />
        <ContactForCoffee />
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default Home;
