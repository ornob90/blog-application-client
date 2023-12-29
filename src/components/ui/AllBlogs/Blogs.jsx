"use client";
import BASE_URL from "@/api/api";
import BlogCard from "@/components/shared/BlogCard/BlogCard";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  // const { blogPosts } = await getAllBlogs();

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data.blogPosts);
      });
  }, []);

  //   console.log(blogPosts);
  return (
    <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {blogPosts?.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
