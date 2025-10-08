"use client";
import { happyClientsData } from "@/constants/happyClientsData";
import React from "react";
import HappyClientsCard from "../cards/HappyClientsCard";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";
import { motion, Variants } from "framer-motion";

const HappyClientThoughts = () => {
  const cardContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-y-[30px] max-w-[215px] mx-auto"
      >
        <InnerShadow
          icon={<IconPointFilled className="text-primary" />}
          text="Our Happy Clients"
        />
        <strong className="text-center font-bold text-2xl">
          What Our Clients
          <br /> Say About Us
          <br /> (Seriously!)
        </strong>
      </motion.div>

      <motion.div
        className="space-y-5 mt-[30px]"
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {happyClientsData?.map((data, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 18 },
            }}
          >
            <HappyClientsCard data={data} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HappyClientThoughts;
