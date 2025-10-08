import clientsLogo from "@/assets/clients-logo";
import React from "react";
import InfiniteSlider from "../shared/InfiniteSlider";
import Image from "next/image";

const TopBrands = ({ className }: { className?: string }) => {
  const {
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
    clientLogo9,
    clientLogo10,
    clientLogo11,
    clientLogo12,
    clientLogo13,
    clientLogo14,
    clientLogo15,
    clientLogo16,
    clientLogo17,
  } = clientsLogo;

  const brandImages = [
    clientLogo1,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
    clientLogo9,
    clientLogo10,
    clientLogo11,
    clientLogo12,
    clientLogo13,
    clientLogo14,
    clientLogo15,
    clientLogo16,
    clientLogo17,
  ];

  return (
    <div className={`max-w-[470px] mx-auto py-[30px]`}>
      <h6 className="font-medium text-lg text-center mb-[30px] px-5">
        Brands who trust us with their advertising,{" "}
        <b className="text-primary uppercase">marketing</b>, Web Design &
        Development, event <b className="text-primary uppercase">management</b>{" "}
        & <b className="text-primary uppercase">more</b>.
      </h6>

      <InfiniteSlider speed={2} direction="left" hasShadow >

        {[...brandImages, ...brandImages].map((logo, i) => (
          <div key={i} className=" min-w-[160px] flex justify-center">
            <Image
              src={logo}
              alt="Brand logo"
              width={160}
              height={80}
              className="object-contain h-12 w-auto blur-"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default TopBrands;
