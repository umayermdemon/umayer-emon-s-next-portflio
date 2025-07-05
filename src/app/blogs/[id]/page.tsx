import { notFound } from "next/navigation";
import { getBlogs } from "@/services/blogs";
import BlogDetailsCard from "@/components/Blogs/BlogDetailsCard";
import { Button } from "@/components/ui/button";
import { TBlog } from "@/types";
import { Input } from "@/components/ui/input";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await getBlogs();
  const blog = data.find((blog: TBlog) => blog?._id === id);
  const recentBlogs = data.slice(0, 5);
  if (!blog) {
    notFound();
  }

  return (
    <div className=" text-white rounded-xl max-w-7xl mx-auto flex flex-row gap-8 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-2/3">
        <BlogDetailsCard blog={blog} />
      </div>
      <div className="w-1/3 space-y-8">
        <div className="bg-backgroundColor p-6 rounded-xl border border-secondaryColor space-y-4">
          <h1 className="font-bold text-xl">Search Anything</h1>
          <div className="flex flex-row items-center gap-2">
            <Input />
            <Button className="bg-secondaryColor text-white hover:bg-secondaryColorHover">
              Search
            </Button>
          </div>
        </div>
        <div className="bg-backgroundColor p-6 rounded-xl border border-secondaryColor space-y-4">
          <h1 className="font-bold text-xl">Recent Blogs</h1>
          <div className="flex flex-col">
            {recentBlogs.map((blog: TBlog, index: number) => (
              <div key={index} className="w-full mb-2">
                <Button className="text-secondaryColor hover:text-white text-base">
                  {blog.title}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
