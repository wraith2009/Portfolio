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
    <div className="p-4  flex  gap-4 border-l-2 border-gray-600">
      <div className="flex flex-col ">
        <p className="text-lg md:text-xl  text-slate-200">{companyName}</p>
        <p className="text-sm md:text-base text-slate-400">{position}</p>
        <p className="text-xs md:text-sm text-slate-600">{timePeriod}</p>
      </div>
    </div>
  );
};

export default function MyWorkExperience() {
  return (
    <div className="font-bold text-3xl mt-4 px-4 md:px-16">
      <div className="font-mono text-white my-8 ">
        <p>Work Experience</p>

        <p className="text-slate-400 text-sm mt-1">Places I have worked at</p>
      </div>
      <div className="flex flex-col gap-4 mt-8 text-slate-200  ">
        <WorkExperience
          companyName="Experiment Labs"
          position="Full Stack Developer Intern"
          timePeriod="Dec-2024 - present"
        />

        <WorkExperience
          companyName="HillOne Technologies"
          position="Full Stack Developer Intern"
          timePeriod="June 2024 - December-2024"
        />

        <WorkExperience
          companyName="Stealth Startup"
          position="Full Stack Developer Intern"
          timePeriod="September 2024 - December-2024"
        />

        <WorkExperience
          companyName="Freelance"
          position=""
          timePeriod="(present)"
        />
      </div>
    </div>
  );
}
