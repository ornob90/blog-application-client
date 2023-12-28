import BlogCard from "@/components/shared/BlogCard/BlogCard";
import getAllBlogs from "@/utils/getAllBlogs";
import React from "react";

const Blogs = async () => {
  const { blogPosts } = await getAllBlogs();
  //   console.log(blogPosts);
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      {blogPosts?.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
