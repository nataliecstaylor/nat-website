"use client";

import Image from "next/image";
import { ACCENT, ACCENT_TEXT } from "../_nav-data";
import { companies, aiSystemsItems, type WorkItem } from "./_data";

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

function VideoTile({ title, id, short }: { title: string; id: string; short?: boolean }) {
  return (
    <a
      href={short ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5 shadow-sm transition group-hover:shadow-md group-hover:border-[#1C1B1A]/25">
        <Image
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          fill
          unoptimized
          className="object-cover transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition group-hover:scale-110">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="#1C1B1A">
              <path d="M2 0.5l11 6.5-11 6.5V0.5z" />
            </svg>
          </div>
        </div>
      </div>
      <span className="mt-2 block text-sm font-medium text-[#1C1B1A]/80">{title}</span>
    </a>
  );
}

function PostCard({ name, role, quote, image, href }: { name: string; role: string; quote: string; image: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5 shadow-sm transition group-hover:shadow-md group-hover:border-[#1C1B1A]/25">
        <Image src={image} alt={`${name} post`} fill className="object-cover transition group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-8">
          <p className="text-xs leading-snug text-white">&ldquo;{quote}&rdquo;</p>
        </div>
      </div>
      <span className="mt-2 block text-sm font-medium text-[#1C1B1A]/80">{name}</span>
      <span className="block text-xs text-[#1C1B1A]/50">{role}</span>
    </a>
  );
}

function ItemBlock({ item }: { item: WorkItem }) {
  return (
    <div id={item.id} className="pt-16 first:pt-0 sm:grid sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-10">
      <h4
        className="text-xl text-[#1C1B1A] sm:sticky sm:top-10 sm:text-lg sm:leading-snug"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.01em" }}
      >
        {item.label}
      </h4>

      <div className="mt-3 sm:mt-0">
        <p className="max-w-xl text-base leading-relaxed text-[#1C1B1A]/75">{item.description}</p>
        {item.result && (
          <p
            className="mt-4 max-w-xl text-base italic leading-relaxed"
            style={{ fontFamily: "var(--font-serif)", color: ACCENT_TEXT }}
          >
            {item.result}
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

        {item.embed && (
          <div className="mt-6 max-w-xl overflow-hidden rounded-xl border border-[#1C1B1A]/10">
            <iframe
              title={item.embed.title}
              src={item.embed.src}
              width="100%"
              height={item.embed.height}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        )}

        {item.images && item.images.length > 0 && (
          item.imageCarousel ? (
            <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
              {item.images.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] w-80 flex-none snap-start overflow-hidden rounded-xl border border-[#1C1B1A]/10"
                >
                  <Image src={img.src} alt={img.alt} fill sizes="320px" className="object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-3">
              {item.images.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
                  <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className="w-full" />
                </div>
              ))}
            </div>
          )
        )}

        {item.posts && item.posts.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {item.posts.map((post) => (
              <PostCard key={post.name} {...post} />
            ))}
          </div>
        )}

        {item.wistia && item.wistia.length > 0 && (
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {item.wistia.map((v) => (
              <div key={v.wistiaId}>
                <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10 shadow-sm">
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
                <span className="mt-2 block text-sm font-medium text-[#1C1B1A]/80">{v.title}</span>
              </div>
            ))}
          </div>
        )}

        {item.video && (
          <div className="mt-6 max-w-xs">
            <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10 shadow-sm">
              <video
                src={item.video.src}
                poster={item.video.poster}
                autoPlay={!item.video.poster}
                loop={!item.video.poster}
                muted={!item.video.poster}
                playsInline
                controls={!!item.video.poster}
                className="w-full"
              />
            </div>
            <span className="mt-2 block text-sm font-medium text-[#1C1B1A]/80">{item.video.alt}</span>
          </div>
        )}

        {item.youtube && item.youtube.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {item.youtube.map((v) => (
              <VideoTile key={v.id} title={v.title} id={v.id} short={v.short} />
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
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-[88rem] px-8 pb-32 pt-16 sm:px-12">
      <h1
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
      </h1>

      <div className="mt-20 space-y-32">
        {companies.map((company) => (
          <section key={company.id} id={company.id}>
            <div className="max-w-2xl">
              <h2
                className="text-[#1C1B1A]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {company.name}
              </h2>
              <p
                className="mt-3 text-lg italic leading-relaxed"
                style={{ fontFamily: "var(--font-serif)", color: ACCENT_TEXT }}
              >
                {company.intro}
              </p>
            </div>

            <div className="mt-16 sm:grid sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12">
              <div className="hidden sm:sticky sm:top-10 sm:block sm:self-start">
                <div className="h-px w-8" style={{ backgroundColor: ACCENT }} />
                <span
                  className="mt-3 block text-xs uppercase tracking-[0.15em] text-[#1C1B1A]/45"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {company.name}
                </span>
              </div>

              <div>
                {company.categories?.map((category) => (
                  <div
                    key={category.id}
                    id={category.id}
                    className="border-t border-[#1C1B1A]/10 pt-16 first:border-t-0 first:pt-0"
                  >
                    {category.label && (
                      <div className="flex items-center gap-2.5">
                        <span className="h-2.5 w-2.5 flex-none rounded-full" style={{ backgroundColor: ACCENT }} />
                        <h3
                          className="text-base uppercase tracking-[0.1em] text-[#1C1B1A] sm:text-lg"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                        >
                          {category.label}
                        </h3>
                      </div>
                    )}
                    <div className={category.label ? "mt-8" : ""}>
                      {category.items.map((item) => (
                        <ItemBlock key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}

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
                    {company.photos.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] w-72 flex-none snap-start overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5"
                      >
                        <Image src={src} alt="SALT Contemporary Dance" fill sizes="288px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        <section id="ai-systems">
          <div className="max-w-2xl">
            <h2
              className="text-[#1C1B1A]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              AI &amp; Systems
            </h2>
            <p
              className="mt-3 text-lg italic leading-relaxed"
              style={{ fontFamily: "var(--font-serif)", color: ACCENT_TEXT }}
            >
              AI isn&apos;t how the work gets written faster — it&apos;s how the systems get built.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {aiSystemsItems.map((item) => (
              <div key={item} className="rounded-xl border border-[#1C1B1A]/10 bg-white px-4 py-3 text-sm text-[#1C1B1A]/75">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
