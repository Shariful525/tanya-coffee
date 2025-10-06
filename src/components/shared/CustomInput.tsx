import React from "react";

interface UniversalInputProps {
  label: string;
  name: string;
  type?: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const CustomInput: React.FC<UniversalInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block mb-1 text-base text-white">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full p-2 rounded-md bg-white-20 border border-white-30 placeholder-white-30 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default CustomInput;
