"use client";

import React from "react";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function CustomCheckbox({
  label,
  checked,
  onChange,
}: CustomCheckboxProps) {
  return (
    <label className="flex items-start gap-2 cursor-pointer select-none">
      <div
        onClick={() => onChange(!checked)}
        className={`w-[30px] h-[30px] shrink-0 mt-0.5 rounded-md border-2 border-white flex items-center justify-center transition-all duration-200 ${
          checked ? "bg-white" : "bg-transparent"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0074db"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 scale-100"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>

      {/* Label text */}
      <span className="text-sm text-white whitespace-">{label}</span>
    </label>
  );
}
