import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import Blogs from "./Blogs";
import getAllBlogs from "@/utils/getAllBlogs";

const AllBlogs = () => {
  return (
    <Container className="my-10">
      <SectionHeader header="Explore Our Blogs" />

      <Blogs />
    </Container>
  );
};

export default AllBlogs;
