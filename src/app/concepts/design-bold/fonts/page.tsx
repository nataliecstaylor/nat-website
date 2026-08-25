"use client";

import { Geist, Archivo, Space_Grotesk, Inter } from "next/font/google";

const geist = Geist({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-geist" });
const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"], variable: "--font-space" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const ACCENT = "#6E62FF";

const options = [
  { name: "Geist", family: "var(--font-geist)", weight: 800 },
  { name: "Archivo", family: "var(--font-archivo)", weight: 800 },
  { name: "Space Grotesk", family: "var(--font-space)", weight: 700 },
];

export default function FontCompare() {
  return (
    <main
      className={`${geist.variable} ${archivo.variable} ${spaceGrotesk.variable} ${body.variable} min-h-screen bg-[#F2F0EA]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {options.map((o) => (
        <section
          key={o.name}
          className="flex min-h-[70vh] flex-col items-center justify-center border-b border-[#1C1B1A]/10 px-4 text-center"
        >
          <span className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-[#1C1B1A]/40">
            {o.name}
          </span>
          <h1
            className="text-[#1C1B1A]"
            style={{
              fontFamily: o.family,
              fontWeight: o.weight,
              fontSize: "clamp(3.6rem, 12.5vw, 9.5rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
            }}
          >
            Natalie
            <br />
            <span style={{ WebkitTextStroke: `2.5px ${ACCENT}`, WebkitTextFillColor: "#F2F0EA" }}>
              Taylor
            </span>
          </h1>
        </section>
      ))}
    </main>
  );
}
