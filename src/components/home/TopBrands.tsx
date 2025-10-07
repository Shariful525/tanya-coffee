import clientsLogo from "@/assets/clients-logo";
import React from "react";
import InfiniteSlider from "../shared/InfiniteSlider";
import Image from "next/image";

const TopBrands = ({ classNmae }: { classNmae?: string }) => {
  const {
    clientLogo1,
    clientLogo10,
    clientLogo11,
    clientLogo12,
    clientLogo13,
    clientLogo14,
    clientLogo15,
    clientLogo16,
    clientLogo17,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
    clientLogo9,
  } = clientsLogo;

  const brandImages = [
    clientLogo1,
    clientLogo10,
    clientLogo11,
    clientLogo12,
    clientLogo13,
    clientLogo14,
    clientLogo15,
    clientLogo16,
    clientLogo17,
    clientLogo2,
    clientLogo3,
    clientLogo4,
    clientLogo5,
    clientLogo6,
    clientLogo7,
    clientLogo8,
    clientLogo9,
  ];
  return (
    <div className={classNmae}>
      <h6 className="font-medium text-lg text-center mb-[30px] px-5">
        Brands who trust us with their advertising,{" "}
        <b className="text-primary uppercase">marketing</b>, Web Design &
        Development, event <b className="text-primary uppercase">management</b>{" "}
        & <b className="text-primary uppercase">more</b>.
      </h6>
      <InfiniteSlider speed={1} animationDirection="left" hasShadow>
        <div className="flex gap-x-5 w-max whitespace-nowrap">
          {brandImages?.concat(brandImages)?.map((logo, index) => (
            <div
              key={index}
              className=" mx-2 "
            >
              <Image
                src={logo || "brand.png"}
                alt={"Brand Photo - Expert Squad"}
                width={400}
                height={80}
                layout="responsive"

                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </InfiniteSlider>
    </div>
  );
};

export default TopBrands;
