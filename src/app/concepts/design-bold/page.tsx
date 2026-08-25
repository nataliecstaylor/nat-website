"use client";

import { Bricolage_Grotesque, Inter } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const ACCENT = "#00B871";

function Rings() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.35]"
      width="1400"
      height="700"
      viewBox="0 0 1400 700"
      fill="none"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse
          key={i}
          cx="700"
          cy="350"
          rx={260 + i * 130}
          ry={90 + i * 45}
          stroke="#1C1B1A"
          strokeOpacity="0.12"
        />
      ))}
    </svg>
  );
}

export default function DesignBold() {
  return (
    <main
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-[#F2F0EA]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="relative z-30 flex justify-center px-6 py-5">
        <div className="flex items-center gap-2 rounded-full border border-[#1C1B1A]/10 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur">
          <span className="text-sm font-semibold tracking-tight text-[#1C1B1A]">Natalie Taylor</span>
        </div>
      </div>

      <section className="relative flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-4 text-center">
        <Rings />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}55 0%, ${ACCENT}22 45%, transparent 72%)`,
          }}
        />

        <h1
          className="relative z-10 font-semibold text-[#1C1B1A]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4.5rem, 15vw, 12rem)",
            lineHeight: 0.86,
            letterSpacing: "-0.03em",
          }}
        >
          Natalie
          <br />
          <span style={{ WebkitTextStroke: `2px ${ACCENT}`, WebkitTextFillColor: "#F2F0EA" }}>
            Taylor
          </span>
        </h1>

        <p className="relative z-10 mx-auto mt-8 max-w-sm text-base leading-relaxed text-[#1C1B1A]/70">
          Versatile, relationship-driven marketing leader with a high bar for quality,
          connection, and details.
        </p>
      </section>
    </main>
  );
}
