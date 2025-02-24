import React, { useRef } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Education from "../../pages/education/EducationComponent.js";
import Experience from "../../pages/experience/Experience.js";
import Projects from "../../pages/projects/Projects.js";
import Contact from "../../pages/contact/ContactComponent.js";
import Footer from "../../components/footer/Footer";

function Home(props) {
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null); // Added a new reference for Contact

  const scrollToEducation = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header
        theme={props.theme}
        setTheme={props.setTheme}
        scrollToEducation={scrollToEducation}
        scrollToExperience={scrollToExperience}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <div ref={educationRef}>
        <Education theme={props.theme} />
      </div>
      <div ref={experienceRef}>
        <Experience theme={props.theme} />
      </div>
      <div ref={projectRef}>
        <Projects theme={props.theme} />
      </div>
      <div ref={contactRef}>
        <Contact theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
