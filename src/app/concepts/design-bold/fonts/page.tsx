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
        <section key={o.name} className="border-b border-[#1C1B1A]/10">
          <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
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
          </div>

          <div className="mx-auto max-w-3xl px-6 pb-20 text-left">
            <h2
              className="text-3xl text-[#1C1B1A] sm:text-4xl"
              style={{ fontFamily: o.family, fontWeight: o.weight, letterSpacing: "-0.01em" }}
            >
              Capsule VIP Dinner Series
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: ACCENT }}
                >
                  Off Camera
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-[#1C1B1A]/75">
                  Chose key cities, built invite lists, managed outreach campaigns and venues,
                  maintained 98% attendance, scaled from 0.5 events/month to 2/month, built key
                  relationships and millions in pipeline.
                </p>
                <div className="mt-4 inline-flex items-baseline gap-2">
                  <span
                    className="text-4xl"
                    style={{ fontFamily: o.family, fontWeight: o.weight, color: ACCENT }}
                  >
                    98%
                  </span>
                  <span className="text-xs text-[#1C1B1A]/50">attendance</span>
                </div>
              </div>
              <div>
                <span
                  className="text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: ACCENT }}
                >
                  On Camera
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-[#1C1B1A]/75">
                  Hosted each event and built the relationships that led to real pipeline — and
                  champions who came back to me after changing companies. Promoted the events
                  myself, and the series was written up in a book.
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
