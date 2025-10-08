import React from "react";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import Image from "next/image";
import { assets } from "@/assets/images";
import TextPlayball from "../shared/TextPlayball";

const WorkPhilosophy = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white rounded-b-lg mt-[30px]">
      <div className="">
        <div className="relative z-10 bg-primary rounded-[20px] flex flex-col items-center py-10 mb-10">
          <div className="w-[226px] h-[330px] relative mb-4">
            <Image
              src={assets.bransonImage.src}
              alt="Richard Branson"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="px-5 pt-5 text-center relative">
            <span className="absolute -top-1 left-0 ">

              <Image src={assets.whiteQuotation1} alt="white quotation" className="" />
            </span>
            <p className="text-[1.26rem] font-medium leading-relaxed text-white ">

              All you have in business is your <br /> reputation. Play fair so
              you can <br />
              sleep soundly at night.
              <span className="absolute right-0  ">

                <Image src={assets.whiteQuotation2} alt="white quotation" className="" />
              </span>
            </p>

            <p className="mt-6 text-white text-xl ">
              <TextPlayball>&mdash; Richard Branson &mdash;</TextPlayball>
            </p>
          </div>
        </div>

        <div className="text-center space-y-5">
          <h2 className="text-2xl font-bold max-w-[85%] mx-auto">
            Why <span className="text-primary">WE LOVE</span> What We Do & Why{" "}
            <span className="text-primary">YOU SHOULD TOO</span>
          </h2>
          <p className=" text-black-70 text-[16px]">
            At AdvertisingWorks & More, we believe that loving what we do is the
            secret sauce that makes all the difference. When passion fuels work,
            creativity flows, ideas thrive, &{" "}
            <span className="text-primary ">
              THE RESULTS SPEAK FOR THEMSELVES.
            </span>
          </p>
        </div>

        <div className="mt-[30px]">
          <ClickForCoffeeButton
            textClassName="text-lg"
            className="max-w-[80%] mx-auto justify-center py-2 px-[clamp(10px,4vw,32px)]"
            imageClassName="w-[64px] h-[48px] !-mt-5"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg w-full mt-[30px]">
          <Image
            src={"/assets/working-cat.gif"}
            alt="Cat typing on a laptop with the text I LOVE MY WORK!"
            width={500}
            height={360}
            layout="responsive"
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkPhilosophy;
