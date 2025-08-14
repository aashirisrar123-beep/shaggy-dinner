"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Replace with your actual form submission logic (e.g., using Formspree, Netlify Forms, or a custom backend)
    const formEndpoint = "YOUR_FORM_ENDPOINT_HERE"; // e.g., https://formspree.io/f/your-unique-id

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, email, subject, message
        }),
      });

      if (response.ok) {
        setSubmitMessage("Message sent successfully! Thank you.");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setSubmitMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/yourusername", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/yourusername", icon: Twitter, label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I am always open to discussing new projects, opportunities, or just to connect.
            Feel free to reach out via the form below or through my social media profiles.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject of your message"
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message here..."
                rows={5}
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
            {submitMessage && (
              <p
                className={`text-center text-sm ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
