import BASE_URL from "@/api/api";
import axios from "axios";

const deleteSingleBlog = async (blogId) => {
  try {
    const response = await axios.delete(BASE_URL + `/blog-post/${blogId}`);

    return response;
  } catch (error) {
    return error;
  }
};

export default deleteSingleBlog;
