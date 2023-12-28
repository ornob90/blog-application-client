import Button from "@/components/html/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const BlogCard = ({ blog }) => {
  const { _id, title, content, thumbnail } = blog;
  return (
    <div>
      <img
        src={thumbnail}
        className="w-full h-[150px] rounded-t-md shadow-sm"
      />

      {/* content */}
      <div className="p-2 flex flex-col  justify-between h-[170px]">
        <div className="flex justify-between icon-link">
          <h1 className="font-bold mt-2">
            {title?.split(" ").length < 3
              ? title
              : title.split(" ").slice(0, 3).join(" ") + "..."}
          </h1>
          <div className="flex i items-center gap-2 text-lg">
            <AiFillEdit className="text-blue-700" />
            <AiFillDelete className="text-red-700" />
          </div>
        </div>

        <p className="text-[12px] mt-3 overflow-hidden">
          {content?.split(" ").length < 15
            ? content
            : content.split(" ").slice(0, 15).join(" ")}
        </p>

        <Link href={`/blog/${_id}`}>
          <Button className="bg-black text-white py-2 px-4">Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
