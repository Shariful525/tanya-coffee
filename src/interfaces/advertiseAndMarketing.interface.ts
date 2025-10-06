import { StaticImageData } from "next/image";

export interface IMarketing {
  title: string;
  description: string;
  image: StaticImageData | string;
}
