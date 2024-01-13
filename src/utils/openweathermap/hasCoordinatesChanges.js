const hasCoordinatesChanges = async (latitude, longitude, key) => {
    
  if (!latitude || !longitude || !key) {
    return {
      status: false,
    };
  }

  const weatherData = JSON.parse(localStorage.getItem(key));

  if (!weatherData)
    return {
      status: false,
    };

  const { lat, lon, data } = weatherData;

  if (latitude === lat && longitude === lon)
    return {
      status: true,
      data,
    };

  return {
    status: false,
  };
};

export default hasCoordinatesChanges;
