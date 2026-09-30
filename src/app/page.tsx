"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ACCENT, ACCENT_TEXT } from "./_nav-data";

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
    <section className="relative flex min-h-[calc(100vh-88px)] items-center overflow-x-hidden px-8 sm:px-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 sm:grid-cols-[1.3fr_1fr]">
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
              style={{ fontFamily: "var(--font-serif)", color: ACCENT_TEXT }}
            >
              0→1 brand and product marketing leader
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#1C1B1A]/10"
        >
          <Image
            src="/content/personal/event-smile.jpg"
            alt="Natalie Taylor"
            width={900}
            height={1474}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
