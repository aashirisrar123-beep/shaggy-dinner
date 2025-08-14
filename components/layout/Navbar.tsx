"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => setActiveSection("home")}
        >
          &lt;Dev London&gt;
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-blue-500",
                  activeSection === item.id ? "text-blue-500" : "text-gray-300"
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
