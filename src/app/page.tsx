import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import ContactPage from "@/components/Home/ContactMe";
import Educations from "@/components/Home/Educations";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import Skills from "@/components/Home/Skills";
import { getFeaturedProjects } from "@/services/project";
import { getAllSkills } from "@/services/skills";

const Home = async () => {
  const skills = await getAllSkills();
  const skillsData = skills?.data;
  const projects = await getFeaturedProjects();
  const projectsData = projects?.data;
  return (
    <div>
      <div id="banner">
        <Banner />
      </div>
      <AboutMe />
      <Skills skills={skillsData} />
      <FeaturedProjects projects={projectsData} />
      <Educations />
      <ContactPage />
    </div>
  );
};

export default Home;
