import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  const { _id, title, content, thumbnail } = blog;
  return (
    <Link
      href={`/blog/${_id}`}
      className="relative border pb-2 rounded-md shadow-sm"
    >
      <img src={thumbnail} className="w-full  rounded-t-md shadow-sm" />

      {/* content */}
      <div className="p-2">
        <div className="flex justify-between icon-link">
          <h1 className="font-bold mt-2">{title}</h1>
          <div></div>
        </div>

        <p className="text-[12px] mt-3 overflow-hidden">
          {content?.split(" ").length < 15
            ? content
            : content.split(" ").slice(0, 15)}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
