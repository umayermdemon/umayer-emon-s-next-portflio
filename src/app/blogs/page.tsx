import { getBlogs } from "@/services/blogs";
import BlogCard from "@/components/Blogs/BlogCard";
import { Blog } from "@/types";

const BlogPage = async () => {
  const { data } = await getBlogs();
  return (
    <div className="bg-backgroundColor" id="blogs">
      <div className="flex justify-center ">
        <h1 className="text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-2 lg:mx-auto py-12">
        {data?.map((blog: Blog, index: number) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
