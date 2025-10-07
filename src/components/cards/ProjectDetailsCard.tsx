import { IProject } from "@/interfaces/projects.interface";
import Image from "next/image";
import React from "react";
import SpecializedListItem from "../shared/SpecializedListItem";

const ProjectDetailsCard = ({ data }: { data?: IProject }) => {
  return (
    <div className="bg-white p-5 rounded-[20px] space-y-5 my-[30px]">
      <div className="flex items-center justify-center gap-x-2.5 w-full">
        {data?.clientLogos?.map((logo, index) => (
          <div
            key={index}
            className="border border-black-10 rounded-lg relative p-2.5 h-[60px] w-[140px] overflow-hidden"
          >
            <Image
              src={logo ?? "/demo.png"}
              alt="logo"
              fill
              className="object-contain inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <p className="font-bold text-lg text-black-80">
          <span className="text-primary ">Client : </span>
          {data?.client}
        </p>
        <p className="text-black-70 text-sm">
          <span className="text-primary ">Campaign : </span>
          {data?.campaign}
        </p>
      </div>
      <div className="pt-5 border-t border-black-10 flex flex-col gap-y-2.5 w-full">
        <strong className="font-bold text-xl">Our Work:</strong>
        <div className="space-y-2.5 w-full">
          {data?.ourWork?.map((work, index) => (
            <SpecializedListItem text={work} key={index} />
          ))}
        </div>
      </div>
      <div className="pt-5 border-t border-black-10 flex flex-col gap-y-2.5 w-full">
        <strong className="font-bold text-xl">Result :</strong>
        <div className="space-y-2.5 w-full">
          {data?.result?.map((work, index) => (
            <SpecializedListItem text={work} key={index} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {data?.projectImages?.map((img, idx) => {
          const heightClass =
            idx % 3 === 0
              ? "h-[200px]"
              : idx % 3 === 1
              ? "h-[130px]"
              : "h-[400px]";
          return (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden ${heightClass}`}
            >
              <Image
                src={img}
                alt={`Project image ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
