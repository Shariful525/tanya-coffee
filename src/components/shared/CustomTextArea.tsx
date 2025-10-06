import React from "react";

interface UniversalTextareaProps {
  label: string;
  name: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  rows?: number; // optional rows for textarea
}

const CustomTextarea: React.FC<UniversalTextareaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
  className = "",
  rows = 3,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block mb-1 text-base text-white">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className="w-full p-2 rounded-md bg-white-20 border border-white-30 placeholder-white-30 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default CustomTextarea;
