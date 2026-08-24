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
  dancePhotos,
  type Asset,
  type Side,
  type ReelVideo,
} from "./_data";

const sections = [
  { id: "work", label: "Work" },
  { id: "ai-systems", label: "AI & Systems" },
  { id: "culture", label: "Culture" },
  { id: "personal", label: "Personal" },
];

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">{description}</p>
    </div>
  );
}

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
  const embeds = assets.filter((a): a is Extract<Asset, { type: "embed" }> => a.type === "embed");

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
      {embeds.map((e) => (
        <div key={e.src} className="max-w-xs overflow-hidden rounded border border-neutral-800">
          <iframe
            title={e.title}
            src={e.src}
            width="100%"
            height={e.height}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      ))}
      {links.map((l) => (
        <ExternalLinkCard key={l.href} href={l.href} label={l.label} sublabel={l.sublabel} />
      ))}
    </div>
  );
}

function CameraColumn({ side }: { side: Side }) {
  return (
    <div>
      <p className="text-sm leading-relaxed text-neutral-300">{side.text}</p>
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
      <h3 className="text-center text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {program.title}
      </h3>
      <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-10">
        <CameraColumn side={program.offCamera} />
        <CameraColumn side={program.onCamera} />
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
    <div className="-mx-6 mt-4 bg-neutral-950 px-6 py-12">
      <h3 className="text-lg font-semibold tracking-tight text-white">
        Case Studies &amp; Campaigns
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
        I use market insights to shape the narrative for high-value marketing content—customer
        case studies and product launches—creative direct the assets, and distribute them via
        campaigns.
      </p>

      <span className="mt-8 block text-xs text-neutral-500">
        7 major product launch campaigns in 3 years
      </span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {launchCampaigns.map((v) => (
          <VideoTile key={v.id} v={v} />
        ))}
      </div>

      <span className="mt-8 block text-xs text-neutral-500">
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
          <span className="mt-1 block text-xs text-neutral-400">T3 x General Catalyst</span>
        </div>
      </div>

      <span className="mt-8 block text-xs text-neutral-500">
        Capsule x HubSpot — 5 stakeholder interviews, 5 edited videos
      </span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {hubspotCaseStudyVideos.map((v) => (
          <VideoTile key={v.id} v={v} />
        ))}
      </div>

      <span className="mt-8 block text-xs text-neutral-500">
        Dinner highlight reels — interviewed guests around relevant topics, edited into reels
      </span>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {dinnerReels.map((v) => (
          <VideoTile key={v.id} v={v} />
        ))}
      </div>
    </div>
  );
}

function PhotoCarousel({ photos, alt }: { photos: string[]; alt: string }) {
  return (
    <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
      {photos.map((src) => (
        <div
          key={src}
          className="relative aspect-[4/3] w-64 flex-none snap-start overflow-hidden rounded border border-neutral-800 bg-neutral-900"
        >
          <Image src={src} alt={alt} fill sizes="256px" className="object-cover" />
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
      <div className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-neutral-900 bg-black/95 px-6 backdrop-blur">
        <button
          onClick={() => scrollTo("top")}
          className="text-sm font-medium tracking-tight text-white transition hover:text-neutral-300"
        >
          Natalie Taylor
        </button>
      </div>

      {/* Hero */}
      <div
        id="top"
        ref={(el) => {
          refs.current.top = el;
        }}
        className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-16 pt-12"
      >
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">NATALIE TAYLOR</h1>
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
            I&apos;m looking to throw that same commitment into the next company I join.
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
        <SectionHeader
          title="Work"
          description={
            "I both build the strategy and execute it, taking countless programs and campaigns from 0-1. In many cases, I'm moving between behind-the-scenes work and visible or even on-camera work."
          }
        />
        <div className="sticky top-14 z-20 mt-8 grid grid-cols-2 border-b border-neutral-800 bg-black/95 py-3 backdrop-blur">
          <span className="text-center font-mono text-xs tracking-widest text-neutral-400">
            OFF CAMERA
          </span>
          <span className="text-center font-mono text-xs tracking-widest text-neutral-400">
            ON CAMERA
          </span>
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
        <SectionHeader
          title="AI & Systems"
          description="I use Claude Cowork and Code daily to clarify my thinking, run analyses, and build apps that make my work faster and more fun."
        />
        <div className="mt-6 grid gap-2 text-left sm:grid-cols-1">
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
        <SectionHeader
          title="Culture"
          description="I care immensely about people and take on company pride as an unprompted, unofficial job duty. I make the culture I want at work: fun, connected, and purposeful."
        />
        <span className="mt-8 block text-xs text-neutral-500">Company retreats</span>
        <PhotoCarousel photos={retreatPhotos} alt="Company retreat photo" />
        <span className="mt-8 block text-xs text-neutral-500">Awards</span>
        <div className="mt-2 max-w-[220px]">
          <a
            href="https://www.linkedin.com/posts/nataliecstaylor_if-youve-spoken-to-me-in-the-past-2-years-activity-7325938479899561988-_HWV"
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="overflow-hidden rounded border border-neutral-800 transition group-hover:border-neutral-600">
              <Image
                src="/content/culture/peoples-choice.jpg"
                alt="Winner, Capsule's People's Choice award"
                width={1050}
                height={1400}
                className="w-full"
              />
            </div>
            <span className="mt-1 block text-[11px] text-neutral-400">
              Winner, Capsule&apos;s People&apos;s Choice award
            </span>
          </a>
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
        <SectionHeader
          title="Personal"
          description="I'm curious about most things and decently good at a few things."
        />

        <span className="mt-8 block text-xs text-neutral-500">Dance</span>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300">
          In my heyday, I danced in college and with SALT Contemporary Dance. Now I try (and
          usually fail) to get to a ballet class once every few months.
        </p>
        <PhotoCarousel photos={dancePhotos} alt="Dancing with SALT Contemporary Dance and BYU Theatre Ballet" />

        <span className="mt-8 block text-xs text-neutral-500">Host</span>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300">
          From weekly pizza nights to 5 au pairs and nearly 200 Airbnb guests in our homes,
          hosting is one of my greatest joys.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:max-w-md">
          <div className="overflow-hidden rounded border border-neutral-800">
            <Image
              src="/content/personal/airbnb-room.jpg"
              alt="Our Airbnb room"
              width={1400}
              height={1050}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded border border-neutral-800">
            <Image
              src="/content/personal/au-pair-pizza-party.jpg"
              alt="Pizza night with our au pairs"
              width={1050}
              height={1400}
              className="w-full"
            />
          </div>
        </div>

        <span className="mt-8 block text-xs text-neutral-500">Pizza</span>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300">
          I&apos;ve been making pizza with my husband for nearly a decade and love the constant
          pursuit of improvement.
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2 sm:max-w-lg">
          {[
            { src: "/content/personal/grating-parm.jpg", alt: "Grating parmesan onto a fresh pizza" },
            { src: "/content/personal/pizza-polaroid.jpg", alt: "Polaroid of a finished pizza" },
            { src: "/content/personal/wes-anderson-pizza.jpg", alt: "You better not act like you're in a Wes Anderson film while making pizza" },
          ].map((img) => (
            <a
              key={img.src}
              href="https://www.instagram.com/p/Cr-9hQdtJ95/"
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded border border-neutral-800 transition hover:border-neutral-600"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={1600}
                className="w-full transition group-hover:scale-105"
              />
            </a>
          ))}
        </div>

        <span className="mt-8 block text-xs text-neutral-500">Writing</span>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <a
            href="https://teamtaylortravels.com/"
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded border border-neutral-800 transition hover:border-neutral-600"
          >
            <Image
              src="/content/personal/team-taylor-travels.jpg"
              alt="Taylor Travels blog"
              width={1600}
              height={1205}
              className="w-full transition group-hover:scale-105"
            />
          </a>
          <div>
            <div className="grid grid-cols-2 gap-2">
              <div className="overflow-hidden rounded border border-neutral-800">
                <Image
                  src="/content/personal/byu-1.jpg"
                  alt="BYU Magazine article, Running to Remember"
                  width={1232}
                  height={1600}
                  className="w-full"
                />
              </div>
              <div className="overflow-hidden rounded border border-neutral-800">
                <Image
                  src="/content/personal/byu-2.jpg"
                  alt="BYU Magazine article"
                  width={1232}
                  height={1600}
                  className="w-full"
                />
              </div>
            </div>
            <span className="mt-1 block text-[11px] text-neutral-400">BYU Magazine, 2013–2014</span>
          </div>
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
