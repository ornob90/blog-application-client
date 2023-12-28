import Container from "@/components/shared/Container/Container";
import Image from "next/image";
import React from "react";

const BlogDetails = () => {
  return (
    <Container className="w-[85%] sm:w-[70%] md:w-[60%] min-h-[500px] ">
      {/* Header */}
      <div className="mt-10 mb-5 ">
        <h1 className="text-xl sm:text-2xl md:text-3xl  font-bold">
          Name of the Blog
        </h1>
        <p className="text-light text-[12px]">Created 10 days ago</p>
      </div>

      <Image
        src="https://enviragallery.com/wp-content/uploads/2016/05/How-to-Fix-Missing-Post-Thumbnail-Issue-in-WordPress.png"
        width={0}
        height={0}
        style={{ width: "100%" }}
        unoptimized
      />

      {/* Content */}
      <p className="mt-10 text-sm leading-relaxed mb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea assumenda
        nam adipisci, laudantium nemo, doloribus molestiae accusamus totam sequi
        quaerat incidunt deserunt reiciendis rerum illum ducimus dolorum ab est
        debitis! Fuga natus repellendus ipsum. Nesciunt quaerat quidem sed ullam
        reprehenderit accusamus, voluptate aperiam consequatur officia, quam
        dolorem, consectetur obcaecati at mollitia! Quidem sit dolore explicabo
        dolores saepe ut veritatis delectus ducimus earum deleniti dignissimos
        debitis minus quisquam quasi, laboriosam nostrum nobis, distinctio
        dolorem suscipit repellendus consequuntur nemo alias tempore? Ab
        nesciunt similique magni architecto, recusandae possimus libero vero ea
        tempore reprehenderit. Ipsam dolorem veniam atque ullam harum, delectus
        earum provident!
      </p>
    </Container>
  );
};

export default BlogDetails;
