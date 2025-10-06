"use client";

import React, { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select...",
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between p-2 border border-white-30 rounded-md bg-white/20 transition-all duration-200 cursor-pointer ${
          !value ? "text-white/50" : "text-white"
        }`}
      >
        <span>{value || placeholder}</span>

        {/* Chevron icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`ml-1 text-white/80 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute left-0 right-0 mt-1 bg-white text-primary rounded-md shadow-lg z-10 max-h-48 overflow-y-auto transform transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-y-100 visible"
            : "opacity-0 scale-y-0 invisible"
        }`}
      >
        {options.map((option) => (
          <div
            key={option}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
            className="p-2 hover:bg-primary-light cursor-pointer transition"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
