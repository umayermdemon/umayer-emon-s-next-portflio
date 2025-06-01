"use server";

export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
      method: "GET",
      next: { revalidate: 60 },
    });

    return res.json();
  } catch (error) {
    throw new Error(`Error fetching projects: ${error}`);
  }
};
export const getFeaturedProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/featured`,
      {
        method: "GET",
        next: { revalidate: 60 },
      }
    );

    return res.json();
  } catch (error) {
    throw new Error(`Error fetching featured projects: ${error}`);
  }
};

export const getProjectById = async (projectId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${projectId}`
    );

    return res.json();
  } catch (error) {
    throw new Error(`Error fetching project: ${error}`);
  }
};
