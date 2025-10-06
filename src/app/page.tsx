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
    </div>
  );
};

export default Home;
