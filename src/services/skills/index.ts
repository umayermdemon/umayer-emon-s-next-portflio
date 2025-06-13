"use server";

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/user`, {
      next: { revalidate: 60 },
    });

    return res.json();
  } catch (error) {
    throw new Error(`Error fetching skills: ${error}`);
  }
};
