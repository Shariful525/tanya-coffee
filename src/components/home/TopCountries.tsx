import Image from "next/image";
import React from "react";

import sectionThumbnail from "../../assets/country-flag/section-thumbnail.png";
import { COUNTRIES } from "@/constants/country.constant";
import CountryCard from "../cards/CountryCard";
import { ICountry } from "@/interfaces/country.interface";

const TopCountries = () => {
  return (
    <section className="max-w-[470px] mx-auto">
      <div
        className="
          max-w-[60%]
          [@media(min-width:400px)]:max-w-[75%]
          mx-auto mb-2.5"
      >
        <Image src={sectionThumbnail} alt="Section Thumbnail | Tanya Coffe" />
      </div>
      <h6 className="text-center font-semibold text-xl [@media(min-width:400px)]:text-2xl">
        Our Offices
      </h6>

      <div
        className="grid 
          grid-cols-1 
          [@media(min-width:400px)]:grid-cols-2 
          md:grid-cols-3 
          gap-5 mt-5 px-5 md:px-0"
      >
        {COUNTRIES?.map((country: ICountry, idx: number) => (
          <CountryCard key={idx} country={country} variant="v1" />
        ))}
      </div>
    </section>
  );
};

export default TopCountries;
