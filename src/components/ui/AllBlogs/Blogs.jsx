import BlogCard from "@/components/shared/BlogCard/BlogCard";
import React from "react";

const Blogs = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7].map((blog) => (
        <BlogCard key={blog} />
      ))}
    </div>
  );
};

export default Blogs;
