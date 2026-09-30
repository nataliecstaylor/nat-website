"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ACCENT, navItems } from "./_nav-data";

export default function PillNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-[#1C1B1A]/10 bg-white/90 p-2 shadow-lg backdrop-blur">
        {navItems.map((item) => {
          const isActive =
            item.id === "home" ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-full px-6 py-3 text-sm uppercase tracking-wide transition"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                backgroundColor: isActive ? ACCENT : "transparent",
                color: "#1C1B1A",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
