export type WorkItem = {
  id: string;
  label: string;
  description: string;
  result?: string;
  stat?: { value: string; label: string };
  images?: { src: string; alt: string; w: number; h: number }[];
  imageCarousel?: boolean;
  posts?: { name: string; role: string; quote: string; image: string; href: string }[];
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
              "In a crowded and constantly changing market of AI video tools, I led a number of positioning updates, aligning stakeholders and using April Dunford's framework to clarify Capsule's place as an enterprise-grade system.",
            result:
              "I then executed each update across multiple website refreshes and enablement materials for the rest of the team, so that prospects were hearing the right message across both marketing and sales.",
            images: [
              { src: "/content/positioning/capsule-home-2.jpg", alt: "Capsule homepage iteration", w: 1600, h: 881 },
              { src: "/content/positioning/capsule-home-3.jpg", alt: "Capsule homepage iteration", w: 1600, h: 832 },
              { src: "/content/positioning/capsule-home-4.jpg", alt: "Capsule homepage iteration", w: 1600, h: 784 },
              { src: "/content/positioning/capsule-positioning-sample.png", alt: "Capsule positioning strategy deck slide", w: 2290, h: 1274 },
            ],
          },
          {
            id: "product-launches",
            label: "Product launches",
            description:
              "The product evolved significantly in my time at Capsule, and we launched 8 major product campaigns to reflect that. The goals for most of the campaigns were to stand out from competitors, highlight the product's quality and speed of innovation for enterprise use cases, and drive pipeline.",
            result:
              "The launches drove both spikes and sustained increases in brand awareness, inbound demo requests, and pipeline, as well as millions of impressions.",
            youtube: [
              { title: "Video Skills", id: "fGLgSXL1B8M" },
              { title: "Variants", id: "k4PeSXyD0PA" },
              { title: "AI Productions", id: "UnodbgTbX4g" },
              { title: "Capsule 1.0", id: "o5zCtmwTS1M" },
              { title: "Audio features", id: "LifBjrJHnq0" },
              { title: "Auto Frame", id: "CcegwpLqVGY" },
              { title: "Design Systems Lite", id: "ui8D76C0MGg" },
              { title: "Beta launch", id: "_JNt77-LyN4" },
            ],
          },
          {
            id: "case-studies",
            label: "Case studies",
            description:
              "One of Capsule's greatest strengths is its roster of real, enterprise customers. So I helped bring that proof to life for our prospects by building this HubSpot case study campaign. I ran interviews with five of our key stakeholders there and edited all five videos to focus on distinct pain points.",
            result:
              "The derivative assets from these now fuel our website, decks, and other marketing assets.",
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
              "When I joined, nobody knew who Capsule was. To help us get on the map, I decided to try working with B2B influencers (before it was mainstream ;)). I built the program end to end: drafted a list of dream creators, personally reached out to them, pitched them on both Capsule and the campaign, wrote creative briefs, managed launch timelines and deliverables, and inadvertently built a creator community.",
            result:
              "Across 3 campaigns and 6 months, we generated ~800k impressions, a lot of buzz on LinkedIn and Twitter, and a few creators who are still fans and users.",
            images: [
              { src: "/content/influencer/outreach-redacted.png", alt: "First outreach message to an influencer", w: 916, h: 512 },
              { src: "/content/influencer/spreadsheet-redacted.png", alt: "Influencer tracking spreadsheet", w: 2770, h: 558 },
            ],
            posts: [
              {
                name: "Amanda Goetz",
                role: "@AmandaMGoetz",
                quote: "It was so fun and FAST.",
                image: "/content/influencer/post-amanda.png",
                href: "https://x.com/AmandaMGoetz/status/1704198677953237443",
              },
              {
                name: "Dave Gerhardt",
                role: "Founder, Exit Five",
                quote: "Gonna change the video game for enterprise teams.",
                image: "/content/influencer/post-dg.png",
                href: "https://www.linkedin.com/feed/update/urn:li:activity:7115319375976361984/",
              },
              {
                name: "Rayna van Beuzekom",
                role: "Founder, Crux Content",
                quote: "Goodbye keyframes fr.",
                image: "/content/influencer/post-rayna.png",
                href: "https://www.linkedin.com/posts/raynavb_sponsored-activity-7165721762016534528-BFSD",
              },
              {
                name: "Christina Le",
                role: "Head of Marketing, Slate",
                quote: "Every creator needs this.",
                image: "/content/influencer/post-christina.png",
                href: "https://www.linkedin.com/posts/thesechapters_im-the-type-who-looks-for-shortcuts-to-cut-activity-7206307805337690115-7fbD",
              },
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
          {
            id: "brand-ambassador",
            label: "Brand ambassador",
            description:
              "As we sharpened our ICP to creative and marketing leaders, I became an important bridge. In addition to hosting many of our in-person and virtual events, I also spoke on several podcasts and webinars.",
            result:
              "As a result of the trust I built in the community, I personally sourced multiple opportunities and closed-won deals, both net-new and from champions who came back to buy Capsule after changing companies.",
            images: [
              { src: "/content/talent/pat-dm-redacted.png", alt: "Prospect outreach message", w: 1000, h: 446 },
              { src: "/content/talent/phillip-dm-redacted.png", alt: "Prospect outreach message", w: 998, h: 256 },
              { src: "/content/talent/ann-dm-redacted.png", alt: "Prospect outreach message", w: 1002, h: 562 },
            ],
            embed: {
              src: "https://open.spotify.com/embed/playlist/0RwqJjqM3kVB4ZyO6cNGjX?utm_source=generator&theme=0",
              title: "Podcast appearances playlist",
              height: 380,
            },
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
            imageCarousel: true,
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
      "While this real estate company was 15 years old when I joined, it operated like a startup and I was the first marketing hire. Shortly after I left, the company was acquired by Savills.",
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
