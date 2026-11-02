export const PORTFOLIO_KNOWLEDGE = {
  personal: {
    name: "Rahul Bhardwaj",
    role: "Full-Stack Developer",
    specialization: "MERN Stack, TypeScript, Distributed Systems",
    email: "rbh97995@gmail.com",
    twitter: "@10xRahul_",
    github: "wraith2009",
  },
  workExperience: [
    {
      company: "Experiment Labs",
      position: "Founding Engineer",
      period: "Dec 2024 - July 2025",
      highlights: [
        "Worked as a founding engineer building core product features",
        "Full-stack development with modern technologies",
      ],
    },
    {
      company: "HillOne Technologies",
      position: "Full Stack Developer Intern",
      period: "June 2024 - December 2024",
      highlights: [
        "Developed full-stack applications",
        "Worked with modern web technologies",
      ],
    },
    {
      company: "Stealth Startup",
      position: "Full Stack Developer Intern",
      period: "September 2024 - December 2024",
      highlights: [
        "Built features for early-stage startup",
        "Full-stack development experience",
      ],
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      period: "Present",
      highlights: [
        "Working on various client projects",
        "Building custom web applications",
      ],
    },
  ],
  projects: [
    {
      name: "w-Monitor",
      description: "A modern website and API monitoring platform with alerting",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "SQS", "AWS Lambda"],
      status: "Building",
      github: "https://github.com/wraith2009/w-monitor-backend",
    },
    {
      name: "ts-orm",
      description: "A TypeScript-first ORM designed for fun and learning",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Zod"],
      status: "In Development",
      github: "https://github.com/wraith2009/ts-orm",
    },
    {
      name: "100xBrainly",
      description: "A personal Second Brain with AI feature to communicate with your knowledge base",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Express.js", "Node.js", "Recoil"],
      status: "Live",
      github: "https://github.com/wraith2009/brainlyFrontend",
      live: "https://brainly-frontend-sable.vercel.app/",
    },
    {
      name: "inSocial",
      description: "A social media platform with real-time messaging",
      tech: ["Node.js", "Express", "React.js", "Tailwind CSS", "WebSockets", "MongoDB", "Google Gemini"],
      status: "Completed",
      github: "https://github.com/mayank2153/inSocial",
    },
    {
      name: "ChillGuyAnalyzer",
      description: "A fun project that measures the 'chillness' of a person using AI based on their GitHub profile",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Hono.js", "OpenAI"],
      status: "Live",
      github: "https://github.com/wraith2009/ChillGuyAnalyzer",
      live: "https://chillguyanalyzer.onrender.com/",
    },
  ],
  skills: [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
    "Express.js", "PostgreSQL", "MongoDB", "AWS", "Docker",
    "Tailwind CSS", "WebSockets", "REST APIs", "Git", "Linux",
  ],
  blogs: [
    { title: "How Vector Search Works", topic: "databases, AI, search" },
    { title: "Understanding Phantom Reads", topic: "databases, transactions" },
    { title: "Eventual Consistency in Distributed Systems", topic: "distributed systems" },
    { title: "From Monolith to Microservice", topic: "architecture, payments" },
    { title: "Understanding Processes in Operating Systems", topic: "operating systems" },
    { title: "How Computers Talk: Host-to-Host Communication", topic: "networking" },
  ],
  interests: [
    "Building developer tools",
    "Distributed systems",
    "Database internals",
    "Open source",
    "System design",
  ],
};

export function generateSystemPrompt(): string {
  const { personal, workExperience, projects, skills, blogs, interests } = PORTFOLIO_KNOWLEDGE;

  return `You are an AI assistant for ${personal.name}'s portfolio website. You help visitors learn about Rahul and his work.

## About Rahul
- Role: ${personal.role}
- Specialization: ${personal.specialization}
- Email: ${personal.email}
- Twitter: ${personal.twitter}
- GitHub: ${personal.github}

## Work Experience
${workExperience.map(job => `- ${job.position} at ${job.company} (${job.period})`).join('\n')}

## Projects
${projects.map(p => `- ${p.name}: ${p.description} [${p.tech.slice(0, 3).join(', ')}]`).join('\n')}

## Skills
${skills.join(', ')}

## Blog Topics
Rahul writes about: ${blogs.map(b => b.topic).join(', ')}

## Interests
${interests.join(', ')}

## Instructions
1. Be friendly, concise, and helpful
2. Answer questions about Rahul's experience, projects, and skills
3. If asked about topics outside Rahul's portfolio, politely redirect
4. Suggest relevant sections of the portfolio when appropriate
5. Keep responses conversational and engaging
6. If you don't know something specific, say so honestly
7. You can guide visitors through the portfolio sections

## Portfolio Sections
- Hero: Introduction and overview
- Work Experience: Professional background
- Projects: Technical work and side projects
- Blog: Technical writing and insights
- Contact: Ways to reach Rahul

Be helpful and showcase Rahul's work positively while being honest and accurate.`;
}

export const SUGGESTED_QUESTIONS = [
  "What projects is Rahul working on?",
  "Tell me about Rahul's experience",
  "What technologies does Rahul use?",
  "What does Rahul write about?",
  "How can I contact Rahul?",
];

export const TOUR_STEPS = [
  {
    id: "hero",
    targetSelector: "#hero",
    title: "Welcome!",
    content: "This is Rahul's portfolio. I'm here to help you explore!",
    position: "bottom" as const,
  },
  {
    id: "experience",
    targetSelector: "#experience",
    title: "Work Experience",
    content: "Rahul has worked at multiple companies as a full-stack developer.",
    position: "top" as const,
  },
  {
    id: "projects",
    targetSelector: "#projects",
    title: "Projects",
    content: "Check out the cool things Rahul has built!",
    position: "top" as const,
  },
  {
    id: "blog",
    targetSelector: "#blog",
    title: "Blog",
    content: "Rahul writes about distributed systems, databases, and more.",
    position: "top" as const,
  },
];
