import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import Blogs from "./Blogs";
import getCitiesTemperature from "@/utils/openweathermap/getCitiesTemperature";

const AllBlogs = async () => {
  const response = await getCitiesTemperature([
    "Hyderabad",
    "Kolkata",
    "Kochi",
    "New Delhi",
    "Surat",
    "Jaipur",
    "Bangalore",
    "Mumbai",
    "Goa",
    "Pune",
    "Ahmadabad",
    "Chennai",
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
