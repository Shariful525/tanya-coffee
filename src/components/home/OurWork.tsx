"use client";
import { projectsData } from "@/constants/projectsData";
import React from "react";
import ProjectDetailsCard from "../cards/ProjectDetailsCard";
import Image from "next/image";
import { assets } from "@/assets/images";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import TextPlayball from "../shared/TextPlayball";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <div className="space-y-10 overflow-hidden">
      <motion.div
        className="bg-white rounded-2xl p-5 relative text-center shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-[200px] h-[200px] flex justify-center items-center mx-auto rounded-full overflow-hidden border-4 border-white shadow-md"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={assets.modal}
            alt="Tanya Hyacinth D' Silva-Fernandez"
            className="rounded-full object-cover"
          />
        </motion.div>

        <motion.div
          className="mt-[24px] relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span className="absolute -top-6 left-0">
            <Image
              src={assets.greenQuotation1}
              alt="quotation"
              className="w-8 opacity-90"
            />
          </motion.span>

          <motion.p className="text-black-80 text-[24px] font-bold relative px-4 leading-snug">
            We go because if you are not aiming for{" "}
            <strong className="text-spring-green">GREATNESS</strong>, what is
            the point?
            <motion.span className="absolute bottom-0 right-0">
              <Image
                src={assets.greenQuotation2}
                alt="quotation"
                className="w-8 opacity-90"
              />
            </motion.span>
          </motion.p>

          <motion.div className="mx-auto my-4 w-[250px]">
            <Image src={assets.zigzagLine} alt="" width={250} height={20} />
          </motion.div>

          <motion.p className="text-gray-700 text-xl">
            <TextPlayball>- Tanya Hyacinth D' Silva-Fernandez -</TextPlayball>
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto w-full text-center space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold uppercase">
          SOME OF OUR & OUR CLIENTS <br /> WORK
        </h2>
        <p className="text-gray-600 text-2xl font-bold">
          (Teamwork made the <br /> dream work!)
        </p>

        <motion.div
          className="rounded-2xl bg-[#fbf9f7fc] py-10 shadow-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-primary mb-4">OUR WORK</h3>
          <div className="w-72 h-[350px] mx-auto relative overflow-hidden rounded-[20px]">
            <video
              src="/assets/video/successratess.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="space-y-8">
        {projectsData?.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -35 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.15,
                ease: [0.42, 0, 0.58, 1],
              }}
              whileHover={{
                scale: 1.03,
                y: -6,
                transition: { type: "spring", stiffness: 250, damping: 20 },
              }}
            >
              <ProjectDetailsCard data={project} />
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <ClickForCoffeeButton
          textClassName="text-lg"
          className="max-w-[80%] mx-auto justify-center py-2 px-[clamp(10px,4vw,32px)]"
          imageClassName="w-[64px] h-[48px] !-mt-5"
        />
      </motion.div>
    </div>
  );
};

export default OurWork;
