// MyWorkExperience.tsx
import React from "react";
import WorkExperienceCard from "./experienceCard";
import ShineBorder from "./magicui/shine-border";

export default function MyWorkExperience() {
  return (
    <div className="font-bold text-4xl mt-10"> 
        <div className="font-mono text-slate-300 mb-8 text-center">
            <p>Work Experience</p>
        </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
      {/* Freelance Work Card */}
      <ShineBorder
        borderRadius={12} // Adjust the radius to match the card design
        borderWidth={2} // Customize the border width
        duration={10} // Speed of shine animation
        color={["#FF00FF", "#00FFFF"]}
        className="max-w-fit md:w-[402px] h-[302px] bg-[#020617]" // Multi-color gradient for shine
      >
      <WorkExperienceCard
        position="Full Stack Developer "
        CompanyName="Freelance"
        timePeriod="(present)"
        description="Currently building a CMS system"
        technologies={[ "Next.js", "Tailwind CSS", "Sequelize", "Postgres"]}
        particlesColor="#FF00FF" // Example color for particles
      />
      </ShineBorder>
      
      {/* Capit IO Work Card */}
      <ShineBorder
        borderRadius={12} // Adjust the radius to match the card design
        borderWidth={2} // Customize the border width
        duration={10} // Speed of shine animation
        color={["#FF00FF", "#00FFFF"]}
        className="max-w-fit  md:w-[402px]  bg-[#020617]" // Multi-color gradient for shine
      >
      <WorkExperienceCard
        position="Full Stack Developer"
        CompanyName = "HillOne Technologies"
        timePeriod="April - August 2023"
        description="I developed a feature to generate negative test cases for real-world APIs using OpenAI on the backend, and also implemented UI corrections to enhance the user experience."
        technologies={["React", "Redux", "MERN", "AWS"]}
        particlesColor="#00FFFF" // Different color for particles
      />
      </ShineBorder>
    </div>
    </div>
  );
}
