"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import TopBrands from "./TopBrands";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import HeroVideoSection from "./HeroVideoSection";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.div
        variants={fadeInUp}
        className="max-w-[470px] mx-auto mb-5 bg-gradient-to-b from-[#C9E6FF] to-white py-[30px] px-5 rounded-2xl shadow-md"
      >
        <motion.div variants={fadeInUp}>
          <InnerShadow
            text="Dwaandmore"
            className="mx-auto"
            icon={<IconPointFilled className="fill-primary" />}
          />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-center text-2xl [@media(min-width:400px)]:text-3xl font-bold mt-2 mb-3"
        >
          <b className="italic text-secondary">Every idea</b>, Every Need <br />{" "}
          Right Here, Ready <b className="italic text-secondary">To Rock!</b>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-black-70 text-center text-base mb-5"
        >
          We help brands turn bold ideas into{" "}
          <b className="text-primary uppercase font-semibold">powerful</b>{" "}
          experiences for your customers. From strategy to design, every detail
          is crafted to engage users. Delivering solutions that inspire,
          convert, and grow your business.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <ClickForCoffeeButton
            textClassName="text-lg"
            className="max-w-[80%] mx-auto justify-center py-2 px-[clamp(10px,4vw,32px)]"
            imageClassName="w-[64px] h-[48px] !-mt-5"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <HeroVideoSection />
        </motion.div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <TopBrands classNmae="mt-5 max-w-[470px] mx-auto" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
