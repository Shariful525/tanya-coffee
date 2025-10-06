import advertiseAndMarketingsAssets from "@/assets/advertise-marketing";
import countryFlags from "@/assets/country-flag";
import { IMarketing } from "@/interfaces/advertiseAndMarketing.interface";
import { ICountry } from "@/interfaces/country.interface";

const {
  advertisingAndMarketing: advertisingAndMarketingImg,
  copyWriting,
  creativeDesign,
  eventManagement,
  facebook,
  google,
  googleSearch,
  instagramAdvertising,
  linkedInAdvertising,
  mobileAdvertising,
  payPerClick,
  publicRelation,
  socialmediaManagement,
  tiktokAdvertising,
  webDev,
  youtubeAdvertising,
} = advertiseAndMarketingsAssets;

export const advertisingAndMarketing: IMarketing[] = [
  {
    title: "PAY PER CLICK ADVERTISING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: payPerClick,
  },
  {
    title: "FACEBOOK ADVERTISING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: facebook,
  },
  {
    title: "GOOGLE DISPLAY NETWORK ADVERTISING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: google,
  },
  {
    title: "GOOGLE SEARCH MARKETING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: googleSearch,
  },
  {
    title: "YOUTUBE ADVERTISING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: youtubeAdvertising,
  },
  {
    title: "MOBILE ADVERTISING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: mobileAdvertising,
  },
  {
    title: "INSTAGRAM ADVERTISING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: instagramAdvertising,
  },
  {
    title: "WEBSITE DESIGN & DEVELOPMENT",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: webDev,
  },
  {
    title: "LINKEDIN ADVERTISING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: linkedInAdvertising,
  },
  {
    title: "CREATIVE DESIGN CREATION",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: creativeDesign,
  },
  {
    title: "TIKTOK ADVERTISING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: tiktokAdvertising,
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: socialmediaManagement,
  },
  {
    title: "COPYWRITING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: copyWriting,
  },
  {
    title: "EVENT MANAGMENT",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: eventManagement,
  },
  {
    title: "PUBLIC RELATIONS",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: publicRelation,
  },
  {
    title: "ADVERTISING & MARKETING",
    description:
      "Powering The World’s Leading Brands With Cutting-Edge Advertising",
    image: advertisingAndMarketingImg,
  },
];
