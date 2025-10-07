"use client";

import React from "react";
import { Playball } from "next/font/google";
const playball = Playball({
  subsets: ["latin"],
  weight: "400",
});

const TextPlayball = ({ children }: { children: React.ReactNode }) => {
  return <span className={playball.className}>{children}</span>;
};

export default TextPlayball;
