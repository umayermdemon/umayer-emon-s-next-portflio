"use client";

import { CATEGORY_OPTIONS } from "@/types/category.types";
import { Button } from "../ui/button";

const Categories = () => {
  const handleCategoryClick = (category: string) => {
    sessionStorage.setItem("selectedCategory", category);
    window.location.href = "/blogs";
  };
  return (
    <div className="bg-backgroundColor p-6 rounded-xl border border-secondaryColor space-y-4">
      <h1 className="font-bold text-xl text-white/80">Categories</h1>
      <div className="flex flex-col items-start">
        {CATEGORY_OPTIONS.map((category) => (
          <Button
            key={category.value}
            onClick={() => handleCategoryClick(category.value)}
            className="text-secondaryColor hover:text-white text-base">
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
