"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import sectionThumbnail from "../../assets/country-flag/section-thumbnail.png";
import { COUNTRIES } from "@/constants/country.constant";
import CountryCard from "../cards/CountryCard";
import { ICountry } from "@/interfaces/country.interface";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const TopCountries = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={fadeInUp}
        className="max-w-[60%] [@media(min-width:400px)]:max-w-[75%] mx-auto mb-2.5"
      >
        <Image
          src={sectionThumbnail}
          alt="Section Thumbnail | Tanya Coffee"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.h6
        variants={fadeInUp}
        className="text-center font-semibold text-xl [@media(min-width:400px)]:text-2xl"
      >
        Our Offices
      </motion.h6>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 [@media(min-width:350px)]:grid-cols-2 md:grid-cols-3 gap-5 mt-5"
      >
        {COUNTRIES?.map((country: ICountry, idx: number) => (
          <motion.div key={idx} variants={fadeInUp}>
            <CountryCard country={country} variant="v1" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TopCountries;
