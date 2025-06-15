const BlogsCategory = ({ category }: { category: string }) => {
  return (
    <div>
      <h1 className="text-secondaryColor text-sm font-semibold">
        {category === "web-development"
          ? "Web Development"
          : category === "mobile-development"
          ? "Mobile Development"
          : category === "data-science"
          ? "Data Science"
          : category === "devops"
          ? "DevOps"
          : category === "design"
          ? "Design"
          : category === "lifestyle"
          ? "Lifestyle"
          : category === "education"
          ? "Education"
          : category === "health"
          ? "Health"
          : category === "travel"
          ? "Travel"
          : category === "other"
          ? "Other"
          : ""}
      </h1>
    </div>
  );
};

export default BlogsCategory;
