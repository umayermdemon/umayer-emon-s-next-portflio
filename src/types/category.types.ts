export const CATEGORY_LABELS: Record<string, string> = {
  "web-development": "Web Development",
  "mobile-development": "Mobile Development",
  "data-science": "Data Science",
  devops: "DevOps",
  design: "Design",
  lifestyle: "Lifestyle",
  education: "Education",
  health: "Health",
  travel: "Travel",
  other: "Other",
};

export const CATEGORY_OPTIONS = Object.keys(CATEGORY_LABELS).map((key) => ({
  value: key,
  label: CATEGORY_LABELS[key],
}));
