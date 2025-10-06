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
        <div className="mb-1">
          <Image
            src={country.image}
            alt={country.name}
            width={80}
            height={80}
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
      <div className="flex-shrink-0">
        <Image
          src={country.image}
          alt={country.name}
          width={60}
          height={60}
          className="rounded-lg"
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
