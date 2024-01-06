"use client";

import getCoordinates from "@/utils/openweathermap/getCoordinates";
import convertKelvinToCelsius from "@/utils/units/convertKelvinToCelsius";
import convertToKmPerHour from "@/utils/units/convertToKmPerHour";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

const useHourlyWeather = () => {
  const [hourlyWeather, setHourlyWeather] = useState([]);

  useEffect(() => {
    const getHourlyData = async () => {
      const { latitude, longitude } = await getCoordinates();

      const { data: response } = await axios.get(
        BASE_URL +
          `?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const hourlyWeatherData = response?.list?.map((weather) => ({
        temperature: convertKelvinToCelsius(weather?.main?.feels_like),
        temp_max: convertKelvinToCelsius(weather?.main?.temp_max),
        temp_min: convertKelvinToCelsius(weather?.main?.temp_min),
        humidity: weather?.main?.humidity,
        precipitation: weather?.pop,
        wind_speed: convertToKmPerHour(weather?.wind?.speed),
      }));

      setHourlyWeather(hourlyWeatherData);
    };

    getHourlyData();
  }, []);

  return hourlyWeather;
};

export default useHourlyWeather;
