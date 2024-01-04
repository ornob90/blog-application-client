import BASE_URL from "@/api/api";
import getAllBlogs from "@/utils/getAllBlogs";

// export const generateSitemaps = async () => {
//   const { blogPosts } = await getAllBlogs();

//   return blogPosts.map(({ _id }) => ({
//     id: _id,
//   }));
// };

export default async function sitemap() {
  const pages = [
    {
      url: "/createBlog",
      lastModified: new Date(),
    },
    {
      url: "/",
      lastModified: new Date(),
    },
  ];

  const { blogPosts } = await getAllBlogs();

  blogPosts.map(({ _id }) => {
    console.log(_id);
    pages.push({
      url: `/blog/${_id}`,
      lastModified: new Date(),
    });
  });

  return pages.map((page) => ({
    url: BASE_URL + page.url,
    lastModified: page.lastModified,
  }));
}
