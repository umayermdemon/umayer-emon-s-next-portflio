import { TBlog } from "@/types";

const BlogDetailsCard = ({ blog }: { blog: TBlog }) => {
  const { content, title, author, createdAt } = blog;
  return (
    <div className="p-8 border border-secondaryColor bg-backgroundColor rounded-xl">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="mb-4 flex flex-row items-center text-secondaryColor text-xs sm:text-sm">
            <h2 className="font-poppins">By {author}</h2>
            <span className="px-1 sm:px-2"> / </span>
            <h2 className="font-poppins">
              {new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h2>
          </div>
        </div>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{
            __html: content,
          }}></div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
