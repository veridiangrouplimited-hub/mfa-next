import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import FlagStripe from "@/components/FlagStripe";

export const metadata: Metadata = {
  title: "The Atrium — Cultural Diplomacy | Ministry of Foreign Affairs",
  description:
    "The Atrium Gallery at the Nigerian Ministry of Foreign Affairs — a distinguished space for cultural mediation, artistic expression, and diplomatic engagement.",
};

const CLOUD = "https://res.cloudinary.com/dwvzzxa8q/video/upload";

const videos = [
  {
    src:    `${CLOUD}/Promotional_Short_Film_Compressed_edufwc.mp4`,
    poster: `${CLOUD}/so_auto/Promotional_Short_Film_Compressed_edufwc.jpg`,
    label:  "The Atrium — Promotional Film",
    dur:    "1:38",
  },
  {
    src:    `${CLOUD}/HMFA_Speech_Compressed_rh21f7.mp4`,
    poster: `${CLOUD}/so_auto/HMFA_Speech_Compressed_rh21f7.jpg`,
    label:  "Minister's Address",
    dur:    "",
  },
  {
    src:    `${CLOUD}/Highlights_of_Launch_Compressed_pbdj3n.mp4`,
    poster: `${CLOUD}/so_auto/Highlights_of_Launch_Compressed_pbdj3n.jpg`,
    label:  "Highlights of The Atrium Launch",
    dur:    "1:28",
  },
];

const objectives = [
  {
    icon: "flag"      as const,
    num:  "01",
    title: "Promote the 4D Doctrine",
    desc:  "Engage a wider audience in discussions surrounding Democracy, Development, Demography, and Diaspora through artistic and cultural exhibitions.",
  },
  {
    icon: "globe"     as const,
    num:  "02",
    title: "Enhance Cultural Communication",
    desc:  "Showcase Nigeria's history, culture, policies, and values through visual storytelling and immersive diplomatic experiences.",
  },
  {
    icon: "users"     as const,
    num:  "03",
    title: "Foster International Trust and Cooperation",
    desc:  "Inform and educate other nations about Nigeria, strengthening global relationships built on mutual understanding.",
  },
  {
    icon: "scale"     as const,
    num:  "04",
    title: "Encourage Intercultural Dialogue",
    desc:  "Expand horizons by promoting international cultural collaborations and shared values across borders.",
  },
  {
    icon: "briefcase" as const,
    num:  "05",
    title: "Leverage Gastrodiplomacy",
    desc:  "Utilise food as a diplomatic tool to enhance cultural understanding and build lasting relations between nations.",
  },
];

function VideoCard({ video }: { video: typeof videos[number] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-xl">
      {video.label && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <p className="text-xs font-semibold text-white/70">{video.label}</p>
          {video.dur && (
            <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white/60">
              {video.dur}
            </span>
          )}
        </div>
      )}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        controls
        preload="none"
        poster={video.poster}
        className="aspect-video w-full"
        aria-label={video.label}
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default function TheAtriumPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[60vh] flex-col overflow-hidden bg-brand-dark text-white"
        aria-labelledby="atrium-heading"
      >
        {/* Diagonal texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 1px,transparent 14px)" }}
          aria-hidden="true"
        />
        {/* Gold atmospheric glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(55% 60% at 80% 15%, rgba(227,179,57,0.10), transparent)" }}
          aria-hidden="true"
        />

        <div className="relative h-[3px] flex-shrink-0 bg-gradient-to-r from-transparent via-gold/70 to-transparent" aria-hidden="true" />

        <div className="relative flex flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-16">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/50">
              <Link href="/" className="hover:text-gold">Home</Link>
              <Icon name="arrow" className="h-3 w-3" />
              <span className="text-white/80">The Atrium</span>
            </nav>

            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.30em] text-gold/80">
                Cultural Diplomacy Initiative
              </p>
              <h1 id="atrium-heading" className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                The Atrium
              </h1>
              <div className="mt-4 h-0.5 w-16 bg-gold" aria-hidden="true" />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                A distinguished space for cultural mediation, artistic expression, and diplomatic engagement
                at the heart of Nigeria&rsquo;s Ministry of Foreign Affairs.
              </p>

              <div className="mt-10 flex flex-wrap gap-10 border-t border-white/10 pt-8">
                {[
                  { value: "Dec 12, 2023", label: "Launch Date" },
                  { value: "73",           label: "Missions at Launch" },
                  { value: "5",            label: "Core Objectives" },
                  { value: "109+",         label: "Countries Engaged" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-2xl font-bold text-gold">{s.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FlagStripe className="relative h-1.5 flex-shrink-0" />
      </section>

      {/* ── INTRODUCTION + PROMO VIDEO ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">Introduction</p>
            <h2 className="mb-5 font-serif text-3xl font-bold text-brand-deep">
              Culture as the Fifth Pillar of Diplomacy
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-ink/80 md:text-base">
              <p>
                The Atrium Gallery at the Nigerian Ministry of Foreign Affairs is a distinguished space
                for cultural mediation, artistic expression, and diplomatic engagement. It serves as a hub
                for promoting cultural cooperation, fostering a deeper understanding of Nigeria&rsquo;s rich
                heritage, and strengthening bilateral relationships through art and cultural diplomacy.
              </p>
              <p>
                The Atrium is dedicated to operationalising President Bola Ahmed Tinubu&rsquo;s{" "}
                <strong className="text-brand-deep">4D Foreign Policy Doctrine</strong> — Democracy,
                Development, Demography, and Diaspora — by leveraging the power of art and culture to
                enhance diplomatic relations.
              </p>
              <p>
                It is a platform for projecting Nigeria&rsquo;s diverse culture, history, gastronomy, and
                heritage to visitors, dignitaries, and high-level diplomatic delegations before and after
                high-level meetings at the Ministry.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Launched",     value: "December 12, 2023" },
                { label: "Theme",        value: "\"Homecoming\"" },
                { label: "Location",     value: "MFA HQ, Abuja" },
                { label: "Expanding to", value: "New York Mission" },
              ].map((f) => (
                <div key={f.label} className="rounded-lg border border-line bg-mist px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">{f.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-deep">{f.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-brand-dark p-1 shadow-2xl">
            <VideoCard video={videos[0]} />
          </div>
        </div>
      </section>

      {/* ── 4D DOCTRINE + MINISTER VIDEO ──────────────────────────── */}
      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Purpose & Significance"
                title="Anchored in the 4D Doctrine"
                id="purpose"
                icon="globe"
                lead="The Atrium operationalises the 4D Foreign Policy Doctrine through the universal languages of art, culture and cuisine."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/80">
                <p>
                  The Atrium combines live and still art, digital displays, and exhibitions to offer a
                  unique experience that embodies each dimension of the 4D Doctrine — engaging visitors
                  across Democracy, Development, Demography and Diaspora themes through immersive
                  cultural storytelling.
                </p>
              </div>

              {/* 4D pillars inline */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Democracy", "Development", "Demography", "Diaspora"].map((d) => (
                  <div key={d} className="flex items-center gap-3 rounded-lg border border-brand/20 bg-white px-4 py-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-xs">
                      {d[0]}
                    </span>
                    <p className="text-sm font-semibold text-brand-deep">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-brand-dark p-1 shadow-2xl">
              <VideoCard video={videos[1]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHeading
          eyebrow="Strategic Framework"
          title="Five Objectives of The Atrium"
          id="objectives"
          icon="flag"
          lead="Five strategic pillars shape how The Atrium channels Nigeria's cultural assets into purposeful diplomatic engagement."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((obj) => (
            <li
              key={obj.title}
              className="group flex gap-4 rounded-xl border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <div className="flex shrink-0 flex-col items-center gap-1">
                <span className="text-[10px] font-bold text-brand/40">{obj.num}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={obj.icon} className="h-5 w-5" />
                </span>
              </div>
              <div>
                <h3 className="mb-1.5 font-serif text-sm font-bold text-brand-deep">{obj.title}</h3>
                <p className="text-xs leading-relaxed text-ink/70">{obj.desc}</p>
              </div>
            </li>
          ))}
          {/* Gastrodiplomacy spotlight tile */}
          <li className="flex flex-col justify-between rounded-xl border border-gold/30 bg-gradient-to-br from-brand-dark to-brand-deep p-6 text-white shadow-sm">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold/80">Spotlight</p>
              <h3 className="mb-2 font-serif text-base font-bold">Gastrodiplomacy</h3>
              <p className="text-xs leading-relaxed text-white/75">
                From suya and jollof rice to egusi soup — Nigeria&rsquo;s culinary heritage is a
                powerful diplomatic tool, shared at missions and receptions across 109 countries.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Jollof Rice", "Suya", "Egusi Soup", "Pounded Yam", "Zobo"].map((d) => (
                <span key={d} className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[11px] font-semibold text-gold">
                  {d}
                </span>
              ))}
            </div>
          </li>
        </ul>
      </section>

      {/* ── LAUNCH ────────────────────────────────────────────────── */}
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-gold/75">
                December 12, 2023
              </p>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                Launch of The MFA Atrium
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
                Themed <em>&ldquo;Homecoming&rdquo;</em>, the official inauguration gathered 73 members of the
                diplomatic community, organisations, and strategic partners to celebrate Nigeria&rsquo;s cultural
                heritage and foreign policy journey.
              </p>
            </div>
            <span className="rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-bold text-gold">
              73 Missions Present
            </span>
          </div>

          {/* Launch video — full width */}
          <div className="mx-auto max-w-3xl rounded-xl bg-black/40 p-1 ring-1 ring-white/10">
            <VideoCard video={videos[2]} />
          </div>
        </div>
      </section>

      {/* ── FUTURE PLANS ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            {/* Left — dark accent panel */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-brand-dark to-brand-deep p-8 text-white lg:p-10">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gold/80">
                Future Plans
              </p>
              <h2 className="font-serif text-2xl font-bold leading-snug">
                Cultural Diplomacy Expansion
              </h2>
              <div className="mt-4 h-0.5 w-12 bg-gold/60" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-base font-semibold text-white/85">
                Establishing an MFA Atrium in Nigeria&rsquo;s New York Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                The Honourable Minister of Foreign Affairs is set to replicate the MFA HQ Atrium at
                Nigeria&rsquo;s Permanent Mission in New York — extending Nigeria&rsquo;s cultural diplomacy
                footprint to one of the world&rsquo;s most important diplomatic hubs.
              </p>
            </div>
            {/* Right — checklist */}
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <p className="mb-6 text-sm font-semibold text-ink/60">This initiative will:</p>
              <ul className="space-y-4">
                {[
                  { icon: "flag"      as const, text: "Showcase Nigerian Art and Culture on the global stage" },
                  { icon: "users"     as const, text: "Enhance diplomatic relations at the United Nations" },
                  { icon: "globe"     as const, text: "Position Nigeria's cultural heritage in New York" },
                  { icon: "briefcase" as const, text: "Attract investment in Nigeria's creative industries" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    <p className="pt-1 text-sm leading-snug text-ink/80">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-line bg-mist p-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-brand-deep">Connect Through Culture</h2>
            <p className="mt-1 text-sm text-ink/75">
              For cultural diplomacy programmes, partnerships and event requests, reach the Ministry through our contact channels.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
            >
              Contact Us <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link
              href="https://foreignaffairs.gov.ng/the-atrium/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-bold text-brand hover:bg-white"
            >
              Official Site <Icon name="external" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
