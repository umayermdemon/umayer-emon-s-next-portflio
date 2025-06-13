import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/services/blogs";

export type Blog = {
  _id: string;
  coverImage: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

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
          <Link key={index} href={`/blogs/${blog?._id}`}>
            <div
              className="bg-[#1e293b] rounded-xl flex flex-col px-4 pb-2 pt-4 h-[440px] cursor-pointer"
              key={index}>
              <Image
                src={blog?.coverImage}
                height={500}
                width={500}
                className=" w-full h-52"
                alt={blog?.title}
              />

              <div className="flex-grow pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <h1 className="font-bold text-xl text-gray-400 font-poppins">
                    {blog.title}
                  </h1>
                </div>
                <div
                  className="text-gray-100 font-poppins mb-2"
                  dangerouslySetInnerHTML={{
                    __html: blog.content.slice(0, 120) + ".....",
                  }}
                />
              </div>
              <div className="mb-2 flex flex-row items-center justify-between">
                <h1 className="text-base text-gray-400 font-poppins">
                  Author: {blog.author}
                </h1>
                <p className="text-gray-400 font-poppins ">
                  Date: {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
