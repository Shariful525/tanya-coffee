"use client";
import { advertisingAndMarketing } from "@/constants/advertiseAndMarketing.constant";
import React from "react";
import MarketingAndAdvertiseCard from "../cards/MarketingAndAdvertiseCard";
import { IMarketing } from "@/interfaces/advertiseAndMarketing.interface";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";
import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AdvertisementAndMarketing = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={fadeUpVariant}
        className="flex flex-col gap-y-5 text-center"
      >
        <InnerShadow
          text="SERVICES"
          className="mx-auto"
          icon={<IconPointFilled className="fill-primary" />}
        />
        <h5 className="font-bold text-lg [@media(min-width:400px)]:text-xl max-w-[95%] mx-auto">
          ADVERTISING, MARKETING, WEBSITE DESIGN & DEVELOPMENT, EVENT MANAGEMENT
          & MORE <strong className="text-primary">SERVICES</strong>
        </h5>
        <p className="text-sm text-black-70 max-w-[80%] mx-auto leading-relaxed">
          Powering The World’s Leading Brands With
          <b className="uppercase text-primary"> Cutting-Edge</b> Advertising,
          Marketing, Website Design & Development, Event Management & more
          Solutions.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        className="mt-[30px] grid grid-cols-1 [@media(min-width:350px)]:grid-cols-2 md:grid-cols-3 gap-3"
      >
        {advertisingAndMarketing?.map((data: IMarketing, idx: number) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
          >
            <MarketingAndAdvertiseCard data={data} variant="v1" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AdvertisementAndMarketing;
