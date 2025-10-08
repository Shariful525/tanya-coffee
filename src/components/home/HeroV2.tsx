"use client";
import React from "react";
import { motion, type Easing } from "framer-motion";
import TopBrands from "./TopBrands";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import HeroVideoSection from "./HeroVideoSection";

const customEase: Easing = [0.25, 0.1, 0.25, 1.0]; // 👈 cast as Easing

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: customEase,
  },
  viewport: { once: true, amount: 0.4 },
});

const HeroV2 = () => {
  return (
    <div className="bg-gradient-to-b from-[#C9E6FF] to-white relative overflow-hidden">
      {/* Subtle bottom gradient */}
      <div className="absolute -bottom-10 h-10 w-full bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-[470px] mx-auto mb-5 py-[30px] px-5 rounded-t-2xl flex flex-col items-center space-y-6">
        {/* Title Tag */}
        <motion.div
          {...fadeUp(0.1)}
          style={{ willChange: "transform, opacity" }}
        >
          <InnerShadow
            text="Dwaandmore"
            className="mx-auto"
            icon={<IconPointFilled className="fill-primary" />}
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.25)}
          className="text-center text-2xl [@media(min-width:400px)]:text-3xl font-bold mt-2 mb-3"
          style={{ willChange: "transform, opacity" }}
        >
          <b className="italic text-secondary">Every idea</b>, Every Need <br />
          Right Here, Ready <b className="italic text-secondary">To Rock!</b>
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-black-70 text-center text-base mb-5"
          style={{ willChange: "transform, opacity" }}
        >
          We help brands turn bold ideas into{" "}
          <b className="text-primary uppercase font-semibold">powerful</b>{" "}
          experiences for your customers. From strategy to design, every detail
          is crafted to engage users. Delivering solutions that inspire,
          convert, and grow your business.
        </motion.p>

        {/* Coffee Button */}
        <motion.div
          {...fadeUp(0.55)}
          className="max-w-[80%] mx-auto"
          style={{ willChange: "transform, opacity" }}
        >
          <ClickForCoffeeButton
            textClassName="text-lg"
            className="justify-center py-2 px-[clamp(10px,4vw,32px)]"
            imageClassName="w-[64px] h-[48px] !-mt-5"
          />
        </motion.div>

        {/* Video Section */}
        <motion.div
          {...fadeUp(0.7)}
          className="w-full"
          style={{ willChange: "transform, opacity" }}
        >
          <HeroVideoSection />
        </motion.div>

        {/* Brand Section */}
        <motion.div
          {...fadeUp(0.85)}
          className="mt-10 w-full"
          style={{ willChange: "transform, opacity" }}
        >
          <TopBrands />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroV2;
