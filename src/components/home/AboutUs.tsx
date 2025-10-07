import React from "react";
import InnerShadow from "../ui/InnerShadow";
import Image from "next/image";
import { IconPointFilled, IconQuoteFilled } from "@tabler/icons-react";
import { assets } from "@/assets/images";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";

const AboutUs = () => {
  return (
    <div className="">
      <InnerShadow
        text="About Us"
        className="mx-auto"
        icon={<IconPointFilled className="fill-primary" />}
      />
      <div className="mt-5 space-y-5">
        <div className="">
          <Image
            src={assets.aboutUsImage}
            alt=""
            width={390}
            height={320}
            className="w-full h-auto rounded-[20px]"
          />
        </div>
        <p className="text-center ">
          Our team is a mix of
          <span className="text-primary font-semibold"> DREAMERS</span> &{" "}
          <span className="text-primary font-semibold">DOERS</span>, we{" "}
          <span className="text-primary font-semibold">are MISFITS </span> for a
          cause & we are{" "}
          <span className="text-primary font-semibold">REBELS </span> for a
          cause when it comes to formulating{" "}
          <span className="text-primary font-semibold">custom-made</span>{" "}
          advertising, marketing, website/mobile app design & development, event
          management & more wonders{" "}
          <span className="text-primary font-semibold">FOR YOU</span>.
        </p>

        <div className="relative max-w-md mx-auto bg-white rounded-[20px] p-[clamp(20px,1.5vw,32px)] text-center">
          <div className="absolute top-8 left-0 text-primary rotate-180">
            <IconQuoteFilled className="" size={48} stroke={1.5} />
          </div>

          <p className="text-gray-700 text-lg leading-relaxed  p-5">
            While simultaneously
            <span className="font-semibold text-primary uppercase">
              {" "}
              TRYING
            </span>{" "}
            to make our world a better, nicer, kinder, compassionate,
            altruistic, charitable, harmonious, peaceful, happy & joyful world
            that is filled with so much of faith, hope, &
            <span className="font-semibold text-primary uppercase">
              {" "}
              ESPECIALLY LOVE{" "}
            </span>
            for ALL{" "}
            <span className="font-semibold text-primary uppercase">OF US</span>.
          </p>

          <div className="absolute bottom-20 right-2 text-primary ">
            <IconQuoteFilled size={48} stroke={2} />
          </div>

          <p className="mt-5 text-[clamp(18px,1vw,24px)] text-gray-800  font-[GreatVibes]">
            – Tanya Hyacinth D’Silva–Fernandez –
          </p>
        </div>

        <p className="text-center">
          We have been catering to an array of clients from{" "}
          <span className="text-primary font-semibold uppercase">
            {" "}
            LOCAL STARTUPS TO GLOBAL FORTUNE 500 COMPANIES
          </span>{" "}
          & we have achieved measurable success for our clients{" "}
          <span className="font-semibold text-primary uppercase">
            {" "}
            IN OVER 150 COUNTRIES
          </span>
          . Our formula is equal parts experience, historical data, strategy,
          creativity, hard work, heart work, & a sprinkle of magic fairy dust.
        </p>
        <div>
          <p className="text-center">
            Let’s create something great,{" "}
            <span className="text-primary font-semibold uppercase">
              TOGETHER
            </span>
            .
          </p>
          <div className="mt-[clamp(20px,4vw,40px)]  ">
            <ClickForCoffeeButton
              textClassName="text-xl"
              className=" mx-auto justify-center py-2 px-8"
              imageClassName="w-[64px] h-[48px] !-mt-7 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
