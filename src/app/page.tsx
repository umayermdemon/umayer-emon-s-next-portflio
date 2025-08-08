import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import ContactPage from "@/components/Home/ContactMe";
import Educations from "@/components/Home/Educations";
import FeaturedBlogs from "@/components/Home/FeaturedBlogs";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Skills from "@/components/Home/Skills";
import ScrollToSectionClient from "@/components/shared/ScrollToSectionClient";
import { getBlogs } from "@/services/blogs";
import { getFeaturedProjects } from "@/services/project";
import { getAllSkills } from "@/services/skills";

const Home = async () => {
  const skills = await getAllSkills();
  const skillsData = skills?.data;
  const projects = await getFeaturedProjects();
  const projectsData = projects?.data;
  const { data } = await getBlogs();
  return (
    <div>
      <ScrollToSectionClient />
      <Banner />
      <AboutMe project={projectsData?.length} />
      <Skills skills={skillsData} />
      <FeaturedProjects projects={projectsData} />
      <FeaturedBlogs blogs={data} />
      <Educations />
      <ContactPage />
    </div>
  );
};

export default Home;
