"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { ACCENT, ACCENT_TEXT } from "../_nav-data";
import { companies, type Company, type WorkItem } from "./_data";

type LightboxImage = { src: string; alt: string };
type LightboxContent =
  | { type: "image"; images: LightboxImage[]; index: number }
  | { type: "video"; embedSrc: string; title: string };

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

function ExternalLinkCard({ href, label, sublabel }: { href: string; label: string; sublabel?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-xl border border-[#1C1B1A]/10 bg-white px-4 py-3 text-left transition hover:border-[#1C1B1A]/25"
    >
      <div>
        <span className="block text-xs text-[#1C1B1A]">{label}</span>
        {sublabel && <span className="block text-[11px] text-[#1C1B1A]/50">{sublabel}</span>}
      </div>
      <span className="text-[#1C1B1A]/40 transition group-hover:translate-x-0.5" style={{ color: ACCENT_TEXT }}>
        →
      </span>
    </a>
  );
}

function VideoTile({
  title,
  id,
  short,
  vertical,
  openLightbox,
}: {
  title: string;
  id: string;
  short?: boolean;
  vertical?: boolean;
  openLightbox: (c: LightboxContent) => void;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        openLightbox({ type: "video", embedSrc: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`, title })
      }
      className="group block text-left"
    >
      <div
        className={`relative overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5 shadow-sm transition group-hover:shadow-md group-hover:border-[#1C1B1A]/25 ${vertical ? "aspect-[9/16]" : "aspect-video"}`}
      >
        <Image
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          fill
          unoptimized
          className="object-cover transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <PlayButton />
      </div>
      <span className="mt-2 block text-sm font-medium text-[#1C1B1A]/80">{title}</span>
    </button>
  );
}

function PostCard({ name, quote, image, href }: { name: string; quote: string; image: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5 shadow-sm transition group-hover:shadow-md group-hover:border-[#1C1B1A]/25">
        <Image src={image} alt={`${name} post`} fill className="object-cover transition group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-8">
          <p className="text-xs leading-snug text-white">&ldquo;{quote}&rdquo;</p>
        </div>
        <PlayButton />
      </div>
      <span className="mt-2 block text-sm font-medium text-[#1C1B1A]/80">{name}</span>
    </a>
  );
}

function EmbedMedia({ embed }: { embed: NonNullable<WorkItem["embed"]> }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
      <iframe
        title={embed.title}
        src={embed.src}
        width="100%"
        height={embed.height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

function VideoMedia({ video }: { video: NonNullable<WorkItem["video"]> }) {
  return video.href ? (
    <a
      href={video.href}
      target="_blank"
      rel="noreferrer"
      aria-label={video.alt}
      className="group block overflow-hidden rounded-xl border border-[#1C1B1A]/10 shadow-sm transition hover:shadow-md hover:border-[#1C1B1A]/25"
    >
      <video
        src={video.src}
        poster={video.poster}
        autoPlay={!video.poster}
        loop={!video.poster}
        muted={!video.poster}
        playsInline
        controls={!!video.poster}
        className="w-full transition group-hover:scale-105"
      />
    </a>
  ) : (
    <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10 shadow-sm">
      <video
        src={video.src}
        poster={video.poster}
        autoPlay={!video.poster}
        loop={!video.poster}
        muted={!video.poster}
        playsInline
        controls={!!video.poster}
        className="w-full"
      />
    </div>
  );
}

function SingleImageMedia({
  img,
  caption,
  side,
  onOpen,
}: {
  img: { src: string; alt: string; w: number; h: number };
  caption?: string;
  side?: boolean;
  onOpen: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onOpen}
        className={
          side
            ? "block w-full cursor-zoom-in overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
            : "block h-80 w-fit cursor-zoom-in overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
        }
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={img.w}
          height={img.h}
          className={side ? "h-auto w-full" : "h-full w-auto object-contain"}
        />
      </button>
      {caption && <span className="mt-2 block text-sm text-[#1C1B1A]/60">{caption}</span>}
    </div>
  );
}

function ResultText({ item }: { item: WorkItem }) {
  if (!item.result) return null;
  const result = item.result;
  const links = item.resultLinks;
  if (!links || links.length === 0) return <>{result}</>;

  const matches = links
    .map((link) => ({ link, idx: result.indexOf(link.text) }))
    .filter((m) => m.idx !== -1)
    .sort((a, b) => a.idx - b.idx);

  if (matches.length === 0) return <>{result}</>;

  const nodes: ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    nodes.push(result.slice(cursor, m.idx));
    nodes.push(
      <a
        key={i}
        href={m.link.href}
        target="_blank"
        rel="noreferrer"
        className="underline decoration-1 underline-offset-2 hover:opacity-70"
      >
        {m.link.text}
      </a>
    );
    cursor = m.idx + m.link.text.length;
  });
  nodes.push(result.slice(cursor));

  return <>{nodes}</>;
}

function ItemBlock({ item, openLightbox }: { item: WorkItem; openLightbox: (c: LightboxContent) => void }) {
  const isSide = item.mediaLayout === "side";
  const usedAsSideVideo = isSide && !!item.video;
  const usedAsSideEmbed = isSide && !usedAsSideVideo && !!item.embed;
  const usedAsSideImage = isSide && !usedAsSideVideo && !usedAsSideEmbed && item.images && item.images.length === 1;

  const header = (
    <>
      <h4
        className="text-2xl text-[#1C1B1A]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.01em" }}
      >
        {item.label}
      </h4>

      <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">{item.description}</p>
      {item.result && (
        <p
          className="mt-4 max-w-xl text-base italic leading-relaxed"
          style={{ fontFamily: "var(--font-serif)", color: ACCENT_TEXT }}
        >
          <ResultText item={item} />
        </p>
      )}

      {item.stat && (
        <div className="mt-5 inline-flex items-baseline gap-2">
          <span className="text-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: ACCENT_TEXT }}>
            {item.stat.value}
          </span>
          <span className="text-xs text-[#1C1B1A]/50">{item.stat.label}</span>
        </div>
      )}
    </>
  );

  const sideMedia = usedAsSideVideo ? (
    <VideoMedia video={item.video!} />
  ) : usedAsSideEmbed ? (
    <EmbedMedia embed={item.embed!} />
  ) : usedAsSideImage ? (
    <SingleImageMedia
      img={item.images![0]}
      caption={item.imageCaption}
      side
      onOpen={() => openLightbox({ type: "image", images: item.images!, index: 0 })}
    />
  ) : null;

  const sideWidthClass =
    usedAsSideVideo || usedAsSideEmbed
      ? "lg:w-72 xl:w-[26rem] 2xl:w-[30rem]"
      : "lg:w-64 xl:w-80 2xl:w-96";

  return (
    <div id={item.id} className="pt-14 first:pt-0">
      {sideMedia ? (
        <div className="lg:flex lg:items-start lg:gap-10 xl:gap-16 lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl">
          <div className="min-w-0 lg:flex-1">{header}</div>
          <div className={`mt-6 lg:mt-0 lg:flex-none ${sideWidthClass}`}>{sideMedia}</div>
        </div>
      ) : (
        header
      )}

      {item.embed && !usedAsSideEmbed && <div className="mt-6 max-w-xl">{<EmbedMedia embed={item.embed} />}</div>}

      {item.images && item.images.length > 0 && !usedAsSideImage && (
        item.imageCarouselNatural ? (
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
            {item.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => openLightbox({ type: "image", images: item.images!, index: i })}
                className="h-64 flex-none cursor-zoom-in overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
              >
                <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className="h-full w-auto object-contain" />
              </button>
            ))}
          </div>
        ) : item.imageCarousel ? (
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {item.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => openLightbox({ type: "image", images: item.images!, index: i })}
                className="relative aspect-[4/3] w-80 flex-none cursor-zoom-in snap-start overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
              >
                <Image src={img.src} alt={img.alt} fill sizes="320px" className="object-cover" />
              </button>
            ))}
          </div>
        ) : item.images.length === 1 ? (
          <div className="mt-6">
            <SingleImageMedia
              img={item.images[0]}
              caption={item.imageCaption}
              onOpen={() => openLightbox({ type: "image", images: item.images!, index: 0 })}
            />
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {item.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => openLightbox({ type: "image", images: item.images!, index: i })}
                className="block cursor-zoom-in overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
              >
                <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className="w-full" />
              </button>
            ))}
          </div>
        )
      )}

      {item.bulletCards && item.bulletCards.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {item.bulletCards.map((b) => (
            <div key={b} className="rounded-xl border border-[#1C1B1A]/10 bg-white px-4 py-3 text-sm text-[#1C1B1A]/75">
              {b}
            </div>
          ))}
        </div>
      )}

      {item.videoLinks && item.videoLinks.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {item.videoLinks.map((v) => (
            <a
              key={v.src}
              href={v.href}
              target="_blank"
              rel="noreferrer"
              className={`group block ${v.wide ? "col-span-2 sm:col-span-3" : ""}`}
            >
              <div
                className={`relative overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5 shadow-sm transition group-hover:shadow-md group-hover:border-[#1C1B1A]/25 ${v.wide ? "aspect-video" : "aspect-[9/16]"}`}
              >
                <Image
                  src={v.src}
                  alt={v.alt}
                  fill
                  sizes={v.wide ? "60vw" : "(min-width: 640px) 25vw, 50vw"}
                  className="object-cover transition group-hover:scale-105"
                />
                {v.video && <PlayButton />}
              </div>
              {v.caption && <span className="mt-2 block text-sm text-[#1C1B1A]/60">{v.caption}</span>}
            </a>
          ))}
        </div>
      )}

      {item.posts && item.posts.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {item.posts.map((post) => (
            <PostCard key={post.name} name={post.name} quote={post.quote} image={post.image} href={post.href} />
          ))}
        </div>
      )}

      {item.videos && item.videos.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {item.videos.map((v) => (
            <div key={v.title}>
              <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10 shadow-sm">
                {v.wistiaId ? (
                  <iframe
                    title={v.title}
                    allowFullScreen
                    frameBorder="0"
                    scrolling="no"
                    className="wistia_embed aspect-video w-full"
                    name="wistia_embed"
                    src={`https://fast.wistia.net/embed/iframe/${v.wistiaId}`}
                  />
                ) : (
                  <video
                    src={v.videoSrc}
                    poster={v.poster}
                    controls
                    playsInline
                    className="aspect-video w-full object-cover"
                  />
                )}
              </div>
              <span className="mt-2 block text-sm font-medium text-[#1C1B1A]/80">{v.title}</span>
            </div>
          ))}
        </div>
      )}

      {item.video && !usedAsSideVideo && <div className="mt-6 max-w-xl">{<VideoMedia video={item.video} />}</div>}

      {item.youtube && item.youtube.length > 0 && (
        <div className={`mt-6 grid gap-4 ${item.youtubeVertical ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"}`}>
          {item.youtube.map((v) => (
            <VideoTile
              key={v.id}
              title={v.title}
              id={v.id}
              short={v.short}
              vertical={item.youtubeVertical}
              openLightbox={openLightbox}
            />
          ))}
        </div>
      )}

      {item.links && item.links.length > 0 && (
        <div className="mt-6 grid max-w-xl gap-2 sm:grid-cols-2">
          {item.links.map((l) => (
            <ExternalLinkCard key={l.href} href={l.href} label={l.label} sublabel={l.sublabel} />
          ))}
        </div>
      )}
    </div>
  );
}

const SECTION_HEADER_TITLE_STYLE = {
  fontFamily: "var(--font-display)",
  fontWeight: 800,
  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
  letterSpacing: "-0.02em",
} as const;

function CompanyCategories({
  company,
  openLightbox,
}: {
  company: Company;
  openLightbox: (c: LightboxContent) => void;
}) {
  const categories = company.categories!;
  const [activeIdx, setActiveIdx] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function update() {
      let current = 0;
      for (let i = 0; i < refs.current.length; i++) {
        const el = refs.current[i];
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = i;
      }
      setActiveIdx(current);
    }
    update();
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [categories.length]);

  const active = categories[activeIdx];

  return (
    <div className="mt-16 sm:grid sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-14">
      <div>
        <div className="hidden sm:sticky sm:top-10 sm:block">
          <span
            className="block text-xs uppercase tracking-[0.15em] text-[#1C1B1A]/40"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            {company.name}
          </span>
          {active.label && (
            <div className="relative mt-2 h-6">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center gap-2"
                >
                  <span className="h-2 w-2 flex-none rounded-full" style={{ backgroundColor: ACCENT }} />
                  <h3
                    className="text-sm uppercase tracking-[0.08em] text-[#1C1B1A]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {active.label}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      <div>
        {categories.map((category, idx) => (
          <div
            key={category.id}
            id={category.id}
            ref={(el) => {
              refs.current[idx] = el;
            }}
            className={idx === 0 ? "" : "mt-16 border-t border-[#1C1B1A]/10 pt-16"}
          >
            <div className="mb-6 flex items-center gap-2 sm:hidden">
              <span
                className="block text-xs uppercase tracking-[0.15em] text-[#1C1B1A]/40"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                {company.name}
              </span>
              {category.label && (
                <>
                  <span className="text-[#1C1B1A]/20">/</span>
                  <span
                    className="text-xs uppercase tracking-[0.08em] text-[#1C1B1A]/70"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {category.label}
                  </span>
                </>
              )}
            </div>
            {category.items
              .filter((item) => !item.hidden)
              .map((item) => (
                <ItemBlock key={item.id} item={item} openLightbox={openLightbox} />
              ))}
          </div>
        ))}
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

function ImageLightbox({
  lightbox,
  setLightbox,
}: {
  lightbox: { type: "image"; images: LightboxImage[]; index: number };
  setLightbox: (c: LightboxContent | null) => void;
}) {
  const { images, index } = lightbox;
  return (
    <>
      {images.length > 1 && (
        <LightboxArrow
          direction="prev"
          onClick={() => setLightbox({ type: "image", images, index: (index - 1 + images.length) % images.length })}
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index].src}
        alt={images[index].alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
      />
      {images.length > 1 && (
        <LightboxArrow
          direction="next"
          onClick={() => setLightbox({ type: "image", images, index: (index + 1) % images.length })}
        />
      )}
    </>
  );
}

export default function WorkPage() {
  const [lightbox, setLightbox] = useState<LightboxContent | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setLightbox(null);
        return;
      }
      setLightbox((prev) => {
        if (!prev || prev.type !== "image" || prev.images.length <= 1) return prev;
        if (e.key === "ArrowLeft") {
          return { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length };
        }
        if (e.key === "ArrowRight") {
          return { ...prev, index: (prev.index + 1) % prev.images.length };
        }
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
        Work
      </motion.h1>

      <div className="mt-20 space-y-32">
        {companies.map((company) => (
          <section key={company.id} id={company.id}>
            <div className="max-w-2xl">
              <h2 className="text-[#1C1B1A]" style={SECTION_HEADER_TITLE_STYLE}>
                {company.name}
              </h2>
              <p
                className="mt-3 text-lg italic leading-relaxed"
                style={{ fontFamily: "var(--font-serif)", color: ACCENT_TEXT }}
              >
                {company.intro}
              </p>
            </div>

            {company.categories && company.categories.length > 0 && (
              <CompanyCategories company={company} openLightbox={setLightbox} />
            )}

            {(company.bullets || company.photos) && (
              <div className="mt-16 sm:grid sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-14">
                <div>
                  <span
                    className="mb-6 block text-xs uppercase tracking-[0.15em] text-[#1C1B1A]/40 sm:sticky sm:top-10 sm:mb-0"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {company.name}
                  </span>
                </div>

                <div>
                  {company.bullets && (
                    <ul className="max-w-2xl space-y-3">
                      {company.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-base leading-relaxed text-[#1C1B1A]/75">
                          <span style={{ color: ACCENT_TEXT }}>—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {company.photos && (
                    <div className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
                      {company.photos.map((src, i) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() =>
                            setLightbox({
                              type: "image",
                              images: company.photos!.map((s) => ({ src: s, alt: `${company.name} work sample` })),
                              index: i,
                            })
                          }
                          className="relative aspect-[4/3] w-72 flex-none cursor-zoom-in snap-start overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5 transition hover:border-[#1C1B1A]/25"
                        >
                          <Image src={src} alt={`${company.name} work sample`} fill sizes="288px" className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        ))}
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
          {lightbox.type === "image" ? (
            <ImageLightbox lightbox={lightbox} setLightbox={setLightbox} />
          ) : (
            <div className="aspect-video w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <iframe
                title={lightbox.title}
                src={lightbox.embedSrc}
                allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                allowFullScreen
                className="h-full w-full rounded-lg shadow-2xl"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
