"use client";

import Button from "@/components/html/Button";
import postBlogData from "@/utils/postBlogData";
import React from "react";
import { useForm } from "react-hook-form";

const BlogForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      console.log(data);
      const response = await postBlogData(data);
      if (response?.insertOne) {
        reset();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-16">
      {/* Title  */}
      <div className="mt-10">
        <label htmlFor="title" className="font-bold text-xl ">
          Title
        </label>
        <input
          {...register("title", { required: true })}
          type="text"
          id="title"
          className="w-full py-2 bg-[#e9e9e9] pl-2 mt-2 focus:outline-none"
          placeholder="What's the name? "
        />
        {errors.title?.type === "required" && (
          <p className="text-red-500 text-sm"> Title is required</p>
        )}
      </div>

      {/* Thumbnail */}
      <div className="mt-10">
        <label htmlFor="thumbnail" className="font-bold text-xl ">
          Thumbnail
        </label>
        <input
          {...register("thumbnail", { required: true })}
          type="text"
          id="thumbnail"
          className="w-full py-2 bg-[#e9e9e9] pl-2 mt-2 focus:outline-none"
          placeholder="Your Thumbnail URL"
        />
        {errors.title?.type === "required" && (
          <p className="text-red-500 text-sm"> Thumbnail is required</p>
        )}
      </div>

      {/* Content */}
      <div className="mt-10">
        <label htmlFor="content" className="font-bold text-xl ">
          Content
        </label>
        <textarea
          {...register("content", { required: true, minLength: 2 })}
          type="text"
          id="content"
          className="w-full py-2 bg-[#e9e9e9] pl-2 mt-2 focus:outline-none"
          placeholder="What's you thinking? "
          rows={10}
        />
        {errors.content?.type === "required" && (
          <p className="text-red-500 text-sm"> Content is required</p>
        )}
        {errors.content?.type === "minLength" && (
          <p className="text-red-500 text-sm"> Minimum 20 words needed</p>
        )}
      </div>
      <Button className="w-full bg-secondary py-2 text-white">Create</Button>
    </form>
  );
};

export default BlogForm;
