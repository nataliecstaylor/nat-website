export default function AboutPage() {
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
        About
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#1C1B1A]/60">
        Placeholder — this is where the fuller bio, Personal (dance/host/pizza/writing), and any
        additional background will live. Not yet built out.
      </p>
    </div>
  );
}
