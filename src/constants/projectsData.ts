import { projectAssets } from "@/assets/projects-assets";
import { IProject } from "@/interfaces/projects.interface";

export const projectsData: IProject[] = [
  {
    clientLogos: [projectAssets.mercyLogo.src],
    client: "Mercy Malaysia Non-Profit Organisation",
    campaign: "Nepal Earthquake Donation Drive",
    ourWork: [
      "Brainstorming",
      "Ideation",
      "Strategy",
      "Copywriting (English & Bhasa Malaysia",
      "Graphic Design",
      "Illustration",
      "Facebook Advertising",
    ],
    result: [
      "100% success rate",
      "Over-achieved client's KPI",
      "Over-delivered Advertising Works & More's own internal KPI",
      "Client rewareded us with more & more projects ",
    ],
    projectImages: [
      projectAssets.mercyFirstImage.src,
      projectAssets?.mercySecondImage.src,
      projectAssets?.mercyThirdImg.src,
    ],
  },
  {
    clientLogos: [
      projectAssets.talenCorpLogo.src,
      projectAssets?.kementerianLogo.src,
    ],
    client: "TalentCorp under Ministry Of Human Resources Malaysia",
    campaign: "Returning Expert Programme",
    ourWork: [
      "Brainstorming",
      "Ideation",
      "Strategy",
      "Copywriting (English & Bhasa Malaysia",
      "LinkedIn Advertising",
    ],
    result: [
      "100% success rate",
      "Over-achieved client's KPI",
      "Over-delivered Advertising Works & More's own internal KPI",
      "Client rewareded us with more & more projects ",
    ],
    projectImages: [projectAssets.talentCorpFirstImage.src],
  },
  {
    clientLogos: [
      projectAssets.talenCorpLogo.src,
      projectAssets?.kementerianLogo.src,
    ],
    client: "Mercy Malaysia Non-Profit Organisation",
    campaign: "Nepal Earthquake Donation Drive",
    ourWork: ["Brainstorming", "Ideation", "Strategy", "YoutTube Advertising"],
    result: [
      "100% success rate",
      "Over-achieved client's KPI of 200,000 views by pulling off over 2.2 million views",
      "Over-delivered our own agency's internal KPI",
      "Client rewareded us with more & more projects ",
    ],
    projectImages: [projectAssets.tyonderProjectImage.src],
  },
];
