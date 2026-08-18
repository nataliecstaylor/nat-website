"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Fraunces } from "next/font/google";
import { pillars } from "../_data";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

const courseNames = [
  "First Course",
  "Second Course",
  "Third Course",
  "Fourth Course",
  "After Dinner",
];

export default function GuestList() {
  const [open, setOpen] = useState<string | null>(pillars[0].id);

  return (
    <main
      className={`${fraunces.variable} min-h-screen bg-[#f7f1e8] px-6 py-16 text-[#2c2620] sm:px-10`}
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-[#a5714f]">YOU&apos;RE ON THE LIST</p>
          <h1
            className="mt-4 text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Natalie Taylor
          </h1>
          <p className="mt-3 text-sm text-[#6b5f4f]">Hosting, tonight and always.</p>
        </div>

        <div className="mt-14 border-t border-[#d8c9b3]">
          {pillars.map((p, i) => {
            const isOpen = open === p.id;
            return (
              <div key={p.id} className="border-b border-[#d8c9b3]">
                <button
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  className="flex w-full items-baseline justify-between py-5 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs tracking-widest text-[#a5714f]">
                      {courseNames[i]}
                    </span>
                    <span
                      className="text-xl sm:text-2xl"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {p.label}
                    </span>
                  </span>
                  <span className="text-lg text-[#a5714f]">{isOpen ? "–" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-6 sm:grid-cols-[1fr_auto] sm:items-start">
                        <div>
                          <p className="text-sm leading-relaxed text-[#4a4136]">{p.summary}</p>
                          <ul className="mt-4 space-y-1.5">
                            {p.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-[#6b5f4f]"
                              >
                                <span className="text-[#a5714f]">·</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {p.stat && (
                          <div className="rounded border border-[#d8c9b3] bg-[#efe4d3] px-5 py-4 text-center sm:min-w-32">
                            <div
                              className="text-2xl"
                              style={{ fontFamily: "var(--font-fraunces)" }}
                            >
                              {p.stat.value}
                            </div>
                            <div className="mt-1 text-[11px] leading-tight text-[#6b5f4f]">
                              {p.stat.label}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-[#a5714f]">
          Party of one, always happy to add a seat.
        </p>
      </div>
    </main>
  );
}
