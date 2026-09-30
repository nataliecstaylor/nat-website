"use client";

import { useState } from "react";
import { ACCENT } from "../_nav-data";

const EMAIL = "nataliecstaylor@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/nataliecstaylor/";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl border border-[#1C1B1A]/15 bg-white px-4 py-3 text-base text-[#1C1B1A] outline-none transition focus:border-[#1C1B1A]/40";

  return (
    <div className="flex min-h-[70vh] flex-col justify-center px-8 py-16 sm:px-16">
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
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#1C1B1A]/60">
        Send a note directly, or reach me on LinkedIn.
      </p>

      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#1C1B1A]/10 bg-white px-5 py-2.5 text-sm text-[#1C1B1A] transition hover:border-[#1C1B1A]/25"
        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
      >
        <span style={{ color: ACCENT }}>
          <LinkedInIcon />
        </span>
        LinkedIn
      </a>

      <form onSubmit={handleSubmit} className="mt-10 max-w-xl space-y-4">
        <input
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <textarea
          required
          placeholder="Message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
        />
        <button
          type="submit"
          className="rounded-full px-8 py-3 text-sm uppercase tracking-wide text-[#1C1B1A] transition hover:opacity-90"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, backgroundColor: ACCENT }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
