import React, { useState } from "react";
import { FiGithub, FiLink2 } from "react-icons/fi";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface FeaturedProjectComponentProps {
  imageSrc?: string;
  projectName: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

const FeaturedProjectComponent: React.FC<FeaturedProjectComponentProps> = ({
  imageSrc,
  projectName,
  description,
  technologies,
  github,
  live,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-black-600 text-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-600">
      {imageSrc && (
        <div className="h-48 relative">
          <Image
            src={imageSrc}
            alt={projectName}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
            priority
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{projectName}</h3>
        <p
          className={`text-gray-400 mb-4 transition-all ${
            isExpanded ? "max-h-full" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
        {description.length > 100 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:underline mb-4"
          >
            {isExpanded ? "See Less" : "See More ..."}
          </button>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${projectName} GitHub`}
            className="flex items-center text-gray-400 hover:text-white"
          >
            <FiGithub className="mr-2" />
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${projectName} Live`}
            className="flex items-center text-gray-400 hover:text-white"
          >
            <FiLink2 className="mr-2" />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectComponent;
