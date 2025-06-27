"use client";

import React, { useRef } from "react";
import ProjectComponent from "./ProjectCard";
import { useOnScreen } from "./additionalhook";

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(projectsRef);

  const projectData = [
    {
      projectName: "w-Monitor",
      description:
        "Currently in the building phase, A modern website and API monitoring platform with alerting.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "SQS",
        "AWS Lambda",
      ],
      github: "https://github.com/wraith2009/w-monitor-backend",
      live: "#", // In building phase
    },
    {
      projectName: "ts-orm",
      description:
        " Currently in active development . A TypeScript-first ORM designed for fun.",
      technologies: ["TypeScript", "Node.js", "PostgreSQL", "Zod"],
      github: "https://github.com/wraith2009/ts-orm",
      live: "#", // In building phase
    },
    {
      projectName: "100xBrainly",
      description:
        "A personal Secound Brain with AI feature to communicate with your secound brain.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "ExpressJs",
        "Node.js",
        "Recoil",
      ],
      github: "https://github.com/wraith2009/brainlyFrontend",
      live: "https://brainly-frontend-sable.vercel.app/",
    },

    {
      projectName: "inSocial",
      description: "A social media platform with real time messaging.",
      technologies: [
        "Node.js",
        "Express",
        "React.js",
        "Tailwind CSS",
        "WebSockets",
        "MongoDB",
        "Google Gemini",
      ],
      github: "https://github.com/mayank2153/inSocial",
      live: "#",
    },

    {
      projectName: "CampusSync",
      description: "ERM for Universities with added payment support.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "OpenAI",
        "websocket",
      ],
      github: "https://github.com/wraith2009/EMS",
      live: "#",
    },

    {
      projectName: "ChillGuyAnalyzer",
      description:
        "A fun project that i worked on . It measure the chillness of a person using AI based on their Github profile.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Honojs",
        "OpenAI",
      ],
      github: "https://github.com/wraith2009/ChillGuyAnalyzer",
      live: "https://chillguyanalyzer.onrender.com/",
    },
  ];

  return (
    <section
      ref={projectsRef}
      id="projects"
      className={`text-black p-2 bg-black mt-8 mb-16 transition-opacity duration-1000 px-4 md:px-16 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className=" text-4xl font-bold text-white dark:text-neutral-300 my-8">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectComponent
            key={index}
            projectName={project.projectName}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
