import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";
import JourneySection from "./components/sections/JourneySection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectsSection from "./components/sections/WorkSection"
import Footer from "./components/Footer";
const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection/>
        <AboutSection/>
        <JourneySection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default App;
