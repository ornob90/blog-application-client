import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <Link
      href="/blog-details"
      className="relative border pb-2 rounded-md shadow-sm"
    >
      <img
        src="https://enviragallery.com/wp-content/uploads/2016/05/How-to-Fix-Missing-Post-Thumbnail-Issue-in-WordPress.png"
        className="w-full  rounded-t-md shadow-sm"
      />

      {/* content */}
      <div className="p-2">
        <div className="flex justify-between icon-link">
          <h1 className="font-bold mt-2">Name Of the Blog</h1>
          <div></div>
        </div>

        <p className="text-[12px] mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse
          qui magni fugiat, pariatur nisi.
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
