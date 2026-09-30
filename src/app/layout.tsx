import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";
import PillNav from "./_pill-nav";

const display = Hanken_Grotesk({ subsets: ["latin"], weight: ["800"], variable: "--font-display" });
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Natalie Taylor",
  description: "Portfolio of Natalie Taylor",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="relative min-h-screen bg-[#F2F0EA]" style={{ fontFamily: "var(--font-serif)" }}>
          {children}
          <div className="h-24" />
          <PillNav />
        </div>
      </body>
    </html>
  );
}
