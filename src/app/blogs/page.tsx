import { getBlogs } from "@/services/blogs";
import AllBlogsPage from "@/components/Blogs/AllBlogsPage";

const BlogPage = async () => {
  const { data } = await getBlogs();
  return (
    <div className="min-h-[calc(100vh-150px)]" id="blogs">
      <div className="flex justify-center ">
        <h1 className="text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Blogs
        </h1>
      </div>
      <AllBlogsPage blogs={data} />
    </div>
  );
};

export default BlogPage;
