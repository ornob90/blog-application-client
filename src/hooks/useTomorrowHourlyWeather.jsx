"use client";

import { OPEN_WEATHER_BASE_URL } from "@/api/api";
import formatHourlyData from "@/utils/openweathermap/formatHourlyData";
import formatTomorrowData from "@/utils/openweathermap/formatTomorrowData";
import getCoordinates from "@/utils/openweathermap/getCoordinates";
import axios from "axios";
import { useEffect, useState } from "react";

// const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

// type = "hourly" | "tomorrow"
const useTomorrowHourlyWeather = (type = "hourly") => {
  const [hourlyWeather, setHourlyWeather] = useState([]);

  useEffect(() => {
    const getHourlyData = async () => {
      const { latitude, longitude } = await getCoordinates();

      const { data: response } = await axios.get(
        OPEN_WEATHER_BASE_URL +
          `/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      // console.log(response);

      if (type.toLowerCase() === "hourly") {
        const hourlyWeatherData = formatHourlyData(response?.list || []);

        setHourlyWeather(hourlyWeatherData);
      } else if (type.toLowerCase() === "tomorrow") {
        const tomorrowWeatherData = formatTomorrowData(response?.list || []);

        console.log(tomorrowWeatherData);
        setHourlyWeather(tomorrowWeatherData);
      }
    };

    getHourlyData();
  }, []);

  return hourlyWeather;
};

export default useTomorrowHourlyWeather;
