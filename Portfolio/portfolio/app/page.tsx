import TypingAnimation from "@/components/magicui/typing-animation";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TechStackSection from "@/components/TechStack";
import MyProjects from "@/components/Projects";
import MyWorkExperience from "@/components/WorkExperience";
import AboutMe from "@/components/Aboutme";
import ReachOut from "@/components/ReachOut";

export default function Home() {
  return (
    <div className="mt-20 ">
      <TypingAnimation 
        text="Hi, I am Rahul Bhardwaj, a Full Stack developer from India." 
        duration={100} 
        className="text-slate-300 font-montserrat text-2xl mt-4"
      ></TypingAnimation>
      <div className="text-4xl my-2 text-center font-bold">
          <p className="text-slate-300 font-montserrat text-xl"> I specialize in turning ideas into fully functional web applications</p> 
          <p className="text-slate-300 font-montserrat text-xl">Whether you are building a product from the ground up or improving an existing one,</p>
          <span className="text-xl text-blue-500">I can help bring your vision to life with clean, efficient code.</span>
      </div>
      
      <div className="flex justify-center items-center mt-8 ">
        <a
          href="/Rahul_Resume.pdf" // Replace with the actual path to your resume file
          download="Rahul_Bhardwaj_Resume.pdf" // The name of the file that will be downloaded
        >
          <ShimmerButton 
          background="#020617"
          className="w-48 h-12 mb-2">
            Resume
          </ShimmerButton>
        </a>
      </div>
      
      <section id="experience">
        <MyWorkExperience/>  
      </section> 
      
      <section id="projects" >
        <MyProjects />
      </section>


      
      <TechStackSection />

      <section id="about">
      <AboutMe />
      </section>
      
      <section id="contact">
      <ReachOut/>
      </section>
      
    </div>
  );
}
