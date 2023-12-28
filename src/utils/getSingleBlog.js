import BASE_URL from "@/api/api";

export const getSingleBlog = async (id) => {
  const res = await fetch(BASE_URL + `/blog-post/${id}`, {
    cache: "no-store",
  });
  return res.json();
};

export default getSingleBlog;
