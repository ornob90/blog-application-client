import BASE_URL from "@/api/api";

const getAllBlogs = async () => {
  try {
    const res = await fetch(BASE_URL + "/blogs", {
      next: {
        revalidate: 3600,
      },
    });
    return res.json();
  } catch {
    return error;
  }
};

export default getAllBlogs;
