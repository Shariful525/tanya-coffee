import countryFlags from "@/assets/country-flag";
import { ICountry } from "@/interfaces/country.interface";

const {
  canadaFlag,
  hongkongFlag,
  indiaFlag,
  indonesiaFlag,
  malaysiaFlag,
  newzealandFlag,
  pakistanFlag,
  singaporeFlag,
  taiwanFlag,
  uaeFlag,
} = countryFlags;

export const COUNTRIES: ICountry[] = [
  {
    name: "Malaysia",
    description:
      "Level 41, Vista Tower, The Intermark, 348 Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia.",
    image: malaysiaFlag,
  },
  {
    name: "United Arab Emirates",
    description:
      "Boulevard Plaza, Tower 1, Level 9, Sheikh Mohammed Bin Rashid Blvd, Dubai, UAE.",
    image: uaeFlag,
  },
  {
    name: "Indonesia",
    description:
      "49th Floor, Equity Tower, Jalan Jenderal Sudirman, Kavling 52-53 (SCBD), 12190 Jakarta, Indonesia.",
    image: indonesiaFlag,
  },
  {
    name: "Taiwan",
    description:
      "29F, No. 68, Section 5, Zhongxiao East Road, Xinyi District, 11065 Taipei, Taiwan.",
    image: taiwanFlag,
  },
  {
    name: "Canada",
    description:
      "ON Ottawa- Zibi Ottawa, 310 Miwate Private, Unit #100, Ottawa K1R0E2, Canada.",
    image: canadaFlag,
  },
  {
    name: "Hong Kong",
    description:
      "86/F, International Commerce Centre, 1, Austin Road West, Kowloon, Hong Kong.",
    image: hongkongFlag,
  },
  {
    name: "India",
    description:
      "15th Floor, Eros Corporate Tower, Nehru Place, 110019 New Delhi, India.",
    image: indiaFlag,
  },
  {
    name: "Pakistan",
    description:
      "Emirates Tower, 2nd & 3rd Floor, M-13, F-7, Markaz Islamabad F-7, Pakistan.",
    image: pakistanFlag,
  },
  {
    name: "New Zealand",
    description: "Level 10, 21 Queen Street 1010, Auckland, New Zealand.",
    image: newzealandFlag,
  },
  {
    name: "Singapore",
    description: "17/F, 12 Marina Boulevard, 018982 Singapore.",
    image: singaporeFlag,
  },
];
