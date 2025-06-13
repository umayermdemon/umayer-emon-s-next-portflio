"use server";

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
