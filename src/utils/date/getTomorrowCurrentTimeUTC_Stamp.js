const getTomorrowCurrentTimeUTC_Stamp = () => {
  const currentTimeMS = new Date().getTime();

  const tomorrowTimeMS = currentTimeMS + 24 * 60 * 60 * 1000;

  const tomorrowTimeUnixSeconds = Math.floor(tomorrowTimeMS / 1000);

  return tomorrowTimeUnixSeconds;
};

export default getTomorrowCurrentTimeUTC_Stamp;
