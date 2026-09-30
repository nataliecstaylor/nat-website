"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ACCENT_TEXT } from "../_nav-data";

const dancePhotos = Array.from({ length: 10 }, (_, i) => `/content/personal/dance/dance-${i + 1}.jpg`);

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition group-hover:scale-110">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="#1C1B1A">
          <path d="M2 0.5l11 6.5-11 6.5V0.5z" />
        </svg>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-16 text-2xl text-[#1C1B1A] first:mt-0"
      style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.01em" }}
    >
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[88rem] px-8 pb-32 pt-16 sm:px-12">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[#1C1B1A]"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(3rem, 9vw, 6.5rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
        }}
      >
        About
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-6 max-w-2xl text-lg italic leading-relaxed"
        style={{ fontFamily: "var(--font-serif)", color: ACCENT_TEXT }}
      >
        I&apos;m based in Minneapolis, with small parts of my heart also living in Utah and
        Boston. I&apos;m curious about most things and decently good at a few things. Here are
        those few things.
      </motion.p>

      <div className="mt-16">
        <SectionLabel>Dance</SectionLabel>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">
          In my heyday, I danced with my university&apos;s touring ballet company and then
          professionally with SALT Contemporary Dance. Now I just try to get to a ballet class
          whenever I can (never often enough!).
        </p>
        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {dancePhotos.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] w-80 flex-none snap-start overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5"
            >
              <Image src={src} alt="Dancing with SALT Contemporary Dance and BYU Theatre Ballet" fill sizes="320px" className="object-cover" />
            </div>
          ))}
        </div>

        <SectionLabel>Host</SectionLabel>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">
          From weekly pizza nights to 5 au pairs and nearly 200 Airbnb guests in our homes,
          hosting is one of my greatest joys.
        </p>
        <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
            <Image src="/content/personal/airbnb-room.jpg" alt="Our Airbnb room" width={1400} height={1050} className="w-full" />
          </div>
          <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
            <Image src="/content/personal/au-pair-pizza-party.jpg" alt="Pizza night with our au pairs" width={1050} height={1400} className="w-full" />
          </div>
        </div>

        <SectionLabel>Pizza Night</SectionLabel>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">
          I&apos;ve been making pizza with my husband for nearly a decade and love the constant
          pursuit of improvement. We&apos;re currently growing our pizza popup business, called{" "}
          <a
            href="https://www.instagram.com/pizzanight.mpls/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-1 underline-offset-2 hover:opacity-70"
          >
            Pizza Night
          </a>
          .
        </p>
        <div className="mt-6 grid max-w-3xl grid-cols-3 gap-3">
          {[
            { src: "/content/personal/grating-parm.jpg", alt: "Grating parmesan onto a fresh pizza", video: false },
            { src: "/content/personal/pizza-polaroid.jpg", alt: "Polaroid of a finished pizza", video: false },
            {
              src: "/content/personal/wes-anderson-pizza.jpg",
              alt: "You better not act like you're in a Wes Anderson film while making pizza",
              video: true,
            },
          ].map((img) => (
            <a
              key={img.src}
              href="https://www.instagram.com/p/Cr-9hQdtJ95/"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
            >
              <Image src={img.src} alt={img.alt} width={1200} height={1600} className="w-full transition group-hover:scale-105" />
              {img.video && <PlayButton />}
            </a>
          ))}
        </div>

        <SectionLabel>Writing</SectionLabel>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">
          I started loving writing in college. I had all sorts of writing-related campus jobs and
          later started a travel blog. Now I mostly write on LinkedIn, and every year I write and
          mail a Christmas letter to my friends and family.
        </p>
        <div className="mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href="https://teamtaylortravels.com/"
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
          >
            <Image src="/content/personal/team-taylor-travels.jpg" alt="Taylor Travels blog" width={1600} height={1205} className="w-full transition group-hover:scale-105" />
          </a>
          <div>
            <div className="grid grid-cols-2 gap-2">
              <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
                <Image src="/content/personal/byu-1.jpg" alt="BYU Magazine article, Running to Remember" width={1232} height={1600} className="w-full" />
              </div>
              <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
                <Image src="/content/personal/byu-2.jpg" alt="BYU Magazine article" width={1232} height={1600} className="w-full" />
              </div>
            </div>
            <span className="mt-1 block text-[11px] text-[#1C1B1A]/50">BYU Magazine, 2013–2014</span>
          </div>
        </div>
      </div>
    </div>
  );
}
