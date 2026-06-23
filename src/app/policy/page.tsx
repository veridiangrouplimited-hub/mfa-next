import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Foreign Policy",
  description: "Nigeria's foreign policy under the 4D Doctrine — Demography, Development, Diaspora and Democracy.",
};

const pillars: { id: string; icon: IconName; title: string; color: string; paras: string[] }[] = [
  {
    id: "demography",
    icon: "users",
    title: "Demography",
    color: "from-brand to-brand-deep",
    paras: [
      "With over 220 million people and one of the world's youngest populations, Nigeria harnesses its demographic dividend as a strategic asset in global negotiations and partnerships.",
      "The Ministry works to ensure Nigeria's population size translates into influence at the UN, AU, and multilateral institutions, advocating for a permanent seat on the UN Security Council and reform of global governance structures.",
    ],
  },
  {
    id: "development",
    icon: "briefcase",
    title: "Development",
    color: "from-brand-deep to-brand-dark",
    paras: [
      "Economic diplomacy is at the heart of Nigeria's foreign engagement. The Ministry actively promotes inward investment, technology transfer and trade partnerships that accelerate domestic development.",
      "Through bilateral and multilateral frameworks, Nigeria attracts capital to key sectors including energy, agriculture, infrastructure, health and manufacturing — delivering the Renewed Hope agenda's promise of prosperity.",
    ],
  },
  {
    id: "diaspora",
    icon: "plane",
    title: "Diaspora",
    color: "from-brand to-brand-deep",
    paras: [
      "Over 17 million Nigerians live and work across the globe, contributing over $20 billion in remittances annually. The Ministry treats the diaspora not as a challenge to be managed but as an asset to be empowered.",
      "The diaspora pillar drives policy on citizen protection, dual citizenship, diaspora investment bonds, community engagement and the welfare of Nigerians abroad through a global network of diplomatic missions.",
    ],
  },
  {
    id: "democracy",
    icon: "scale",
    title: "Democracy",
    color: "from-brand-deep to-brand-dark",
    paras: [
      "Nigeria is committed to championing the values of good governance, rule of law, human rights and democratic accountability — both domestically and in its engagements with partner nations and international bodies.",
      "The Ministry advocates for democratic norms within the AU, ECOWAS and the UN, supports post-conflict stabilisation efforts across the continent, and strengthens partnerships with nations that share Nigeria's democratic values.",
    ],
  },
];

const priorities = [
  { icon: "globe" as IconName, title: "UN Security Council Reform", text: "Nigeria leads Africa's campaign for a permanent seat on the reformed UN Security Council." },
  { icon: "briefcase" as IconName, title: "Economic Diplomacy", text: "Attracting foreign direct investment and securing trade partnerships to drive domestic growth." },
  { icon: "users" as IconName, title: "Diaspora Empowerment", text: "Protecting and engaging 17 million Nigerians abroad as partners in national development." },
  { icon: "shield" as IconName, title: "Regional Security", text: "Leading ECOWAS peace and security efforts across West Africa." },
  { icon: "flag" as IconName, title: "Pan-African Leadership", text: "Championing African integration, the AfCFTA and continental prosperity." },
  { icon: "scale" as IconName, title: "Climate Diplomacy", text: "Representing Nigeria's interests in global climate negotiations and clean energy transitions." },
];

export default function PolicyPage() {
  return (
    <>
      <PageHeader
        title="Foreign Policy"
        lead="Nigeria's foreign policy under President Tinubu's Renewed Hope agenda — bold, principled and development-focused."
        crumbs={[{ label: "Policy" }]}
      />

      {/* 4D intro */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <SectionHeading
          eyebrow="Nigeria's foreign policy framework"
          title="The 4D Doctrine"
          id="4d"
          icon="globe"
          lead="Appointed by President Bola Ahmed Tinubu GCFR, the Honourable Minister of Foreign Affairs is implementing a foreign policy framework anchored on four strategic pillars that define Nigeria's place in the world."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.id} id={p.id} className="overflow-hidden rounded border border-line bg-white shadow-sm">
              <div className={`bg-gradient-to-r ${p.color} p-6 text-white`}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Pillar {i + 1}</span>
                </div>
                <h2 className="font-serif text-2xl font-bold">{p.title}</h2>
              </div>
              <div className="space-y-3 p-6 text-sm leading-relaxed text-ink/85">
                {p.paras.map((para, j) => <p key={j}>{para}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Priorities band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white">
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
          <SectionHeading
            eyebrow="Strategic priorities"
            title="Key Policy Priorities"
            id="priorities"
            tone="dark"
            lead="Alongside the 4D pillars, the Ministry pursues six core priorities that shape Nigeria's diplomatic agenda."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {priorities.map((p) => (
              <li key={p.title} className="rounded border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
                <Icon name={p.icon} className="mb-3 h-6 w-6 text-gold" />
                <h3 className="mb-1 font-serif text-base font-bold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-col items-start gap-6 rounded border border-line bg-mist p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-xl font-bold text-brand-deep">Explore Nigeria's Diplomatic Network</h2>
            <p className="mt-1 text-sm text-ink/75">Over 100 missions worldwide delivering the 4D Doctrine on the ground.</p>
          </div>
          <Link href="/missions" className="inline-flex shrink-0 items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep">
            View all missions <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
