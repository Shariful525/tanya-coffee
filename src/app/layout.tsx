import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./styles/globals.css";
import BottomMenuBar from "@/components/layout/BottomMenuBar";
import Header from "@/components/layout/Header";

const latoFont = Lato({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Dreamers & Doers | Creative Marketing, Design & Development Agency",
    template: "%s | Dreamers & Doers",
  },
  description:
    "We are a creative team of dreamers and doers — misfits and rebels for a cause — delivering custom-made advertising, marketing, web/app development, and event management solutions. From local startups to Fortune 500 companies across 150+ countries, we create measurable success through strategy, creativity, and a sprinkle of magic.",
  keywords: [
    "marketing agency",
    "creative agency",
    "advertising company",
    "web design",
    "mobile app development",
    "event management",
    "digital strategy",
    "branding",
    "SEO",
    "Fortune 500 marketing",
  ],
  authors: [{ name: "Dreamers & Doers Team" }],
  creator: "Dreamers & Doers Agency",
  publisher: "Dreamers & Doers Agency",
  openGraph: {
    title: "Dreamers & Doers | Custom Advertising, Marketing & Web Development",
    description:
      "A team of dreamers and doers creating marketing wonders for brands worldwide — from startups to Fortune 500s.",
    url: "https://yourdomain.com",
    siteName: "Dreamers & Doers",
    images: [
      {
        url: "https://yourdomain.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dreamers & Doers - Creative Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamers & Doers | Creative Marketing, Design & Development Agency",
    description:
      "We are dreamers and doers — building marketing, design, and development wonders for brands worldwide.",
    images: ["https://yourdomain.com/images/og-image.jpg"],
    creator: "@youragencyhandle",
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoFont.className} antialiased`}>
        <Header />
        {children}
        <BottomMenuBar />
      </body>
    </html>
  );
}
