"use client";
import React, { useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right"; // optional
  duration?: number; // in ms
};

export default function FadeInSection({
  children,
  className = "",
  direction = "up",
  duration = 800,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-[${duration}ms] 
        opacity-0 ${directionClasses[direction]}
        ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
