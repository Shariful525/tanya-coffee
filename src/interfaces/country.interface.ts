import { StaticImageData } from "next/image";

export interface ICountry {
  name: string;
  description: string;
  image: StaticImageData | string;
}
