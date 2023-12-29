import Button from "@/components/html/Button";
import deleteSingleBlog from "@/utils/deleteSingleBlog";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const BlogCard = ({ blog }) => {
  const { _id, title, content, thumbnail } = blog;

  const router = useRouter();

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      const response = await deleteSingleBlog(_id);
      console.log(response);
      router.push("/", undefined, { shallow: true });
    }
  };

  return (
    <div className="border h-[330px] rounded-md shadow-sm">
      {/* <img
        src={thumbnail}
        alt={title}
        className="w-full h-[150px]  rounded-t-md shadow-sm"
      /> */}

      <Image
        src={thumbnail}
        alt={title}
        width={0}
        height={0}
        style={{ width: "100%", height: "150px" }}
        unoptimized
        className="shadow-sm rounded-t-md"
      />

      {/* content */}
      <div className="p-2 flex flex-col  justify-between h-[170px]">
        <div className="flex justify-between icon-link">
          <h1 className="mt-2 font-bold">
            {title?.split(" ").length < 3
              ? title
              : title.split(" ").slice(0, 3).join(" ") + ". . ."}
          </h1>
          <div className="flex items-center gap-2 text-lg i">
            <Link href={`/updateBlog/${_id}`}>
              <AiFillEdit className="text-blue-700" />
            </Link>
            <AiFillDelete onClick={handleDelete} className="text-red-700" />
          </div>
        </div>

        <p className="text-[12px] mt-3 overflow-hidden">
          {content?.split(" ").length < 15
            ? content
            : content.split(" ").slice(0, 15).join(" ") + ". . ."}
        </p>

        <Link href={`/blog/${_id}`}>
          <Button className="bg-black text-white py-1 px-4 text-[12px]">
            More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
