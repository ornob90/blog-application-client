import React from "react";

const SectionHeader = ({ header }) => {
  return (
    <div className="border-b pb-3 text-xl md:text-2xl font-semibold">
      <h1 className="">{header}</h1>
    </div>
  );
};

export default SectionHeader;
