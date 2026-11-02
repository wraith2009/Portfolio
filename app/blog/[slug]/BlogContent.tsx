"use client";

import ReactMarkdown from "react-markdown";

interface Props {
  content: string;
}

export default function BlogContent({ content }: Props) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-[var(--text)] mt-8 mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold text-[var(--text)] mt-8 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold text-[var(--text)] mt-6 mb-3">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-[var(--text-muted)] leading-7 mb-4">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside text-[var(--text-muted)] mb-4 space-y-2 ml-2">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside text-[var(--text-muted)] mb-4 space-y-2 ml-2">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="text-[var(--text-muted)]">{children}</li>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[var(--text-subtle)] pl-4 italic text-[var(--text-subtle)] my-4">
            {children}
          </blockquote>
        ),
        code: ({ className, children }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="px-1.5 py-0.5 rounded bg-[var(--border)] text-[var(--text)] text-sm font-mono">
                {children}
              </code>
            );
          }
          return (
            <code className={className}>{children}</code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-[var(--border)] p-4 rounded-lg overflow-x-auto my-6 text-sm">
            {children}
          </pre>
        ),
        hr: () => <hr className="border-[var(--border)] my-8" />,
        strong: ({ children }) => (
          <strong className="font-semibold text-[var(--text)]">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic">{children}</em>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
