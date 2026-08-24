"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  programs,
  t3CaseStudyVideos,
  dinnerReels,
  hubspotCaseStudyVideos,
  launchCampaigns,
  aiSystemsItems,
  retreatPhotos,
  type Asset,
  type Side,
  type ReelVideo,
} from "./_data";

const sections = [
  { id: "work", label: "The Work" },
  { id: "ai-systems", label: "AI & Systems" },
  { id: "culture", label: "Culture" },
  { id: "personal", label: "Personal" },
];

function ExternalLinkCard({ href, label, sublabel }: { href: string; label: string; sublabel?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-left transition hover:border-neutral-600 hover:bg-neutral-900"
    >
      <div>
        <span className="block text-xs text-neutral-200">{label}</span>
        {sublabel && <span className="block text-[11px] text-neutral-500">{sublabel}</span>}
      </div>
      <span className="text-neutral-500 transition group-hover:translate-x-0.5 group-hover:text-white">→</span>
    </a>
  );
}

function AssetGrid({ assets }: { assets: Asset[] }) {
  const images = assets.filter((a): a is Extract<Asset, { type: "image" }> => a.type === "image");
  const videos = assets.filter((a): a is Extract<Asset, { type: "video" }> => a.type === "video");
  const links = assets.filter((a): a is Extract<Asset, { type: "link" }> => a.type === "link");

  return (
    <div className="mt-4 space-y-3">
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="overflow-hidden rounded border border-neutral-800">
              <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className="w-full" />
            </div>
          ))}
        </div>
      )}
      {videos.map((v) => (
        <div key={v.src} className="max-w-xs overflow-hidden rounded border border-neutral-800">
          <video src={v.src} poster={v.poster} autoPlay={!v.poster} loop muted playsInline controls={!!v.poster} className="w-full" />
        </div>
      ))}
      {links.map((l) => (
        <ExternalLinkCard key={l.href} href={l.href} label={l.label} sublabel={l.sublabel} />
      ))}
    </div>
  );
}

function CameraColumn({ label, side }: { label: string; side: Side }) {
  return (
    <div>
      <span className="font-mono text-[10px] tracking-widest text-neutral-500">{label}</span>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{side.text}</p>
      {side.stat && (
        <div className="mt-3 inline-flex items-baseline gap-2 rounded bg-neutral-900 px-3 py-1.5">
          <span className="text-lg font-semibold text-white">{side.stat.value}</span>
          <span className="text-[11px] text-neutral-400">{side.stat.label}</span>
        </div>
      )}
      {side.assets && <AssetGrid assets={side.assets} />}
    </div>
  );
}

function ProgramBand({ program }: { program: (typeof programs)[number] }) {
  return (
    <div className="border-t border-neutral-800 py-10">
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{program.title}</h3>
      <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-10">
        <CameraColumn label="OFF CAMERA" side={program.offCamera} />
        <CameraColumn label="ON CAMERA" side={program.onCamera} />
      </div>
    </div>
  );
}

function VideoTile({ v }: { v: ReelVideo }) {
  return (
    <a
      href={v.short ? `https://www.youtube.com/shorts/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden rounded border border-neutral-800 bg-neutral-900">
        <Image
          src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
          alt={v.title}
          fill
          unoptimized
          className="object-cover transition group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
          ▶
        </div>
      </div>
      <span className="mt-1 block text-[11px] text-neutral-400">{v.title}</span>
    </a>
  );
}

function ReelSection() {
  return (
    <div className="border-t border-neutral-800 py-10">
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">The Reel</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
        Produced video work that doesn&apos;t split neatly into off-camera / on-camera — the
        craft of shaping someone else&apos;s story, start to finish.
      </p>

      <span className="mt-6 block text-xs text-neutral-500">
        T3 customer case study videos — pre-production through post-production, including
        interviewing Hemant Taneja, now-CEO of General Catalyst, who said he was genuinely
        surprised at how thoughtful and well-researched my questions were
      </span>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {t3CaseStudyVideos.map((v) => (
          <div key={v.wistiaId} className="text-left">
            <div className="overflow-hidden rounded border border-neutral-800 bg-neutral-950">
              <iframe
                title={v.title}
                allowFullScreen
                frameBorder="0"
                scrolling="no"
                className="wistia_embed aspect-video w-full"
                name="wistia_embed"
                src={`https://fast.wistia.net/embed/iframe/${v.wistiaId}`}
              />
            </div>
            <span className="mt-1 block text-xs text-neutral-400">{v.title}</span>
          </div>
        ))}
        <div className="text-left">
          <div className="overflow-hidden rounded border border-neutral-800 bg-neutral-950">
            <video
              src="/content/producer/why-space-matters.mp4"
              poster="/content/producer/why-space-matters-poster.jpg"
              controls
              className="aspect-video w-full"
            />
          </div>
          <span className="mt-1 block text-xs text-neutral-400">
            &ldquo;Why Space Matters&rdquo; — General Catalyst
          </span>
        </div>
      </div>

      <span className="mt-8 block text-xs text-neutral-500">
        Dinner highlight reels — interviewed guests around relevant topics, edited into reels
      </span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {dinnerReels.map((v) => (
          <VideoTile key={v.id} v={v} />
        ))}
      </div>

      <span className="mt-8 block text-xs text-neutral-500">
        HubSpot × Capsule — 5 stakeholder interviews, 5 edited videos
      </span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {hubspotCaseStudyVideos.map((v) => (
          <VideoTile key={v.id} v={v} />
        ))}
      </div>

      <span className="mt-8 block text-xs text-neutral-500">
        7 major product launch campaigns in 3 years
      </span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {launchCampaigns.map((v) => (
          <VideoTile key={v.id} v={v} />
        ))}
      </div>
    </div>
  );
}

function RetreatCarousel() {
  return (
    <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
      {retreatPhotos.map((src) => (
        <div
          key={src}
          className="relative aspect-[4/3] w-64 flex-none snap-start overflow-hidden rounded border border-neutral-800 bg-neutral-900"
        >
          <Image src={src} alt="Company retreat photo" fill sizes="256px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export default function OffCameraOnCamera() {
  const [active, setActive] = useState("work");
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = refs.current[s.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="relative flex min-h-screen flex-col bg-black text-neutral-100">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px)",
        }}
      />

      <div className="relative z-10 flex items-center justify-between px-6 py-5 font-mono text-xs tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          <span>REC</span>
        </div>
        <span>ON / OFF CAMERA</span>
      </div>

      {/* Hero */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-16 pt-8">
        <p className="font-mono text-xs tracking-[0.3em] text-neutral-500">CHANNEL ONE</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">NATALIE TAYLOR</h1>
        <p className="mt-3 text-sm tracking-wide text-neutral-300">
          Versatile, relationship-driven marketing leader with a high bar for quality,
          connection, and details.
        </p>
        <div className="mt-6 space-y-4 text-left text-sm leading-relaxed text-neutral-400">
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
            I&apos;m looking to throw that same commitment into the next company I join. Scroll
            on to see how I work — equally comfortable behind the camera and in front of it.
          </p>
        </div>
      </div>

      {/* Work section: Off Camera / On Camera */}
      <section
        id="work"
        ref={(el) => {
          refs.current.work = el;
        }}
        className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-4"
      >
        <div className="grid grid-cols-2 border-b border-neutral-800 pb-3">
          <span className="font-mono text-xs tracking-widest text-neutral-400">OFF CAMERA</span>
          <span className="font-mono text-xs tracking-widest text-neutral-400">ON CAMERA</span>
        </div>
        {programs.map((p) => (
          <ProgramBand key={p.id} program={p} />
        ))}
        <ReelSection />
      </section>

      {/* AI & Systems */}
      <section
        id="ai-systems"
        ref={(el) => {
          refs.current["ai-systems"] = el;
        }}
        className="relative z-10 mx-auto w-full max-w-2xl border-t border-neutral-800 px-6 py-16"
      >
        <div className="mb-2 inline-flex items-center gap-2 bg-red-600 px-2 py-1 text-xs font-bold tracking-widest text-white">
          AI & SYSTEMS
        </div>
        <h2 className="text-3xl font-semibold tracking-tight">Building the tools, not just the outputs</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          AI isn&apos;t how the work gets written faster — it&apos;s how the systems get built.
        </p>
        <div className="mt-4 grid gap-2 text-left sm:grid-cols-1">
          {aiSystemsItems.map((item) => (
            <div key={item} className="rounded border border-neutral-800 bg-neutral-950/60 px-3 py-3 text-xs text-neutral-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section
        id="culture"
        ref={(el) => {
          refs.current.culture = el;
        }}
        className="relative z-10 mx-auto w-full max-w-2xl border-t border-neutral-800 px-6 py-16"
      >
        <div className="mb-2 inline-flex items-center gap-2 bg-red-600 px-2 py-1 text-xs font-bold tracking-widest text-white">
          CULTURE
        </div>
        <h2 className="text-3xl font-semibold tracking-tight">Culture</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          I care immensely about people and take on company pride as an unprompted, unofficial
          job duty. I make the culture I want at work: fun, connected, and purposeful.
        </p>
        <span className="mt-8 block text-xs text-neutral-500">Company retreats</span>
        <RetreatCarousel />
        <span className="mt-8 block text-xs text-neutral-500">Awards</span>
        <div className="mt-2 max-w-md">
          <ExternalLinkCard
            href="https://www.linkedin.com/posts/nataliecstaylor_if-youve-spoken-to-me-in-the-past-2-years-activity-7325938479899561988-_HWV"
            label="Winner, Capsule's People's Choice award"
            sublabel="LinkedIn post"
          />
          <p className="mt-2 text-xs text-neutral-500">
            Also winner of Capsule&apos;s &ldquo;shout-out award&rdquo; (most shout-outs in a
            year).
          </p>
        </div>
      </section>

      {/* Personal */}
      <section
        id="personal"
        ref={(el) => {
          refs.current.personal = el;
        }}
        className="relative z-10 mx-auto w-full max-w-2xl border-t border-neutral-800 px-6 py-16"
      >
        <div className="mb-2 inline-flex items-center gap-2 bg-red-600 px-2 py-1 text-xs font-bold tracking-widest text-white">
          PERSONAL
        </div>
        <h2 className="text-3xl font-semibold tracking-tight">Off the clock</h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">Range shows up outside of work too.</p>
        <div className="mt-4 grid gap-2 text-left sm:grid-cols-2">
          {["Dance", "Hosting — Airbnb, au pair, pizza night", "Writing — BYU Magazine, travel blog, Christmas letters", "A couple of pizza businesses"].map(
            (item) => (
              <div key={item} className="rounded border border-neutral-800 bg-neutral-950/60 px-3 py-3 text-xs text-neutral-300">
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <div className="h-24" />

      {/* Anchor nav */}
      <div className="sticky bottom-0 z-30 flex items-stretch border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`flex flex-1 flex-col items-center gap-1 border-r border-neutral-800 py-3 text-xs transition last:border-r-0 hover:bg-neutral-900 sm:py-4 ${
              active === s.id ? "bg-neutral-900 text-white" : "text-neutral-500"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </main>
  );
}
