import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import TourismDestinations from "@/components/TourismDestinations";

export const metadata: Metadata = {
  title: "Tourism in Nigeria",
  description: "Discover Nigeria's natural wonders, heritage sites, national parks and cultural destinations across all six geopolitical zones.",
};

const practicalInfo = [
  { label: "Entry",                  value: "Visa on Arrival for eligible nationalities" },
  { label: "Best time to visit",     value: "November – March (dry season)" },
  { label: "Currency",               value: "Nigerian Naira (₦)" },
  { label: "Time zone",              value: "WAT (UTC+1)" },
  { label: "International airports", value: "Lagos, Abuja, Port Harcourt, Kano" },
  { label: "Driving",                value: "Right-hand traffic" },
];

export default function NigeriaTourismPage() {
  return (
    <>
      <PageHeader
        title="Tourism in Nigeria"
        lead="From sacred Yoruba forests to savanna wildlife parks, ancient bronzes to mountain plateaux — Nigeria is one of Africa's most compelling and diverse destinations."
        crumbs={[{ label: "Nigeria", href: "/nigeria" }, { label: "Tourism" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        <SectionHeading
          eyebrow="All six geopolitical zones"
          title="Top Attractions Across Nigeria"
          id="destinations"
          icon="map"
          lead="Nigeria's most significant cultural, natural and historical destinations — select a geopolitical zone to explore."
        />

        <TourismDestinations />

        {/* Practical info */}
        <section className="mb-14">
          <SectionHeading eyebrow="Planning your visit" title="Practical Information" id="practical" icon="plane" />
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practicalInfo.map((p) => (
              <div key={p.label} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/50">{p.label}</dt>
                <dd className="mt-1 font-semibold text-brand-deep">{p.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-line bg-mist p-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-brand-deep">Plan Your Visit to Nigeria</h2>
            <p className="mt-1 text-sm text-ink/80">
              Apply for a Nigeria visa or get entry requirement information through the nearest Nigerian mission.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/visa-passports" className="rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep">
              Visa Information
            </Link>
            <Link href="/missions" className="rounded-lg border border-line bg-white px-6 py-3 text-sm font-bold text-ink hover:border-brand hover:text-brand">
              Find a Mission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
