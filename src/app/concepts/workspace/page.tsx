"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { pillars } from "../_data";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Workspace() {
  const [active, setActive] = useState<string | null>(null);
  const time = useClock();
  const activePillar = pillars.find((p) => p.id === active);

  return (
    <main className="relative flex min-h-screen flex-col bg-[#eef0f3] text-[#1c2024]">
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 opacity-[0.35]">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-r border-[#d7dbe0] last:border-r-0" />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 py-5 text-xs text-[#5b6470] sm:px-10">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Available for opportunities</span>
        </div>
        <span className="font-mono">{time || "--:--"} · building brand strategy</span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="text-xs tracking-[0.25em] text-[#8b93a1]">MARKETING · BRAND · SYSTEMS</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Natalie Taylor</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#5b6470]">
          I move as easily between boardroom positioning and hands-on creative direction as I do
          between a spreadsheet and a script.
        </p>
        <p className="mt-8 text-xs text-[#8b93a1]">Open a panel below</p>
      </div>

      <AnimatePresence>
        {activePillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 flex items-center justify-center bg-black/10 backdrop-blur-sm px-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`panel-${activePillar.id}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs tracking-widest text-[#8b93a1]">
                    {activePillar.kicker.toUpperCase()}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                    {activePillar.label}
                  </h2>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-[#5b6470] hover:bg-black/10"
                >
                  close
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#3b4149]">
                {activePillar.summary}
              </p>
              <div className="mt-5 space-y-2">
                {activePillar.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-white/70 px-3 py-2.5 text-sm text-[#3b4149] shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
              {activePillar.stat && (
                <div className="mt-5 flex items-center gap-3 rounded-lg bg-[#1c2024] px-4 py-3 text-white">
                  <span className="text-xl font-semibold">{activePillar.stat.value}</span>
                  <span className="text-xs text-white/70">{activePillar.stat.label}</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex items-end gap-2 rounded-2xl border border-white/60 bg-white/60 p-2 shadow-lg backdrop-blur-xl">
          {pillars.map((p) => (
            <motion.button
              key={p.id}
              layoutId={`panel-${p.id}`}
              onClick={() => setActive(p.id)}
              whileHover={{ y: -6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white text-[10px] font-medium text-[#3b4149] shadow"
            >
              <span className="text-base font-semibold">{p.number}</span>
              {p.label}
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
}
