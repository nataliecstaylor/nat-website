"use client";

import { Manrope, Plus_Jakarta_Sans, Onest, Hanken_Grotesk, Newsreader } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["800"], variable: "--font-manrope" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["800"], variable: "--font-jakarta" });
const onest = Onest({ subsets: ["latin"], weight: ["800"], variable: "--font-onest" });
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], weight: ["800"], variable: "--font-hanken" });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader" });

const ACCENT = "#6E62FF";

const options = [
  { name: "Manrope", family: "var(--font-manrope)" },
  { name: "Plus Jakarta Sans", family: "var(--font-jakarta)" },
  { name: "Onest", family: "var(--font-onest)" },
  { name: "Hanken Grotesk", family: "var(--font-hanken)" },
];

export default function HeaderCompare() {
  return (
    <main
      className={`${manrope.variable} ${plusJakarta.variable} ${onest.variable} ${hankenGrotesk.variable} ${newsreader.variable} min-h-screen bg-[#F2F0EA]`}
      style={{ fontFamily: "var(--font-newsreader)" }}
    >
      {options.map((o) => (
        <section
          key={o.name}
          className="flex min-h-[85vh] flex-col justify-center border-b border-[#1C1B1A]/10 px-8 sm:px-16"
        >
          <span className="mb-8 text-xs font-medium uppercase tracking-[0.15em] text-[#1C1B1A]/40" style={{ fontFamily: "var(--font-manrope)" }}>
            {o.name}
          </span>

          <div className="max-w-4xl">
            <h1
              className="text-[#1C1B1A]"
              style={{
                fontFamily: o.family,
                fontWeight: 800,
                fontSize: "clamp(3.2rem, 10vw, 7.5rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              Natalie
              <br />
              Taylor
            </h1>
            <p
              className="mt-3 text-2xl italic sm:text-3xl"
              style={{ fontFamily: "var(--font-newsreader)", color: ACCENT }}
            >
              — versatile, relationship-driven marketing leader
            </p>
          </div>

          <div className="mt-16 max-w-2xl border-t border-[#1C1B1A]/15 pt-8">
            <span
              className="text-xs font-medium uppercase tracking-[0.15em] text-[#1C1B1A]/40"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Off Camera
            </span>
            <p className="mt-3 text-lg leading-relaxed text-[#1C1B1A]/80" style={{ fontFamily: "var(--font-newsreader)" }}>
              Chose key cities, built invite lists, managed outreach campaigns and venues,
              maintained 98% attendance, scaled from 0.5 events/month to 2/month, built key
              relationships and millions in pipeline.
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
