import Link from "next/link";

const concepts = [
  {
    href: "/concepts/on-air",
    title: "On Air",
    description:
      "Broadcast / producer framing. Dark, a channel guide for navigation, content that tunes in like changing a channel.",
  },
  {
    href: "/concepts/guest-list",
    title: "The Guest List",
    description:
      "Hospitality / event framing. Warm, an agenda that unfolds course by course, you as the host.",
  },
];

export default function ConceptsIndex() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-24">
      <div className="text-center">
        <h1 className="text-2xl font-medium tracking-tight">Interaction directions</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Two rough, clickable prototypes — same content pillars, different feel.
        </p>
      </div>
      <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        {concepts.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group flex flex-col gap-2 rounded-lg border border-neutral-200 p-5 transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            <span className="text-sm font-medium">{c.title}</span>
            <span className="text-xs leading-relaxed text-neutral-500">{c.description}</span>
            <span className="mt-2 text-xs text-neutral-400 group-hover:text-neutral-700">
              View →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
