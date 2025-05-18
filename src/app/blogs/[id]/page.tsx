import { notFound } from "next/navigation";
import { blogs } from "../blogs";
import Image from "next/image";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const blog = blogs.find((blog) => blog?.id === Number(id));
  if (!blog) {
    notFound();
  }
  const { description, image, title, author, date } = blog;
  return (
    <div className="bg-backgroundColor text-white border border-secondaryColor rounded-xl max-w-7xl mx-auto">
      <div>
        <div className="flex flex-col lg:flex-row gap-8 p-4">
          <Image
            src={image}
            width={400}
            height={400}
            alt=""
            className="rounded-xl h-96 w-full border"
          />
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-gray-300 text-justify">{description}</p>
            </div>
            <div className=" flex flex-row items-center justify-between items mt-4">
              <h1 className="text-base text-gray-400 font-poppins">
                Author: {author}
              </h1>
              <p className="text-gray-400 font-poppins ">Date: {date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
