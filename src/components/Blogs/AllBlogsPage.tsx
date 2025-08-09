"use client";

import { TBlog } from "@/types";
import BlogCard from "./BlogCard";
import { CATEGORY_OPTIONS } from "@/types/category.types";
import { useEffect, useState } from "react";

const AllBlogsPage = ({ blogs }: { blogs: TBlog[] }) => {
  const categories = CATEGORY_OPTIONS;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const storedCategory = sessionStorage.getItem("selectedCategory");
    if (storedCategory) {
      setSelectedCategory(storedCategory);
      sessionStorage.removeItem("selectedCategory");
    }
  }, []);

  // Filter blogs by selected category
  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog: TBlog) => blog.category === selectedCategory);

  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-left mb-2">
        <button
          className={`p-2 rounded-xl font-semibold bg-backgroundColor hover:text-secondaryColor hover:border-b hover:border-secondaryColor ${
            selectedCategory === "all"
              ? "text-secondaryColor border-b border-secondaryColor"
              : "text-white border-b border-white"
          }`}
          onClick={() => setSelectedCategory("all")}>
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`p-2 rounded-xl font-semibold bg-backgroundColor hover:text-secondaryColor hover:border-b hover:border-secondaryColor ${
              selectedCategory === cat.value
                ? "text-secondaryColor border-b border-secondaryColor"
                : "text-white border-b border-white"
            }`}
            onClick={() => setSelectedCategory(cat.value)}>
            {cat.label}
          </button>
        ))}
      </div>

      {filteredBlogs.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-2 lg:mx-auto pt-4 pb-12">
            {filteredBlogs.map((blog: TBlog, index: number) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto text-center h-96 flex items-center justify-center">
          <p className="text-white">
            No blogs found for{" "}
            <span className="text-secondaryColor">{selectedCategory}</span>
          </p>
        </div>
      )}

      <div className="text-center text-white my-4">
        <p>
          Total Blogs:{" "}
          <span className="text-secondaryColor">{filteredBlogs.length}</span>
        </p>
      </div>
    </div>
  );
};

export default AllBlogsPage;
