"use client";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import useTomorrowHourlyWeather from "@/hooks/useTomorrowHourlyWeather";
import useTodaysWeather from "@/hooks/useTodaysWeather";
import React from "react";

const Location = () => {
  const value = useCurrentLocation();
  // console.log(value);

  // const response = useTodaysWeather();

  const response = useTomorrowHourlyWeather("tomorrow");

  // console.log(response);

  return <div className="text-2xl font-bold">Location</div>;
};

export default Location;
