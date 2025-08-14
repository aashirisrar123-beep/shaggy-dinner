"use client";

import React, { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection setActiveSection={setActiveSection} />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 py-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}
