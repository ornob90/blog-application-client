const convertTo12HourFormat = (time) => {
  const date = new Date(time * 1000);

  const options = { hour: "numeric", minute: "numeric", hour12: true };

  return date.toLocaleTimeString("en-US", options);
};

export default convertTo12HourFormat;
