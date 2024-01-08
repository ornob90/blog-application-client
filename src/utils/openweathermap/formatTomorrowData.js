import convertToDate from "../date/convertToDate";
import getPartOfDay from "../date/getPartOfDay";
import getTomorrowCurrentTimeUTC_Stamp from "../date/getTomorrowCurrentTimeUTC_Stamp";
import convertKelvinToCelsius from "../units/convertKelvinToCelsius";
import convertToKmPerHour from "../units/convertToKmPerHour";

const formatTomorrowData = (weatherData) => {
  const curTimeOfTomorrow = getTomorrowCurrentTimeUTC_Stamp();

  const tomorrowWeatherData = weatherData.find((weather, idx) => {
    return (
      curTimeOfTomorrow >= weather.dt &&
      curTimeOfTomorrow < weatherData[idx + 1].dt
    );
  });

  return {
    temperature: convertKelvinToCelsius(tomorrowWeatherData?.main?.feels_like),
    temp_max: convertKelvinToCelsius(tomorrowWeatherData?.main?.temp_max),
    temp_min: convertKelvinToCelsius(tomorrowWeatherData?.main?.temp_min),
    humidity: tomorrowWeatherData?.main?.humidity,
    precipitation: tomorrowWeatherData?.pop,
    wind_speed: convertToKmPerHour(tomorrowWeatherData?.wind?.speed), // m/s to km/h convert
    date: convertToDate(tomorrowWeatherData?.dt),
    partOfDay: getPartOfDay(),
    sunrise: "",
    sunset: "",
  };
};

export default formatTomorrowData;
