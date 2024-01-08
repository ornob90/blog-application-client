import getTomorrowCurrentTimeUTC_Stamp from "../date/getTomorrowCurrentTimeUTC_Stamp";
import convertKelvinToCelsius from "../units/convertKelvinToCelsius";
import convertToKmPerHour from "../units/convertToKmPerHour";

const formatTomorrowData = (weatherData) => {
  const curTime = getTomorrowCurrentTimeUTC_Stamp();

  const tomorrowWeatherData = weatherData.find((weather, idx) => {
    return curTime >= weather.dt && curTime < weatherData[idx + 1].dt;
  });

  return {
    temperature: convertKelvinToCelsius(tomorrowWeatherData?.main?.feels_like),
    temp_max: convertKelvinToCelsius(tomorrowWeatherData?.main?.temp_max),
    temp_min: convertKelvinToCelsius(tomorrowWeatherData?.main?.temp_min),
    humidity: tomorrowWeatherData?.main?.humidity,
    precipitation: tomorrowWeatherData?.pop,
    wind_speed: convertToKmPerHour(tomorrowWeatherData?.wind?.speed), // m/s to km/h convert
  };
};

export default formatTomorrowData;
