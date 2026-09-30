import Image from "next/image";
import { ACCENT } from "../_nav-data";

const dancePhotos = Array.from({ length: 10 }, (_, i) => `/content/personal/dance/dance-${i + 1}.jpg`);

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="mt-12 block text-xs font-medium uppercase tracking-[0.15em] text-[#1C1B1A]/40"
      style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
    >
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="px-8 pb-32 pt-16 sm:px-16">
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

      <div className="mt-16 max-w-2xl">
        <p className="text-lg italic leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: ACCENT }}>
          I&apos;m curious about most things and decently good at a few things.
        </p>

        <Label>Dance</Label>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#1C1B1A]/75">
          In my heyday, I danced in college and with SALT Contemporary Dance. Now I try (and
          usually fail) to get to a ballet class once every few months.
        </p>
        <div className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
          {dancePhotos.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] w-64 flex-none snap-start overflow-hidden rounded-xl border border-[#1C1B1A]/10 bg-[#1C1B1A]/5"
            >
              <Image src={src} alt="Dancing with SALT Contemporary Dance and BYU Theatre Ballet" fill sizes="256px" className="object-cover" />
            </div>
          ))}
        </div>

        <Label>Host</Label>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#1C1B1A]/75">
          From weekly pizza nights to 5 au pairs and nearly 200 Airbnb guests in our homes,
          hosting is one of my greatest joys.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:max-w-md">
          <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
            <Image src="/content/personal/airbnb-room.jpg" alt="Our Airbnb room" width={1400} height={1050} className="w-full" />
          </div>
          <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
            <Image src="/content/personal/au-pair-pizza-party.jpg" alt="Pizza night with our au pairs" width={1050} height={1400} className="w-full" />
          </div>
        </div>

        <Label>Pizza</Label>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#1C1B1A]/75">
          I&apos;ve been making pizza with my husband for nearly a decade and love the constant
          pursuit of improvement.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:max-w-lg">
          {[
            { src: "/content/personal/grating-parm.jpg", alt: "Grating parmesan onto a fresh pizza" },
            { src: "/content/personal/pizza-polaroid.jpg", alt: "Polaroid of a finished pizza" },
            { src: "/content/personal/wes-anderson-pizza.jpg", alt: "You better not act like you're in a Wes Anderson film while making pizza" },
          ].map((img) => (
            <a
              key={img.src}
              href="https://www.instagram.com/p/Cr-9hQdtJ95/"
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
            >
              <Image src={img.src} alt={img.alt} width={1200} height={1600} className="w-full transition group-hover:scale-105" />
            </a>
          ))}
        </div>

        <Label>Writing</Label>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <a
            href="https://teamtaylortravels.com/"
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-xl border border-[#1C1B1A]/10 transition hover:border-[#1C1B1A]/25"
          >
            <Image src="/content/personal/team-taylor-travels.jpg" alt="Taylor Travels blog" width={1600} height={1205} className="w-full transition group-hover:scale-105" />
          </a>
          <div>
            <div className="grid grid-cols-2 gap-2">
              <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
                <Image src="/content/personal/byu-1.jpg" alt="BYU Magazine article, Running to Remember" width={1232} height={1600} className="w-full" />
              </div>
              <div className="overflow-hidden rounded-xl border border-[#1C1B1A]/10">
                <Image src="/content/personal/byu-2.jpg" alt="BYU Magazine article" width={1232} height={1600} className="w-full" />
              </div>
            </div>
            <span className="mt-1 block text-[11px] text-[#1C1B1A]/50">BYU Magazine, 2013–2014</span>
          </div>
        </div>
      </div>
    </div>
  );
}
