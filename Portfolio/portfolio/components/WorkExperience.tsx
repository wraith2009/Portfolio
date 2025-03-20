import React from "react";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
interface WorkExperienceProps {
  position: string;
  companyName: string;
  timePeriod: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  position,
  companyName,
  timePeriod,
}) => {
  return (
    <div className="p-4 rounded-lg flex  gap-4">
      <HiMiniBuildingOffice2 className="mt-6 w-6 h-6 text-slate-200 -ml-4" />
      <div className="flex flex-col">
        <p className="text-lg md:text-xl font-semibold text-slate-200">
          {companyName}
        </p>
        <p className="text-sm md:text-base text-slate-400">{position}</p>
        <p className="text-xs md:text-sm text-slate-400">{timePeriod}</p>
      </div>
    </div>
  );
};

export default function MyWorkExperience() {
  return (
    <div className="font-bold text-4xl mt-4 px-4 md:px-16">
      <div className="font-mono text-white my-8 ">
        <p>Work Experience</p>

        <p className="text-slate-400 text-lg mt-1">
          All my professional experiences as a software engineer
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8 text-slate-200  ">
        <WorkExperience
          companyName="HillOne Technologies"
          position="Full Stack Developer Intern"
          timePeriod="June 2024 - Dec-2024"
        />

        <WorkExperience
          companyName="Experiment Labs"
          position="Full Stack Developer Intern"
          timePeriod="Dec-2024 - present"
        />

        <WorkExperience
          companyName="Freelance"
          position="Full Stack Developer"
          timePeriod="(present)"
        />
      </div>
    </div>
  );
}
