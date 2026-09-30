"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ACCENT, navItems, workSubmenu } from "./_nav-data";

export default function PillNav() {
  const pathname = usePathname();
  const [workOpen, setWorkOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openWork() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setWorkOpen(true);
  }
  function scheduleCloseWork() {
    closeTimer.current = setTimeout(() => setWorkOpen(false), 200);
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2">
      <div className="relative" onMouseEnter={openWork} onMouseLeave={scheduleCloseWork}>
        {workOpen && (
          <div className="absolute bottom-full left-1/2 mb-2 w-64 -translate-x-1/2 rounded-2xl border border-[#1C1B1A]/10 bg-white/95 p-2 shadow-lg backdrop-blur">
            {workSubmenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setWorkOpen(false)}
                className="block w-full rounded-xl px-4 py-2.5 text-left text-sm uppercase text-[#1C1B1A]/70 transition hover:bg-[#1C1B1A]/5 hover:text-[#1C1B1A]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1 rounded-full border border-[#1C1B1A]/10 bg-white/90 p-2 shadow-lg backdrop-blur">
          {navItems.map((item) => {
            const isActive =
              item.id === "home" ? pathname === item.href : pathname.startsWith(item.href);
            const isWork = item.id === "work";
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => isWork && openWork()}
                className="rounded-full px-6 py-3 text-sm uppercase tracking-wide transition"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  backgroundColor: isActive ? ACCENT : "transparent",
                  color: isActive ? "#F2F0EA" : "#1C1B1A",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
