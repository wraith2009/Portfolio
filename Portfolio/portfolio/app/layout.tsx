import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocialDock from "@/components/connect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Bhardwaj",
  description: "Rahul's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocialDock />
        {children}
      </body>
    </html>
  );
}
