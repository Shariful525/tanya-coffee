"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import homeIcon from "@/assets/images/home-menu.png";
import serviceIcon from "@/assets/images/services-menu.png";
import coffeeIcon from "@/assets/images/coffee-menu.png";

const BottomMenuBar = () => {
  const pathname = usePathname();

  const menus = [
    { id: "home", label: "Home", icon: homeIcon, href: "/" },
    { id: "services", label: "Services", icon: serviceIcon, href: "/services" },
    {
      id: "coffee",
      label: "Coffee Meeting",
      icon: coffeeIcon,
      href: "/coffee-meeting",
    },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center justify-between
          bg-white
          shadow-lg
          rounded-full
          border border-white
          px-2
          py-2
          w-[95vw] max-w-[470px]
        "
      >
        {menus.map((menu) => {
          const isActive =
            pathname === menu.href ||
            (menu.href !== "/" && pathname.startsWith(menu.href));

          return (
            <Link
              key={menu.id}
              href={menu.href}
              className={`
                flex items-center justify-center gap-2 px-3 py-2 rounded-full transition-all duration-300
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <div className="relative w-[clamp(18px,3.5vw,25px)] h-[clamp(20px,3.5vw,30px)]">
                <Image
                  src={menu.icon}
                  alt={menu.label}
                  fill
                  className={`inset-0 ${
                    isActive ? "grayscale-0" : "grayscale"
                  } transition-all duration-300`}
                />
              </div>
              <span className="font-medium whitespace-nowrap text-[clamp(12px,3.5vw,16px)]">
                {menu.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomMenuBar;
