"use client";

import React, { ReactNode } from "react";

const InfiniteSlider = ({
  children,
  speed = 25,
  animationDirection = "left",
  hasShadow = true,
}: {
  children: ReactNode;
  speed?: number;
  animationDirection?: "left" | "right";
  hasShadow: boolean;
}) => {
  const duration = 100 / speed;

  return (
    <div className="relative w-full overflow-hidden py-2 flex items-center group">
      {hasShadow ? (
        <>
          <div className="absolute left-0 top-0 h-full w-24 pointer-events-none bg-gradient-to-r from-[#f4f4f4] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 pointer-events-none bg-gradient-to-l from-[#f4f4f4] to-transparent z-10" />
        </>
      ) : null}

      <div
        className={`flex whitespace-nowrap gap-[40px] ${
          animationDirection === "left"
            ? "animate-slider-left"
            : "animate-slider-right"
        } group-hover:[animation-play-state:paused]`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {children}
        {children}
      </div>

      <style jsx global>{`
        @keyframes slider-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 20px));
          }
        }
        .animate-slider-left {
          animation: slider-left linear infinite;
        }

        @keyframes slider-right {
          0% {
            transform: translateX(calc(-50% - 20px));
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
