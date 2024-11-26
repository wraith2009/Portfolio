"use client";

import React, { useRef } from "react";
import ProjectComponent from "./ProjectCard";
import { useOnScreen } from "./additionalhook";

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(projectsRef);

  const projectData = [
    {
      imageSrc: "/insocialImage.jpg",
      projectName: "inSocial",
      description: `inSocial: Anonymous messaging app with React frontend and Node.js backend. Features secure posts, real-time chat via WebSockets, and live notifications. Privacy-focused design for engaging, worry-free social interaction.`,
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
      live: "https://insocial.tech",
    },
    {
      imageSrc: "/deliverimage.jpg",
      projectName: "Deliver",
      description:
        "Deliver is a food ordering platform designed to provide users with real-time restaurant listings and a seamless food ordering experience. Users can browse restaurants powered by the Swiggy API and easily add, remove, or modify items in their shopping cart. The app enables efficient navigation between pages using React Router DOM, ensuring a smooth and intuitive user journey.",
      technologies: ["React.js", "Redux", "React Router DOM", "TailwindCSS"],
      github: "https://github.com/wraith2009/deliver",
      live: "https://deliver--09.web.app/",
    },
    {
      imageSrc: "/1--xbrainly.jpg",
      projectName: "100xBrainly",
      description:
        "100xBrainly allows user to store links from multiple applications also ",
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
  ];

  return (
    <section
      ref={projectsRef}
      id="projects"
      className={`text-black p-2 bg-black mt-8 mb-16 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-center text-4xl font-bold text-slate-300 dark:text-neutral-300 my-8">
        A Small Collection of my Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectComponent
            key={index}
            imageSrc={project.imageSrc}
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
