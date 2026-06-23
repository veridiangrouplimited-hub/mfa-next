import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Bilateral Relations",
  description: "Nigeria's bilateral diplomatic relationships with countries worldwide.",
};

type Partner = { flag: string; country: string; type: string; focus: string };

const keyPartners: Partner[] = [
  { flag: "🇺🇸", country: "United States", type: "Strategic Partnership", focus: "Security, trade, democracy, energy transition" },
  { flag: "🇬🇧", country: "United Kingdom", type: "Commonwealth Partnership", focus: "Trade, education, financial services, diaspora" },
  { flag: "🇨🇳", country: "China", type: "Comprehensive Strategic Partnership", focus: "Infrastructure, trade, manufacturing, energy" },
  { flag: "🇫🇷", country: "France", type: "Bilateral Partnership", focus: "Security cooperation, Francophone Africa, energy" },
  { flag: "🇩🇪", country: "Germany", type: "Development Partnership", focus: "Renewable energy, vocational training, trade" },
  { flag: "🇮🇳", country: "India", type: "Strategic Partnership", focus: "IT, pharmaceuticals, trade, diaspora" },
  { flag: "🇷🇺", country: "Russia", type: "Diplomatic Relations", focus: "Defence, energy, agriculture" },
  { flag: "🇯🇵", country: "Japan", type: "Partnership for Development", focus: "Infrastructure, technology, capacity building" },
  { flag: "🇿🇦", country: "South Africa", type: "Bilateral Relations", focus: "Regional leadership, trade, AfCFTA" },
  { flag: "🇰🇪", country: "Kenya", type: "East Africa Partnership", focus: "Tech sector collaboration, East African integration" },
  { flag: "🇸🇦", country: "Saudi Arabia", type: "Strategic Partnership", focus: "Energy, Islamic cooperation, investment" },
  { flag: "🇧🇷", country: "Brazil", type: "South-South Partnership", focus: "Agriculture, bioenergy, cultural diplomacy" },
];

const regions: { icon: IconName; title: string; missions: number; priority: string }[] = [
  { icon: "map", title: "Africa", missions: 42, priority: "Pan-African leadership, ECOWAS, AU, AfCFTA" },
  { icon: "globe", title: "Americas & Caribbean", missions: 18, priority: "US relations, Brazilian partnership, diaspora" },
  { icon: "building", title: "Europe", missions: 24, priority: "UK, EU, trade & development cooperation" },
  { icon: "plane", title: "Asia Pacific", missions: 16, priority: "China, India, Japan — economic & trade diplomacy" },
  { icon: "flag", title: "Middle East", missions: 8, priority: "OIC engagement, oil diplomacy, labour welfare" },
];

export default function BilateralPage() {
  return (
    <>
      <PageHeader
        title="Bilateral Relations"
        lead="Nigeria maintains active diplomatic relations with over 180 countries — from strategic great-power partnerships to vital South-South cooperation with fellow developing nations."
        crumbs={[{ label: "Policy", href: "/policy" }, { label: "Bilateral Relations" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Regions */}
        <section className="mb-14">
          <SectionHeading eyebrow="Geographic breakdown" title="Relations by Region" id="regions" icon="map" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {regions.map((r) => (
              <li key={r.title} className="rounded border border-line bg-white p-5 shadow-sm">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <p className="font-serif font-bold text-brand-deep">{r.title}</p>
                <p className="mt-1 text-2xl font-bold text-brand">{r.missions}</p>
                <p className="text-xs text-ink/60">missions</p>
                <p className="mt-2 text-xs text-ink/70">{r.priority}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Key bilateral partners */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Key partnerships"
            title="Strategic Bilateral Partners"
            id="partners"
            icon="globe"
            lead="Nigeria's bilateral diplomacy prioritises partnerships that deliver concrete development outcomes — trade, investment, security and diaspora welfare."
          />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyPartners.map((p) => (
              <li key={p.country} className="flex items-start gap-4 rounded border border-line bg-white p-5 shadow-sm">
                <span className="text-3xl" role="img" aria-label={p.country}>{p.flag}</span>
                <div>
                  <p className="font-serif font-bold text-brand-deep">{p.country}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-brand">{p.type}</p>
                  <p className="mt-1 text-xs text-ink/70">{p.focus}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Principles */}
        <section className="mb-14 rounded border border-line bg-mist p-8">
          <h2 className="mb-4 font-serif text-xl font-bold text-brand-deep">Guiding Principles of Bilateral Diplomacy</h2>
          <ul className="grid gap-3 sm:grid-cols-2 text-sm text-ink/85">
            {[
              "Non-interference in the internal affairs of other sovereign states",
              "Promotion of African unity and solidarity",
              "Respect for international law and the UN Charter",
              "Pursuit of concrete economic, security and humanitarian benefits for Nigeria",
              "Reciprocity in diplomatic relations and consular services",
              "Centrality of Africa in all Nigeria's foreign policy calculations",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {p}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/missions" className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep">
            Find a Mission <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/policy" className="inline-flex items-center gap-2 rounded border border-line px-5 py-2.5 text-sm font-bold text-ink hover:border-brand hover:text-brand">
            Back to Policy
          </Link>
        </div>
      </div>
    </>
  );
}
