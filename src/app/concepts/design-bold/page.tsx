"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Hanken_Grotesk, Newsreader } from "next/font/google";

const display = Hanken_Grotesk({ subsets: ["latin"], weight: ["800"], variable: "--font-display" });
const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif" });

const ACCENT = "#6E62FF";

const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const workSubmenu = [
  "0-1 Programs",
  "Campaigns and Case Studies",
  "AI & Systems",
  "Culture",
];

function Rings() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      width="1000"
      height="560"
      viewBox="0 0 1000 560"
      fill="none"
    >
      {[0, 1, 2, 3].map((i) => (
        <ellipse
          key={i}
          cx="500"
          cy="280"
          rx={190 + i * 110}
          ry={75 + i * 42}
          stroke="#1C1B1A"
          strokeOpacity="0.18"
          strokeWidth="1.25"
        />
      ))}
    </svg>
  );
}

function PillNav({ active, onNavigate }: { active: string; onNavigate: (id: string) => void }) {
  const [workOpen, setWorkOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openWork() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setWorkOpen(true);
  }
  function scheduleCloseWork() {
    closeTimer.current = setTimeout(() => setWorkOpen(false), 200);
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2">
      <div
        className="relative"
        onMouseEnter={openWork}
        onMouseLeave={scheduleCloseWork}
      >
        {workOpen && (
          <div className="absolute bottom-full left-1/2 mb-2 w-64 -translate-x-1/2 rounded-2xl border border-[#1C1B1A]/10 bg-white/95 p-2 shadow-lg backdrop-blur">
            {workSubmenu.map((label) => (
              <button
                key={label}
                disabled
                className="block w-full cursor-not-allowed rounded-xl px-4 py-2.5 text-left text-sm uppercase text-[#1C1B1A]/55"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1 rounded-full border border-[#1C1B1A]/10 bg-white/90 p-2 shadow-lg backdrop-blur">
          {navItems.map((item) => {
            const isActive = item.id === active;
            const isReady = item.id === "home";
            const isWork = item.id === "work";
            return (
              <button
                key={item.id}
                onClick={() => (isWork ? openWork() : isReady && onNavigate(item.id))}
                disabled={!isReady && !isWork}
                className="rounded-full px-6 py-3 text-sm uppercase tracking-wide transition disabled:cursor-not-allowed"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  backgroundColor: isActive ? ACCENT : "transparent",
                  color: isActive ? "#F2F0EA" : isReady || isWork ? "#1C1B1A" : "#1C1B1A55",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function DesignBold() {
  const [active, setActive] = useState("home");
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive("home");
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function navigate(id: string) {
    if (id === "home") heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main
      className={`${display.variable} ${serif.variable} relative min-h-screen overflow-hidden bg-[#F2F0EA]`}
      style={{ fontFamily: "var(--font-serif)" }}
    >
      {/* Hero: type-only moment */}
      <section
        ref={heroRef}
        className="relative flex min-h-[calc(100vh-88px)] flex-col justify-center px-8 sm:px-16"
      >
        <div className="relative w-fit">
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
              versatile, relationship-driven marketing leader
            </p>
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

      <div className="h-24" />
      <PillNav active={active} onNavigate={navigate} />
    </main>
  );
}
