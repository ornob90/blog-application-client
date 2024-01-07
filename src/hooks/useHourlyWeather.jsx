"use client";

import formatHourlyData from "@/utils/openweathermap/formatHourlyData";
import getCoordinates from "@/utils/openweathermap/getCoordinates";
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

      // console.log(response);

      const hourlyWeatherData = formatHourlyData(response);

      setHourlyWeather(hourlyWeatherData);
    };

    getHourlyData();
  }, []);

  return hourlyWeather;
};

export default useHourlyWeather;
