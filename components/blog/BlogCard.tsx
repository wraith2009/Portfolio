"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogMeta;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex items-baseline justify-between py-3 border-b border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
      >
        <div className="flex-1 min-w-0 pr-4">
          <h3 className="text-[var(--text)] group-hover:text-[var(--text)] transition-colors truncate">
            {post.title}
          </h3>
          {post.description && (
            <p className="text-sm text-[var(--text-subtle)] group-hover:text-[var(--text-muted)] transition-colors mt-1 truncate">
              {post.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="mono text-xs text-[var(--text-subtle)]">
            {post.readingTime}
          </span>
          <time
            dateTime={post.date}
            className="mono text-xs text-[var(--text-subtle)]"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
      </Link>
    </motion.article>
  );
}
