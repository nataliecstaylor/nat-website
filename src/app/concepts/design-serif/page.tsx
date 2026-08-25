"use client";

import Image from "next/image";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { programs, type Asset, type Side } from "../off-camera/_data";

const display = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

const ACCENT = "#E8367A";
const program = programs.find((p) => p.id === "vip-dinners")!;

const stickers = [
  { label: "0→1 builder", rotate: "-rotate-2", bg: "#FFE08A" },
  { label: "on camera", rotate: "rotate-1", bg: "#BFE3D0" },
  { label: "systems + craft", rotate: "-rotate-1", bg: "#D9CFF2" },
];

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
      style={{ backgroundColor: ACCENT }}
    >
      {label} →
    </a>
  );
}

function AssetBlock({ assets }: { assets: Asset[] }) {
  const images = assets.filter((a): a is Extract<Asset, { type: "image" }> => a.type === "image");
  const links = assets.filter((a): a is Extract<Asset, { type: "link" }> => a.type === "link");
  return (
    <div className="mt-5 space-y-3">
      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-xl border border-[#2C2620]/10">
              <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className="w-full" />
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <LinkPill key={l.href} href={l.href} label={l.label} />
        ))}
      </div>
    </div>
  );
}

function Column({ label, side }: { label: string; side: Side }) {
  return (
    <div>
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#a5714f]">
        {label}
      </span>
      <p className="mt-3 text-[15px] leading-relaxed text-[#4a4136]">{side.text}</p>
      {side.stat && (
        <div className="mt-4 inline-flex items-baseline gap-2">
          <span
            className="text-4xl"
            style={{ fontFamily: "var(--font-display)", color: ACCENT }}
          >
            {side.stat.value}
          </span>
          <span className="text-xs text-[#6b5f4f]">{side.stat.label}</span>
        </div>
      )}
      {side.assets && <AssetBlock assets={side.assets} />}
    </div>
  );
}

export default function DesignSerif() {
  return (
    <main
      className={`${display.variable} ${body.variable} min-h-screen bg-[#F7F1E8]`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="sticky top-0 z-30 flex justify-center px-6 py-5">
        <div className="flex items-center gap-2 rounded-full border border-[#2C2620]/10 bg-[#FBF7F0]/90 px-5 py-2.5 shadow-sm backdrop-blur">
          <span
            className="text-sm text-[#2C2620]"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
          >
            Natalie Taylor
          </span>
        </div>
      </div>

      <section className="relative mx-auto max-w-2xl px-6 pb-24 pt-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
          Hello, I&apos;m
        </p>
        <h1
          className="mt-4 text-6xl leading-[1.05] text-[#2C2620] sm:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Natalie Taylor
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#6b5f4f]">
          Versatile, relationship-driven marketing leader with a high bar for{" "}
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
            quality, connection, and details
          </span>
          .
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {stickers.map((s) => (
            <span
              key={s.label}
              className={`inline-block rounded-full px-4 py-1.5 text-xs font-medium text-[#2C2620] shadow-sm ${s.rotate}`}
              style={{ backgroundColor: s.bg }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl border-t border-[#2C2620]/10 px-6 py-16">
        <h2
          className="text-center text-3xl text-[#2C2620] sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {program.title}
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          <Column label="Off Camera" side={program.offCamera} />
          <Column label="On Camera" side={program.onCamera} />
        </div>
      </section>
    </main>
  );
}
