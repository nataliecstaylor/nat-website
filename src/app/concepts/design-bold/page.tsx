"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Hanken_Grotesk, Newsreader } from "next/font/google";

const display = Hanken_Grotesk({ subsets: ["latin"], weight: ["800"], variable: "--font-display" });
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });

const ACCENT = "#6E62FF";

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
      className={`${display.variable} ${serif.variable} relative min-h-screen overflow-hidden bg-[#F2F0EA]`}
      style={{ fontFamily: "var(--font-serif)" }}
    >
      <div className="relative z-30 flex justify-center px-6 py-5">
        <div className="flex items-center gap-2 rounded-full border border-[#1C1B1A]/10 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur">
          <span
            className="text-sm text-[#1C1B1A]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Natalie Taylor
          </span>
        </div>
      </div>

      {/* Hero: type-only moment */}
      <section className="relative flex min-h-[calc(100vh-88px)] flex-col justify-center px-8 sm:px-16">
        <Rings />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}55 0%, ${ACCENT}22 45%, transparent 72%)`,
          }}
        />

        <div className="relative z-10 max-w-4xl">
          <h1
            className="text-[#1C1B1A]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(3.6rem, 12.5vw, 9.5rem)",
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
            style={{ fontFamily: "var(--font-serif)", color: ACCENT }}
          >
            — versatile, relationship-driven marketing leader
          </p>
        </div>
      </section>

      {/* Story: fades in on scroll, photo joins the narrative */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto grid max-w-5xl gap-10 border-t border-[#1C1B1A]/10 px-8 py-20 sm:grid-cols-[1.3fr_1fr] sm:px-16"
      >
        <div className="space-y-5 text-lg leading-relaxed text-[#1C1B1A]/80">
          <p>
            I take a lot of pride in my work and the brands I come to represent—it&apos;s
            actually how I got into marketing. After college, I danced professionally with a
            brand-new company. The work we were doing was the highest caliber in the entire
            state. But we were brand-new and no one knew about it. So for the next 3 years, I did
            everything I could to fix that and fell in love with marketing along the way,
            eventually retiring from dance and going all in on this profession. I&apos;ve done
            the same at other brands I was drawn to: T3 Advisors, a boutique real-estate firm
            that was eventually acquired, and most recently Capsule, a Series-A video software
            company.
          </p>
          <p>
            I&apos;m looking to throw that same commitment into the next company I join.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#1C1B1A]/10">
          <Image
            src="/content/talent/grwm.png"
            alt="Natalie at work — placeholder, swap for the real photo"
            width={382}
            height={666}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.section>
    </main>
  );
}
