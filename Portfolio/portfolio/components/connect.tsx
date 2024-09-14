// SocialDock.tsx
"use client";

import { FaEnvelope, FaTwitter, FaLinkedin, FaCode, FaGithub } from "react-icons/fa";
import { Dock, DockIcon } from './magicui/dock';

export default function SocialDock() {
  return (
    <div className="flex justify-center items-center ">
      <Dock magnification={80} distance={100} direction="middle">
        {/* Email Icon */}
        <DockIcon>
          <a href="mailto:rbh97995.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-2xl text-slate-300 " />
          </a>
        </DockIcon>

        {/* X (formerly Twitter) Icon */}
        <DockIcon>
          <a href="https://x.com/WGaming28441" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        {/* LeetCode Icon */}
        <DockIcon>
          <a href="https://leetcode.com/u/Rahul_Bhardwa09j/" target="_blank" rel="noopener noreferrer">
            <FaCode className="text-2xl text-slate-300" />
          </a>
        </DockIcon>

        {/* LinkedIn Icon */}
        <DockIcon>
          <a href="https://www.linkedin.com/in/rahulbhardwaj95990/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-slate-300" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="https://github.com/wraith2009" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-slate-300" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}
