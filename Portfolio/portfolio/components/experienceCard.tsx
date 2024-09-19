// WorkExperienceCard.tsx
import React from "react";
import Particles from "./magicui/particles";
import { Badge } from "./ui/badge";

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
    <div className="relative max-w-fit md:min-w-[398px] h-[300px] p-6 rounded-lg shadow-lg bg-black text-white mb-40 -mt-[11px] -ml-[11px] ">
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

          <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
