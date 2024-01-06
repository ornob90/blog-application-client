const convertKelvinToCelsius = (temp_kelvin) => {
  return +(temp_kelvin - 273.15).toFixed(2);
};

export default convertKelvinToCelsius;
