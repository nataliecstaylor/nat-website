"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { pillars } from "../_data";

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

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
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
              className="w-full max-w-xl"
            >
              <div className="mb-3 inline-flex items-center gap-2 bg-red-600 px-2 py-1 text-xs font-bold tracking-widest text-white">
                CH. {activePillar.number} — {activePillar.kicker.toUpperCase()}
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">{activePillar.label}</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
                {activePillar.summary}
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {activePillar.items.map((item) => (
                  <div
                    key={item}
                    className="rounded border border-neutral-800 bg-neutral-950/60 px-3 py-4 text-left"
                  >
                    <div className="mb-2 flex h-16 items-center justify-center rounded bg-neutral-900 text-neutral-600">
                      ▶
                    </div>
                    <span className="text-xs text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-mono text-xs tracking-[0.3em] text-neutral-500">
                CHANNEL ONE
              </p>
              <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
                NATALIE TAYLOR
              </h1>
              <p className="mt-3 text-sm tracking-wide text-neutral-400">
                Marketing lead · producer · on-air talent
              </p>
              <p className="mt-6 text-xs text-neutral-600">Select a channel below to tune in</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex items-stretch border-t border-neutral-800 bg-neutral-950/80 backdrop-blur">
        {pillars.map((p) => (
          <button
            key={p.id}
            onClick={() => tuneTo(p.id)}
            className={`flex flex-1 flex-col items-center gap-1 border-r border-neutral-800 py-4 text-xs transition last:border-r-0 hover:bg-neutral-900 ${
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
