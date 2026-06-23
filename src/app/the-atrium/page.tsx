import type { Metadata } from "next";
import Image from "next/image";
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
const MFA   = "https://foreignaffairs.gov.ng";

const videos = [
  {
    id:     "promo",
    src:    `${CLOUD}/Promotional_Short_Film_Compressed_edufwc.mp4`,
    poster: `${CLOUD}/so_auto/Promotional_Short_Film_Compressed_edufwc.jpg`,
    label:  "The Atrium — Promotional Film",
    dur:    "1:38",
  },
  {
    id:     "speech",
    src:    `${CLOUD}/HMFA_Speech_Compressed_rh21f7.mp4`,
    poster: `${CLOUD}/so_auto/HMFA_Speech_Compressed_rh21f7.jpg`,
    label:  "Minister's Address",
    dur:    "",
  },
  {
    id:     "launch",
    src:    `${CLOUD}/Highlights_of_Launch_Compressed_pbdj3n.mp4`,
    poster: `${CLOUD}/so_auto/Highlights_of_Launch_Compressed_pbdj3n.jpg`,
    label:  "Highlights of The Atrium Launch",
    dur:    "1:28",
  },
];

const objectives = [
  {
    img:   `${MFA}/images/objectives/4d-doctrine.png`,
    title: "Promote the 4D Doctrine",
    desc:  "Engage a wider audience in discussions surrounding Democracy, Development, Demography, and Diaspora through artistic and cultural exhibitions.",
  },
  {
    img:   `${MFA}/images/objectives/cultural-communication.png`,
    title: "Enhance Cultural Communication",
    desc:  "Showcase Nigeria's history, culture, policies, and values through visual storytelling and immersive diplomatic experiences.",
  },
  {
    img:   `${MFA}/images/objectives/international-trust.png`,
    title: "Foster International Trust and Cooperation",
    desc:  "Inform and educate other nations about Nigeria, strengthening global relationships built on mutual understanding.",
  },
  {
    img:   `${MFA}/images/objectives/intercultural-dialogue.png`,
    title: "Encourage Intercultural Dialogue",
    desc:  "Expand horizons by promoting international cultural collaborations and shared values across borders.",
  },
  {
    img:   `${MFA}/images/objectives/gastrodiplomacy.png`,
    title: "Leverage Gastrodiplomacy",
    desc:  "Utilise food as a diplomatic tool to enhance cultural understanding and build lasting relations between nations.",
  },
];

const launchPhotos = [
  { src: `${MFA}/images/top4d.png`,    alt: "Top view of The Atrium launch event" },
  { src: `${MFA}/images/dview4d.png`,  alt: "Diplomatic guests at The Atrium launch" },
  { src: `${MFA}/images/4dview.png`,   alt: "4D Doctrine exhibition at The Atrium" },
  { src: `${MFA}/images/iconic4d.png`, alt: "Iconic moment from The Atrium launch" },
];

const galleryPhotos = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `${MFA}/images/gallery/peekg${n}.jpg`,
  alt: `The Atrium Gallery — photo ${n}`,
}));

function VideoCard({ video }: { video: typeof videos[number] }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-black shadow-xl">
      {video.dur && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <p className="text-xs font-semibold text-white/70">{video.label}</p>
          <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white/60">
            {video.dur}
          </span>
        </div>
      )}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        controls
        preload="none"
        poster={video.poster}
        className="aspect-video w-full object-cover"
        aria-label={video.label}
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      {!video.dur && (
        <p className="border-t border-white/10 px-4 py-2.5 text-xs font-semibold text-white/70">
          {video.label}
        </p>
      )}
    </div>
  );
}

export default function TheAtriumPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[70vh] flex-col overflow-hidden bg-brand-dark text-white"
        aria-labelledby="atrium-heading"
      >
        <Image
          src={`${MFA}/images/atrium.jpg`}
          alt="The Atrium Gallery at the Ministry of Foreign Affairs, Abuja"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        {/* Gradient overlays */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(8,74,47,0.97) 0%, rgba(8,74,47,0.80) 45%, rgba(8,74,47,0.30) 100%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,74,47,0.90) 0%, transparent 40%)" }}
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

              <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
                {[
                  { value: "Dec 12, 2023", label: "Launch Date" },
                  { value: "73",           label: "Diplomatic Missions at Launch" },
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

      {/* ── INTRODUCTION + PROMO VIDEO ───────────────────────────── */}
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
                { label: "Launched",      value: "December 12, 2023" },
                { label: "Theme",         value: "\"Homecoming\"" },
                { label: "Location",      value: "MFA HQ, Abuja" },
                { label: "Expanding to",  value: "New York Mission" },
              ].map((f) => (
                <div key={f.label} className="rounded-lg border border-line bg-mist px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">{f.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-brand-deep">{f.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Promotional Film */}
          <div className="rounded-xl bg-brand-dark p-1 shadow-2xl">
            <VideoCard video={videos[0]} />
            <p className="mt-3 px-2 pb-2 text-center text-xs text-white/50">
              The Atrium — Official Promotional Film
            </p>
          </div>
        </div>
      </section>

      {/* ── 4D DOCTRINE + MINISTER VIDEO ─────────────────────────── */}
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
              <div className="mt-8 overflow-hidden rounded-xl border border-line shadow-md">
                <Image
                  src={`${MFA}/images/atrium4d.png`}
                  alt="The Atrium — 4D Doctrine exhibition"
                  width={600}
                  height={400}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Minister Speech Video */}
            <div className="rounded-xl bg-brand-dark p-1 shadow-2xl">
              <VideoCard video={videos[1]} />
              <p className="mt-3 px-2 pb-2 text-center text-xs text-white/50">
                The Honourable Minister of Foreign Affairs on The Atrium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHeading
          eyebrow="Strategic Framework"
          title="Five Objectives of The Atrium"
          id="objectives"
          icon="flag"
          lead="Five strategic pillars shape how The Atrium channels Nigeria's cultural assets into purposeful diplomatic engagement."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((obj, i) => (
            <li
              key={obj.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
            >
              <div className="relative h-40 w-full overflow-hidden bg-brand/5">
                <Image
                  src={obj.img}
                  alt={obj.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                <span className="absolute bottom-3 left-4 font-serif text-3xl font-bold text-white/30 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-serif text-sm font-bold text-brand-deep">{obj.title}</h3>
                <p className="flex-1 text-xs leading-relaxed text-ink/70">{obj.desc}</p>
              </div>
            </li>
          ))}
          {/* Sixth tile — gastrodiplomacy feature */}
          <li className="flex flex-col justify-between overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-brand-dark to-brand-deep p-6 text-white shadow-sm">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold/80">Spotlight</p>
              <h3 className="mb-3 font-serif text-base font-bold">Gastrodiplomacy</h3>
              <p className="text-xs leading-relaxed text-white/75">
                From suya and jollof rice to egusi soup — Nigeria&rsquo;s culinary heritage is a
                powerful diplomatic tool, shared at missions and receptions across 109 countries.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Jollof Rice", "Suya", "Egusi Soup", "Pounded Yam", "Zobo"].map((d) => (
                <span key={d} className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[11px] font-semibold text-gold">
                  {d}
                </span>
              ))}
            </div>
          </li>
        </ul>
      </section>

      {/* ── LAUNCH ───────────────────────────────────────────────── */}
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

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            {/* Launch highlight video */}
            <div className="rounded-xl bg-black/40 p-1 ring-1 ring-white/10">
              <VideoCard video={videos[2]} />
            </div>

            {/* 4 launch photos */}
            <div className="grid grid-cols-2 gap-3">
              {launchPhotos.map((p) => (
                <div key={p.src} className="relative overflow-hidden rounded-xl bg-brand/20">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={400}
                    height={280}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHeading
          eyebrow="The Atrium Gallery"
          title="Cultural Diplomacy in Action"
          id="gallery"
          icon="globe"
          lead="The Atrium has established itself as a dynamic hub for cultural diplomacy, artistic expression, and international engagement."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((p, i) => (
            <li
              key={p.src}
              className={`group relative overflow-hidden rounded-xl bg-mist ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={600}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center">
          <Link
            href="https://foreignaffairs.gov.ng/the-atrium/gallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand px-6 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            View Full Gallery <Icon name="external" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── FUTURE PLANS ─────────────────────────────────────────── */}
      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={`${MFA}/images/nyimg.png`}
                alt="Nigeria's New York Mission — future Atrium site"
                width={640}
                height={480}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/80 to-transparent p-6">
                <p className="text-sm font-bold text-gold">New York, USA</p>
                <p className="text-xs text-white/70">Nigeria Permanent Mission to the United Nations</p>
              </div>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                Future Plans
              </p>
              <h2 className="mb-4 font-serif text-3xl font-bold text-brand-deep">
                Cultural Diplomacy Expansion
              </h2>
              <h3 className="mb-4 font-serif text-lg font-semibold text-ink/80">
                Establishing an MFA Atrium in Nigeria&rsquo;s New York Mission
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-ink/75">
                The Honourable Minister of Foreign Affairs is set to replicate the MFA HQ Atrium at
                Nigeria&rsquo;s Permanent Mission in New York, further extending Nigeria&rsquo;s cultural
                diplomacy footprint to one of the world&rsquo;s most important diplomatic hubs.
              </p>
              <ul className="space-y-3">
                {[
                  "Showcase Nigerian Art and Culture on the global stage",
                  "Enhance diplomatic relations at the United Nations",
                  "Position Nigeria's cultural heritage in New York",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                      <Icon name="check" className="h-3 w-3 text-brand" />
                    </span>
                    <p className="text-sm text-ink/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-line bg-white p-8 shadow-sm">
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
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-bold text-brand hover:bg-mist"
            >
              Official Site <Icon name="external" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
