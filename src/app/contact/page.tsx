"use client";

import { motion } from "motion/react";
import { ACCENT_TEXT } from "../_nav-data";

const LINKEDIN_URL = "https://www.linkedin.com/in/nataliecstaylor/";

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function ContactPage() {
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
        Contact
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mt-4 max-w-xl text-lg leading-relaxed text-[#1C1B1A]/60"
      >
        Email contact form coming soon! In the meantime, if you&apos;d like to connect please
        send me a DM on LinkedIn.
      </motion.p>

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Message me on LinkedIn"
        className="mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#1C1B1A]/10 bg-white transition hover:border-[#1C1B1A]/25"
      >
        <span style={{ color: ACCENT_TEXT }}>
          <LinkedInIcon />
        </span>
      </a>
    </div>
  );
}
