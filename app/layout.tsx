import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulbhardwaj.dev"),
  title: {
    default: "Rahul Bhardwaj",
    template: "%s | Rahul Bhardwaj",
  },
  description: "Full-stack developer building web applications.",
  keywords: [
    "Rahul Bhardwaj",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Software Engineer",
  ],
  authors: [{ name: "Rahul Bhardwaj" }],
  creator: "Rahul Bhardwaj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahulbhardwaj.dev",
    siteName: "Rahul Bhardwaj",
    title: "Rahul Bhardwaj",
    description: "Full-stack developer building web applications.",
    images: [
      {
        url: "/pfp.jpg",
        width: 800,
        height: 800,
        alt: "Rahul Bhardwaj",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Rahul Bhardwaj",
    description: "Full-stack developer building web applications.",
    creator: "@10xRahul_",
    images: ["/pfp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
