"use client";

import IconCloud from "./magicui/icon-cloud"; 
import BlurFade from "./magicui/blur-fade";// Use the IconCloud component you've defined
import { i } from "framer-motion/client";
import { Badge } from "./ui/badge";

const BLUR_FADE_DELAY = 0.04;
export default function TechStackSection() {
  // Define the tech stack icon slugs (these are your tech stacks)
  const techStackIcons = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "rust",
    "react",
    "nextdotjs",
    "linux",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "prisma",
    "postgresql",
    "docker",
    "firebase",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "mongodb",
    "mysql",
    "github",
    "visualstudiocode",
    "figma",
  ];

  const skills = [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Express",
    "C++",
    "git",
    "GitHub",
    "Javascript"
    
  ]

  return (
    <section className="flex flex-col items-center justify-center py-16 mt-4 space-y-8 font-bold text-4xl">
      {/* Title */}
      <h2 className="text-4xl font-mono text-center text-slate-300 dark:text-gray-100 tracking-tight">
        My Tech Stacks
      </h2>

      <div className="flex min-h-0 flex-col gap-y-3 -my-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1 justify-center">
            {skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      {/* Icon Cloud */}
      <div className="w-full max-w-6xl">
        <IconCloud iconSlugs={techStackIcons} />
      </div>
    </section>
  );
}
