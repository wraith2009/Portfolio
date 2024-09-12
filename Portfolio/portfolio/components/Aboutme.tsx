"use client";

import SocialDock from "./connect";
import Image from "next/image";
export default function AboutMe(){
    return (
        <div className="flex flex-col items-center justify-center py-4 mt-4 space-y-8 font-bold text-4xl  ">
            <h2 className="text-4xl font-mono text-center text-slate-300 dark:text-gray-100 tracking-tight   ">
                About Me
            </h2>
            <Image src="/pfp.jpg"  
            className="h-[100px] w-[100px] rounded-full"
            alt="pfp"
            />
            
            <div className="-mt-4 ">
            <p className="text-center font-montserrat text-lg text-slate-300 dark:text-gray-100 md:px-20 px-4">
                Hi, I am <span className="text-blue-500">Rahul Bhardwaj</span>, a <span className="text-blue-500">software Developer</span> with a passion for development. I specialize in <span className="text-blue-500">MERN stack</span> and have worked with both clients and for companies. With <span className="text-blue-500">almost 1 years of experience</span>, I’m always looking to create new Technologies.
                Let us connect and create something amazing together.
            </p>

            <p className="text-center font-mono text-lg text-slate-300">Connect with me here : </p>
            <SocialDock />
            </div>
        </div>
    )
}