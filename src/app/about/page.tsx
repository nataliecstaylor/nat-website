"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ACCENT_TEXT } from "../_nav-data";

type LightboxImage = { src: string; alt: string; w?: number; h?: number };
type Lightbox = { images: LightboxImage[]; index: number };

const dancePhotos = Array.from({ length: 10 }, (_, i) => ({
  src: `/content/personal/dance/dance-${i + 1}.jpg`,
  alt: "Dancing with SALT Contemporary Dance and BYU Theatre Ballet",
}));

const hostPhotos: LightboxImage[] = [
  { src: "/content/personal/airbnb-room.jpg", alt: "Our Airbnb room", w: 1400, h: 1050 },
  { src: "/content/personal/au-pair-pizza-party.jpg", alt: "Pizza night with our au pairs", w: 1050, h: 1400 },
];

const pizzaPhotos: LightboxImage[] = [
  { src: "/content/personal/grating-parm.jpg", alt: "Grating parmesan onto a fresh pizza" },
  { src: "/content/personal/pizza-polaroid.jpg", alt: "Polaroid of a finished pizza" },
];

const byuPhotos: LightboxImage[] = [
  { src: "/content/personal/byu-1.jpg", alt: "BYU Magazine article, Running to Remember" },
  { src: "/content/personal/byu-2.jpg", alt: "BYU Magazine article" },
];

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

function LightboxArrow({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={direction === "prev" ? "Previous image" : "Next image"}
      className={`fixed top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 ${direction === "prev" ? "left-3 sm:left-6" : "right-3 sm:right-6"}`}
    >
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        {direction === "prev" ? (
          <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
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
  const [lightbox, setLightbox] = useState<Lightbox | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setLightbox(null);
        return;
      }
      setLightbox((prev) => {
        if (!prev || prev.images.length <= 1) return prev;
        if (e.key === "ArrowLeft") return { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length };
        if (e.key === "ArrowRight") return { ...prev, index: (prev.index + 1) % prev.images.length };
        return prev;
      });
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

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
        <SectionLabel>Dancing</SectionLabel>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">
          In my heyday, I danced with my university&apos;s touring ballet company and then
          professionally with SALT Contemporary Dance. Now I just try to get to a ballet class
          whenever I can (never often enough!).
        </p>
        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {dancePhotos.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox({ images: dancePhotos, index: i })}
              className="relative aspect-[4/3] w-80 flex-none cursor-zoom-in snap-start overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5 transition hover:border-[#1C1B1A]/25"
            >
              <Image src={img.src} alt={img.alt} fill sizes="320px" className="object-cover" />
            </button>
          ))}
        </div>

        <SectionLabel>Hosting</SectionLabel>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">
          Whether I&apos;m hosting weekly pizza nights, 5 live-in au pairs, or the nearly 200
          Airbnb guests in our homes, hosting is one of my greatest joys.
        </p>
        <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3">
          {hostPhotos.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox({ images: hostPhotos, index: i })}
              className="block cursor-zoom-in overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
            >
              <Image src={img.src} alt={img.alt} width={img.w!} height={img.h!} className="w-full" />
            </button>
          ))}
        </div>

        <SectionLabel>Making Pizza</SectionLabel>
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
          {pizzaPhotos.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox({ images: pizzaPhotos, index: i })}
              className="block cursor-zoom-in overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
            >
              <Image src={img.src} alt={img.alt} width={1200} height={1600} className="w-full" />
            </button>
          ))}
          <a
            href="https://www.instagram.com/p/Cr-9hQdtJ95/"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
          >
            <Image
              src="/content/personal/wes-anderson-pizza.jpg"
              alt="You better not act like you're in a Wes Anderson film while making pizza"
              width={1200}
              height={1600}
              className="w-full transition group-hover:scale-105"
            />
            <PlayButton />
          </a>
        </div>

        <SectionLabel>Writing</SectionLabel>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">
          I started loving writing in college. I had all sorts of writing-related campus jobs and
          later started a travel blog. Now I mostly write on LinkedIn, and every year I write and
          mail a Christmas letter that I cherish to my friends and family.
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
              {byuPhotos.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setLightbox({ images: byuPhotos, index: i })}
                  className="block cursor-zoom-in overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
                >
                  <Image src={img.src} alt={img.alt} width={1232} height={1600} className="w-full" />
                </button>
              ))}
            </div>
            <span className="mt-1 block text-[11px] text-[#1C1B1A]/50">BYU Magazine, 2013–2014</span>
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1B1A]/95 p-4 sm:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          {lightbox.images.length > 1 && (
            <LightboxArrow
              direction="prev"
              onClick={() =>
                setLightbox((prev) =>
                  prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : prev
                )
              }
            />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.images[lightbox.index].src}
            alt={lightbox.images[lightbox.index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          />
          {lightbox.images.length > 1 && (
            <LightboxArrow
              direction="next"
              onClick={() =>
                setLightbox((prev) => (prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : prev))
              }
            />
          )}
        </div>
      )}
    </div>
  );
}
