import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogs } from "@/services/blogs";
import { Blog } from "../page";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await getBlogs();
  const blog = data.find((blog: Blog) => blog?._id === id);
  if (!blog) {
    notFound();
  }
  const { content, coverImage, title, author, createdAt } = blog;
  return (
    <div className="bg-backgroundColor text-white border border-secondaryColor rounded-xl max-w-7xl mx-auto">
      <div>
        <div className="flex flex-col lg:flex-row gap-8 p-4">
          <Image
            src={coverImage}
            width={400}
            height={400}
            alt=""
            className="rounded-xl h-96 w-full border"
          />
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-xl font-bold">{title}</h1>
              <div
                className=" text-justify"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}></div>
            </div>
            <div className=" flex flex-row items-center justify-between items mt-4">
              <h1 className="text-base text-gray-400 font-poppins">
                Author: {author}
              </h1>
              <p className="text-gray-400 font-poppins ">
                Date: {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
