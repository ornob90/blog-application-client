"use client";

import { OPEN_WEATHER_BASE_URL } from "@/api/api";
import axios from "axios";
import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the current position using geolocation API and destructure the coords
        const { coords } = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = coords;

        // Fetch the current location
        const response = await axios.get(
          `${OPEN_WEATHER_BASE_URL}lat=${latitude}&lon=${longitude}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        );

        setLocation({
          country: response?.data[0]?.country,
          city: response?.data[0]?.name,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return location;
};

export default useCurrentLocation;

// "use client";

// import { OPEN_WEATHER_BASE_URL } from "@/api/api";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const useCurrentLocation = () => {
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [location, setLocation] = useState({});

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       ({ coords }) => {
//         const { latitude, longitude } = coords;

//         setLatitude(latitude);
//         setLongitude(longitude);
//       },
//       (err) => {
//         console.log(err.message);
//       }
//     );
//   }, []);

//   useEffect(() => {
//     if (latitude && longitude) {
//       axios
//         .get(
//           OPEN_WEATHER_BASE_URL +
//             `lat=${latitude}&lon=${longitude}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
//         )
//         .then((res) =>
//           setLocation({
//             country: res?.data[0]?.country,
//             city: res?.data[0]?.name,
//           })
//         );
//     }
//   }, [latitude, longitude]);

//   return { latitude, longitude, location };
// };

// export default useCurrentLocation;
