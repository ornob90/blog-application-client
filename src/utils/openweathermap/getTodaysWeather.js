import axios from "axios";
import getCoordinates from "./getCoordinates";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getTodaysWeather = async () => {
  const { latitude, longitude } = await getCoordinates();

  const response = await axios.get(
    BASE_URL +
      `?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return response;
};

export default getTodaysWeather;
