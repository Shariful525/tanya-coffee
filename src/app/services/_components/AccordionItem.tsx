import React, { useRef, useEffect, useState } from "react";
import { ServiceSubItem } from "@/constants/servicesData.constant";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: ServiceSubItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="transition-all duration-500 ease-out">
      <button
        className={`w-full flex justify-between items-center py-3 px-5 font-medium rounded-md transition-colors duration-300 ${
          isOpen
            ? "text-white bg-primary rounded-t-md"
            : "bg-[#0074DB1A] text-black hover:bg-[#0074DB33]"
        }`}
        onClick={onToggle}
      >
        {item.title}
        {isOpen ? <IconMinus size={20} /> : <IconPlus size={20} />}
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition:
            "max-height 0.45s ease-in-out, opacity 0.35s ease, transform 0.35s ease",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(8px)",
        }}
        className={`overflow-hidden bg-primary/10 rounded-b-md`}
      >
        <ul className="p-5 list-disc text-sm text-black-70 space-y-1">
          {item.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccordionItem;
