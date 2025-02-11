import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { projectData } from "@/components/Home/FeaturedProjects";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = projectData.filter((project) => project.id === id);
  const { description, liveLinks, title } = project[0];
  return (
    <Card className="bg-backgroundColor text-white border border-secondaryColor rounded-xl max-w-7xl mx-auto">
      <CardHeader>
        <div className="iframe-container">
          <iframe
            src={liveLinks}
            title={title}
            frameBorder="0"
            className="rounded-md project-iframe"></iframe>
        </div>
        <CardTitle className="text-xl font-bold pt-8">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
        <div className="mt-2 flex  justify-end">
          <Link href={liveLinks} target="_blank">
            <button className="text-sm flex items-center gap-1 p-1 links text-secondaryColor">
              <span>Go To Site</span> <FaArrowRight />
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailsPage;
