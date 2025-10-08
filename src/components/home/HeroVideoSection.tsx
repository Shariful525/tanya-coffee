"use client";
import React, { useState, useEffect } from "react";

const HeroVideoSection = () => {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadVideo(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="
        relative 
        mx-auto 
        max-w-[420px] 
        mt-6 
        p-[4px]
        rounded-2xl 
        bg-white 
        shadow-[0_0_25px_#01519899]
        will-change-transform
      "
    >
      <div className="rounded-xl overflow-hidden bg-black">
        {loadVideo ? (
          <iframe
            src="https://www.youtube.com/embed/sAJyhErLAio?si=rmf0ZZn29uvWlRVT"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full min-h-[250px] h-auto rounded-xl"
            title="Hero Video"
          ></iframe>
        ) : (
          <div className="w-full min-h-[250px] bg-gradient-to-b from-blue-100 to-blue-50 animate-pulse rounded-xl" />
        )}
      </div>
    </div>
  );
};

export default HeroVideoSection;
