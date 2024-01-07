import convertTo12HourFormat from "../date/convertTo12HourFormat";
import convertToDate from "../date/convertToDate";
import convertKelvinToCelsius from "../units/convertKelvinToCelsius";
import convertToKmPerHour from "../units/convertToKmPerHour";

const formatHourlyData = (response) => {
  let day = 0;
  const dayToShow = ["Today", "Tomorrow"];

  const hourlyWeatherData = response?.list?.map((weather, idx) => {
    if (
      idx > 0 &&
      convertToDate(response?.list[idx]?.dt) !==
        convertToDate(response?.list[idx - 1]?.dt)
    ) {
      day++;
    }

    return {
      temperature: convertKelvinToCelsius(weather?.main?.feels_like),
      temp_max: convertKelvinToCelsius(weather?.main?.temp_max),
      temp_min: convertKelvinToCelsius(weather?.main?.temp_min),
      humidity: weather?.main?.humidity,
      precipitation: weather?.pop,
      wind_speed: convertToKmPerHour(weather?.wind?.speed), // m/s to km/h convert
      time: convertTo12HourFormat(weather?.dt),
      date: day < 2 ? dayToShow[day] : convertToDate(weather?.dt),
      day: day + 1,
    };
  });

  return hourlyWeatherData;
};

export default formatHourlyData;
