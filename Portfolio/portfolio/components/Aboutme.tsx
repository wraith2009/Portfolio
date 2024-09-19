'use client';

import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import { FaEnvelope, FaLink, FaUserTie, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="my-12 items-center">
      <h2 className="text-center text-4xl font-bold text-slate-300 dark:text-neutral-300 mb-8">
        About Me
      </h2>

      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[15rem] gap-4 w-full px-4 lg:w-2/3 lg:ml-64">
        {/* Introduction Card */}
        <BentoCard
          name="Hi, I am Rahul Bhardwaj"
          className="col-span-1 lg:col-span-2 bg-gradient-to-r from-blue-500 to-green-400 text-slate-300 border-black shadow-lg"
          background={<div className="h-full bg-gradient-to-r from-blue-500 to-green-400" />}
          Icon={FaUserTie}
          description="A Software Developer with almost 1 year of experience. I specialize in MERN stack development and am passionate about creating innovative technologies."
          href="https://www.linkedin.com/in/rahulbhardwaj95990/"
          cta="Read more"
        />

        {/* Specialization and Experience Card */}
        <BentoCard
          name="MERN Stack Specialist"
          className="col-span-1 bg-gradient-to-r from-purple-500 to-red-400 text-slate-300 border-black shadow-lg"
          background={<div className="h-full bg-gradient-to-r from-purple-500 to-red-400" />}
          Icon={FaLaptopCode}
          description="With experience working with clients and companies, I focus on building full-stack applications that deliver seamless user experiences."
          href="https://insocial.tech"
          cta="See My Work"
        />

        {/* Contact Card */}
        <BentoCard
          name="Let us Connect"
          className="col-span-1 bg-gradient-to-r from-yellow-600 to-neutral-500 text-slate-300 border-black shadow-lg"
          background={<div className="h-full bg-gradient-to-r from-indigo-500 to-teal-400" />}
          Icon={FaLink}
          description="I am always looking to collaborate on new and exciting projects. Whether it is for technical expertise or creative solutions, I am ready to contribute."
          href="https://x.com/WGaming28441"
          cta="Contact Me"
        />

        {/* Email Card */}
        <BentoCard
          name="Reach Me via Email"
          className="col-span-1 lg:col-span-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-slate-300 border-black shadow-lg"
          background={<div className="h-full bg-gradient-to-r from-orange-500 to-pink-400" />}
          Icon={FaEnvelope}
          description="Feel free to reach out via email if you want to hire me or collaborate on a project. Let us create something amazing together!"
          href="mailto:rbh97995@gmail.com"
          cta="Send Mail"
        />
      </BentoGrid>
    </section>
  );
};

export default About;
