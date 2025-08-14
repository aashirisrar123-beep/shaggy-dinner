"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] space-y-8 md:space-y-0 md:space-x-8 py-16"
    >
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          John Doe - Web Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Crafting innovative and responsive web solutions from London.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setActiveSection("projects")}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
            onClick={() => setActiveSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-2xl">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gray-900 flex items-center justify-center text-6xl">
            💻
          </div>
        </div>
      </div>
    </section>
  );
}
