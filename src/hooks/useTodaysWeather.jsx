"use client";

import { OPEN_WEATHER_BASE_URL } from "@/api/api";
import convertTo12HourFormat from "@/utils/date/convertTo12HourFormat";
import convertToDate from "@/utils/date/convertToDate";
import getPartOfDay from "@/utils/date/getPartOfDay";
import getCoordinates from "@/utils/openweathermap/getCoordinates";
import convertKelvinToCelsius from "@/utils/units/convertKelvinToCelsius";
import convertToKmPerHour from "@/utils/units/convertToKmPerHour";
import axios from "axios";
import { useEffect, useState } from "react";

// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const useTodaysWeather = () => {
  const [todaysWeather, setTodaysWeather] = useState({});

  useEffect(() => {
    const getTodaysData = async () => {
      const { latitude, longitude } = await getCoordinates();

      const { data: response } = await axios.get(
        OPEN_WEATHER_BASE_URL +
          `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const date = convertToDate(Math.floor(new Date().getTime() / 1000));
      // setTodaysWeather(response);

      // console.log(response);

      const weatherData = {
        temperature: convertKelvinToCelsius(response?.main?.feels_like),
        temp_max: convertKelvinToCelsius(response?.main?.temp_max),
        temp_min: convertKelvinToCelsius(response?.main?.temp_min),
        humidity: response?.main?.humidity,
        sunrise: convertTo12HourFormat(response?.sys?.sunrise),
        sunset: convertTo12HourFormat(response?.sys?.sunset),
        wind_speed: convertToKmPerHour(response?.wind?.speed), // m/s to km/h convert
        date,
        partOfDay: getPartOfDay(),
      };

      // console.log(weatherData);

      setTodaysWeather(weatherData);
    };

    getTodaysData();
  }, []);

  return todaysWeather;
};

export default useTodaysWeather;
