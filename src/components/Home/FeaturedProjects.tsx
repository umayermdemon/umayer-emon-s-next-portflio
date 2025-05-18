import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export const projectData = [
  {
    id: "1",
    title: "Al Asma Ul Husna",
    description: "Explore the beautiful names of Allah and their meanings",
    liveLinks: "https://al-asma-ul-husna-fbffa.web.app",
    imageLink:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739242626/Al-Asma-Ul-Husna_anzrla.jpg",
  },
  {
    id: "2",
    title: "ElectroCare",
    description: "Mobile repair services with appointment booking.",
    liveLinks: "https://electro-care-fd46f.web.app",
    imageLink:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739366878/Screenshot_2025-02-12_192645_vers8v.png",
  },
  {
    id: "3",
    title: "Swift Parcel",
    description: "Swift Parcel simplifies parcel management efficiently.",
    liveLinks: "https://swift-parcel-7b99a.web.app",
    imageLink:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739367353/Screenshot_2025-02-12_193541_czwamn.png",
  },
  {
    id: "4",
    title: "Artistry Avenue",
    description: "Artistry Avenue: Creativity and Craft Meet Here",
    liveLinks: "https://artistry-avenue-b9a0.web.app",
    imageLink:
      "https://res.cloudinary.com/duagqnvpw/image/upload/v1739367141/Screenshot_2025-02-12_193206_ognltn.png",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="pt-24 pb-32 bg-backgroundColor" id="projects">
      <div className="flex justify-center ">
        <h1 className="text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Featured Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-2 lg:mx-auto py-12">
        {projectData.slice(0, 3).map((project, index) => (
          <Link key={index} href={`/projects/${project?.id}`}>
            <div
              className="bg-[#1e293b] rounded-xl flex flex-col px-4 pb-2 pt-4 h-80 cursor-pointer"
              key={index}>
              <Image
                src={project?.imageLink}
                height={500}
                width={500}
                className=" w-full h-52"
                alt={project?.title}
              />

              <div className="flex-grow pt-4">
                <div className="mb-2 flex items-center justify-between">
                  <h1 className="font-bold text-xl text-gray-400 font-poppins">
                    {project.title}
                  </h1>
                </div>
                <p className="text-gray-100 font-poppins mb-2">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Link href="/projects">
          <Button
            variant={"outline"}
            className="hover:bg-secondaryColor rounded-xl  hover:text-white hover:border-secondaryColor font-bold text-secondaryColor">
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
