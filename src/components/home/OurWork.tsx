import { projectsData } from "@/constants/projectsData";
import React from "react";
import ProjectDetailsCard from "../cards/ProjectDetailsCard";
import Image from "next/image";
import { assets } from "@/assets/images";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import TextPlayball from "../shared/TextPlayball";

const OurWork = () => {
  return (
    <div className="">
      <div className="bg-white rounded-2xl p-5 relative text-center">
        <div className=" w-[200px] h-[200px] flex justify-center items-center mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={assets.modal}
            alt="Tanya Hyacinth D' Silva-Fernandez"
            className="rounded-full"
          />
        </div>

        <div className="mt-[24px]">
          <p className="text-black-80 text-[24px] font-bold relative px-4">
            <span className="absolute -top-7 left-0 text-7xl text-spring-green font-serif opacity-80 z-0">
              “
            </span>
            We go because if you are not aiming for{" "}
            <strong className="text-spring-green">GREATNESS</strong>, what is
            the point?
            <span className="absolute -bottom-8 right-0 text-7xl text-spring-green font-serif opacity-80 z-0">
              ”
            </span>
          </p>
          <div className=" mx-auto my-4 w-[250px]">
            <Image src={assets.zigzagLine} alt="" width={250} height={20} />
          </div>
          <p className=" text-gray-700 text-xl ">
            <TextPlayball>- Tanya Hyacinth D' Silva-Fernandez -</TextPlayball>
          </p>
        </div>
      </div>
      <div className="mx-auto w-full text-center space-y-6 mt-12">
        <h2 className="text-2xl font-bold  uppercase ">
          SOME OF OUR & OUR CLIENTS <br /> WORK
        </h2>
        <p className="text-gray-600 text-2xl font-bold">
          (Teamwork made the <br /> dream work!)
        </p>

        <div className="bg-white rounded-2xl  py-10">
          <h3 className="text-xl font-semibold text-primary mb-4">OUR WORK</h3>
          <div className="w-48 h-[250px] mx-auto relative">
            <Image
              src={assets.successMedal.src}
              alt="100% Success Rate Medal"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      {projectsData?.map((project, index) => (
        <ProjectDetailsCard data={project} key={index} />
      ))}
      <ClickForCoffeeButton
        textClassName="text-sm"
        className="max-w-[80%] mx-auto justify-center py-2.5 px-10"
        imageClassName="w-[64px] h-[48px] !-mt-5"
      />
    </div>
  );
};

export default OurWork;
