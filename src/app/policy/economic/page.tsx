import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Economic Diplomacy",
  description: "Nigeria's economic diplomacy strategy — attracting investment, promoting trade and supporting domestic development through foreign policy.",
};

const pillars: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "briefcase",
    title: "Foreign Direct Investment",
    desc: "The Ministry actively promotes Nigeria as a premier investment destination, coordinating with NIPC, BOI and sector regulators to facilitate FDI in manufacturing, energy, agriculture and digital infrastructure.",
  },
  {
    icon: "globe",
    title: "Trade Facilitation",
    desc: "Nigeria's diplomatic network promotes exports, negotiates preferential trade agreements and supports Nigerian businesses seeking market access abroad — particularly in the AfCFTA single market.",
  },
  {
    icon: "users",
    title: "Diaspora Remittances",
    desc: "With $20B+ in annual remittances, the Ministry works to reduce transfer costs, develop formal remittance channels and convert diaspora savings into productive domestic investment.",
  },
  {
    icon: "plane",
    title: "Energy Diplomacy",
    desc: "Nigeria leverages its position as Africa's largest oil and gas producer to negotiate energy partnerships, secure climate finance and shape global energy transition frameworks in Africa's interest.",
  },
  {
    icon: "flag",
    title: "Development Finance",
    desc: "The Ministry negotiates concessional loans, development grants and technical assistance packages from multilateral development banks, bilateral donors and sovereign wealth funds.",
  },
  {
    icon: "document",
    title: "Technology & Innovation",
    desc: "Economic diplomacy targets technology transfer, digital economy partnerships and innovation ecosystem investment — anchored by Nigeria's thriving Lagos tech sector and growing talent pool.",
  },
];

const milestones = [
  { year: "2005", event: "Paris Club debt write-off of $18 billion secured by Obasanjo government — a landmark economic diplomacy achievement." },
  { year: "2014", event: "Nigeria's GDP rebased to ~$510 billion — declared Africa's largest economy, resetting Nigeria's position in global economic diplomacy." },
  { year: "2019", event: "Nigeria ratifies the African Continental Free Trade Area (AfCFTA), opening Nigeria to a 1.4 billion-person market." },
  { year: "2021", event: "Nigeria-UK Enhanced Trade and Investment Partnership (ETIP) signed — the first of its kind post-Brexit." },
  { year: "2023", event: "Foreign exchange unification and fuel subsidy removal signal structural reforms attracting renewed investor interest." },
  { year: "2024", event: "4D Doctrine's Development pillar institutionalises economic diplomacy as a core foreign policy priority." },
];

export default function EconomicDiplomacyPage() {
  return (
    <>
      <PageHeader
        title="Economic Diplomacy"
        lead="Nigeria's diplomacy is development-centred — every bilateral and multilateral engagement is evaluated for its concrete benefit to Nigeria's economy and its people."
        crumbs={[{ label: "Policy", href: "/policy" }, { label: "Economic Diplomacy" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Intro */}
        <section className="mb-14 rounded border border-line bg-white p-8 shadow-sm">
          <div className="flex items-start gap-5">
            <Icon name="briefcase" className="mt-1 h-8 w-8 shrink-0 text-brand" />
            <div>
              <h2 className="mb-3 font-serif text-xl font-bold text-brand-deep">The Development Pillar</h2>
              <p className="text-sm leading-relaxed text-ink/85">
                Economic diplomacy sits at the heart of the 4D Foreign Policy Doctrine. Under this framework, Nigeria's Ministry of Foreign Affairs sees every embassy, high commission and consulate not just as a diplomatic post but as a commercial and investment promotion office — a forward presence for Nigeria's economic interests in every country where it operates.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/85">
                The goal is to ensure that Nigeria's diplomatic capital translates into measurable economic outcomes: inward investment, export market access, technology transfer, development finance and diaspora remittances channelled into productive enterprise.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="mb-14">
          <SectionHeading eyebrow="Strategy" title="Six Pillars of Economic Diplomacy" id="pillars" icon="globe" />
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.title} className="rounded border border-line bg-white p-6 shadow-sm">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <p className="mb-2 font-serif font-bold text-brand-deep">{p.title}</p>
                <p className="text-sm text-ink/75">{p.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Milestones */}
        <section className="mb-14">
          <SectionHeading eyebrow="Track record" title="Key Economic Diplomacy Milestones" id="milestones" icon="document" />
          <ol className="mt-6 space-y-4">
            {milestones.map((m) => (
              <li key={m.year} className="flex items-start gap-5 rounded border border-line bg-white p-5 shadow-sm">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-brand text-sm font-bold text-white">{m.year}</span>
                <p className="self-center text-sm text-ink/85">{m.event}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Dark CTA */}
        <section className="relative overflow-hidden rounded bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white">
          <div className="relative flex flex-wrap items-center justify-between gap-6 p-8">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">Invest in Nigeria</p>
              <h2 className="font-serif text-xl font-bold">Ready to Explore Business Opportunities?</h2>
              <p className="mt-1 text-sm text-white/80">Contact the Ministry's Department of Economic Diplomacy & Trade or the nearest mission to begin.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/nigeria/economy" className="rounded bg-gold px-6 py-3 text-sm font-bold text-brand-dark hover:bg-gold-dark">
                Nigeria Economy
              </Link>
              <Link href="/contact" className="rounded border border-white/50 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
