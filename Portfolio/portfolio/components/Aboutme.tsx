"use client";

import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import { FaEnvelope, FaLink, FaUserTie, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section className="mt-14 items-center md:px-20 pb-10">
      <h2 className="text-center text-4xl font-bold text-slate-300 dark:text-neutral-300 mb-8">
        About Me
      </h2>

      <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[15rem] gap-4 w-full px-4  ">
        <BentoCard
          name="Hi, I am Rahul Bhardwaj"
          className="col-span-1 lg:col-span-2  border-2 text-slate-300 border-white shadow-lg"
          background={
            <div className="h-full bg-gradient-to-r from-blue-500 to-green-400" />
          }
          Icon={FaUserTie}
          img="/grid4.avif"
          imgClassName="w-full h-full"
          description="A Software Developer with almost 1 year of experience. I specialize in MERN stack development and am passionate about creating innovative technologies."
          href="https://www.linkedin.com/in/rahulbhardwaj09/"
          cta="Read more"
        />

        <BentoCard
          name="MERN Stack Specialist"
          className="col-span-1 bg-black border-2 text-slate-300 border-white shadow-lg"
          background={
            <div className="h-full bg-gradient-to-r from-purple-500 to-red-400" />
          }
          Icon={FaLaptopCode}
          img="/grid 3.avif"
          imgClassName="w-full h-full"
          description="With experience working with clients and companies, I focus on building full-stack applications that deliver seamless user experiences."
          href="https://github.com/wraith2009"
          cta="See My Work"
        />

        <BentoCard
          name="Let us Connect"
          className="col-span-1 bg-black border-2 text-slate-300 border-white shadow-lg"
          background={
            <div className="h-full bg-gradient-to-r from-indigo-500 to-teal-400" />
          }
          Icon={FaLink}
          img="/grid 3.avif"
          imgClassName="w-full h-full"
          description="I am always looking to collaborate on new and exciting projects. Whether it is for technical expertise or creative solutions, I am ready to contribute."
          href="https://x.com/10xRahul_"
          cta="Contact Me"
        />

        <BentoCard
          name="Reach Me via Email"
          className="col-span-1 lg:col-span-2 bg-black text-slate-300 border-2 border-white shadow-lg"
          background={
            <div className="h-full bg-gradient-to-r from-orange-500 to-pink-400" />
          }
          Icon={FaEnvelope}
          img="/grid5.avif"
          imgClassName="w-full h-full"
          description="Feel free to reach out via email if you want to hire me or collaborate on a project. Let us create something amazing together!"
          href="mailto:rbh97995@gmail.com"
          cta="Send Mail"
        />
      </BentoGrid>
    </section>
  );
};

export default About;
