export interface ServiceSubItem {
  title: string;
  description: string[];
}

export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  details: ServiceSubItem[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Full Service Marketing Agencies",
    subtitle:
      "Powering the world’s leading brands with cutting-edge advertising and strategy.",
    image: "/images/services/marketing.jpg",
    details: [
      {
        title: "Campaign Strategy & Planning",
        description: [
          "Analyze business objectives and audience insights.",
          "Develop data-driven marketing roadmaps.",
          "Allocate budget efficiently across digital and traditional media.",
        ],
      },
      {
        title: "Content Production",
        description: [
          "Produce high-quality visuals, videos, and copywriting.",
          "Maintain consistent brand tone across all touchpoints.",
          "Utilize A/B testing to refine engagement and conversions.",
          "Analyze business objectives and audience insights.",
          "Develop data-driven marketing roadmaps.",
          "Allocate budget efficiently across digital and traditional media.",
        ],
      },
      {
        title: "Campaign Strategy & Planning",
        description: [
          "Analyze business objectives and audience insights.",
          "Develop data-driven marketing roadmaps.",
          "Allocate budget efficiently across digital and traditional media.",
        ],
      },
      {
        title: "Content Production",
        description: [
          "Produce high-quality visuals, videos, and copywriting.",
          "Maintain consistent brand tone across all touchpoints.",
          "Utilize A/B testing to refine engagement and conversions.",
        ],
      },
      {
        title: "Campaign Strategy & Planning",
        description: [
          "Analyze business objectives and audience insights.",
          "Develop data-driven marketing roadmaps.",
          "Allocate budget efficiently across digital and traditional media.",
        ],
      },
      {
        title: "Content Production",
        description: [
          "Produce high-quality visuals, videos, and copywriting.",
          "Maintain consistent brand tone across all touchpoints.",
          "Utilize A/B testing to refine engagement and conversions.",
        ],
      },
      {
        title: "Campaign Strategy & Planning",
        description: [
          "Analyze business objectives and audience insights.",
          "Develop data-driven marketing roadmaps.",
          "Allocate budget efficiently across digital and traditional media.",
        ],
      },
      {
        title: "Content Production",
        description: [
          "Produce high-quality visuals, videos, and copywriting.",
          "Maintain consistent brand tone across all touchpoints.",
          "Utilize A/B testing to refine engagement and conversions.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Full Service Website Design Agencies",
    subtitle:
      "Building engaging digital experiences that drive measurable results.",
    image: "/images/services/web-design.jpg",
    details: [
      {
        title: "Website Strategy & Planning",
        description: [
          "Conduct user research and persona mapping.",
          "Develop sitemap and wireframes based on business goals.",
          "Create data-backed UX journeys for improved navigation.",
        ],
      },
      {
        title: "UX/UI Design",
        description: [
          "Design pixel-perfect, responsive interfaces.",
          "Ensure accessibility compliance (WCAG standards).",
          "Apply design systems for scalability and consistency.",
        ],
      },
      {
        title: "Web Development",
        description: [
          "Develop using React, Next.js, or WordPress frameworks.",
          "Implement SEO-friendly structure and microdata.",
          "Integrate APIs and third-party services for dynamic functionality.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Search Engine Optimization (SEO)",
    subtitle:
      "Improve visibility and drive organic traffic with proven SEO strategies.",
    image: "/images/services/seo.jpg",
    details: [
      {
        title: "Technical SEO",
        description: [
          "Conduct site audits and performance optimization.",
          "Fix crawlability and indexing issues.",
          "Implement structured data and XML sitemaps.",
        ],
      },
      {
        title: "On-Page SEO",
        description: [
          "Optimize meta titles, descriptions, and headings.",
          "Improve keyword density and internal linking.",
          "Enhance content readability and engagement.",
        ],
      },
      {
        title: "Off-Page SEO & Link Building",
        description: [
          "Build authority through high-quality backlinks.",
          "Outreach and guest posting on niche platforms.",
          "Monitor domain authority and spam scores.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Social Media Management",
    subtitle:
      "Grow your audience and increase brand awareness through social storytelling.",
    image: "/images/services/social-media.jpg",
    details: [
      {
        title: "Social Strategy & Content Calendar",
        description: [
          "Define tone, posting frequency, and platform goals.",
          "Develop monthly or quarterly content plans.",
          "Integrate social trends and audience behavior insights.",
        ],
      },
      {
        title: "Creative Design & Engagement",
        description: [
          "Create scroll-stopping visuals and short-form videos.",
          "Engage with followers through comments and messages.",
          "Run social contests and live sessions for reach boost.",
        ],
      },
      {
        title: "Analytics & Reporting",
        description: [
          "Track performance using native platform insights.",
          "Identify growth opportunities using engagement data.",
          "Deliver clear, actionable monthly reports.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Branding & Identity Design",
    subtitle:
      "Craft memorable brand experiences that connect with your audience emotionally.",
    image: "/images/services/branding.jpg",
    details: [
      {
        title: "Brand Discovery & Research",
        description: [
          "Understand market position, competitors, and values.",
          "Define core brand mission and voice.",
          "Create brand archetypes and personality traits.",
        ],
      },
      {
        title: "Logo & Visual System",
        description: [
          "Design versatile, scalable logos and wordmarks.",
          "Create color palettes, typography, and imagery guidelines.",
          "Prepare brand style guides and documentation.",
        ],
      },
      {
        title: "Brand Collateral Design",
        description: [
          "Design stationery, packaging, and social media kits.",
          "Ensure visual consistency across marketing materials.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "E-commerce Development",
    subtitle:
      "Launch high-performance online stores that convert visitors into buyers.",
    image: "/images/services/ecommerce.jpg",
    details: [
      {
        title: "Platform Setup & Customization",
        description: [
          "Develop stores using Shopify, WooCommerce, or custom frameworks.",
          "Implement product filtering, reviews, and advanced search.",
        ],
      },
      {
        title: "Conversion Optimization",
        description: [
          "Apply psychological triggers to improve checkout flow.",
          "Use heatmaps and analytics to identify user friction.",
          "Set up abandoned cart recovery automation.",
        ],
      },
      {
        title: "Payment & Logistics Integration",
        description: [
          "Integrate multiple payment gateways and local currencies.",
          "Connect delivery APIs for real-time tracking.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Mobile App Design & Development",
    subtitle:
      "Build cross-platform mobile apps that deliver seamless digital experiences.",
    image: "/images/services/mobile-app.jpg",
    details: [
      {
        title: "App Strategy & Research",
        description: [
          "Define core app objectives and user personas.",
          "Analyze competitors and feature benchmarks.",
        ],
      },
      {
        title: "UI/UX Design",
        description: [
          "Design modern, gesture-friendly interfaces.",
          "Focus on user retention and conversion-driven UX flows.",
        ],
      },
      {
        title: "App Development & Deployment",
        description: [
          "Build with React Native, Flutter, or native stacks.",
          "Test across iOS and Android devices.",
          "Handle app store publishing and post-launch support.",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Performance Marketing (PPC)",
    subtitle: "Maximize ROI through data-driven paid advertising campaigns.",
    image: "/images/services/ppc.jpg",
    details: [
      {
        title: "Campaign Setup & Targeting",
        description: [
          "Create Google Ads, Meta, and LinkedIn campaigns.",
          "Target audiences using interest and behavioral data.",
          "Use retargeting to re-engage previous visitors.",
        ],
      },
      {
        title: "Ad Design & Copywriting",
        description: [
          "Craft high-converting headlines and CTAs.",
          "Design visual ads optimized for various placements.",
        ],
      },
      {
        title: "Optimization & Reporting",
        description: [
          "A/B test ads, keywords, and landing pages.",
          "Monitor ROAS and cost-per-acquisition.",
          "Provide transparent weekly performance reports.",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Video Production & Motion Graphics",
    subtitle:
      "Tell your brand’s story through powerful visuals and storytelling.",
    image: "/images/services/video.jpg",
    details: [
      {
        title: "Pre-Production & Scripting",
        description: [
          "Develop creative concepts and storyboards.",
          "Write scripts and plan shot lists.",
        ],
      },
      {
        title: "Filming & Editing",
        description: [
          "Shoot with high-end cameras and lighting setups.",
          "Add transitions, effects, and background music.",
        ],
      },
      {
        title: "Animation & Motion Graphics",
        description: [
          "Design explainer animations and logo reveals.",
          "Animate text and visuals for social reels.",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Software Development & Automation",
    subtitle:
      "Transform your operations with custom-built software and intelligent automation.",
    image: "/images/services/software.jpg",
    details: [
      {
        title: "Custom Web Applications",
        description: [
          "Develop scalable applications using modern frameworks (Next.js, Node.js).",
          "Implement authentication, dashboards, and analytics.",
        ],
      },
      {
        title: "Business Process Automation",
        description: [
          "Integrate CRMs, ERPs, and task management tools.",
          "Automate repetitive workflows using APIs and scripts.",
        ],
      },
      {
        title: "Maintenance & Security",
        description: [
          "Monitor uptime and performance continuously.",
          "Apply regular security patches and updates.",
        ],
      },
    ],
  },
];
