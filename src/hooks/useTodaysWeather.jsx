"use client";

import convertTo12HourFormat from "@/utils/date/convertTo12HourFormat";
import getCoordinates from "@/utils/openweathermap/getCoordinates";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const useTodaysWeather = () => {
  const [todaysWeather, setTodaysWeather] = useState({});

  useEffect(() => {
    const getTodaysData = async () => {
      const { latitude, longitude } = await getCoordinates();

      const { data: response } = await axios.get(
        BASE_URL +
          `?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      // setTodaysWeather(response);

      // console.log(response);

      const weatherData = {
        temperature: +(response?.main?.feels_like - 273.15).toFixed(2),
        temp_max: response?.main?.temp_max,
        temp_min: response?.main?.temp_min,
        humidity: response?.main?.humidity,
        sunrise: convertTo12HourFormat(response?.sys?.sunrise),
        sunset: convertTo12HourFormat(response?.sys?.sunset),
        wind_speed: response?.wind?.speed,
      };

      console.log(weatherData);

      setTodaysWeather(weatherData);
    };

    getTodaysData();
  }, []);

  return todaysWeather;
};

export default useTodaysWeather;
