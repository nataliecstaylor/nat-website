export type WorkItem = {
  id: string;
  label: string;
  description: string;
  stat?: { value: string; label: string };
  images?: { src: string; alt: string; w: number; h: number }[];
  youtube?: { title: string; id: string; short?: boolean }[];
  wistia?: { title: string; wistiaId: string }[];
  video?: { src: string; poster?: string; alt: string };
  embed?: { src: string; title: string; height: number };
  links?: { href: string; label: string; sublabel?: string }[];
};

export type Category = { id: string; label: string; items: WorkItem[] };

export type Company = {
  id: string;
  name: string;
  intro: string;
  categories?: Category[];
  bullets?: string[];
  photos?: string[];
};

export const companies: Company[] = [
  {
    id: "capsule",
    name: "Capsule",
    intro:
      "A true 0-1 role as the first marketing hire at an early-stage, sales-led startup selling to enterprises (LinkedIn, HubSpot, ServiceNow). I worked directly with the CEO and Head of Sales to define our ICP, positioning, and messaging, and build the pipeline and revenue that helped us get to our Series A.",
    categories: [
      {
        id: "capsule-product-marketing",
        label: "Product marketing",
        items: [
          {
            id: "positioning",
            label: "Positioning",
            description:
              "Led positioning updates at two companies, using April Dunford's framework and bringing together founders and stakeholders to clarify our company's place in the market — then executed each update across multiple website and brand refreshes, enabling the rest of the team with updated positioning and messaging docs.",
            images: [
              { src: "/content/positioning/capsule-home-2.jpg", alt: "Capsule homepage iteration", w: 1600, h: 881 },
              { src: "/content/positioning/capsule-home-3.jpg", alt: "Capsule homepage iteration", w: 1600, h: 832 },
              { src: "/content/positioning/capsule-home-4.jpg", alt: "Capsule homepage iteration", w: 1600, h: 784 },
            ],
          },
          {
            id: "product-launches",
            label: "Product launches",
            description:
              "Managed 7 major product launch campaigns in 3 years. These drove millions of impressions and both spikes and sustained increases in brand awareness, inbound demo requests, and pipeline.",
            youtube: [
              { title: "Video Skills", id: "fGLgSXL1B8M" },
              { title: "Variants", id: "k4PeSXyD0PA" },
              { title: "AI Productions", id: "UnodbgTbX4g" },
              { title: "Capsule 1.0", id: "o5zCtmwTS1M" },
              { title: "Audio features", id: "LifBjrJHnq0" },
              { title: "Auto Frame", id: "CcegwpLqVGY" },
              { title: "Design Systems Lite", id: "ui8D76C0MGg" },
            ],
          },
          {
            id: "case-studies",
            label: "Case studies",
            description:
              "Conducted interviews with 5 key stakeholders of one of Capsule's key accounts and edited 5 different videos.",
            youtube: [
              { title: "Capsule x HubSpot", id: "8xXyFzqLibg" },
              { title: "Brand governance", id: "q8IMJseXO7E", short: true },
              { title: "Ease of use", id: "C4vSFFU8_0M", short: true },
              { title: "Cost and time savings", id: "TZZ77llGQ1Y", short: true },
              { title: "Increased output", id: "Ni5bEbfPXYI", short: true },
            ],
          },
        ],
      },
      {
        id: "capsule-content",
        label: "Content",
        items: [
          {
            id: "influencer-program",
            label: "Influencer program",
            description:
              "Built a B2B influencer marketing program from end to end (in Fall 2023, before it was cool). Managed list building, creative briefs, and launch timelines and deliverables to generate ~800k impressions on a very scrappy budget over 6 months — pitching creators directly, building a shared Slack community with them, and participating in campaigns myself.",
            stat: { value: "~800k", label: "impressions, scrappy budget" },
            images: [
              { src: "/content/influencer/outreach-redacted.png", alt: "First outreach message to an influencer", w: 916, h: 512 },
              { src: "/content/influencer/spreadsheet-redacted.png", alt: "Influencer tracking spreadsheet", w: 2770, h: 558 },
            ],
          },
          {
            id: "linkedin-program-capsule",
            label: "LinkedIn program",
            description:
              "Built the LinkedIn competition strategy and goals, and the AI systems and app script behind it — analytics submission, a points engine, a weekly leaderboard, and monthly cash prizes — then presented company-wide on why LinkedIn matters and led by example by posting regularly to my own profile.",
            images: [
              { src: "/content/talent/li-video-wins.png", alt: "Video Wins LinkedIn post", w: 322, h: 194 },
              { src: "/content/talent/li-audio.png", alt: "Why I sound like an audio pro LinkedIn post", w: 390, h: 388 },
            ],
            embed: {
              src: "https://open.spotify.com/embed/playlist/0RwqJjqM3kVB4ZyO6cNGjX?utm_source=generator&theme=0",
              title: "Podcast appearances playlist",
              height: 152,
            },
          },
          {
            id: "dinner-reels",
            label: "Dinner highlight reels",
            description: "Interviewed key event guests around relevant topics and edited into highlight reels.",
            youtube: [
              { title: "Dinner highlight", id: "Xn6jv7nPS9s", short: true },
              { title: "Dinner highlight", id: "Fhc9cEa0szw", short: true },
              { title: "Dinner highlight", id: "23NQUbzF5Mc", short: true },
              { title: "Dinner highlight", id: "K34v01iCmkY", short: true },
            ],
          },
        ],
      },
      {
        id: "capsule-events",
        label: "Community & Events",
        items: [
          {
            id: "vip-dinners",
            label: "VIP dinner series",
            description:
              "Chose key cities, built invite lists, managed outreach campaigns and venues, maintained 98% attendance, scaled from 0.5 events/month to 2/month, built key relationships and millions in pipeline, and hired a Head of Events who continues to scale and improve this program. Hosted each event myself and built the relationships that led to real pipeline — and champions who came back to me after changing companies.",
            stat: { value: "98%", label: "attendance" },
            images: [
              { src: "/content/talent/grwm.png", alt: "Get ready with me for a Capsule VIP dinner", w: 382, h: 666 },
              { src: "/content/talent/pat-dm-redacted.png", alt: "Prospect outreach message", w: 1000, h: 446 },
              { src: "/content/talent/phillip-dm-redacted.png", alt: "Prospect outreach message", w: 998, h: 256 },
              { src: "/content/talent/ann-dm-redacted.png", alt: "Prospect outreach message", w: 1002, h: 562 },
            ],
            links: [
              {
                href: "https://www.linkedin.com/posts/nataliecstaylor_earlier-this-year-i-posted-a-jd-for-the-activity-7354141810954309633-3eIv",
                label: "Hired the Head of Events who now runs it",
                sublabel: "LinkedIn post",
              },
              {
                href: "https://capsule.video/learn#in-person-events",
                label: "Photos, highlight reels & attendee quotes",
                sublabel: "capsule.video/learn",
              },
            ],
          },
          {
            id: "virtual-summit",
            label: "Virtual summit",
            description:
              "Built the strategy, goals, assets, and 4-week promo campaign for Capsule's first-ever virtual summit, resulting in a 5x increase in registration and attendance — securing 9 top-tier speakers by pitching them myself and hosting 2 of the 4 sessions.",
            stat: { value: "5x", label: "registration & attendance increase" },
            video: {
              src: "/content/summit/virtual-summit-loop.mp4",
              alt: "Capsule Video First Summit 2026",
            },
            links: [
              { href: "https://capsule.video/video-first-summit-2026", label: "Video First Summit 2026", sublabel: "capsule.video" },
            ],
          },
        ],
      },
      {
        id: "capsule-leadership",
        label: "Leadership & Culture",
        items: [
          {
            id: "retreats",
            label: "Company retreats",
            description: "Planned and organized two full-company retreats; made retreat highlight videos unprompted.",
            stat: { value: "2", label: "company retreats organized" },
            images: Array.from({ length: 8 }, (_, i) => ({
              src: `/content/culture/retreat/retreat-${i + 1}.jpg`,
              alt: "Company retreat photo",
              w: 1600,
              h: 1200,
            })),
          },
          {
            id: "board-reporting",
            label: "Board reporting and hiring",
            description:
              "First marketing hire and sole marketing leader, managing direct reports, contractors, and budgets. Built quarterly reporting, goals, and narrative directly with the CEO, and presented at every quarterly board meeting since October 2023.",
          },
          {
            id: "awards",
            label: "Awards",
            description:
              "Winner of Capsule's People's Choice award and \"shout-out award\" (most shout-outs in a year).",
            images: [{ src: "/content/culture/peoples-choice.jpg", alt: "Winner, Capsule's People's Choice award", w: 1050, h: 1400 }],
            links: [
              {
                href: "https://www.linkedin.com/posts/nataliecstaylor_if-youve-spoken-to-me-in-the-past-2-years-activity-7325938479899561988-_HWV",
                label: "Winner, Capsule's People's Choice award",
                sublabel: "LinkedIn post",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "t3",
    name: "T3 Advisors",
    intro:
      "While this real estate company was 15 years old when I joined, it operated like a startup and I was the first marketing hire.",
    categories: [
      {
        id: "t3-main",
        label: "",
        items: [
          {
            id: "website",
            label: "Website",
            description:
              "Working with a graphic designer and development team, I helped guide the site's redesign while managing the internal stakeholders at T3, ensuring the company's leadership team was thrilled with the final product. The new design better reflected T3's sophisticated brand and also led to a 160% increase in conversion rates.",
            stat: { value: "160%", label: "increase in conversion rate" },
            images: [
              { src: "/content/positioning/t3-before-after-home.jpg", alt: "T3 Advisors website redesign, before and after", w: 1800, h: 544 },
              { src: "/content/positioning/t3-before-after-growth.jpg", alt: "T3 Advisors growth stage page redesign, before and after", w: 1800, h: 606 },
            ],
          },
          {
            id: "case-studies-t3",
            label: "Case studies",
            description:
              "Ran customer case study videos end to end: pre-production, interview, and post-production. One of my interview subjects was Hemant Taneja, now-CEO of General Catalyst, who said he was genuinely surprised at how thoughtful and well-researched my questions were.",
            wistia: [
              { title: "T3 × HubSpot", wistiaId: "y1q3sb5y9j" },
              { title: "T3 × TripActions (Navan)", wistiaId: "d7ila4v7za" },
              { title: "T3 × ASICS", wistiaId: "dhi585068o" },
            ],
            video: { src: "/content/producer/why-space-matters.mp4", poster: "/content/producer/why-space-matters-poster.jpg", alt: "T3 x General Catalyst" },
          },
          {
            id: "linkedin-program-t3",
            label: "LinkedIn program",
            description:
              "Led a LinkedIn workshop at T3, training the team on why LinkedIn matters for the business and for personal brand.",
            images: [{ src: "/content/culture/t3-linkedin-preso.jpg", alt: "Leading a LinkedIn training at T3", w: 1400, h: 1867 }],
          },
        ],
      },
    ],
  },
  {
    id: "salt",
    name: "SALT Contemporary Dance",
    intro:
      "After college, I danced professionally with a brand-new company. The work we were doing was the highest caliber in the state. But we were brand-new and no one knew about it. So for the next 3 years, I did everything I could to fix that and fell in love with marketing along the way, eventually retiring from dance and going all in on this profession.",
    bullets: [
      "Worked directly with CEO, directors, photographers, videographers, venue managers, sponsors, graphic designers, and more to help shape the company's message and vision",
      "Promoted all performances. Wrote, designed, edited, and oversaw all print and digital marketing materials",
      "Built SALT's social presence from 0-2k followers on Meta and YouTube",
    ],
    photos: Array.from({ length: 10 }, (_, i) => `/content/personal/dance/dance-${i + 1}.jpg`),
  },
];

export const aiSystemsItems = [
  "Built a full LinkedIn competition app — analytics submission, points engine, weekly leaderboard, monthly cash prizes; drove a real increase in posting and impressions from beyond the founder/CEO",
  "Connected the MKT1 Google Analytics MCP to a weekly, auto-updating site-traffic dashboard",
  "Drove the move from Webflow to Sanity + Claude Code; now builds and ships every web update personally",
  "Built this entire portfolio site in Claude Code in a few days",
];
