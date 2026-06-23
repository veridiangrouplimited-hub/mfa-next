import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";
export const metadata: Metadata = {
  title: "Nigeria — Economy & Investment",
  description: "Nigeria's economy — Africa's largest, with unmatched opportunities in energy, agriculture, technology and manufacturing.",
};

const sectors: { icon: IconName; title: string; desc: string; stat: string }[] = [
  { icon: "briefcase", title: "Oil & Gas", stat: "~90% of exports", desc: "Nigeria is Africa's largest oil producer with proven reserves of ~37 billion barrels. The Dangote Refinery — the world's largest single-train refinery — is transforming the downstream sector." },
  { icon: "globe", title: "Agriculture", stat: "26% of GDP", desc: "Agriculture employs 70% of Nigerians. Key exports include sesame, cocoa, cashew, palm oil and groundnuts. The sector offers immense investment opportunities in agri-processing and cold-chain logistics." },
  { icon: "document", title: "Technology", stat: "$3B+ funding in 2021", desc: "Lagos is Africa's tech capital — home to unicorns like Flutterwave, Paystack and Andela. Nigeria's fintech sector is the most active on the continent, processing billions in transactions daily." },
  { icon: "building", title: "Manufacturing", stat: "9% of GDP", desc: "Government policy prioritises import-substitution industrialisation. Key growth areas include cement, food processing, textiles, pharmaceuticals and consumer goods." },
  { icon: "users", title: "Financial Services", stat: "Largest banking sector in Africa", desc: "Nigerian banks — including Zenith, GTB, Access and First Bank — operate across the continent. The Nigerian Exchange Group (NGX) is Africa's third-largest stock market by capitalisation." },
  { icon: "plane", title: "Infrastructure", stat: "$700B+ investment gap", desc: "Transportation, energy, water and digital infrastructure present Nigeria's largest investment opportunity. The federal government's infrastructure pipeline offers significant PPP prospects." },
];

const keyFacts = [
  { label: "GDP (nominal)", value: "~$450 billion" },
  { label: "GDP rank (Africa)", value: "#1" },
  { label: "GDP rank (global)", value: "~#27" },
  { label: "Annual FDI", value: "~$3–5 billion" },
  { label: "Exchange rate regime", value: "Unified floating rate" },
  { label: "Stock exchange", value: "Nigerian Exchange Group (NGX)" },
  { label: "Central bank", value: "Central Bank of Nigeria (CBN)" },
  { label: "Ease of business", value: "Improving (World Bank)" },
];

export default function NigeriaEconomyPage() {
  return (
    <>
      <PageHeader
        title="Economy & Investment"
        lead="Africa's largest economy — with 220 million consumers, abundant natural resources and a growing technology sector, Nigeria offers unmatched investment potential."
        crumbs={[{ label: "Nigeria", href: "/nigeria" }, { label: "Economy & Investment" }]}
      />

      {/* Key facts strip */}
      <div className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:grid-cols-4">
          {[
            { label: "GDP", value: "~$450B" },
            { label: "Population", value: "220M+" },
            { label: "Labour force", value: "80M+" },
            { label: "AfCFTA rank", value: "Top 3" },
          ].map((s) => (
            <div key={s.label} className="py-6 text-center">
              <p className="font-serif text-3xl font-bold text-brand">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Key economic facts */}
        <section className="mb-14">
          <SectionHeading eyebrow="Economic indicators" title="Economy at a Glance" id="facts" icon="briefcase" />
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyFacts.map((f) => (
              <div key={f.label} className="rounded border border-line bg-white p-4 shadow-sm">
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/50">{f.label}</dt>
                <dd className="mt-1 font-serif text-base font-bold text-brand-deep">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Sectors */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Investment opportunities"
            title="Key Sectors"
            id="sectors"
            icon="globe"
            lead="Nigeria's diversified economy spans energy, agriculture, technology, manufacturing, financial services and infrastructure — each sector offering compelling investment propositions."
          />
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <li key={s.title} className="flex flex-col rounded border border-line bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded bg-brand/10 text-brand">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="rounded bg-brand/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">{s.stat}</span>
                </div>
                <p className="mb-2 font-serif font-bold text-brand-deep">{s.title}</p>
                <p className="flex-1 text-sm text-ink/75">{s.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* AfCFTA note */}
        <section className="mb-14 rounded border border-gold/40 bg-gold/5 p-8">
          <div className="flex items-start gap-4">
            <Icon name="globe" className="mt-1 h-6 w-6 shrink-0 text-gold" />
            <div>
              <h2 className="font-serif text-lg font-bold text-brand-deep">Nigeria & the African Continental Free Trade Area</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">
                Nigeria ratified the African Continental Free Trade Area (AfCFTA) Agreement in 2019, joining a market of 1.4 billion people and a combined GDP of $3.4 trillion. The AfCFTA is progressively eliminating tariffs and non-tariff barriers across 54 African countries — making Nigeria a preferred hub for businesses seeking continental market access.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white">
          <div className="relative flex flex-wrap items-center justify-between gap-6 p-8">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">4D Doctrine — Development Pillar</p>
              <h2 className="font-serif text-xl font-bold">Ready to Invest in Nigeria?</h2>
              <p className="mt-1 text-sm text-white/80">Contact the Ministry's Department of Economic Diplomacy & Trade for investment facilitation and introductions.</p>
            </div>
            <Link href="/contact" className="rounded bg-gold px-6 py-3 text-sm font-bold text-brand-dark hover:bg-gold-dark">
              Contact Us <Icon name="arrow" className="inline h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
