import { IMarketing } from "@/interfaces/advertiseAndMarketing.interface";
import Image from "next/image";

const MarketingAndAdvertiseCard = ({
  data,
  variant = "v1",
}: {
  data: IMarketing;
  variant?: "v1" | "v2";
}) => {
  // #> Variant 1: Top image → name → description
  if (variant === "v1") {
    return (
      <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div
          className="mb-2 relative w-[40px] h-[40px] 
          [@media(min-width:400px)]:w-[50px]
          [@media(min-width:400px)]:h-[50px]
        "
        >
          <Image src={data.image} alt={data.title} fill className="inset-0" />
        </div>
        <h3 className="text-base font-semibold">{data.title}</h3>
        <p className="text-sm text-black-70 mt-2">{data.description}</p>
      </div>
    );
  }

  // #> Variant 2: Left image → right content
  return (
    <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0">
        <Image src={data.image} alt={data.title} fill className="inset-0" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-800">{data.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{data.description}</p>
      </div>
    </div>
  );
};

export default MarketingAndAdvertiseCard;
