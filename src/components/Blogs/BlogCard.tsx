import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import BlogsCategory from "./BlogsCategory";

const extractImageLinks = (html: string): string[] => {
  const imgTagRegex = /<img[^>]+src="([^">]+)"/g;
  const links: string[] = [];
  let match;
  while ((match = imgTagRegex.exec(html)) !== null) {
    links.push(match[1]);
  }
  return links;
};

const stripHtml = (html: string): string => {
  return html.replace(/<[^>]+>/g, "");
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  const imageLinks = extractImageLinks(blog.content);
  const firstImage = imageLinks[0];

  return (
    <div className="bg-gray-100 rounded-xl flex flex-col pb-2 h-[480px] sm:h-[540px] md:h-[580px] shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden group">
      <div className="relative overflow-hidden">
        <Link href={`/blogs/${blog?._id}`}>
          <Image
            src={firstImage}
            height={500}
            width={500}
           className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            alt={blog?.title}
          />
        </Link>
      </div>
      <div className="flex-grow pt-3 px-3 sm:pt-4 sm:px-4">
        <div className="pb-2">
          <BlogsCategory category={blog?.category} />
        </div>
        <div className="mb-2 flex items-center justify-between">
          <Link href={`blogs/${blog?._id}`} className="font-bold text-lg sm:text-xl text-black font-poppins line-clamp-2">
            {blog.title}
          </Link>
        </div>
        <div className="mb-2 flex flex-row items-center text-secondaryColor text-xs sm:text-sm">
          <h2 className="font-poppins">{blog.author}</h2>
          <span className="px-1 sm:px-2"> / </span>
          <h2 className="font-poppins">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h2>
        </div>
        <div
          className="font-poppins mb-2 text-xs sm:text-sm text-gray-700 line-clamp-4"
          dangerouslySetInnerHTML={{
            __html: stripHtml(blog.content).slice(0, 250) + ".....",
          }}
        />
      </div>
    </div>
  );
};

export default BlogCard;
