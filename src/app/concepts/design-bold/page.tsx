"use client";

import Image from "next/image";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { programs, type Asset, type Side } from "../off-camera/_data";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

const ACCENT = "#FF5A2E";
const program = programs.find((p) => p.id === "vip-dinners")!;

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-[#1C1B1A]/15 bg-white px-4 py-2 text-xs font-medium text-[#1C1B1A] transition hover:border-[#1C1B1A]/40"
    >
      {label} <span style={{ color: ACCENT }}>→</span>
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
            <div key={img.src} className="overflow-hidden rounded-2xl border border-[#1C1B1A]/10">
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
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1C1B1A]/40">
        {label}
      </span>
      <p className="mt-3 text-[15px] leading-relaxed text-[#1C1B1A]/80">{side.text}</p>
      {side.stat && (
        <div className="mt-4 inline-flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight" style={{ color: ACCENT }}>
            {side.stat.value}
          </span>
          <span className="text-xs text-[#1C1B1A]/50">{side.stat.label}</span>
        </div>
      )}
      {side.assets && <AssetBlock assets={side.assets} />}
    </div>
  );
}

export default function DesignBold() {
  return (
    <main className={`${display.variable} ${body.variable} min-h-screen bg-[#F2F0EA]`} style={{ fontFamily: "var(--font-body)" }}>
      <div className="sticky top-0 z-30 flex justify-center px-6 py-5">
        <div className="flex items-center gap-2 rounded-full border border-[#1C1B1A]/10 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur">
          <span className="text-sm font-semibold tracking-tight text-[#1C1B1A]">Natalie Taylor</span>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-6 pb-20 pt-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1B1A]/40">
          Marketing leader
        </p>
        <h1
          className="mt-4 text-[15vw] font-semibold leading-[0.92] tracking-tight text-[#1C1B1A] sm:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Natalie
          <br />
          Taylor
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#1C1B1A]/70">
          Versatile, relationship-driven marketing leader with a high bar for quality,
          connection, and details.
        </p>
        <div
          className="mx-auto mt-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </section>

      <section className="mx-auto max-w-4xl border-t border-[#1C1B1A]/10 px-6 py-16">
        <h2
          className="text-center text-3xl font-semibold tracking-tight text-[#1C1B1A] sm:text-4xl"
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
