"use client";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import React from "react";

const Location = () => {
  const value = useCurrentLocation();
  console.log(value);

  return <div className="text-8xl font-bold">Location</div>;
};

export default Location;
