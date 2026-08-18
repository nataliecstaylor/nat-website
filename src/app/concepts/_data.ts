export type Pillar = {
  id: string;
  number: string;
  label: string;
  kicker: string;
  summary: string;
  items: string[];
  stat?: { value: string; label: string };
};

export const pillars: Pillar[] = [
  {
    id: "programs",
    number: "01",
    label: "Programs",
    kicker: "Built from the ground up",
    summary:
      "Influencer marketing, a VIP dinner series, and a virtual summit — each built from zero.",
    items: ["Influencer marketing program", "VIP dinner series", "Virtual summit"],
    stat: { value: "3", label: "programs launched from scratch" },
  },
  {
    id: "talent",
    number: "02",
    label: "Talent",
    kicker: "Face of the brand",
    summary:
      "Outsize brand awareness through hosting, speaking, and personal relationships with key customers and prospects.",
    items: [
      "Hosting virtual + IRL events",
      "Key prospect relationships",
      "LinkedIn presence & podcast appearances",
    ],
    stat: { value: "1", label: "featured in a book" },
  },
  {
    id: "producer",
    number: "03",
    label: "Producer",
    kicker: "Interviewer, editorial",
    summary:
      "Interviewed guests across formats, then shaped the narrative into high-value content.",
    items: [
      "T3 × HubSpot case study",
      "T3 × TripActions (Navan) case study",
      "T3 × ASICS case study",
    ],
    stat: { value: "3", label: "video case studies produced" },
  },
  {
    id: "culture",
    number: "04",
    label: "Culture",
    kicker: "Internal impact",
    summary:
      "Led LinkedIn training, ran two company retreats, voted people's choice for embodying company values.",
    items: [
      "LinkedIn workshop & competition",
      "Two full-company retreats",
      "Shout-out & people's choice awards",
    ],
    stat: { value: "2", label: "company retreats organized" },
  },
  {
    id: "personal",
    number: "05",
    label: "Personal",
    kicker: "Off the clock",
    summary: "Dance, hosting, writing, and a couple of pizza businesses on the side.",
    items: ["Dance", "Hosting — Airbnb, pizza night", "Writing"],
  },
];
