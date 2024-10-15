"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function MyProjects() {
  const projectDetails = [
    {
      title: "Insocial",
      description:
        "Insocial is a social networking website. It offers real-time messaging , notifications , posting, liking , commenting  on posts, and personalized feeds tailored to your interests.",
      imageUrl: "/insocialImage.jpg",
      liveLink: "https://insocial.tech/",
      githubLink: "https://github.com/mayank2153/WhisperHub",
    },
    {
      title: "Deliver",
      description:
        "Online Food Ordering UI Application using React, Redux, and Parcel.",
      imageUrl: "/deliverimage.jpg",
      liveLink: "https://deliver--09.web.app/",
      githubLink: "https://github.com/wraith2009/deliver",
    },
    {
      title: "Portfolio",
      description:
        "Portfolio Website using Next.js, Tailwind CSS, and Framer Motion.",
      imageUrl: "/portfolio.jpg",
      liveLink: "https://rahulbhardwaj.live/",
      githubLink: "https://github.com/wraith2009/Portfolio",
    },
  ];

  return (
    <div className="mt-8 px-4 md:px-16 lg:px-32 font-bold text-4xl ">
      <div className="text-center my-8 space-y-8">
        <p className="font-mono text-slate-300">
          A small collection of my{" "}
          <span className="font-mono text-blue-500">Personal Projects</span>
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1 lg:px-28">
        {projectDetails.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row  p-4 rounded-2xl border-b-2 border-gray-600 bg-black"
          >
            {/* Image for Larger Screens */}
            <div className="w-full lg:w-1/2 h-[200px] lg:h-auto relative overflow-hidden rounded-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                height={400}
                width={300}
                className="object-cover rounded-lg border-2 border-slate-400"
              />
            </div>

            {/* Project Description */}
            <div className="flex flex-col justify-between lg:w-1/2">
              <h3 className="text-2xl font-mono text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-400 text-base mt-4 font-mono">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-6 mt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-xl hover:text-blue-400"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-xl hover:text-blue-400"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
