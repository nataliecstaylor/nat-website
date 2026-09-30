"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ACCENT } from "./_nav-data";

function Rings() {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      width="1100"
      height="460"
      viewBox="0 0 1100 460"
      fill="none"
    >
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={i}
          cx="550"
          cy="230"
          rx={190 + i * 110}
          ry={75 + i * 42}
          stroke="#1C1B1A"
          strokeOpacity="0.18"
          strokeWidth="1.25"
        />
      ))}
    </motion.svg>
  );
}

export default function DesignBoldHome() {
  return (
    <>
      {/* Hero: type-only moment */}
      <section className="relative flex min-h-[calc(100vh-88px)] flex-col justify-center px-8 sm:px-16">
        <div className="relative w-fit">
          <Rings />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
            style={{
              background: `radial-gradient(circle, ${ACCENT}55 0%, ${ACCENT}22 45%, transparent 72%)`,
            }}
          />

          <div className="relative z-10 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="mt-3 text-2xl italic sm:text-3xl"
              style={{ fontFamily: "var(--font-serif)", color: ACCENT }}
            >
              versatile, relationship-driven marketing leader
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story: fades in and out as it enters/leaves the viewport */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
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
            src="/content/personal/profile-shot.jpg"
            alt="Natalie at a Capsule event"
            width={933}
            height={1400}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.section>
    </>
  );
}
