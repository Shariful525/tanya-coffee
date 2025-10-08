"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import TopBrands from "./TopBrands";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import HeroVideoSection from "./HeroVideoSection";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gradient-to-b from-[#C9E6FF] to-white relative"
    >
      <div className="absolute -bottom-10 h-10 w-full bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      <motion.div className="max-w-[470px] mx-auto mb-5 py-[30px] px-5 rounded-t-2xl flex flex-col items-center space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ amount: 0.1 }}
        >
          <InnerShadow
            text="Dwaandmore"
            className="mx-auto"
            icon={<IconPointFilled className="fill-primary" />}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ amount: 0.1 }}
          className="text-center text-2xl [@media(min-width:400px)]:text-3xl font-bold mt-2 mb-3"
        >
          <b className="italic text-secondary">Every idea</b>, Every Need <br />
          Right Here, Ready <b className="italic text-secondary">To Rock!</b>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ amount: 0.2 }}
          className="text-black-70 text-center text-base mb-5"
        >
          We help brands turn bold ideas into{" "}
          <b className="text-primary uppercase font-semibold">powerful</b>{" "}
          experiences for your customers. From strategy to design, every detail
          is crafted to engage users. Delivering solutions that inspire,
          convert, and grow your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ amount: 0.2 }}
          className="max-w-[80%] mx-auto"
        >
          <ClickForCoffeeButton
            textClassName="text-lg"
            className="justify-center py-2 px-[clamp(10px,4vw,32px)]"
            imageClassName="w-[64px] h-[48px] !-mt-5"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ amount: 0.3 }}
          className="w-full"
        >
          <HeroVideoSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ amount: 0.1 }}
          className="mt-10 w-full"
        >
          <TopBrands />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;