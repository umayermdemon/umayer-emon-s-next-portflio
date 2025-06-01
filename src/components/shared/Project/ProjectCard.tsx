import { TProject } from "@/types/project.types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div>
      <Link key={project?._id} href={`/projects/${project?._id}`}>
        <div
          className="bg-[#1e293b] rounded-xl flex flex-col px-4 py-2 h-96 cursor-pointer "
          key={project?._id}>
          <Image
            src={project?.images[0]}
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
            <p className="text-gray-100 font-poppins text-justify">
              {project.description.slice(0, 100)}...
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
