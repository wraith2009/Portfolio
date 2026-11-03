import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Writing",
  description: "Thoughts on software engineering, distributed systems, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-6">
            <Link href="/" className="mono text-sm font-medium text-[var(--text)]">
              RB
            </Link>
            <div className="hidden sm:flex items-center gap-5 text-sm">
              <Link
                href="/#experience"
                className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/#projects"
                className="text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-[var(--text)] transition-colors"
              >
                Writing
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-32">
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
            Writing
          </h1>
          <p className="text-[var(--text-muted)]">
            Thoughts on distributed systems, backend architecture, and software engineering.
          </p>
        </section>

        <div className="space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-4 border-b border-[var(--border)] hover:border-[var(--border-hover)] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h2 className="text-[var(--text)] group-hover:text-[var(--text)] transition-colors font-medium leading-snug">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="mono text-xs text-[var(--text-faint)]">
                    {post.readingTime}
                  </span>
                  <span className="mono text-xs text-[var(--text-subtle)]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <p className="text-sm text-[var(--text-subtle)] line-clamp-2">
                {post.description}
              </p>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-[var(--text-subtle)] text-center py-12">
            No posts yet. Check back soon.
          </p>
        )}

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <Link
            href="/"
            className="text-sm text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
          >
            ← Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
