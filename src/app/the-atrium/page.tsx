import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "The Atrium",
  description: "The Atrium — Nigeria's cultural diplomacy initiative showcasing the country's rich heritage, gastrodiplomacy and the arts on the global stage.",
};

const objectives = [
  {
    icon: "flag" as const,
    title: "Cultural Exchange",
    desc: "Promote Nigeria's rich and diverse cultural heritage through diplomatic channels, fostering mutual understanding between Nigeria and its partners.",
  },
  {
    icon: "users" as const,
    title: "People-to-People Diplomacy",
    desc: "Build bridges between Nigerians at home and abroad, and between Nigeria and the peoples of the world, through art, music, cuisine and shared experience.",
  },
  {
    icon: "globe" as const,
    title: "Gastrodiplomacy",
    desc: "Use the universal language of food as a diplomatic tool — showcasing Nigeria's cuisine to the world to build goodwill and strengthen bilateral ties.",
  },
  {
    icon: "briefcase" as const,
    title: "Creative Economy",
    desc: "Highlight the contribution of Nigeria's Nollywood, Afrobeats and fashion industries to the global creative economy and attract investment in Nigeria's creative sectors.",
  },
  {
    icon: "shield" as const,
    title: "Soft Power",
    desc: "Deploy Nigeria's cultural assets as instruments of soft power — building Nigeria's image and reputation across the globe.",
  },
];

const galleryItems = [
  {
    title: "Afrobeats on the World Stage",
    category: "Music & Arts",
    desc: "Nigeria's globally dominant music genre takes centre stage as a powerful vehicle for cultural diplomacy.",
    color: "bg-brand/10",
    textColor: "text-brand",
  },
  {
    title: "Nollywood — Africa's Cinema Giant",
    category: "Film & Entertainment",
    desc: "The world's second-largest film industry, Nollywood reaches over 1 billion viewers across Africa and the diaspora.",
    color: "bg-gold/20",
    textColor: "text-brand-dark",
  },
  {
    title: "Nigerian Cuisine: A Culinary Journey",
    category: "Gastrodiplomacy",
    desc: "Suya, jollof rice, egusi soup and pounded yam — Nigeria's rich culinary tradition shared at diplomatic tables worldwide.",
    color: "bg-brand-deep/10",
    textColor: "text-brand-deep",
  },
  {
    title: "Fashion & Textile Heritage",
    category: "Fashion & Design",
    desc: "Aso-oke, adire and ankara textiles showcase Nigeria's vibrant artistry and are celebrated on international runways.",
    color: "bg-brand/10",
    textColor: "text-brand",
  },
  {
    title: "Visual Arts & Sculpture",
    category: "Visual Arts",
    desc: "From the Benin Bronzes to contemporary Nigerian art, our visual heritage commands global attention and respect.",
    color: "bg-gold/20",
    textColor: "text-brand-dark",
  },
  {
    title: "Cultural Festivals & Heritage Sites",
    category: "Tourism & Heritage",
    desc: "Festivals like Osun-Osogbo and Argungu Fishing Festival celebrate Nigeria's intangible cultural heritage.",
    color: "bg-brand-deep/10",
    textColor: "text-brand-deep",
  },
];

export default function TheAtriumPage() {
  return (
    <>
      <PageHeader
        title="The Atrium"
        lead="Nigeria's cultural diplomacy initiative — celebrating the arts, heritage, gastrodiplomacy and the creative power of the Nigerian people on the world stage."
        crumbs={[{ label: "The Atrium" }]}
      />

      {/* Launch banner */}
      <div className="border-b border-line bg-gradient-to-r from-brand-dark via-brand to-brand-deep text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-brand-dark">
              <Icon name="flag" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Launched December 12, 2023</p>
              <p className="mt-0.5 text-sm text-white/90">The Atrium was inaugurated by the Honourable Minister of Foreign Affairs as Nigeria&rsquo;s flagship cultural diplomacy platform.</p>
            </div>
          </div>
          <Link
            href="https://foreignaffairs.gov.ng/the-atrium/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded border border-white/30 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10"
          >
            Official Site <Icon name="external" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* About section */}
        <section className="mb-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">About The Atrium</p>
              <h2 className="mb-5 font-serif text-2xl font-bold text-brand-deep">Culture as Diplomacy</h2>
              <div className="space-y-4 text-sm leading-relaxed text-ink/85">
                <p>
                  The Atrium is the Ministry of Foreign Affairs&rsquo; dedicated cultural diplomacy initiative, designed to
                  harness the transformative power of Nigeria&rsquo;s arts, cuisine, fashion and creative industries as
                  instruments of international engagement.
                </p>
                <p>
                  Launched on December 12, 2023, The Atrium provides a platform where Nigerian culture is celebrated,
                  shared and deployed diplomatically — strengthening Nigeria&rsquo;s image and soft power across the globe.
                  Through exhibitions, cultural events at Nigerian missions, gastrodiplomacy dinners and creative industry
                  showcases, The Atrium brings the best of Nigeria to the world&rsquo;s diplomatic stages.
                </p>
                <p>
                  Nigeria&rsquo;s cultural assets — including Afrobeats, Nollywood, Afro-fusion cuisine, and world-class
                  contemporary art — represent a powerful diplomatic currency. The Atrium channels these assets into
                  purposeful engagement that builds goodwill, fosters understanding and advances Nigeria&rsquo;s national interests.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded border border-gold/40 bg-gradient-to-br from-brand-dark to-brand-deep p-6 text-white">
                <Icon name="globe" className="mb-3 h-8 w-8 text-gold" />
                <h3 className="mb-2 font-serif text-lg font-bold">Cultural Diplomacy</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  Culture is the fifth element of diplomacy. The Atrium deploys Nigeria&rsquo;s rich cultural heritage
                  to build lasting bonds between Nigeria and the international community.
                </p>
              </div>
              <div className="rounded border border-line bg-mist p-5">
                <dl className="space-y-3">
                  {[
                    { label: "Launched", value: "December 12, 2023" },
                    { label: "Strategic Objectives", value: "5 core pillars" },
                    { label: "Focus Areas", value: "Arts, Music, Cuisine, Film, Fashion" },
                    { label: "Reach", value: "91+ countries via Nigerian missions" },
                  ].map((f) => (
                    <div key={f.label} className="border-b border-line pb-3 last:border-0 last:pb-0">
                      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/50">{f.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Strategic framework"
            title="5 Objectives of The Atrium"
            id="objectives"
            icon="flag"
            lead="The Atrium is guided by five strategic objectives that shape how Nigeria engages with the world through culture."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((obj, i) => (
              <li key={obj.title} className="group flex gap-4 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 flex-col items-center">
                  <span className="mb-1 text-[10px] font-bold text-brand/50">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={obj.icon} className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="mb-1.5 font-serif text-sm font-bold text-brand-deep">{obj.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/70">{obj.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Gastrodiplomacy feature */}
        <section className="mb-16 overflow-hidden rounded border border-line bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-dark to-brand p-8 text-white lg:p-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gold">Spotlight</p>
              <h2 className="mb-4 font-serif text-2xl font-bold">Gastrodiplomacy</h2>
              <div className="space-y-3 text-sm leading-relaxed text-white/85">
                <p>
                  Food is a universal language. Through gastrodiplomacy, Nigeria&rsquo;s culinary heritage becomes
                  a powerful tool for building international relationships and promoting Nigeria&rsquo;s image abroad.
                </p>
                <p>
                  Nigerian missions worldwide host diplomatic dinners celebrating the country&rsquo;s diverse culinary
                  traditions — from the smoky delicacy of suya to the iconic jollof rice, from ofe onugbu soup to
                  the refreshing tang of zobo — each dish tells a story of Nigeria&rsquo;s rich culture.
                </p>
                <p>
                  These culinary events create memorable experiences that deepen diplomatic bonds and invite
                  foreign dignitaries, business leaders and cultural influencers to experience Nigeria&rsquo;s warmth
                  through its food.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line p-px">
              {[
                { dish: "Jollof Rice", region: "Nationwide" },
                { dish: "Suya", region: "Northern Nigeria" },
                { dish: "Egusi Soup", region: "South West" },
                { dish: "Pepper Soup", region: "South South" },
              ].map((item) => (
                <div key={item.dish} className="flex flex-col items-center justify-center bg-mist p-6 text-center">
                  <span className="mb-2 text-3xl" role="img" aria-label={item.dish}>🍲</span>
                  <p className="font-serif font-bold text-brand-deep">{item.dish}</p>
                  <p className="mt-0.5 text-[11px] text-ink/55">{item.region}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Cultural showcase"
            title="Nigeria's Creative Power"
            id="gallery"
            icon="globe"
            lead="From Afrobeats to Nollywood, from Aso-oke to Afro-fusion cuisine — Nigeria's creative industries are shaping global culture."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <li key={item.title} className={`rounded border border-line p-6 ${item.color}`}>
                <span className={`mb-3 block text-[10px] font-bold uppercase tracking-[0.18em] ${item.textColor}`}>
                  {item.category}
                </span>
                <h3 className="mb-2 font-serif text-sm font-bold text-brand-deep">{item.title}</h3>
                <p className="text-xs leading-relaxed text-ink/70">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="rounded border border-line bg-white p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-brand-deep">Connect Through Culture</h2>
              <p className="mt-1 text-sm text-ink/75">
                For cultural diplomacy programmes, partnerships and event requests, reach the Ministry through our contact channels.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
              >
                Contact Us <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href="https://foreignaffairs.gov.ng/the-atrium/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded border border-line px-5 py-2.5 text-sm font-bold text-brand hover:bg-mist"
              >
                Official Site <Icon name="external" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
