import React from "react";

const SpecializedListItem = ({ text }: { text?: string }) => {
  return (
    <div className="w-full bg-bg rounded-full flex items-center  gap-x-1.5 px-5 py-2.5">
      <div className="w-2.5 h-2.5  rounded-full bg-primary shrink-0" />
      <p className="text-black text-sm">{text}</p>
    </div>
  );
};

export default SpecializedListItem;
