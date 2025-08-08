import { CATEGORY_LABELS } from "@/types/category.types";

const BlogsCategory = ({ category }: { category: string }) => {
  return (
    <div>
      <h1 className="text-secondaryColor text-sm font-semibold">
        {CATEGORY_LABELS[category] || ""}
      </h1>
    </div>
  );
};

export default BlogsCategory;
