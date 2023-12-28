import BlogForm from "@/components/shared/BlogForm/BlogForm";
import Container from "@/components/shared/Container/Container";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import getSingleBlog from "@/utils/getSingleBlog";
import React from "react";

const UpdateBlog = async ({ params }) => {
  const { blogId } = params;

  const { blogPost: blog } = await getSingleBlog(blogId);

  return (
    <Container className="mt-16 w-[85%] sm:w-[70%] md:w-[60%]">
      <SectionHeader header="Want to update your thoughts?  " />
      <BlogForm blog={blog} method="put" />
    </Container>
  );
};

export default UpdateBlog;
