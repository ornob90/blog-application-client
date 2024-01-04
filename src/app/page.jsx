import Location from "@/components/test/Location";
import AllBlogs from "@/components/ui/AllBlogs/AllBlogs";
import Banner from "@/components/ui/Banner/Banner";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <Location />
      <AllBlogs />
    </div>
  );
};

export default Home;
