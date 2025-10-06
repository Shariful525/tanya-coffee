"use client";
import React, { useRef, useEffect } from "react";

const HeroVideoSection = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const container = containerRef.current;
    if (!iframe || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!iframe.src) {
              iframe.src = iframe.dataset.src!;
            }
          } else {
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative 
        mx-auto 
        max-w-[420px] 
        mt-6 
        p-[4px]
        rounded-2xl 
        bg-white 
        shadow-[0_0_25px_#01519899]
      "
    >
      <div className="rounded-xl overflow-hidden">
        <iframe
          ref={iframeRef}
          data-src="https://www.youtube.com/embed/sAJyhErLAio?si=rmf0ZZn29uvWlRVT"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full min-h-[250px] h-auto rounded-xl"
          title="Hero Video"
        ></iframe>
      </div>
    </div>
  );
};

export default HeroVideoSection;
