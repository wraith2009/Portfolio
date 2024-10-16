import React from "react";
import { Badge } from "./ui/badge";

interface WorkExperienceProps {
  position: string;
  companyName: string;
  timePeriod: string;
  description: string;
  technologies: string[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  position,
  companyName,
  timePeriod,
  description,
  technologies,
}) => {
  return (
    <div className="p-4 rounded-lg border-b-2 border-slate-400">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg md:text-xl">{companyName}</p>
          <p className="text-lg md:text-lg text-blue-400">{position}</p>
        </div>
        <p className="text-xs md:text-sm text-slate-400">{timePeriod}</p>
      </div>
      <p className="mt-2 mb-2 text-sm md:text-base text-slate-400">
        {description}
      </p>
      <div>
        <p className="text-xs md:text-sm text-slate-300 mb-2">
          Technologies used:
        </p>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function MyWorkExperience() {
  return (
    <div className="font-bold text-4xl mt-36 px-4 md:px-16 lg:px-0">
      <div className="font-mono text-slate-300 my-8 text-center">
        <p>Work Experience</p>
      </div>
      <div className="flex flex-col gap-8 mt-10 text-slate-200">
        {/* Freelance Work Experience */}
        <WorkExperience
          companyName="Freelance"
          position="Full Stack Developer"
          timePeriod="(present)"
          description="Currently building a comprehensive Content Management System (CMS) to streamline the management of web content."
          technologies={["Next.js", "Tailwind CSS", "Sequelize", "Postgres"]}
        />

        {/* HillOne Technologies Work Experience */}
        <WorkExperience
          companyName="HillOne Technologies"
          position="Full Stack Developer"
          timePeriod="April - August 2023"
          description="I developed a feature to generate negative test cases for real-world APIs using OpenAI on the backend, and also implemented UI corrections to enhance the user experience."
          technologies={["React", "Redux", "MERN", "AWS"]}
        />
      </div>
    </div>
  );
}
