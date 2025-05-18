import { projectData } from "@/components/Home/FeaturedProjects";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="py-12 bg-backgroundColor" id="projects">
      <div className="flex justify-center ">
        <h1 className="text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-2 lg:mx-auto py-12">
        {projectData.map((project, index) => (
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
    </div>
  );
};

export default ProjectsPage;
