import Image from "next/image";
import React from "react";

interface IClientsData {
  firstComment?: string;
  secondComment?: string;
  thirdComment?: string;
  fourthComment?: string;
  companyName: string;
  designation?: string;
  region?: string;
  brandLogo?: string;
}

const HappyClientsCard = ({
  className,
  data,
}: {
  className?: string;
  data: IClientsData;
}) => {
  return (
    <div
      className={`${className} rounded-[20px] p-5 w-full space-y-[30px] bg-white shadow-[rgba(0,0,0,0.2)_0px_20px_30px]`}
    >
      <div className="border border-black-10 rounded-[10px] max-w-[180px] mx-auto flex items-center justify-center py-6">
        <div className="relative w-[105px] h-[30px] ">
          <Image
            src={data?.brandLogo ?? ""}
            alt="client's logo"
            className="object-contain w-full h-full inset-0"
            fill
          />
        </div>
      </div>
      <div className="space-y-5 text-black-80 text-base ">
        <p className="text-center">“{data?.firstComment}</p>
        <p className="text-center">{data?.secondComment}</p>
        <p className="text-center">
          {data?.thirdComment}
          {data?.fourthComment ? "" : "”"}
        </p>
        {data?.fourthComment ? (
          <p className="text-center">{data?.fourthComment}”</p>
        ) : null}
      </div>
      <div className="text-center border-t border-black-10 pt-5">
        <strong className="text-primary font-bold text-2xl">
          {data?.companyName}
        </strong>
        <p className="text-black-80 leading-4 font-semibold text-base mt-2">
          {data?.designation} <br /> {data?.region}
        </p>
      </div>
    </div>
  );
};

export default HappyClientsCard;
