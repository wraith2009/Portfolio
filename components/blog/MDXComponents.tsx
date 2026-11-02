"use client";

import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

function CodeBlock({
  children,
  className
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  const language = className?.replace("language-", "") || "";
  const isInline = !className;

  if (isInline) {
    return (
      <code className="px-1.5 py-0.5 rounded bg-white/10 text-pink-400 text-sm font-mono">
        {children}
      </code>
    );
  }

  return (
    <div className="relative group my-6">
      {language && (
        <div className="absolute right-3 top-3 text-xs text-gray-400 uppercase">
          {language}
        </div>
      )}
      <pre className="p-4 rounded-lg bg-[#0d1117] border border-white/10 overflow-x-auto">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}

export const MDXComponents = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className="text-4xl font-bold text-white mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="text-3xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="text-2xl font-semibold text-white mt-6 mb-3">{children}</h3>
  ),
  h4: ({ children }: { children?: ReactNode }) => (
    <h4 className="text-xl font-semibold text-white mt-4 mb-2">{children}</h4>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-gray-300 leading-7 mb-4">{children}</p>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="text-gray-300">{children}</li>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">
      {children}
    </blockquote>
  ),
  code: CodeBlock,
  pre: ({ children }: { children?: ReactNode }) => <>{children}</>,
  hr: () => <hr className="border-white/10 my-8" />,
  table: ({ children }: { children?: ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border border-white/10 px-4 py-2 text-left text-white bg-white/5">
      {children}
    </th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border border-white/10 px-4 py-2 text-gray-300">
      {children}
    </td>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <figure className="my-6">
      <img
        src={src}
        alt={alt || ""}
        className="rounded-lg w-full"
        loading="lazy"
      />
      {alt && (
        <figcaption className="text-center text-sm text-gray-400 mt-2">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
};
