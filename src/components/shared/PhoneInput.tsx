"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

interface PhoneNumberInputProps {
  value?: string;
  onChange?: (value: string) => void;
  defaultCountry?: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
}

export function PhoneNumberInput({
  value = "",
  onChange,
  defaultCountry = "MY",
  className,
  label,
  disabled = false,
  placeholder = "Enter phone number",
}: PhoneNumberInputProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const controller = new AbortController();

    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags",
          { signal: controller.signal }
        );
        const data = await response.json();

        const formattedCountries: Country[] = data
          .map((country: any) => ({
            name: country.name.common,
            code: country.cca2,
            dialCode: country.idd.root
              ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
              : "",
            flag: country.flags.svg || country.flags.png,
          }))
          .filter((country: Country) => country.dialCode)
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);

        const defaultCountryData =
          formattedCountries.find((c) => c.code === defaultCountry) ??
          formattedCountries[0];

        setSelectedCountry(defaultCountryData || null);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Error fetching countries:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
    return () => controller.abort();
  }, [defaultCountry]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle phone number change
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    setPhoneNumber(digits);
  };

  // Handle country selection
  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery("");
  };

  // Safe onChange trigger — avoids infinite loop
  useEffect(() => {
    if (!selectedCountry || !onChange) return;
    onChange(`${selectedCountry.dialCode}${phoneNumber}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, phoneNumber]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={className}>
      {label && (
        <label className="block mb-1 text-base text-white">{label}</label>
      )}

      <div
        className={`w-full p-2 rounded-md bg-white-20 border border-white-30 flex items-center ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {/* Country Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => !disabled && setIsOpen((prev) => !prev)}
            disabled={loading || disabled}
            className={`flex items-center gap-2 px-2 py-1 transition-colors focus:outline-none ${
              disabled ? "cursor-not-allowed" : "hover:opacity-80"
            }`}
          >
            {loading ? (
              <span className="text-sm text-white/50">Loading...</span>
            ) : selectedCountry ? (
              <>
                <img
                  src={selectedCountry.flag || "/placeholder.svg"}
                  alt={selectedCountry.name}
                  className="w-7 h-5 object-cover rounded"
                />
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
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </>
            ) : (
              <span className="text-sm text-white/50">Select</span>
            )}
          </button>

          {isOpen && (
            <div className="absolute z-50 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="p-2 border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Search country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-md focus:outline-none text-black"
                />
              </div>

              <div className="max-h-60 overflow-y-auto">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-blue-50 transition-colors ${
                        selectedCountry?.code === country.code
                          ? "bg-blue-100"
                          : ""
                      }`}
                    >
                      <img
                        src={country.flag || "/placeholder.svg"}
                        alt={country.name}
                        className="w-6 h-4 object-cover rounded"
                      />
                      <span className="flex-1 text-sm truncate text-black">
                        {country.name}
                      </span>
                      <span className="text-sm font-medium text-gray-600">
                        {country.dialCode}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-4 text-sm text-center text-gray-500">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="w-px h-8 bg-white-30 mx-3"></div>

        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 outline-none placeholder-white-30 text-white disabled:cursor-not-allowed bg-transparent"
        />
      </div>
    </div>
  );
}
