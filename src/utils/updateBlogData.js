import axios from "axios";
import BASE_URL from "@/api/api";

const updateBlogData = async (blogId, data) => {
  try {
    const response = await axios.put(BASE_URL + `/blog-post/${blogId}`, data);

    return response;
  } catch (error) {
    return error;
  }
};

export default updateBlogData;
