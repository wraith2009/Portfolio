"use client"; // <-- This ensures everything runs on the client-side

import { motion } from "framer-motion";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TechStackSection from "@/components/TechStack";
import MyProjects from "@/components/Projects";
import MyWorkExperience from "@/components/WorkExperience";
import AboutMe from "@/components/Aboutme";


// Define the animation variant (fade-in and upward motion)
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="py-20 bg-black px-4 md:px-40 flex justify-center flex-col items-center">
      {/* Introduce yourself section */}
      <motion.div
        className="flex flex-col gap-6 px-4 md:px-16  items-start  md:my-28 w-full"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }} // Ensures the animation triggers when 30% of the section is in view
      >
        <p className="text-blue-400 text-lg">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-200">
          Rahul Bhardwaj.
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold text-slate-400">
          I build things for the web.
        </h2>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
          I’m a full-stack developer from India. I specialize in turning ideas
          into fully functional web applications. Whether you’re building a
          product from the ground up or improving an existing one, I can help
          bring your vision to life with clean, efficient code.
        </p>
      </motion.div>

      {/* Resume download button */}
      <motion.div
        className="flex justify-center items-center mt-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <a
          href="/Rahul_Resume.pdf"
          download="Rahul_Bhardwaj_Resume.pdf"
        >
          <ShimmerButton background="#020617" className="w-48 h-12 mb-2">
            Resume
          </ShimmerButton>
        </a>
      </motion.div>

      {/* Work experience section */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MyWorkExperience />
      </motion.section>

      {/* Projects section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <MyProjects />
      </motion.section>

      {/* Tech stack section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <TechStackSection />
      </motion.div>

      {/* About me section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutMe />
      </motion.section>
    </div>
  );
}
