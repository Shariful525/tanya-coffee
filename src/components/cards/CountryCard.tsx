import { ICountry } from "@/interfaces/country.interface";
import Image from "next/image";

const CountryCard = ({
  country,
  variant = "v1",
}: {
  country: ICountry;
  variant?: "v1" | "v2";
}) => {
  // #> Variant 1: Top image → name → description
  if (variant === "v1") {
    return (
      <div className="bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div
          className="mb-1 relative w-[50px] h-[50px] 
          [@media(min-width:400px)]:w-[60px]
          [@media(min-width:400px)]:h-[60px]"
        >
          <Image
            src={country.image}
            alt={country.name}
            fill
            className="inset-0"
          />
        </div>
        <h3 className="text-base [@media(min-width:400px)]:text-lg font-semibold text-primary uppercase">
          {country.name}
        </h3>
        <p className="text-sm text-black-70 mt-2">{country.description}</p>
      </div>
    );
  }

  // #> Variant 2: Left image → right content
  return (
    <div className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div
        className="mb-1 relative w-[50px] h-[50px] 
          [@media(min-width:400px)]:w-[60px]
          [@media(min-width:400px)]:h-[60px]"
      >
        <Image
          src={country.image}
          alt={country.name}
          fill
          className="inset-0"
        />
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-800">
          {country.name}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{country.description}</p>
      </div>
    </div>
  );
};

export default CountryCard;
