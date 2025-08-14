"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadCloud, Mail } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-xl">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gray-950 flex items-center justify-center text-6xl">
              👋
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            About Me
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Hello! I'm John Doe, a passionate and results-driven Web Developer based in London.
            I specialize in creating modern, user-friendly, and performant web applications.
            With a keen eye for detail and a commitment to clean code, I strive to deliver high-quality digital experiences that meet and exceed client expectations.
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            My expertise spans across the full stack, with a particular focus on modern frontend frameworks and efficient backend solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/john-doe-resume.pdf" download className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:from-teal-600 hover:to-teal-700 transition-all duration-300">
              <DownloadCloud className="mr-2 h-5 w-5" />
              Download CV
            </a>
            <Button
              variant="outline"
              className="border-teal-500 text-teal-500 hover:bg-teal-500/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
