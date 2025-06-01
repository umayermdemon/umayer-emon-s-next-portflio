import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FaArrowRight, FaGithub, FaServer } from "react-icons/fa6";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/services/project";
import { TProject } from "@/types/project.types";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project.data) {
    notFound();
  }
  const {
    description,
    liveLinks,
    title,
    frontendTechnologies,
    backendTechnologies,
    status,
    serverRepo,
    clientRepo,
  } = project?.data as TProject;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <Card className="bg-backgroundColor text-white border border-secondaryColor rounded-2xl shadow-lg">
        <CardHeader className="pb-0">
          <CardTitle className="text-3xl font-bold mb-2">{title}</CardTitle>
          <div className="flex flex-wrap gap-2 items-center text-xs mb-2">
            <span className="bg-secondaryColor/20 text-secondaryColor px-3 py-1 rounded-full font-semibold">
              {status}
            </span>
            {frontendTechnologies?.length > 0 && (
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                Frontend: {frontendTechnologies.join(", ")}
              </span>
            )}
            {backendTechnologies?.length > 0 && (
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                Backend: {backendTechnologies.join(", ")}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <CardDescription className="text-gray-300 text-base">
              {description}
            </CardDescription>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-700 mb-6">
            <iframe
              src={liveLinks}
              title={title}
              frameBorder="0"
              className="w-full h-[350px] bg-black"
              allowFullScreen></iframe>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <Link href={liveLinks} target="_blank">
              <button className="flex items-center gap-2 px-4 py-2 bg-secondaryColor text-white rounded-lg font-semibold hover:bg-secondaryColor/80 transition">
                <span>Visit Live Site</span>
                <FaArrowRight />
              </button>
            </Link>
            <div className="flex gap-3">
              {clientRepo && (
                <Link
                  href={clientRepo}
                  target="_blank"
                  title="Client Repository">
                  <button className="flex items-center gap-1 px-3 py-2 bg-gray-800 text-secondaryColor rounded-lg hover:bg-gray-700 transition">
                    <FaGithub /> <span>Client Repo</span>
                  </button>
                </Link>
              )}
              {serverRepo && (
                <Link
                  href={serverRepo}
                  target="_blank"
                  title="Server Repository">
                  <button className="flex items-center gap-1 px-3 py-2 bg-gray-800 text-secondaryColor rounded-lg hover:bg-gray-700 transition">
                    <FaServer /> <span>Server Repo</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetailsPage;
