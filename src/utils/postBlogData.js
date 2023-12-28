import axios from "axios";
import BASE_URL from "@/api/api";

const postBlogData = async (data) => {
  try {
    const response = await axios.post(BASE_URL + "/blog-post", data);

    return response;
  } catch (error) {
    return error;
  }
};

export default postBlogData;
