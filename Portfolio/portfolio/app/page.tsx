import ShimmerButton from "@/components/magicui/shimmer-button";
import TechStackSection from "@/components/TechStack";
import MyProjects from "@/components/Projects";
import MyWorkExperience from "@/components/WorkExperience";
import AboutMe from "@/components/Aboutme";
import { Metadata } from "next";
import { TracingBeam } from "@/components/ui/tracing-beam";
export const metadata: Metadata = {
  title: "Rahul Bhardwaj",
};
export default function Home() {
  return (
    <div className="py-20 bg-black">
      <TracingBeam>
      <div className="flex flex-col gap-6 px-4 md:px-16 lg:px-10 items-start mt-20">
        <p className="text-blue-400 text-lg">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200">
          Rahul Bhardwaj.
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold text-slate-400">
          I build things for the web.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          I’m a full-stack developer from India. I specialize in turning ideas
          into fully functional web applications. Whether you’re building a
          product from the ground up or improving an existing one, I can help
          bring your vision to life with clean, efficient code.
        </p>
      </div>

      <div className="flex justify-center items-center mt-8 ">
        <a
          href="/Rahul_Resume.pdf" // Replace with the actual path to your resume file
          download="Rahul_Bhardwaj_Resume.pdf" // The name of the file that will be downloaded
        >
          <ShimmerButton background="#020617" className="w-48 h-12 mb-2">
            Resume
          </ShimmerButton>
        </a>
      </div>

      <section id="experience ">
        <MyWorkExperience />
      </section>

      <section id="projects">
        <MyProjects />
      </section>

      <TechStackSection />

      <section id="about">
        <AboutMe />
      </section>

      {/* <section id="contact">
      <ReachOut/>
      </section> */}
      </TracingBeam>
    </div>
  );
}
