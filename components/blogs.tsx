"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    date: "July 07, 2025",
    title: "How Computers Talk: A Deep Dive into Host-to-Host Communication",
    slug: "host-to-host-communication",
  },
  {
    date: "June 30, 2025",
    title: "Understanding Processes in Operating Systems: The Beating Heart of Your Computer",
    slug: "processes-in-operating-systems",
  },
  {
    date: "June 2, 2025",
    title: "From Monolith to Microservice: Designing a Centralized Payment System",
    slug: "monolith-to-microservice",
  },
  {
    date: "May 25, 2025",
    title: "Eventual Consistency in Distributed Systems: A Real-World Perspective",
    slug: "eventual-consistency",
  },
  {
    date: "May 08, 2025",
    title: "Understanding Phantom Reads: Ghosts in Your Database",
    slug: "understanding-phantom-reads",
  },
  {
    date: "Mar 08, 2025",
    title: "How Vector Search Works",
    slug: "how-vector-search-works",
  },
];

export default function Blogs_section() {
  return (
    <div className="mt-4 px-4 md:px-16">
      <div className="my-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold text-white">Recent blog posts</h2>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              View all
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <p className="text-gray-400 mb-6">Things I have written recently.</p>
        </motion.div>

        <ul className="space-y-4 list-none">
          {blogs.map((blog, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-baseline gap-2 flex-wrap group"
            >
              <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                •
              </span>
              <span className="text-gray-500 w-fit whitespace-nowrap">
                {blog.date} :
              </span>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {blog.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
