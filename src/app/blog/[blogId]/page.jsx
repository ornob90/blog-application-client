import Container from "@/components/shared/Container/Container";
import getSingleBlog from "@/utils/getSingleBlog";
import Image from "next/image";
import React from "react";

export const generateMetadata = async ({ params: { blogId } }) => {
  const { blogPost: blog } = await getSingleBlog(blogId);

  return {
    title: blog.title,
    description: blog.content,
  };
};

const BlogDetails = async ({ params }) => {
  const { blogId } = params;

  const { blogPost: blog } = await getSingleBlog(blogId);

  const { _id, title, content, thumbnail } = blog;

  return (
    <Container className="w-[85%] sm:w-[70%] md:w-[60%] min-h-[500px] ">
      {/* Header */}
      <div className="mt-10 mb-5 ">
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">{title}</h1>
        {/* <p className="text-light text-[12px]">Created 10 days ago</p> */}
      </div>

      <Image
        src={thumbnail}
        alt={title}
        width={0}
        height={0}
        style={{ width: "100%" }}
        unoptimized
      />

      {/* Content */}
      <p className="mt-10 mb-16 text-sm leading-relaxed">
        {[1, 2, 3, 4].map((value) => (
          <span key={value}>{content}</span>
        ))}
        <br /> <br />
        {[1, 2, 3, 4].map((value) => (
          <span key={value}>{content}</span>
        ))}
      </p>
    </Container>
  );
};

export default BlogDetails;
