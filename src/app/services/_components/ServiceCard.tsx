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
      <div className="relative shrink-0 rounded-lg w-20 h-20">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover inset-0 rounded-lg"
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
