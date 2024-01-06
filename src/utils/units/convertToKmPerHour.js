const convertToKmPerHour = (metersPerSecond) => {
  const conversionFactor = 3.6;

  const kilometersPerHour = metersPerSecond * conversionFactor;

  return kilometersPerHour;
};

export default convertToKmPerHour;
