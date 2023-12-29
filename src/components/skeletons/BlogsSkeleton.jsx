import Link from "next/link";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const BlogsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((blog) => (
        <div key={blog} className="border h-[330px] rounded-md shadow-sm">
          <div className="h-[150px] w-full animate-pulse bg-gray-100 rounded-t-md"></div>

          {/* content */}
          <div className="p-2 flex flex-col  justify-between h-[170px]">
            <div className="flex justify-between icon-link">
              <h1 className="mt-2 font-bold bg-gray-100 h-[10px] w-[60%]"></h1>
              <div className="flex items-center gap-2 text-lg i">
                <AiFillEdit className="text-gray-200" />

                <AiFillDelete className="text-gray-200" />
              </div>
            </div>

            <p className="text-[12px] mt-3 overflow-hidden h-[30px] w-[80%] animate-pulse"></p>

            <div className="bg-gray-100 text-white py-1 px-4 text-[12px] animate-pulse h-[30px] w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsSkeleton;
