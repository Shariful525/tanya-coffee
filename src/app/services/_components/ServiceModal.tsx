import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { ServiceItem } from "@/constants/servicesData.constant";
import { IconX } from "@tabler/icons-react";

const ServiceModal = ({
  service,
  onClose,
}: {
  service: ServiceItem | null;
  onClose: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!service) return null;

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center items-end z-[999]"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[470px] rounded-t-2xl shadow-lg animate-slideUp max-h-[70vh] flex flex-col pb-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-black/10">
          <h2 className="text-lg font-medium text-black">{service.title}</h2>
          <button
            className="text-black text-xl hover:text-gray-600 transition"
            onClick={onClose}
          >
            <IconX />
          </button>
        </div>

        <div className="flex flex-col gap-y-2.5 overflow-y-auto px-4 py-3">
          {service.details.map((detail, index) => (
            <AccordionItem
              key={index}
              item={detail}
              isOpen={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
