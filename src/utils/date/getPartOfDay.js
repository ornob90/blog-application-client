function getPartOfDay() {
  //   const utcDate = new Date(utcTimestamp * 1000);
  const date = new Date();

  const hour = date.getHours();

  if (6 <= hour && hour < 12) {
    return "Morning";
  }

  if (12 <= hour && hour < 18) {
    return "Afternoon";
  }

  //   if (18 <= hour && hour < 24) {
  //     return "Evening";
  //   }

  return "Night";
}

export default getPartOfDay;

const city = [
  "Ghaziabad",
  "Nanital",
  "Kullu",
  "Nagpur",
  "Ooty",
  "Haridwar",
  "Assam",
  "Patna",
  "Noida",
  "Chandigarh",
  "Jaipur",
  "Lucknow",
  "Shimla",
  "Kolkata",
  "Pune",
  "Chennai",
  "Mumbai",
  "Bangalore",
  "Delhi",
  "Muzaffarnagar",
  "Meerut",
  "Srinagar",
  "Chhattisgarh",
  "Ludhiana",
  "Manali",
  "Gulmarg",
  "Bihar",
];
