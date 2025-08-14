"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="aspect-video rounded-md overflow-hidden mb-4 bg-gray-700">
        {/* Placeholder for Image */}
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
          {imageUrl}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-blue-400">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
        {description}
      </p>
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-400 mb-2">Technologies:</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-700/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex space-x-4">
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white flex-1 flex items-center justify-center">
          <ExternalLink className="mr-2 h-4 w-4" />
          Live Demo
        </Button>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 flex-1 flex items-center justify-center">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, and cart functionality.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe API"],
    imageUrl: "🛍️",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A dynamic task management application built with React and utilizing local storage for state persistence.",
    technologies: ["React", "CSS Modules", "Local Storage"],
    imageUrl: "✅",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "The very website you are currently browsing, showcasing my skills and projects.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "✨",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
