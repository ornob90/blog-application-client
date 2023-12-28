import BlogForm from "@/components/shared/BlogForm/BlogForm";
import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";

const page = () => {
  return (
    <Container className="mt-16 w-[85%] sm:w-[70%] md:w-[60%]">
      <SectionHeader header="What's in your mind? " />
      <BlogForm />
    </Container>
  );
};

export default page;
