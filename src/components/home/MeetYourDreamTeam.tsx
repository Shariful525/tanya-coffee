"use client";
import React from "react";
import PartnerCard from "../cards/PartnerCard";
import { teamMembersData } from "@/constants/teamMembersData";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

const MeetYourDreamTeam = () => {
  return (
    <div className="mt-[30px]">
      <motion.div
        className="flex flex-col items-center gap-y-5 mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <InnerShadow
          icon={<IconPointFilled className="text-primary" />}
          text="Meet Your Dream Team"
        />
        <strong className="text-black font-bold text-2xl">
          Lots Of Talent
          <br /> (& Even More Passion)
        </strong>
      </motion.div>

      <div className="space-y-5 mt-5">
        {teamMembersData?.map((data, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <PartnerCard data={data} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MeetYourDreamTeam;
