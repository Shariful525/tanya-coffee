"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import clientsLogo from "@/assets/clients-logo";
import ClientLogoCard from "../cards/ClientLogoCard";

const {
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
  clientLogo9,
  clientLogo10,
  clientLogo11,
  clientLogo12,
  clientLogo13,
  clientLogo14,
  clientLogo15,
  clientLogo16,
  clientLogo17,
} = clientsLogo;

const CLIENT_LOGOS = [
  { id: 1, image: clientLogo1.src },
  { id: 2, image: clientLogo2.src },
  { id: 3, image: clientLogo3.src },
  { id: 4, image: clientLogo4.src },
  { id: 5, image: clientLogo5.src },
  { id: 6, image: clientLogo6.src },
  { id: 7, image: clientLogo7.src },
  { id: 8, image: clientLogo8.src },
  { id: 9, image: clientLogo9.src },
  { id: 10, image: clientLogo10.src },
  { id: 11, image: clientLogo11.src },
  { id: 12, image: clientLogo12.src },
  { id: 13, image: clientLogo13.src },
  { id: 14, image: clientLogo14.src },
  { id: 15, image: clientLogo15.src },
  { id: 16, image: clientLogo16.src },
  { id: 17, image: clientLogo17.src },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const BelovedClients = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h6
        variants={itemVariants}
        className="font-bold text-xl [@media(min-width:400px)]:text-2xl text-center mb-8"
      >
        Some Of Our <br />
        <b className="text-primary uppercase">Beloved</b> Clients
      </motion.h6>

      <motion.div
        variants={containerVariants}
        className="
          grid 
          grid-cols-1 
          [@media(min-width:350px)]:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-5 bg-white p-5 rounded-[20px]
        "
      >
        {CLIENT_LOGOS.map((logo) => (
          <motion.div key={logo.id} variants={itemVariants}>
            <ClientLogoCard image={logo.image} name={`Client ${logo.id}`} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BelovedClients;
