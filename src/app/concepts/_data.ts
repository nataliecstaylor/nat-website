export type Pillar = {
  id: string;
  number: string;
  label: string;
  kicker: string;
  summary: string;
  items: string[];
  stat?: { value: string; label: string };
  videos?: { title: string; wistiaId: string }[];
};

export const pillars: Pillar[] = [
  {
    id: "programs",
    number: "01",
    label: "Programs",
    kicker: "Built from the ground up",
    summary:
      "Influencer marketing, a VIP dinner series, and a virtual summit — each built from zero: strategy, execution, and the systems to run them.",
    items: [
      "Influencer marketing program — outreach, tracking, content, metrics, community",
      "VIP dinner series — attendee stats; hired and built out a Head of Events role to scale it",
      "Virtual summit — landing page, registration & attendance, attendee quotes",
    ],
    stat: { value: "3", label: "programs launched from scratch" },
  },
  {
    id: "talent",
    number: "02",
    label: "Talent",
    kicker: "Face of the brand",
    summary:
      "Outsize brand awareness built through hosting, speaking, and personal relationships with the customers and prospects who matter most.",
    items: [
      "Hosting virtual + IRL events",
      "Personal relationships with key prospects — customers reach out when they change companies",
      "LinkedIn presence, product videos, podcast & speaking appearances",
      "Featured in a book about the IRL dinner series",
    ],
    stat: { value: "1", label: "featured in a book" },
  },
  {
    id: "producer",
    number: "03",
    label: "Producer",
    kicker: "Interviewer, editorial",
    summary:
      "Interviewed guests across formats, then shaped the raw material into the narrative that made each piece land.",
    items: [
      "Capsule × HubSpot video case study",
      "Capsule dinner guest highlight reels",
      "Willow blog posts",
    ],
    videos: [
      { title: "T3 × HubSpot", wistiaId: "y1q3sb5y9j" },
      { title: "T3 × TripActions (Navan)", wistiaId: "d7ila4v7za" },
      { title: "T3 × ASICS", wistiaId: "dhi585068o" },
    ],
    stat: { value: "3", label: "video case studies produced" },
  },
  {
    id: "leadership",
    number: "04",
    label: "Leadership",
    kicker: "Trusted with the room",
    summary:
      "Sole marketing leader reporting directly to the CEO and sitting on the leadership team — a seat held twice, at two companies.",
    items: [
      "First marketing hire, sole marketing leader — at T3, then again at Capsule",
      "Quarterly board presentations since October 2023 — strategy, reporting, performance",
      "Manages a director-level direct report plus a bench of 12+ contractors",
    ],
  },
  {
    id: "ai-systems",
    number: "05",
    label: "AI & Systems",
    kicker: "Building the tools, not just the outputs",
    summary: "AI isn't how the work gets written faster — it's how the systems get built.",
    items: [
      "Built a full LinkedIn competition app — analytics submission, points engine, weekly leaderboard, monthly cash prizes; drove a real increase in posting and impressions from beyond the founder/CEO",
      "Connected the MKT1 Google Analytics MCP to a weekly, auto-updating site-traffic dashboard",
      "Drove the move from Webflow to Sanity + Claude Code; now builds and ships every web update personally",
    ],
  },
  {
    id: "culture",
    number: "06",
    label: "Culture",
    kicker: "Internal impact",
    summary:
      "Led LinkedIn training, ran two full-company retreats, and was voted by coworkers as the person who best represents the company's values.",
    items: [
      "LinkedIn workshop & competition — at both T3 and Capsule",
      "Planned and organized two full-company retreats; made retreat highlight videos unprompted",
      "Winner, Capsule's \"shout-out award\" and \"people's choice award\"",
    ],
    stat: { value: "2", label: "company retreats organized" },
  },
  {
    id: "personal",
    number: "07",
    label: "Personal",
    kicker: "Off the clock",
    summary: "Range shows up outside of work too.",
    items: [
      "Dance",
      "Hosting — Airbnb, au pair, pizza night",
      "Writing — BYU Magazine, travel blog, Christmas letters",
      "A couple of pizza businesses",
    ],
  },
];
