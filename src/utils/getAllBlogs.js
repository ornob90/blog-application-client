import BASE_URL from "@/api/api";

const getAllBlogs = async () => {
  try {
    const res = await fetch(BASE_URL + "/blogs", {
      next: {
        revalidate: 5,
      },
    });
    return res.json();
  } catch {
    return error;
  }
};

export default getAllBlogs;
