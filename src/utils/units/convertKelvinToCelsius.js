const convertKelvinToCelsius = (temp_kelvin) => {
  return +(temp_kelvin - 273.15).toFixed(2);  // "+" used for convert the type to numeric. 
};

export default convertKelvinToCelsius;
