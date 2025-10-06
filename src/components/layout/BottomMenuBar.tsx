"use client";
import React, { useState } from "react";
import Image from "next/image";

import homeIcon from "@/assets/images/home-menu.png";
import serviceIcon from "@/assets//images/services-menu.png";
import coffeeIcon from "@/assets//images/coffee-menu.png";

const BottomMenuBar = () => {
  const [active, setActive] = useState("home");

  const menus = [
    { id: "home", label: "Home", icon: homeIcon },
    { id: "services", label: "Services", icon: serviceIcon },
    { id: "coffee", label: "Coffee Meeting", icon: coffeeIcon },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center justify-between
          bg-white
          shadow-lg
          rounded-full
          border border-gray-200
          px-3 py-2
          w-[90vw] max-w-md
        "
      >
        {menus.map((menu) => {
          const isActive = active === menu.id;
          return (
            <button
              key={menu.id}
              onClick={() => setActive(menu.id)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <div className="relative w-8 h-8">
                <Image
                  src={menu.icon}
                  alt={menu.label}
                  fill
                  className={`inset-0 ${
                    isActive ? "grayscale-0" : "grayscale"
                  } transition-all duration-300`}
                />
              </div>
              <span className="font-medium text-sm">{menu.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomMenuBar;
