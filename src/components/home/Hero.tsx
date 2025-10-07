import React from "react";
import TopBrands from "./TopBrands";
import InnerShadow from "../ui/InnerShadow";
import { IconPointFilled } from "@tabler/icons-react";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import HeroVideoSection from "./HeroVideoSection";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[470px] mx-auto mb-5 bg-gradient-to-b from-[#C9E6FF] to-white py-[30px] px-5">
        <InnerShadow
          text="Dwaandmore"
          className="mx-auto"
          icon={<IconPointFilled className="fill-primary" />}
        />
        <h2 className="text-center text-2xl [@media(min-width:400px)]:text-3xl font-bold mt-2 mb-3">
          <b className="italic text-secondary">Every idea</b>, Every Need <br />{" "}
          Right Here, Ready <b className="italic text-secondary">To Rock!</b>
        </h2>
        <p className="text-black-70 text-center text-base mb-5">
          We help brands turn bold ideas into{" "}
          <b className="text-primary uppercase font-semibold">powerful</b> experiences
          for your customers. From strategy to design, every detail is crafted
          to engage users. Delivering solutions that inspire, convert, and grow
          your business.
        </p>
        <ClickForCoffeeButton
          textClassName="text-lg"
          className="max-w-[80%] mx-auto justify-center py-2 px-[clamp(10px,4vw,32px)]"
          imageClassName="w-[64px] h-[48px] !-mt-5"
        />
        <HeroVideoSection />
      </div>
      <TopBrands classNmae="mt-5 max-w-[470px] mx-auto" />
    </div>
  );
};

export default Hero;
