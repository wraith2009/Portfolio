"use client";

import IconCloud from "./magicui/icon-cloud"; // Use the IconCloud component you've defined

export default function TechStackSection() {
  // Define the tech stack icon slugs (these are your tech stacks)
  const techStackIcons = [
    "react",
    "cplusplus",
    "html5",
    "css3",
    "tailwindcss",
    "nodedotjs",
    "mongodb",
    "nextdotjs",
    "redux",
    "javascript",
    "python",
    "typescript",
    "postgresql",
    
  ];

  return (
    <section className="flex flex-col items-center justify-center py-16 mt-4 space-y-8 font-bold text-4xl">
      {/* Title */}
      <h2 className="text-4xl font-mono text-center text-slate-300 dark:text-gray-100 tracking-tight">
        My Tech Stacks
      </h2>

      {/* Icon Cloud */}
      <div className="w-full max-w-6xl">
        <IconCloud iconSlugs={techStackIcons} />
      </div>
    </section>
  );
}
