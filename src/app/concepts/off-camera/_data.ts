export type Asset =
  | { type: "image"; src: string; alt: string; w: number; h: number }
  | { type: "video"; src: string; poster?: string; alt: string }
  | { type: "link"; href: string; label: string; sublabel?: string };

export type Side = {
  text: string;
  assets?: Asset[];
  stat?: { value: string; label: string };
};

export type Program = {
  id: string;
  title: string;
  offCamera: Side;
  onCamera: Side;
};

export const programs: Program[] = [
  {
    id: "vip-dinners",
    title: "Capsule VIP Dinner Series",
    offCamera: {
      text: "Chose key cities, built invite lists, managed outreach campaigns and venues, maintained 98% attendance, scaled from 0.5 events/month to 2/month, built key relationships and millions in pipeline, and hired a Head of Events who continues to scale and improve this program.",
      stat: { value: "98%", label: "attendance" },
      assets: [
        {
          type: "link",
          href: "https://www.linkedin.com/posts/nataliecstaylor_earlier-this-year-i-posted-a-jd-for-the-activity-7354141810954309633-3eIv",
          label: "Hired the Head of Events who now runs it",
          sublabel: "LinkedIn post",
        },
      ],
    },
    onCamera: {
      text: "Hosted each event and built the relationships that led to real pipeline — and champions who came back to me after changing companies. Promoted the events myself, and the series was written up in a book.",
      assets: [
        {
          type: "image",
          src: "/content/talent/grwm.png",
          alt: "Get ready with me for a Capsule VIP dinner",
          w: 382,
          h: 666,
        },
        { type: "image", src: "/content/talent/pat-dm-redacted.png", alt: "Prospect outreach message", w: 1000, h: 446 },
        { type: "image", src: "/content/talent/phillip-dm-redacted.png", alt: "Prospect outreach message", w: 998, h: 256 },
        { type: "image", src: "/content/talent/ann-dm-redacted.png", alt: "Prospect outreach message", w: 1002, h: 562 },
        {
          type: "link",
          href: "https://capsule.video/learn#in-person-events",
          label: "Photos, highlight reels & attendee quotes",
          sublabel: "capsule.video/learn",
        },
      ],
    },
  },
  {
    id: "influencer-program",
    title: "Capsule Influencer Program",
    offCamera: {
      text: "Built a B2B influencer marketing program from end to end (in Fall 2023, before it was cool). Managed list building, creative briefs, and launch timelines and deliverables to generate ~800k impressions on a very scrappy budget over 6 months. This program was critical to building Capsule's initial brand awareness.",
      stat: { value: "~800k", label: "impressions, scrappy budget" },
      assets: [
        {
          type: "image",
          src: "/content/influencer/spreadsheet-redacted.png",
          alt: "Influencer tracking spreadsheet",
          w: 2770,
          h: 558,
        },
      ],
    },
    onCamera: {
      text: "Pitched creators on the product directly, built a shared Slack channel and community with them, and participated in campaigns myself.",
      assets: [
        {
          type: "image",
          src: "/content/influencer/outreach-redacted.png",
          alt: "First outreach message to an influencer",
          w: 916,
          h: 512,
        },
      ],
    },
  },
  {
    id: "virtual-summit",
    title: "Capsule Virtual Summit",
    offCamera: {
      text: "Built the strategy, goals, assets, and 4-week promo campaign across email and organic and paid social for Capsule's first-ever virtual summit, resulting in a 5x increase in registration and attendance.",
      stat: { value: "5x", label: "registration & attendance increase" },
    },
    onCamera: {
      text: "Secured 9 top-tier speakers by pitching them myself, built personalized promotion kits for each speaker, and hosted 2 of the 4 sessions.",
      assets: [
        {
          type: "video",
          src: "/content/summit/virtual-summit-loop.mp4",
          alt: "Capsule Video First Summit 2026",
        },
        {
          type: "link",
          href: "https://capsule.video/video-first-summit-2026",
          label: "Video First Summit 2026 recap",
          sublabel: "capsule.video",
        },
      ],
    },
  },
  {
    id: "linkedin-program",
    title: "Capsule LinkedIn Program",
    offCamera: {
      text: "Built the LinkedIn competition strategy and goals, and the AI systems and app script behind it — analytics submission, a points engine, a weekly leaderboard, and monthly cash prizes. Drove a real increase in posting and impressions from beyond the founder/CEO.",
    },
    onCamera: {
      text: "Presented company-wide on why LinkedIn matters — for the business and for everyone's personal brand — and led by example by posting regularly to my own profile, plus podcast and speaking appearances.",
      assets: [
        {
          type: "image",
          src: "/content/culture/t3-linkedin-preso.jpg",
          alt: "Leading a LinkedIn training at T3",
          w: 1400,
          h: 1867,
        },
        {
          type: "image",
          src: "/content/talent/li-video-wins.png",
          alt: "Video Wins LinkedIn post",
          w: 322,
          h: 194,
        },
        {
          type: "image",
          src: "/content/talent/li-audio.png",
          alt: "Why I sound like an audio pro LinkedIn post",
          w: 390,
          h: 388,
        },
      ],
    },
  },
  {
    id: "marketing-leadership",
    title: "Capsule Marketing Leadership",
    offCamera: {
      text: "Built quarterly reporting, goals, and narrative directly with the CEO. First marketing hire and sole marketing leader — a seat I've now held twice, at two companies — managing a director-level direct report plus a bench of 12+ contractors.",
    },
    onCamera: {
      text: "Presented at every quarterly board meeting since October 2023 — strategy, reporting, performance.",
    },
  },
];

export type ReelVideo = { title: string; id: string; short?: boolean };

export const t3CaseStudyVideos = [
  { title: "T3 × HubSpot", wistiaId: "y1q3sb5y9j" },
  { title: "T3 × TripActions (Navan)", wistiaId: "d7ila4v7za" },
  { title: "T3 × ASICS", wistiaId: "dhi585068o" },
];

export const dinnerReels: ReelVideo[] = [
  { title: "Dinner highlight", id: "Xn6jv7nPS9s", short: true },
  { title: "Dinner highlight", id: "Fhc9cEa0szw", short: true },
  { title: "Dinner highlight", id: "23NQUbzF5Mc", short: true },
  { title: "Dinner highlight", id: "K34v01iCmkY", short: true },
];

export const hubspotCaseStudyVideos: ReelVideo[] = [
  { title: "HubSpot × Capsule", id: "8xXyFzqLibg" },
  { title: "HubSpot stakeholder", id: "q8IMJseXO7E", short: true },
  { title: "HubSpot stakeholder", id: "C4vSFFU8_0M", short: true },
  { title: "HubSpot stakeholder", id: "TZZ77llGQ1Y", short: true },
  { title: "HubSpot stakeholder", id: "Ni5bEbfPXYI", short: true },
];

export const launchCampaigns: ReelVideo[] = [
  { title: "Video Skills", id: "fGLgSXL1B8M" },
  { title: "Variants", id: "k4PeSXyD0PA" },
  { title: "AI Productions", id: "UnodbgTbX4g" },
  { title: "Capsule 1.0", id: "o5zCtmwTS1M" },
  { title: "Audio features", id: "LifBjrJHnq0" },
  { title: "Auto Frame", id: "CcegwpLqVGY" },
  { title: "Design Systems Lite", id: "ui8D76C0MGg" },
];

export const aiSystemsItems = [
  "Connected the MKT1 Google Analytics MCP to a weekly, auto-updating site-traffic dashboard",
  "Drove the move from Webflow to Sanity + Claude Code; now builds and ships every web update personally",
  "Built this entire portfolio site in Claude Code in a few days",
];

export const retreatPhotos = Array.from(
  { length: 8 },
  (_, i) => `/content/culture/retreat/retreat-${i + 1}.jpg`
);
