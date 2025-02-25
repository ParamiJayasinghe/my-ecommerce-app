import type { Metadata } from "next";
import "./globals.css"; // Import Tailwind CSS styles

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "An online store built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
