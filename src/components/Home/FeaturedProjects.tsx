import { TProject } from "@/types/project.types";
import { Button } from "../ui/button";
import Link from "next/link";
import ProjectCard from "../shared/Project/ProjectCard";

const FeaturedProjects = ({ projects }: { projects: TProject[] }) => {
  return (
    <div className="pt-24 pb-32 bg-backgroundColor" id="projects">
      <div className="flex justify-center ">
        <h1 className="text-2xl lg:text-3xl text-gray-200 gradient px-8 rounded-sm py-2 font-semibold">
          Featured Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-2 lg:mx-auto py-12">
        {projects?.slice(0, 3).map((project) => (
          <ProjectCard project={project} key={project?._id} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/projects">
          <Button
            variant={"outline"}
            className="hover:bg-secondaryColor rounded-xl  hover:text-black hover:border-secondaryColor font-semibold text-secondaryColor">
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
