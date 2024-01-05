import Location from "@/components/test/Location";
import AllBlogs from "@/components/ui/AllBlogs/AllBlogs";
import Banner from "@/components/ui/Banner/Banner";
import getTodaysWeather from "@/utils/openweathermap/getTodaysWeather";
import React from "react";

const Home = () => {
  const response = getTodaysWeather();

  console.log(response);

  return (
    <div>
      <Banner />
      <Location />
      <AllBlogs />
    </div>
  );
};

export default Home;
