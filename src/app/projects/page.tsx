import ProjectCard from "@/components/shared/Project/ProjectCard";
import { getAllProjects } from "@/services/project";
import { TProject } from "@/types/project.types";

const ProjectsPage = async () => {
  const projects = await getAllProjects();
  const projectData: TProject[] = projects?.data;
  return (
    <div className="py-12 bg-backgroundColor" id="all-projects">
      <div className="flex justify-center ">
        <h1 className="text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-2 lg:mx-auto py-12">
        {projectData?.map((project) => (
          <ProjectCard project={project} key={project?._id} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
