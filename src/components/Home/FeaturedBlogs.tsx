import { Button } from "../ui/button";
import Link from "next/link";
import { TBlog } from "@/types";
import BlogCard from "../Blogs/BlogCard";

const FeaturedBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="pt-24 pb-32 bg-backgroundColor" id="blogs">
      <div className="flex justify-center ">
        <h1 className="text-2xl lg:text-3xl text-gray-200 gradient px-8 rounded-sm py-2 font-semibold">
          Featured Blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-2 lg:mx-auto py-12">
        {blogs?.slice(0, 3).map((blog) => (
          <BlogCard blog={blog} key={blog?._id} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/blogs">
          <Button
            variant={"outline"}
            className="hover:bg-secondaryColor rounded-xl  hover:text-black hover:border-secondaryColor font-semibold text-secondaryColor">
            View All Blogs
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
