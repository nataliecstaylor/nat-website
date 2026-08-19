"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { pillars } from "../_data";

const influencerPosts = [
  {
    name: "Amanda Goetz",
    role: "@AmandaMGoetz",
    quote: "It was so fun and FAST.",
    image: "/content/influencer/post-amanda.png",
    href: "https://x.com/AmandaMGoetz/status/1704198677953237443",
  },
  {
    name: "Dave Gerhardt",
    role: "Founder, Exit Five",
    quote: "Gonna change the video game for enterprise teams.",
    image: "/content/influencer/post-dg.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7115319375976361984/",
  },
  {
    name: "Rayna van Beuzekom",
    role: "Founder, Crux Content",
    quote: "Goodbye keyframes fr.",
    image: "/content/influencer/post-rayna.png",
    href: "https://www.linkedin.com/posts/raynavb_sponsored-activity-7165721762016534528-BFSD",
  },
  {
    name: "Christina Le",
    role: "Head of Marketing, Slate",
    quote: "Every creator needs this.",
    image: "/content/influencer/post-christina.png",
    href: "https://www.linkedin.com/posts/thesechapters_im-the-type-who-looks-for-shortcuts-to-cut-activity-7206307805337690115-7fbD",
  },
];

function InfluencerCaseStudy() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        CASE STUDY — INFLUENCER MARKETING
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        Built a B2B influencer marketing program from end to end (in Fall 2023, before it was
        cool). Managed list building, outreach and relationships, creative briefs, and launch
        timelines and deliverables to generate{" "}
        <span className="text-white">~800k impressions</span> on a very scrappy budget over 6
        months. This program was critical to building Capsule&apos;s initial brand awareness.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded border border-neutral-800">
            <Image
              src="/content/influencer/outreach-redacted.png"
              alt="First outreach message to an influencer, November 2023"
              width={916}
              height={512}
              className="w-full"
            />
          </div>
          <span className="mt-1 block text-xs text-neutral-500">
            First outreach message — Nov 2023
          </span>
        </div>
        <div>
          <div className="overflow-hidden rounded border border-neutral-800">
            <Image
              src="/content/influencer/spreadsheet-redacted.png"
              alt="Influencer tracking spreadsheet"
              width={2770}
              height={558}
              className="w-full"
            />
          </div>
          <span className="mt-1 block text-xs text-neutral-500">
            The full tracking system — outreach through payment
          </span>
        </div>
      </div>

      <span className="mt-8 block text-xs text-neutral-500">The posts it produced</span>
      <div className="mt-3 grid gap-3 grid-cols-2 sm:grid-cols-4">
        {influencerPosts.map((post) => (
          <a
            key={post.name}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded border border-neutral-800 bg-neutral-900">
              <Image
                src={post.image}
                alt={`${post.name} post`}
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2 pt-6">
                <p className="text-[11px] leading-snug text-white">&ldquo;{post.quote}&rdquo;</p>
              </div>
            </div>
            <span className="mt-1 block text-[11px] text-neutral-300">{post.name}</span>
            <span className="block text-[10px] text-neutral-500">{post.role}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function ExternalLinkCard({
  href,
  label,
  sublabel,
}: {
  href: string;
  label: string;
  sublabel?: string;
}) {
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
      <span className="text-neutral-500 transition group-hover:translate-x-0.5 group-hover:text-white">
        →
      </span>
    </a>
  );
}

function VipDinnerCaseStudy() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        CASE STUDY — VIP DINNER SERIES
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        Capsule&apos;s most effective GTM channel. I chose key cities, built invite lists,
        managed outreach campaigns and venues, maintained{" "}
        <span className="text-white">98% attendance</span>, scaled from{" "}
        <span className="text-white">0.5 events/month to 2/month</span>, built key relationships
        and <span className="text-white">millions in pipeline</span>, and hired a{" "}
        <a
          href="https://www.linkedin.com/posts/nataliecstaylor_earlier-this-year-i-posted-a-jd-for-the-activity-7354141810954309633-3eIv"
          target="_blank"
          rel="noreferrer"
          className="text-white underline decoration-neutral-600 underline-offset-2 hover:decoration-white"
        >
          Head of Events
        </a>{" "}
        who continues to scale and improve this program.
      </p>
      <div className="mt-4">
        <ExternalLinkCard
          href="https://capsule.video/learn#in-person-events"
          label="Photos, highlight reels & attendee quotes"
          sublabel="capsule.video/learn"
        />
      </div>
    </div>
  );
}

function VirtualSummitCaseStudy() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        CASE STUDY — VIRTUAL SUMMIT
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        Launched Capsule&apos;s first-ever virtual summit, securing{" "}
        <span className="text-white">9 top-tier speakers</span>, leading editorial direction and
        messaging for all sessions, and a 4-week promo campaign across email and organic and
        paid social, resulting in a <span className="text-white">5x increase</span> in our
        virtual event registration and attendance.
      </p>
      <a
        href="https://capsule.video/video-first-summit-2026"
        target="_blank"
        rel="noreferrer"
        className="mt-4 block max-w-md overflow-hidden rounded border border-neutral-800"
      >
        <video
          src="/content/summit/virtual-summit-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full"
        />
      </a>
      <span className="mt-1 block max-w-md text-xs text-neutral-500">
        Capsule Video First Summit 2026 — click to view the recap page
      </span>
    </div>
  );
}

const talentLinkedInPosts = [
  {
    title: "Video Wins",
    quote:
      "I'm bullying everyone in the company (including myself) into posting their Video Wins to LinkedIn.",
    image: "/content/talent/li-video-wins.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7450558856486834176",
  },
  {
    title: "Why I sound like an audio pro",
    quote:
      "If a video has crappy audio, viewers are scientifically less likely to trust the speaker.",
    image: "/content/talent/li-audio.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7165741119090216962",
  },
];

function LinkedInPostsCaseStudy() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        LINKEDIN PRESENCE — PRODUCT VIDEOS
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:max-w-md">
        {talentLinkedInPosts.map((post) => (
          <a key={post.title} href={post.href} target="_blank" rel="noreferrer" className="group block">
            <div className="relative aspect-square overflow-hidden rounded border border-neutral-800 bg-neutral-900">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2 pt-8">
                <p className="text-[11px] leading-snug text-white">&ldquo;{post.quote}&rdquo;</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <span className="mt-8 block text-xs text-neutral-500">Podcast appearances</span>
      <div className="mt-2 max-w-md overflow-hidden rounded border border-neutral-800">
        <iframe
          title="Podcast appearances playlist"
          src="https://open.spotify.com/embed/playlist/0RwqJjqM3kVB4ZyO6cNGjX?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ProspectRelationshipsCaseStudy() {
  const dms = [
    { src: "/content/talent/pat-dm-redacted.png", w: 1000, h: 446 },
    { src: "/content/talent/phillip-dm-redacted.png", w: 998, h: 256 },
    { src: "/content/talent/ann-dm-redacted.png", w: 1002, h: 562 },
  ];
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        CASE STUDY — PERSONAL RELATIONSHIPS WITH KEY PROSPECTS
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        Community relationships and brand familiarity led to several new deals.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {dms.map((dm) => (
          <div key={dm.src} className="overflow-hidden rounded border border-neutral-800">
            <Image src={dm.src} alt="Prospect outreach message" width={dm.w} height={dm.h} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

function YouTubeVideoGrid({ videos }: { videos: { title: string; id: string; short?: boolean }[] }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {videos.map((v) => (
        <a
          key={v.id}
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
          <span className="mt-1 block text-[11px] text-neutral-300">{v.title}</span>
        </a>
      ))}
    </div>
  );
}

const launchCampaigns = [
  { title: "Video Skills", id: "fGLgSXL1B8M" },
  { title: "Variants", id: "k4PeSXyD0PA" },
  { title: "AI Productions", id: "UnodbgTbX4g" },
  { title: "Capsule 1.0", id: "o5zCtmwTS1M" },
  { title: "Audio features", id: "LifBjrJHnq0" },
  { title: "Auto Frame", id: "CcegwpLqVGY" },
  { title: "Design Systems Lite", id: "ui8D76C0MGg" },
];

function LaunchCampaignsCaseStudy() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        CASE STUDY — PRODUCT LAUNCH CAMPAIGNS
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        Managed <span className="text-white">7 major product launch campaigns</span> in 3 years,
        driving millions of impressions, and large increases in brand awareness, inbound demo
        requests, and pipeline.
      </p>
      <YouTubeVideoGrid videos={launchCampaigns} />
    </div>
  );
}

const dinnerReels = [
  { title: "Dinner highlight", id: "Xn6jv7nPS9s", short: true },
  { title: "Dinner highlight", id: "Fhc9cEa0szw", short: true },
  { title: "Dinner highlight", id: "23NQUbzF5Mc", short: true },
  { title: "Dinner highlight", id: "K34v01iCmkY", short: true },
];

function DinnerReelsCaseStudy() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        CASE STUDY — DINNER HIGHLIGHT REELS
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        Interviewed key event guests around relevant topics and edited into highlight reels.
      </p>
      <YouTubeVideoGrid videos={dinnerReels} />
    </div>
  );
}

const hubspotCaseStudyVideos = [
  { title: "HubSpot × Capsule", id: "8xXyFzqLibg" },
  { title: "HubSpot stakeholder", id: "q8IMJseXO7E", short: true },
  { title: "HubSpot stakeholder", id: "C4vSFFU8_0M", short: true },
  { title: "HubSpot stakeholder", id: "TZZ77llGQ1Y", short: true },
  { title: "HubSpot stakeholder", id: "Ni5bEbfPXYI", short: true },
];

function HubSpotCaseStudy() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        CASE STUDY — HUBSPOT × CAPSULE
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        Conducted interviews with 5 key stakeholders of one of Capsule&apos;s key accounts and
        edited 5 different videos.
      </p>
      <YouTubeVideoGrid videos={hubspotCaseStudyVideos} />
    </div>
  );
}

function T3CaseStudyVideos() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        T3 CUSTOMER CASE STUDY VIDEOS
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
        Ran customer case study videos end to end: pre-production, interview, and
        post-production. One of my interview subjects was Hemant Taneja, now-CEO of General
        Catalyst, who said he was genuinely surprised at how thoughtful and well-researched my
        questions were.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          { title: "T3 × HubSpot", wistiaId: "y1q3sb5y9j" },
          { title: "T3 × TripActions (Navan)", wistiaId: "d7ila4v7za" },
          { title: "T3 × ASICS", wistiaId: "dhi585068o" },
        ].map((v) => (
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
    </div>
  );
}

function HostingCaseStudy() {
  const replays = [
    { title: "Virtual event replay", id: "WTtcCe_Dix0" },
    { title: "Virtual event replay", id: "bqaFlc-aHIs" },
  ];
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        HOSTING VIRTUAL + IRL EVENTS
      </div>
      <div className="mt-3 grid gap-4 sm:grid-cols-[auto_1fr]">
        <a
          href="https://www.linkedin.com/posts/nataliecstaylor_weve-been-quietly-hosting-private-dinners-ugcPost-7252684536986099713-bDUa/"
          target="_blank"
          rel="noreferrer"
          className="group block w-40"
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded border border-neutral-800 bg-neutral-900">
            <Image
              src="/content/talent/grwm.png"
              alt="Get ready with me for a Capsule VIP dinner"
              fill
              className="object-cover transition group-hover:scale-105"
            />
          </div>
          <span className="mt-1 block text-[11px] text-neutral-400">
            &ldquo;We&apos;ve been quietly hosting private dinners in major cities&hellip;&rdquo;
          </span>
        </a>
        <div className="flex flex-col gap-2 self-start">
          <span className="text-xs text-neutral-500">Virtual event replays</span>
          {replays.map((r) => (
            <ExternalLinkCard
              key={r.id}
              href={`https://youtu.be/${r.id}`}
              label={r.title}
              sublabel="YouTube"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AIBuiltBanner() {
  return (
    <div className="mt-6 max-w-2xl border-l-2 border-red-600 bg-neutral-900/60 py-2 pl-4 text-left">
      <p className="text-sm text-neutral-200">
        Built this entire portfolio site in Claude Code in a few days.
      </p>
    </div>
  );
}

const retreatPhotos = Array.from({ length: 8 }, (_, i) => `/content/culture/retreat/retreat-${i + 1}.jpg`);

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

function CultureCaseStudy() {
  return (
    <div className="mt-8 border-t border-neutral-800 pt-8 text-left">
      <div className="mb-2 inline-flex items-center gap-2 bg-neutral-900 px-2 py-1 text-[10px] font-bold tracking-widest text-neutral-400">
        LINKEDIN WORKSHOP & COMPETITION
      </div>
      <div className="mt-3 max-w-xs">
        <div className="overflow-hidden rounded border border-neutral-800">
          <Image
            src="/content/culture/t3-linkedin-preso.jpg"
            alt="Leading a LinkedIn training at T3"
            width={1400}
            height={1867}
            className="w-full"
          />
        </div>
        <span className="mt-1 block text-xs text-neutral-500">
          Leading the LinkedIn workshop at T3
        </span>
      </div>

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
    </div>
  );
}

function useTimecode() {
  const [time, setTime] = useState("00:00:00");
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(elapsed / 3600)).padStart(2, "0");
      const m = String(Math.floor((elapsed % 3600) / 60)).padStart(2, "0");
      const s = String(elapsed % 60).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function OnAir() {
  const [active, setActive] = useState<string | null>(null);
  const timecode = useTimecode();
  const activePillar = pillars.find((p) => p.id === active);

  function tuneTo(id: string) {
    if (id === active) return;
    setActive(id);
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-black text-neutral-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10 flex items-center justify-between px-6 py-5 font-mono text-xs tracking-widest text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          <span>REC</span>
        </div>
        <span>{timecode}</span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <motion.div
          key={active ?? "idle-flash"}
          className="pointer-events-none fixed inset-0 z-20 bg-white"
          initial={{ opacity: 0.35 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
        <AnimatePresence mode="wait">
          {activePillar ? (
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-3xl"
            >
              <div className="mb-3 inline-flex items-center gap-2 bg-red-600 px-2 py-1 text-xs font-bold tracking-widest text-white">
                CH. {activePillar.number} — {activePillar.kicker.toUpperCase()}
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">{activePillar.label}</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
                {activePillar.summary}
              </p>
              <div className="mt-4 grid gap-2 text-left sm:grid-cols-2">
                {activePillar.items.map((item) => (
                  <div
                    key={item}
                    className="rounded border border-neutral-800 bg-neutral-950/60 px-3 py-3 text-xs text-neutral-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
              {activePillar.id === "programs" && (
                <>
                  <InfluencerCaseStudy />
                  <VipDinnerCaseStudy />
                  <VirtualSummitCaseStudy />
                </>
              )}
              {activePillar.id === "producer" && (
                <>
                  <T3CaseStudyVideos />
                  <DinnerReelsCaseStudy />
                  <HubSpotCaseStudy />
                  <LaunchCampaignsCaseStudy />
                </>
              )}
              {activePillar.id === "talent" && (
                <>
                  <HostingCaseStudy />
                  <LinkedInPostsCaseStudy />
                  <ProspectRelationshipsCaseStudy />
                </>
              )}
              {activePillar.id === "ai-systems" && <AIBuiltBanner />}
              {activePillar.id === "culture" && <CultureCaseStudy />}
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-2xl"
            >
              <p className="font-mono text-xs tracking-[0.3em] text-neutral-500">
                CHANNEL ONE
              </p>
              <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
                NATALIE TAYLOR
              </h1>
              <p className="mt-3 text-sm tracking-wide text-neutral-300">
                Versatile, relationship-driven marketing leader with a high bar for quality,
                connection, and details.
              </p>
              <div className="mt-6 space-y-4 text-left text-sm leading-relaxed text-neutral-400">
                <p>
                  I take a lot of pride in my work and the brands I come to represent—it&apos;s
                  actually how I got into marketing. After college, I danced professionally with
                  a brand-new company. The work we were doing was the highest caliber in the
                  entire state. But we were brand-new and no one knew about it. So for the next 3
                  years, I did everything I could to fix that and fell in love with marketing
                  along the way, eventually retiring from dance and going all in on this
                  profession. I&apos;ve done the same at other brands I was drawn to: T3
                  Advisors, a boutique real-estate firm that was eventually acquired, and most
                  recently Capsule, a Series-A video software company.
                </p>
                <p>
                  I&apos;m looking to throw that same commitment into the next company I join.
                  Take a look at my work at the channels below and let me know if you think we
                  might be a fit.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="sticky bottom-0 z-30 flex flex-wrap items-stretch border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
        {pillars.map((p) => (
          <button
            key={p.id}
            onClick={() => tuneTo(p.id)}
            className={`flex basis-1/4 flex-col items-center gap-1 border-r border-b border-neutral-800 py-3 text-[11px] transition hover:bg-neutral-900 sm:basis-0 sm:flex-1 sm:border-b-0 sm:py-4 sm:text-xs ${
              active === p.id ? "bg-neutral-900 text-white" : "text-neutral-500"
            }`}
          >
            <span className="font-mono tracking-widest">{p.number}</span>
            <span className="tracking-wide">{p.label}</span>
          </button>
        ))}
      </div>
    </main>
  );
}
