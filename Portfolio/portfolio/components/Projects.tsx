"use client";

import React from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { CardSpotlight } from "./ui/card-spotlight"; 
import Image from "next/image";
export default function MyProjects() {
  const projectDetails = [
    {
      title: "Insocial",
      description: "Insocial is a social networking website . It offers real-time messaging 💬, notifications 🔔, posting, liking 👍, commenting 💬 on posts, and personalized feeds tailored to your interests",
      imageUrl: "/insocialImage.jpg", 
      liveLink: "https://insocial.tech/", 
      githubLink:"https://github.com/mayank2153/WhisperHub"
    },
    {
      title: "Deliver",
      description: "Online Food Ordering UI Application using React, Redux, and Parcel. ",
      imageUrl: "/deliverimage.jpg", 
      liveLink: "https://deliver--09.web.app/", 
      githubLink: "https://github.com/wraith2009/deliver"
    },
    {
        title: "Portfolio",
        description: "Portfolio Website using Next.js, Tailwind CSS, and Framer Motion. ",
        imageUrl: "portfolio.jpg", 
        liveLink: "https://portfolio-two-bice-95.vercel.app/",
        githubLink: "https://github.com/wraith2009/Portfolio"
    }
  ];

  return (
<div className="mt-8 text-4xl font-bold">
  <div className="text-center mb-8">
    <p className="font-mono text-slate-300">
      A Small collection of my <span className="font-mono text-blue-500">Personal Projects</span>
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-10 md:py-4 p-4">
    {projectDetails.map((project, index) => (
      <div key={index} className="flex flex-col justify-center items-center md:w-[320px] w-fit border-2 rounded-2xl border-gray-600">
        {/* Project Image */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-[200px]  w-full mb-4 rounded-lg"
        />

        {/* Project Title */}
        <h3 className="text-xl font-mono text-slate-300 mb-2">{project.title}</h3>

        {/* Project Description */}
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Links */}
        <div className="flex gap-10">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <p className="text-blue-900 text-lg flex gap-2">
                <FaLink className="mt-1" /> Live Project Link
              </p>
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <p className="text-blue-900 text-lg flex gap-2">
                <FaLink className="mt-1" /> GitHub Link
              </p>
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
