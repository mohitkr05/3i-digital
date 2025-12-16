import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3I Digital - Managed Digital Presence for Tech Founders",
  description:
    "We manage your digital presence, including web, mobile and social presence so you can focus on growing the business, not managing tools.",
  icons: {
    icon: "/images/1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-700 antialiased">{children}</body>
    </html>
  );
}
