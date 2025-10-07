"use client";
import React, { useState } from "react";
import CustomSelect from "../shared/CustomSelect";
import CustomCheckbox from "../shared/CustomCheckbox";
import CustomInput from "../shared/CustomInput";
import Image from "next/image";
import { assets } from "@/assets/images";
import ClickForCoffeeButton from "../buttons/ClickForCoffeeButton";
import CustomTextarea from "../shared/CustomTextArea";
import { PhoneNumberInput } from "../shared/PhoneInput";

const services = [
  "Advertising",
  "Web Design",
  "Mobile App Development",
  "Marketing Strategy",
];

const investments = [
  "Less than $1000",
  "$1000 - $5000",
  "$5000 - $10,000",
  "More than $10,000",
];

const ContactForCoffee = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    linkedin: "",
    service: "",
    email: "",
    investment: "",
    message: "",
    companyProfile: false,
    monthlyTips: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="bg-primary rounded-[20px] p-5">
      <Image src={assets.contactPhoto} alt="" className="px-4" />
      <form className="text-white space-y-4">
        <CustomInput
          label="Your Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Dominic Benizi Pereira"
          required
        />

        <PhoneNumberInput
          label="Phone Number"
          value={formData.phone}
          onChange={handlePhoneChange}
        />

        <CustomInput
          label="Your LinkedIn URL"
          name="linkedin"
          type="url"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="http://linkedin.com/in/username"
        />

        <div>
          <label className="block mb-1 text-base">Services You Require</label>
          <CustomSelect
            options={services}
            value={formData.service}
            onChange={(value) => handleSelectChange("service", value)}
            placeholder="Select the service you require"
          />
        </div>

        <CustomInput
          label="Your Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="demo@hello.com"
          required
        />

        <div>
          <label className="block mb-1 font-medium">
            Your Estimated Investment
          </label>
          <CustomSelect
            options={investments}
            value={formData.investment}
            onChange={(value) => handleSelectChange("investment", value)}
            placeholder="Select Your Estimated Investment"
          />
        </div>

        <CustomTextarea
          label="Your Message To Us"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message us & say hello. We would love to hear from you 😍"
        />

        <CustomCheckbox
          label="Email me AdvertisingWorks & More’s Company Profile."
          checked={formData.companyProfile}
          onChange={(checked) =>
            handleCheckboxChange("companyProfile", checked)
          }
        />

        <CustomCheckbox
          label="Send me monthly advertising, marketing, website/mobile app design & development tips."
          checked={formData.monthlyTips}
          onChange={(checked) => handleCheckboxChange("monthlyTips", checked)}
        />

        <ClickForCoffeeButton
          text="Submit"
          className="justify-center py-3 w-full"
          textClassName="text-lg"
          imageClassName="w-[66px] h-[50px] "
        />
      </form>
    </div>
  );
};

export default ContactForCoffee;
