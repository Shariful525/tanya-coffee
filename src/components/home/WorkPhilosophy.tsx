"use client";
import React from "react";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import Image from "next/image";
import { assets } from "@/assets/images";
import TextPlayball from "../shared/TextPlayball";
import { motion, Variants } from "framer-motion";

const WorkPhilosophy = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center bg-white rounded-[20px] mt-[30px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="relative z-10 bg-primary rounded-[20px] flex flex-col items-center py-10 mb-10 overflow-hidden w-full"
        variants={fadeUp}
      >
        <motion.div
          className="w-[226px] h-[330px] relative mb-4"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
          }}
          viewport={{ once: true }}
        >
          <Image
            src={assets.bransonImage.src}
            alt="Richard Branson"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="px-5 pt-5 text-center relative"
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="absolute -top-1 left-0">
            <Image src={assets.whiteQuotation1} alt="white quotation" />
          </span>
          <p className="text-[1.26rem] font-medium leading-relaxed text-white relative">
            All you have in business is your <br /> reputation. Play fair so you
            can <br />
            sleep soundly at night.
            <span className="absolute -right-2">
              <Image src={assets.whiteQuotation2} alt="white quotation" />
            </span>
          </p>

          <motion.p
            className="mt-6 text-white text-xl"
            variants={fadeUp}
            custom={1.5}
          >
            <TextPlayball>&mdash; Richard Branson &mdash;</TextPlayball>
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center space-y-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeUp}
          custom={0.2}
          className="text-2xl font-bold max-w-[85%] mx-auto"
        >
          Why <span className="text-primary">WE LOVE</span> What We Do & Why{" "}
          <span className="text-primary">YOU SHOULD TOO</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.4}
          className="text-black-70 text-[16px] max-w-[90%] mx-auto leading-relaxed"
        >
          At AdvertisingWorks & More, we believe that loving what we do is the
          secret sauce that makes all the difference. When passion fuels work,
          creativity flows, ideas thrive, &{" "}
          <span className="text-primary">
            THE RESULTS SPEAK FOR THEMSELVES.
          </span>
        </motion.p>
      </motion.div>

      <ClickForCoffeeButton
        textClassName="text-lg"
        className="max-w-[80%] mx-auto justify-center py-2 px-[clamp(10px,4vw,32px)] mt-[30px]"
        imageClassName="w-[64px] h-[48px] !-mt-5"
      />

      <motion.div
        className="rounded-xl overflow-hidden shadow-lg w-full mt-[30px]"
        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: {
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
        whileHover={{
          rotate: [0, -2, 2, 0],
          transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      >
        <Image
          src={"/assets/working-cat.gif"}
          alt="Cat typing on a laptop with the text I LOVE MY WORK!"
          width={500}
          height={360}
          layout="responsive"
          unoptimized={true}
        />
      </motion.div>
    </motion.section>
  );
};

export default WorkPhilosophy;
