"use client";
import React, { useEffect, useRef, useState } from "react";

type FlipTextProps = {
  words?: string[];
  intervalMs?: number;
  className?: string;
  variant?: "fade" | "slide" | "flip" | "zoom" | "rotate";
};

const DEFAULT_WORDS = [
  "Innovative",
  "Passionate",
  "Creative",
  "Strategic",
  "Reliable",
];

export default function FlipText({
  words = DEFAULT_WORDS,
  intervalMs = 2200,
  className = "",
  variant = "fade",
}: FlipTextProps) {
  const [index, setIndex] = useState(0);
  const idxRef = useRef(index);

  useEffect(() => {
    idxRef.current = index;
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  // Define variant styles
  const getVariantClasses = (isActive: boolean) => {
    switch (variant) {
      case "fade":
        return isActive
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3";
      case "slide":
        return isActive
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10";
      case "flip":
        return isActive ? "opacity-100 rotate-x-0" : "opacity-0 rotate-x-90";
      case "zoom":
        return isActive ? "opacity-100 scale-100" : "opacity-0 scale-50";
      case "rotate":
        return isActive ? "opacity-100 rotate-0" : "opacity-0 rotate-180";
      default:
        return "";
    }
  };

  return (
    <div
      className={`relative inline-flex justify-center items-center ${className}`}
      aria-live="polite"
    >
      {words.map((word, i) => {
        const isActive = i === index;
        return (
          <span
            key={word + i}
            className={`absolute transition-all duration-700 ease-in-out transform-gpu ${getVariantClasses(
              isActive
            )}`}
            aria-hidden={!isActive}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
