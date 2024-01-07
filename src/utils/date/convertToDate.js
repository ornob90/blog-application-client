const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const convertToDate = (timeInMs) => {
  const date = new Date(timeInMs * 1000);

  const weekDayName = weekDays[date.getDay()];
  const monthDate = date.getDate();

  return `${weekDayName} ${monthDate}`;
};

export default convertToDate;
