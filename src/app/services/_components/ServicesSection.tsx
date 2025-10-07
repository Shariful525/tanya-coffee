"use client";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { ServiceItem, servicesData } from "@/constants/servicesData.constant";

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

  return (
    <section className="px-5 md:px-0 max-w-[470px] mx-auto pb-24 pt-[30px] bg-gradient-to-b from-[#C9E6FF] to-[#F4F4F4]">
      <h2 className="text-center text-2xl font-bold text-blue-800 mb-1">
        OUR SERVICES
      </h2>
      <p className="text-center text-black-70 text-base mb-5">
        Discover the solutions we offer to help your <br /> business grow and
        succeed
      </p>

      <div className="space-y-3">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={(s) => setSelectedService(s)}
          />
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
