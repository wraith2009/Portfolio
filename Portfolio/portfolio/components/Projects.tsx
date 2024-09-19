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
<div className="mt-8 text-4xl font-bold ">
  <div className="text-center mb-8">
    <p className="font-mono text-slate-300">
      A Small collection of my <span className="font-mono text-blue-500">Personal Projects</span>
    </p>
  </div>
  <div className="flex justify-center items-center min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:pb-4 p-4 md:px-2">
    {projectDetails.map((project, index) => (
      <div key={index} className="flex flex-col gap-4 md:w-[320px] w-fit border-2 rounded-2xl border-gray-600 bg-black">
        {/* Project Image */}
        <div className="w-full h-[200px] overflow-hidden relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover rounded-2xl border-b-2 border-gray-400"
          />
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-mono text-slate-300 mb-2 px-2">{project.title}</h3>

        {/* Project Description */}
        <p className="text-gray-400 text-sm mb-4 px-2 min-h-24">{project.description}</p>

        {/* Links */}
        <div className="flex gap-10 mb-8 items-center justify-center">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <button className="text-white bg-blue-600 hover:bg-blue-500 text-sm px-4 py-2 rounded-md flex items-center gap-2">
                      <FaLink /> Website
              </button>
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <button className="text-white bg-blue-600 hover:bg-blue-500 text-sm px-4 py-2 rounded-md flex items-center gap-2">
                      <FaLink /> GitHub
              </button>
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
  </div>
  
</div>

  );
}
