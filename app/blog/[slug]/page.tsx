import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import BlogContent from "./BlogContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
        <article>
          <header className="mb-12">
            <Link
              href="/blog"
              className="text-sm text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors mb-8 inline-block"
            >
              ← Back to writing
            </Link>
            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[var(--text-subtle)]">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono text-xs px-2 py-1 bg-[var(--border)] text-[var(--text-subtle)] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <BlogContent content={post.content} />
        </article>

        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <Link
            href="/blog"
            className="text-sm text-[var(--text-subtle)] hover:text-[var(--text)] transition-colors"
          >
            ← Back to writing
          </Link>
        </div>
      </main>
    </div>
  );
}
