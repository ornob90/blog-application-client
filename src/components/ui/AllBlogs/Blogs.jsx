"use client";
import BASE_URL from "@/api/api";
import BlogCard from "@/components/shared/BlogCard/BlogCard";
import BlogsSkeleton from "@/components/skeletons/BlogsSkeleton";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  // const { blogPosts } = await getAllBlogs();

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL + "/blogs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogPosts(data.blogPosts);
      })
      .catch((err) => setLoading(false));
  }, []);

  //   console.log(blogPosts);
  if (loading) return <BlogsSkeleton />;

  return (
    <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {blogPosts?.map((blog) => (
        <BlogCard key={blog._id} blog={blog} setBlogPosts={setBlogPosts} />
      ))}
    </div>
  );
};

export default Blogs;
