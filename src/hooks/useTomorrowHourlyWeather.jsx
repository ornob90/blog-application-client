"use client";

import { OPEN_WEATHER_BASE_URL } from "@/api/api";
import formatHourlyData from "@/utils/openweathermap/formatHourlyData";
import formatTomorrowData from "@/utils/openweathermap/formatTomorrowData";
import getCoordinates from "@/utils/openweathermap/getCoordinates";
import hasCoordinatesChanges from "@/utils/openweathermap/hasCoordinatesChanges";
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

      const hasChanged = await hasCoordinatesChanges(latitude, longitude, type);

      if (hasChanged.status) {
        console.log("Not hit API ", type);
        return setHourlyWeather(hasChanged.data);
      }

      console.log("Not hit API ", type);

      // console.log(response);

      if (type.toLowerCase() === "hourly-weather") {
        const hourlyWeatherData = formatHourlyData(response?.list || []);
        setHourlyWeather(hourlyWeatherData);

        localStorage.setItem(
          type,
          JSON.stringify({
            data: hourlyWeatherData,
            lat: latitude,
            lon: longitude,
          })
        );
      } else if (type.toLowerCase() === "tomorrow-weather") {
        const tomorrowWeatherData = formatTomorrowData(response?.list || []);
        // console.log(tomorrowWeatherData);
        setHourlyWeather(tomorrowWeatherData);

        localStorage.setItem(
          type,
          JSON.stringify({
            data: tomorrowWeatherData,
            lat: latitude,
            lon: longitude,
          })
        );
      }
    };

    getHourlyData();
  }, []);

  return hourlyWeather;
};

export default useTomorrowHourlyWeather;
