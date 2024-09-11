import TypingAnimation from "@/components/TextAnimation";
import ShimmerButton from "@/components/SimmerButton";

export default function Home() {
  return (
    <div className="mt-20 ">
      <div className="text-4xl text-center font-bold">
          <p className="text-slate-300 font-mono">Turning ideas into reality</p> 
          <p className="text-slate-300 font-mono">with code is my craft<span className="text-xl ml-2 text-blue-400">— one line at a time.</span></p>
      </div>
      <TypingAnimation 
       text="Hi, I am Rahul Bhardwaj, a MERN developer from India." 
       duration={100} 
       className="text-slate-300 font-medium text-2xl mt-4"
      ></TypingAnimation>
      <div className="flex justify-center mt-4">
      <a
      href="/Rahul_Resume.pdf" // Replace with the actual path to your resume file
      download="Rahul_Bhardwaj_Resume.pdf" // The name of the file that will be downloaded
      >
      <ShimmerButton 
       background="#020617"
       className="w-48 h-12">
        Resume
      </ShimmerButton>
    </a>
    </div>
    </div>
  );
}
