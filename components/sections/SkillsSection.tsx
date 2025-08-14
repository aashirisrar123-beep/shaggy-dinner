"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-blue-400 border-b-2 border-blue-600 pb-2 inline-block">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-gray-700 text-gray-200 hover:bg-blue-600 hover:text-white transition-colors text-base py-2 px-4"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const skillsData = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL (Basic)",
        "Database Management",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQLite"],
    },
    {
      title: "Tools & Other",
      skills: [
        "Git",
        "Docker",
        "VS Code",
        "Figma",
        "Webpack",
        "npm/yarn",
        "CI/CD (Basic)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
