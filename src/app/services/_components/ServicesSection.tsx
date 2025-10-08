"use client";
import React, { useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { ServiceItem, servicesData } from "@/constants/servicesData.constant";

const cardTransition: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.5,
};

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

  // Card animation variant
  const cardVariants = (index: number): Variants => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { ...cardTransition, delay: index * 0.15 },
    },
  });

  return (
    <section className="px-5 md:px-0 max-w-[470px] mx-auto pb-24 pt-[30px] bg-gradient-to-b from-[#C9E6FF] to-[#F4F4F4] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col space-y-2"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl font-bold text-blue-800 mb-1"
        >
          OUR SERVICES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-black-70 text-base mb-5"
        >
          Discover the solutions we offer to help your <br /> business grow and
          succeed
        </motion.p>
      </motion.div>

      <div className="space-y-3">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants(index)}
            whileHover={{
              scale: 1.03,
              y: -4,
              transition: { type: "spring", stiffness: 250, damping: 20 },
            }}
          >
            <ServiceCard
              service={service}
              onClick={(s) => setSelectedService(s)}
            />
          </motion.div>
        ))}
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default ServicesSection;
