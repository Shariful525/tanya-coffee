import { ServiceItem } from "@/constants/servicesData.constant";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  service: ServiceItem;
  onClick: (service: ServiceItem) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      onClick={() => onClick(service)}
      className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 flex items-center gap-4"
    >
      <div className="relative w-20 h-16">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="inset-0"
        />
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500">{service.subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
