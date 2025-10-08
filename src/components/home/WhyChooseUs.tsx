"use client";
import { assets } from "@/assets/images";
import Image from "next/image";
import React from "react";
import NotificationItem from "../shared/NotificationItem";
import Link from "next/link";
import FlipText from "../ui/FlipText";
import { motion, Variants } from "framer-motion";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const WhyChooseUs: React.FC = () => {
  return (
    <motion.div
      className="rounded-t-[20px] p-5 bg-[linear-gradient(180.26deg,_#C9E6FF_-1.01%,_#FFFFFF_99.78%)] space-y-5 mb-[120px] max-w-[470px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Header + Video */}
      <motion.div
        className="space-y-5 flex flex-col items-center text-center"
        variants={fadeUpVariants}
      >
        <div className="font-bold text-black-80 text-2xl">
          <h2>Why Choose Us</h2>
          <FlipText
            variant="slide"
            className="text-primary text-2xl font-bold"
          />
        </div>

        <div className="rounded-[20px] w-full h-[390px] z-10 overflow-hidden">
          <video
            src="/assets/video/logo-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <div className="space-y-5 flex flex-col items-center">
          <p className="text-2xl font-bold text-black-80">
            <span className="text-secondary">SUCCESS</span> is when we make
            <br /> our clients <span className="text-secondary">HAPPY</span>
          </p>
          <Image src={assets.heartSecondary} alt="heart" width={44} />
        </div>
      </motion.div>

      {/* Quizzes */}
      <motion.div
        className="space-y-5 border-t border-black-10 pt-5"
        variants={fadeUpVariants}
      >
        <p className="uppercase text-base font-bold text-black-80">
          Weekly quizzes for you:
        </p>
        <NotificationItem photo={assets.quizDemo} />
        <NotificationItem photo={assets.quiz2} />
        <NotificationItem photo={assets.quiz3} />
      </motion.div>

      {/* Articles */}
      <motion.div
        className="space-y-5 border-t border-b border-black-10 py-5"
        variants={fadeUpVariants}
      >
        <p className="uppercase font-bold text-base text-black-80">
          WEEKLY ARTICLES FOR YOU:
        </p>
        <NotificationItem photo={assets.article1} />
        <NotificationItem photo={assets.article2} />
        <NotificationItem photo={assets.article3} />
      </motion.div>

      {/* Contact Info */}
      <motion.div className="space-y-5" variants={fadeUpVariants}>
        <div className="flex flex-col">
          <span className="uppercase font-bold leading-4 text-lg text-black-80">
            Contact Us:
          </span>
          <span className="text-black-70 font-medium text-base">
            (We don't bite!)
          </span>
        </div>

        <div className="flex items-center gap-x-2.5">
          <div className="border border-black-10 rounded-full flex items-center justify-center p-1.5 w-[40px] h-[40px] overflow-hidden">
            <Image src={assets.gmail} alt="gmail" />
          </div>
          <Link
            href="mailto:hello@dwaandmore.com"
            target="_blank"
            className="text-black-70 font-bold text-base"
          >
            hello@dwaandmore.com
          </Link>
        </div>

        <div className="flex items-center gap-x-2.5">
          <div className="border border-black-10 rounded-full flex items-center justify-center w-[40px] h-[40px] overflow-hidden shrink-0">
            <Image src={assets.whatsapp} alt="whatsapp" />
          </div>
          <Link
            href="https://wa.me/60108008989?text=hello"
            target="_blank"
            className="text-black-70 font-bold text-base"
          >
            Click to WhatsApp text message us ONLY. Thank youuuuuuuuuu!🙏
          </Link>
        </div>

        <div className="space-y-2.5">
          <p className="uppercase text-black-70 font-semibold text-lg">
            Socials:
          </p>
          <div className="flex items-center gap-x-2.5">
            <Link
              href={"https://www.facebook.com/"}
              className="border border-black-10 rounded-full flex items-center justify-center w-[40px] h-[40px] overflow-hidden shrink-0"
            >
              <Image src={assets.facebook} alt="facebook" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/tanyahyacinthfernandez"}
              className="border border-black-10 rounded-full flex items-center justify-center w-[40px] h-[40px] overflow-hidden shrink-0"
            >
              <Image src={assets.linkedIn} alt="linkedin" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="border border-black-10 rounded-lg py-3.5 px-6 -mb-12 bg-white"
        variants={fadeUpVariants}
      >
        <p className="flex items-center justify-center gap-x-1 text-black-80 font-semibold text-sm [@media(min-width:350px)]:text-[12px] whitespace-nowrap">
          Designed & Developed with
          <Image src={assets.heartPink} width={30} alt="heart" />
          by AdvertisingWork & More
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
