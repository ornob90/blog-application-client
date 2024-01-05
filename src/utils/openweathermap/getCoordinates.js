"use client";
const getCoordinates = async () => {
  const { coords } = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const { latitude, longitude } = coords;

  return { latitude, longitude };
};

export default getCoordinates;
