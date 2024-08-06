// import Navbar from "./Navbar";
import ProfileSection from "./ProfileSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";
// import AboutMe from "../Pages/About";
// import ContactMe from "../Pages/Contact";
// import Experience from "../Pages/Experience";
// import Projects from "../Pages/Project";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      {/* <AboutMe/>
      <ContactMe/>
      <Experience/>
      <Projects/> */}
    </div>
  );
}

export default Home;
