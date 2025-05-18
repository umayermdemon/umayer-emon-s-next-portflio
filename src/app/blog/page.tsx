import Image from "next/image";
import Link from "next/link";
import { blogs } from "./blogs";

const BlogPage = async () => {
  return (
    <div className="bg-backgroundColor" id="projects">
      <div className="flex justify-center ">
        <h1 className="text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Blogs
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-2 lg:mx-auto py-12">
        {blogs.map((blog, index) => (
          <Link key={index} href={`/blog/${blog?.id}`}>
            <div
              className="bg-[#1e293b] rounded-xl flex flex-col px-4 pb-2 pt-4 h-[440px] cursor-pointer"
              key={index}>
              <Image
                src={blog?.image}
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
                <p className="text-gray-100 font-poppins mb-2">
                  {`${blog.description.slice(0, 120)}.....`}
                </p>
              </div>
              <div className="mb-2 flex flex-row items-center justify-between">
                <h1 className="text-base text-gray-400 font-poppins">
                  Author: {blog.author}
                </h1>
                <p className="text-gray-400 font-poppins ">Date: {blog.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
