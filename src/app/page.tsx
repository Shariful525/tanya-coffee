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

const Home = () => {
  return (
    <div className="space-y-5 px-3.5">
      <Hero />
      <AboutUs />
      <AdvertisementAndMarketing className="max-w-[470px] mx-auto my-10" />
      <TopCountries />
      <BelovedClients className="max-w-[470px] mx-auto my-10" />
      <HappyClientThoughts />
      <MeetYourDreamTeam />
      <TopCountries />
      <BelovedClients />
      <ContactForCoffee />
      <OurWork />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
