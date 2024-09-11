// WorkExperienceCard.tsx
import React from "react";
import Particles from "./magicui/particles";

interface WorkExperienceCardProps {
  position: string;
  timePeriod: string;
  CompanyName: string;
  description?: string;
  technologies: string[];
  particlesColor: string;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  position,
  timePeriod,
  CompanyName,
  description = "",
  technologies,
  particlesColor,
}) => {
  return (
    <div className="relative min-w-[398px]  h-[298px] md:w-[398px] p-6 rounded-lg shadow-lg bg-black text-white mb-40 -mt-[11px] -ml-[11px] ">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        size={0.5}
        color={particlesColor}
        staticity={50}
        ease={50}
        vx={0.05}
        vy={0.05}
      />
      
      {/* Card Content */}
      <div className="relative z-10">
        {/* Position */}
        <h2 className="text-xl font-mono mb-4">{position}</h2>
        <div className="flex gap-10">
        <p className="text-sm text-blue-600 mb-2">{CompanyName}</p>
        {/* Time Period */}
        <p className="text-sm text-gray-400 mb-2">{timePeriod}</p>

        </div>

        

        {/* Description */}
        <p className="mb-4 text-sm font-mono">{description}</p>

        {/* Technologies Used */}
        <div>
          <h3 className="font-sm text-sm mb-2">Technologies Used:</h3>
          <ul className="list-disc pl-5  ">
            {technologies.map((tech, index) => (
              <li key={index} className="text-gray-300 text-sm">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
