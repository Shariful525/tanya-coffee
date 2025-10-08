"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";
import { assets } from "@/assets/images";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import TextPlayball from "../shared/TextPlayball";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const floatVariant: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const AboutUs = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      <motion.div variants={fadeInUp}>
        <InnerShadow
          text="About Us"
          className="mx-auto"
          icon={<IconPointFilled className="fill-primary" />}
        />
      </motion.div>

      <motion.div variants={containerVariants} className="mt-5 space-y-5">
        <motion.div variants={fadeInUp}>
          <Image
            src={assets.aboutUsImage}
            alt="About Us Image"
            width={390}
            height={320}
            className="w-full h-auto rounded-[20px]"
          />
        </motion.div>

        {/* Paragraph 1 */}
        <motion.p variants={fadeInUp} className="text-center">
          Our team is a mix of
          <span className="text-primary font-semibold"> DREAMERS</span> &{" "}
          <span className="text-primary font-semibold">DOERS</span>, we{" "}
          <span className="text-primary font-semibold">are MISFITS </span> for a
          cause & we are{" "}
          <span className="text-primary font-semibold">REBELS </span> for a
          cause when it comes to formulating{" "}
          <span className="text-primary font-semibold uppercase">
            custom-made
          </span>{" "}
          advertising, marketing, website/mobile app design & development, event
          management & more wonders{" "}
          <span className="text-primary font-semibold">FOR YOU</span>.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative bg-white rounded-[20px] p-[clamp(20px,1.5vw,32px)] text-center space-y-5"
        >
          <div className="relative">
            <motion.div
              variants={floatVariant}
              animate="animate"
              className="absolute -top-2 left-0"
            >
              <Image
                src={assets.blueQuotation1}
                alt="blue quotation"
                className=""
              />
            </motion.div>

            <p className="text-gray-700 text-lg leading-relaxed mx-auto p-5">
              While simultaneously
              <span className="font-semibold text-primary uppercase">
                {" "}
                TRYING
              </span>{" "}
              to make our world a better, nicer, kinder, compassionate,
              altruistic, charitable, harmonious, peaceful, happy & joyful world
              that is filled with so much of faith, hope, &
              <span className="font-semibold text-primary uppercase">
                {" "}
                ESPECIALLY LOVE{" "}
              </span>
              for ALL{" "}
              <span className="font-semibold text-primary uppercase">
                OF US
              </span>
              .
            </p>

            <motion.div
              variants={floatVariant}
              animate="animate"
              className="absolute bottom-2 right-2"
            >
              <Image
                src={assets.blueQuotation2}
                alt="blue quotation"
                className=""
              />
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-2xl font-semibold text-gray-800 font-[GreatVibes]"
          >
            <TextPlayball>– Tanya Hyacinth D’Silva–Fernandez –</TextPlayball>
          </motion.p>
        </motion.div>

        <motion.p variants={fadeInUp} className="text-center">
          We have been catering to an array of clients from{" "}
          <span className="text-primary font-semibold uppercase">
            LOCAL STARTUPS TO GLOBAL FORTUNE 500 COMPANIES
          </span>{" "}
          & we have achieved measurable success for our clients{" "}
          <span className="font-semibold text-primary uppercase">
            IN OVER 150 COUNTRIES
          </span>
          . Our formula is equal parts experience, historical data, strategy,
          creativity, hard work, heart work, & a sprinkle of magic fairy dust.
        </motion.p>

        <motion.div variants={fadeInUp} className="text-center">
          <p>
            Let’s create something great,{" "}
            <span className="text-primary font-semibold uppercase">
              TOGETHER
            </span>
            .
          </p>
          <motion.div variants={fadeInUp} className="mt-[clamp(20px,4vw,40px)]">
            <ClickForCoffeeButton
              textClassName="text-lg"
              className="max-w-[80%] mx-auto justify-center py-2 px-[clamp(10px,4vw,32px)]"
              imageClassName="w-[64px] h-[48px] !-mt-5"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
