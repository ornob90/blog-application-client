import axios from "axios";

const GEO_LOCATION_BASE_URL = `http://api.openweathermap.org/geo/1.0/direct`;

const CUR_WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getCitiesTemperature = async (cities = []) => {
  const results = [];

  for (const city of cities) {
    const { data: coordinates } = await axios.get(
      GEO_LOCATION_BASE_URL +
        `?q=${city}&limit=2&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    const { lat, lon } = coordinates[0] || {};

    // console.log({ lat, lon });

    const { data: response } = await axios.get(
      CUR_WEATHER_BASE_URL +
        `?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    results.push({
      [city]: response?.main?.temp,
    });
  }

  return results;
};

export default getCitiesTemperature;
