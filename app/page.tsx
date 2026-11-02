"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const scrollToSection = (id: string, smooth = true) => {
  const element = document.getElementById(id);
  if (element) {
    const absoluteElementTop = element.getBoundingClientRect().top + window.scrollY;
    const offset = window.innerHeight / 3;
    window.scrollTo({
      top: Math.max(0, absoluteElementTop - offset),
      behavior: smooth ? "smooth" : "instant"
    });
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string[];
  letter?: string;
}

const workExperience: WorkExperience[] = [
  {
    company: "PMV2",
    role: "Contractor",
    period: "Present",
    description: [
      "Lead a team of three engineers across Spiegel Financial (financial platform) and WattChoice (electricity comparison & enrollment product)",
      "Own backend architecture using Node.js, TypeScript and PostgreSQL — API contracts, code reviews and frontend integration handoffs",
      "Build financial-data pipelines integrating Plaid, crypto exchanges and market-data providers for account sync, transaction attribution and reporting",
      "Develop AI workflows for querying financial data and private documents using Amazon Bedrock, retrieval-based systems and MCP integrations",
      "Build bill-processing, electricity-usage and provider-enrollment workflows integrating Smart Meter Texas, ComparePower and HubSpot",
      "Own AWS infrastructure (ECS/Fargate, Lambda, S3, EventBridge) — deployments, monitoring, production issues and release coordination"
    ]
  },
  {
    company: "Experiment Labs",
    role: "Founding Full Stack Developer",
    period: "Dec 2024 — Jul 2025",
    description: [
      "Led a six-person team building multiple services, translating product requirements into user flows, UX decisions and technical architecture",
      "Owned backend development and infrastructure, connecting services and supporting end-to-end product delivery",
      "Led CRM development to support consultant workflows",
      "Built a recommendation engine delivering personalized suggestions from student profiles",
      "Developed a modular payment service supporting billing and usage tracking"
    ],
    letter: "/experiment-labs-relieving-letter.pdf"
  },
  {
    company: "Stealth Startup",
    role: "Full Stack Developer Intern",
    period: "Sep — Dec 2024",
    description: [
      "Built a Next.js content management system for small businesses using modular, reusable components",
      "Implemented and deployed payment processing, order management and user-role functionality"
    ]
  },
  {
    company: "HillOne Technologies",
    role: "Full Stack Developer Intern",
    period: "May — Aug 2024",
    description: [
      "Developed AI modules that generated negative test cases for REST APIs",
      "Improved application UI/UX to make existing workflows clearer and easier to use"
    ]
  },
];

const projects = [
  {
    name: "Website Monitor",
    description: "Website and API monitoring platform with real-time alerts",
    tech: "React, TypeScript, AWS Lambda",
    link: "https://github.com/wraith2009/w-monitor-backend",
  },
  {
    name: "ORM",
    description: "TypeScript-first ORM with type-safe queries",
    tech: "TypeScript, PostgreSQL, Zod",
    link: "https://github.com/wraith2009/ts-orm",
  },
  {
    name: "Second Brain",
    description: "AI-powered knowledge management app",
    tech: "React, Express, Recoil",
    link: "https://brainly-frontend-sable.vercel.app/",
  },
  {
    name: "GitHub Analyzer",
    description: "AI-powered GitHub profile analyzer",
    tech: "React, Hono, OpenAI",
    link: "https://chillguyanalyzer.onrender.com/",
  },
];

const writings = [
  { title: "How Computers Talk: Host-to-Host Communication", date: "Jul 2025", slug: "host-to-host-communication" },
  { title: "Understanding Processes in Operating Systems", date: "Jun 2025", slug: "processes-in-operating-systems" },
  { title: "From Monolith to Microservice", date: "Jun 2025", slug: "monolith-to-microservice" },
  { title: "Eventual Consistency in Distributed Systems", date: "May 2025", slug: "eventual-consistency" },
];

function ExperienceCard({ job, index }: { job: WorkExperience; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="group py-3 border-b border-[var(--border)] hover:border-[var(--border-hover)] transition-colors cursor-pointer"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[var(--text)] group-hover:text-[var(--text)] transition-colors">
            {job.company}
          </span>
          <span className="text-[var(--text-subtle)] text-sm">
            {job.role}
          </span>
          <motion.span
            className="text-[var(--text-subtle)] text-xs"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ↓
          </motion.span>
        </div>
        <span className="mono text-xs text-[var(--text-subtle)]">
          {job.period}
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3"
          >
            <ul className="ml-0 space-y-2">
              {job.description.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm text-[var(--text-muted)] flex items-start gap-2"
                >
                  <span className="text-[var(--text-subtle)] mt-1">·</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
            {job.letter && (
              <motion.a
                href={job.letter}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 mt-4 text-xs mono text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                <span>View relieving letter</span>
                <span>↗</span>
              </motion.a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Home() {
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash, false);
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Fixed Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-6">
            <span className="mono text-sm font-medium text-[var(--text)]">RB</span>
            <div className="hidden sm:flex items-center gap-5 text-sm">
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "experience")}
                className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                Projects
              </a>
              <Link
                href="/blog"
                className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                Writing
              </Link>
            </div>
          </nav>
          <ThemeToggle />
        </div>
      </motion.header>

      <motion.main
        className="max-w-2xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-32"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* Hero */}
        <motion.section id="hero" className="mb-20" variants={item}>
          <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text)] mb-3">
            Rahul Bhardwaj
          </h1>
          <p className="text-[var(--text-muted)] italic text-lg mb-6">
            Building systems that move quietly and scale gracefully.
          </p>
          <p className="text-[var(--text-subtle)] text-base mb-6">
            Full-stack developer · Currently leading Spiegel Financial & WattChoice at PMV2.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/wraith2009"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/10xRahul_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="mailto:rbh97995@gmail.com"
              className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
            </a>
          </div>
        </motion.section>

        {/* Divider */}
        <motion.div
          className="border-t border-[var(--border-hover)] mb-16"
          variants={item}
        />

        {/* Work Experience */}
        <motion.section id="experience" className="mb-20" variants={item}>
          <h2 className="mono text-xs text-[var(--text-subtle)] uppercase tracking-widest mb-8">
            01 — Experience
          </h2>
          <p className="text-sm text-[var(--text-subtle)] mb-6">
            Click to expand details
          </p>
          <div className="space-y-0">
            {workExperience.map((job, i) => (
              <ExperienceCard key={i} job={job} index={i} />
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects" className="mb-20" variants={item}>
          <h2 className="mono text-xs text-[var(--text-subtle)] uppercase tracking-widest mb-8">
            02 — Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-3 border-b border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[var(--text)] group-hover:text-[var(--text)] transition-colors">
                    {project.name}
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </span>
                  <span className="mono text-xs text-[var(--text-faint)]">
                    {project.tech}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-subtle)] group-hover:text-[var(--text-muted)] transition-colors">
                  {project.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Writing */}
        <motion.section id="writing" className="mb-20" variants={item}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="mono text-xs text-[var(--text-subtle)] uppercase tracking-widest">
              03 — Writing
            </h2>
            <Link
              href="/blog"
              className="mono text-xs text-[var(--text-subtle)] hover:text-[var(--text-muted)] transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {writings.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between py-2 border-b border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
                >
                  <span className="text-[var(--text)] group-hover:text-[var(--text)] transition-colors">
                    {post.title}
                  </span>
                  <span className="mono text-xs text-[var(--text-subtle)] ml-4 shrink-0">
                    {post.date}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <motion.div
          className="border-t border-[var(--border-hover)] mb-12"
          variants={item}
        />

        {/* Footer */}
        <motion.footer variants={item}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
            <div className="flex gap-6">
              <a
                href="https://github.com/wraith2009"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/10xRahul_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                Twitter
              </a>
              <a
                href="mailto:rbh97995@gmail.com"
                className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                Email
              </a>
            </div>
            <span className="mono text-xs text-[var(--text-faint)]" suppressHydrationWarning>
              © {new Date().getFullYear()}
            </span>
          </div>
        </motion.footer>
      </motion.main>
    </div>
  );
}
