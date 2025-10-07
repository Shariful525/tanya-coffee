import React from "react";
import Image from "next/image";
import logo from "../../assets/images/main-logo.png";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="flex items-center justify-between p-5 max-w-[470px] mx-auto">
          <Link href={"/"} className="max-w-[40%]">
            <Image src={logo} alt="Logo | Advertising Works & More" />
          </Link>
          <ClickForCoffeeButton
            className="justify-center py-2 pl-2.5 pr-3.5"
            textClassName="text-sm"
          />
        </div>
      </header>

      <div className="h-[80px]" />
    </>
  );
};

export default Header;
