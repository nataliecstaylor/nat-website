"use client";

import { Space_Grotesk, IBM_Plex_Sans, Work_Sans, Hanken_Grotesk, Newsreader } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"], variable: "--font-display" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work" });
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader" });

const ACCENT = "#6E62FF";

const options = [
  { name: "IBM Plex Sans", family: "var(--font-plex)", note: "Technical, a bit engineered — leans into Space Grotesk's character rather than softening it." },
  { name: "Work Sans", family: "var(--font-work)", note: "Warmer and more humanist — softens the technical edge of the headline font." },
  { name: "Hanken Grotesk", family: "var(--font-hanken)", note: "Same grotesk family feel as the headline, just quieter — most \"matched set\" of the options." },
  { name: "Newsreader", family: "var(--font-newsreader)", note: "A serif, for real contrast — technical headline against a warm reading serif body. Most editorial of the four." },
];

export default function BodyFontCompare() {
  return (
    <main
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${workSans.variable} ${hankenGrotesk.variable} ${newsreader.variable} min-h-screen bg-[#F2F0EA]`}
    >
      {options.map((o) => (
        <section key={o.name} className="mx-auto max-w-3xl border-b border-[#1C1B1A]/10 px-6 py-16 text-left">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#1C1B1A]/40">
            Body: {o.name}
          </span>
          <p className="mt-1 max-w-md text-xs text-[#1C1B1A]/45">{o.note}</p>

          <h2
            className="mt-6 text-3xl text-[#1C1B1A] sm:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            Capsule VIP Dinner Series
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2" style={{ fontFamily: o.family }}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>
                Off Camera
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-[#1C1B1A]/75">
                Chose key cities, built invite lists, managed outreach campaigns and venues,
                maintained 98% attendance, scaled from 0.5 events/month to 2/month, built key
                relationships and millions in pipeline, and hired a Head of Events who continues
                to scale and improve this program.
              </p>
              <div className="mt-4 inline-flex items-baseline gap-2">
                <span
                  className="text-4xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: ACCENT }}
                >
                  98%
                </span>
                <span className="text-xs text-[#1C1B1A]/50">attendance</span>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>
                On Camera
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-[#1C1B1A]/75">
                Hosted each event and built the relationships that led to real pipeline — and
                champions who came back to me after changing companies. Promoted the events
                myself, and the series was written up in a book.
              </p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
