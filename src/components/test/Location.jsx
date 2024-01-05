"use client";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import useTodaysWeather from "@/hooks/useTodaysWeather";
import React from "react";

const Location = () => {
  const value = useCurrentLocation();
  // console.log(value);

  const response = useTodaysWeather();

  console.log(response);

  return <div className="text-8xl font-bold">Location</div>;
};

export default Location;
