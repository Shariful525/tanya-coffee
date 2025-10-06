import { assets } from "@/assets/images";
import Image from "next/image";
import React from "react";
import NotificationItem from "../shared/NotificationItem";

const WhyChooseUs = () => {
  return (
    <div className="max-w-[470px] mx-auto rounded-t-[20px] p-5 bg-[linear-gradient(180.26deg,_#C9E6FF_-1.01%,_#FFFFFF_99.78%)] space-y-5  mb-32">
      <div className="space-y-5  flex flex-col items-center text-center">
        <div className="font-bold text-black-80 text-2xl">
          <h2>Why Choose Us</h2>
          <span>Passionate</span>
        </div>
        <div
          className="bg-white rounded-[20px] w-full
        h-[390px] "
        ></div>
        <div className="space-y-5 flex flex-col items-center">
          <p className="text-2xl font-bold text-black-80">
            <span className="text-secondary">SUCCESS</span> is when we make
            <br /> our clients <span className="text-secondary">HAPPY</span>
          </p>
          <Image src={assets.heartSecondary} alt="heart" width={44} />
        </div>
      </div>

      <div className="space-y-5 border-t border-black-10 pt-5">
        <p className="uppercase font-bold text-black-80">
          Weekly quizzes for you:
        </p>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
      <div className="space-y-5 border-t border-b border-black-10 py-5">
        <p className="uppercase font-bold text-black-80">
          WEEKLY ARTICLES FOR YOU:
        </p>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>

      <div className="space-y-5">
        <div className="flex flex-col">
          <span className="uppercase font-bold leading-4 text-lg">
            Contact Us:
          </span>
          <span className="text-black-70 font-medium text-base">
            (We don't bite!)
          </span>
        </div>
        <div className="flex items-center gap-x-2.5">
          <div className="border border-black-10 rounded-full flex items-center justify-center p-2 relative w-[50px] h-[50px] overflow-hidden">
            <Image src={assets.gmail} alt="gmail" />
          </div>
          <p className="text-black-70 font-bold text-lg">
            hello@dwaandmore.com
          </p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <div className="border border-black-10 rounded-full flex items-center justify-center  relative w-[50px] h-[50px] overflow-hidden shrink-0">
            <Image src={assets.whatsapp} alt="gmail" />
          </div>
          <p className="text-black-70 font-bold text-lg">
            Click to WhatsApp text message us ONLY. Thank youuuuuuuuuu!🙏
          </p>
        </div>
        <div className="space-y-2.5">
          <p className="uppercase text-black-70 font-semibold text-lg">
            Socials:
          </p>
          <div className="flex items-center gap-x-2.5">
            <div className="border border-black-10 rounded-full flex items-center justify-center  relative w-[50px] h-[50px] overflow-hidden shrink-0">
              <Image src={assets.facebook} alt="gmail" />
            </div>
            <div className="border border-black-10 rounded-full flex items-center justify-center  relative w-[50px] h-[50px] overflow-hidden shrink-0">
              <Image src={assets.linkedIn} alt="gmail" />
            </div>
          </div>
        </div>
      </div>
      <div className=" border border-black-10 rounded-lg py-3.5 px-6 -mb-12  bg-white">
        <p className="flex items-center justify-center gap-x-1 text-black-80 font-semibold text-xs whitespace-nowrap">
          Designed & Developed with
          <Image src={assets.heartPink} width={30} alt="heart" />
          by AdvertisingWork & More
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
