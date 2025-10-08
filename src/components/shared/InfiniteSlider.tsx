"use client";

import React, { ReactNode } from "react";

interface InfiniteSliderProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  hasShadow?: boolean;
  shadowClassName?: string;

}

const InfiniteSlider = ({
  children,
  speed = 25,
  direction = "left",
  hasShadow = true,




}: InfiniteSliderProps) => {
  const duration = 100 / speed;

  return (
    <div className="relative w-full overflow-hidden py-2 flex items-center group">
      {hasShadow && (
        <>
          <div className={`absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-transparent z-10 pointer-events-none `} />
          <div className={`absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none `} />
        </>
      )}

      <div
        className={`flex whitespace-nowrap ${direction === "left" ? "animate-slider-left" : "animate-slider-right"
        } group-hover:[animation-play-state:paused]`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {children}
      </div>

      <style jsx global>{`
        @keyframes slider-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slider-left {
          animation: slider-left linear infinite;
        }

        @keyframes slider-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slider-right {
          animation: slider-right linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteSlider;
