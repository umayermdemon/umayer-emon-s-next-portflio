export type TProject = {
  _id: string;
  title: string;
  description: string;
  liveLinks: string;
  clientRepo: string;
  serverRepo: string;
  frontendTechnologies: string[];
  backendTechnologies: string[];
  images: string[];
  duration: string;
  teamMembers: string[];
  demoVideo: string;
  status: string;
  featured: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
