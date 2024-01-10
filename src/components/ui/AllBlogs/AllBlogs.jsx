import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import Blogs from "./Blogs";
import getCitiesTemperature from "@/utils/openweathermap/getCitiesTemperature";

const AllBlogs = async () => {
  const response = await getCitiesTemperature([
    "Ghaziabad",
    "Nainital",
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
    "Ludhiana",
    "Manali",
    "Gulmarg",
    "Bihar",
    // "Chattisgarh",
  ]);

  console.log(response);

  return (
    <Container className="my-10">
      <SectionHeader header="Explore Our Blogs" />

      <Blogs />
    </Container>
  );
};

export default AllBlogs;
