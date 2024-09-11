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
      liveLink: "https://insocial.tech", 
    },
    {
      title: "Deliver",
      description: "Online Food Ordering UI Application using React, Redux, and Parcel. ",
      imageUrl: "/deliverimage.jpg", 
      liveLink: "https://deliver--09.web.app/", 
    },
    {
        title: "Portfolio",
        description: "Portfolio Website using Next.js, Tailwind CSS, and Framer Motion. ",
        imageUrl: "/portfolio.jpg", 
        liveLink: "https://portfolio-two-bice-95.vercel.app/",
    }
  ];

  return (
    <div className="mt-10 text-4xl font-bold">
        <div className=" text-center mb-8">
            <p className="font-mono text-slate-300">A Small collection of my <span className="font-mono text-blue-500">Personal Projects</span></p>
        </div> 
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      {projectDetails.map((project, index) => (
        <CardSpotlight key={index} radius={300} color="#1e1e1e"  className={`relative w-auto h-auto md:h-[500px] md:w-[400px] rounded-lg   transition-colors duration-300 
            `}>
          {/* Card Content */}
          <div className="relative z-10  flex flex-col justify-center items-center ">
            {/* Project Image */}
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="h-[200px] w-[300px] mb-4 rounded-lg "
            />

            {/* Project Title */}
            <h3 className="text-xl font-mono text-slate-300 mb-2 ">{project.title}</h3>

            {/* Project Description */}
            <p className="text-gray-400 text-sm mb-4 ">{project.description}</p>

            {/* Live Link Button */}
            <Link href={project.liveLink}>
              <p
                
                
                className="text-blue-900 text-lg flex gap-2 "
              >
                <FaLink className="mt-1"/>Live link
              </p>
            </Link>
          </div>
        </CardSpotlight>
      ))}
    </div>
    </div>
  );
}
