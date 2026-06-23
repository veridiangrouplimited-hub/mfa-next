import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Departments, Divisions & Units",
  description: "The organisational departments, divisions and units of the Federal Ministry of Foreign Affairs, Nigeria.",
};

type Dept = { name: string; abbr?: string; tagline: string; icon: string };

const depts: Dept[] = [
  { name: "Office of the Honourable Minister of Foreign Affairs", abbr: "OHMFA", tagline: "Leadership & Policy Direction", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ohmfa.svg" },
  { name: "Office of the Honourable Minister of State", abbr: "OHMS", tagline: "Policy Support & Diplomatic Coordination", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ohmfa2.svg" },
  { name: "Office of the Permanent Secretary", abbr: "OPS", tagline: "Administrative Oversight & Coordination", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ops.svg" },
  { name: "Administration Department", tagline: "Operational Support & Resource Management", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ad.svg" },
  { name: "African Affairs Department", tagline: "Regional Diplomacy & African Integration", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/aad.svg" },
  { name: "Planning, Research and Statistics Department", abbr: "PRS", tagline: "Policy Analysis & Strategic Insight", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/prs.svg" },
  { name: "Consular and Legal Department", tagline: "Citizen Services & International Law", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/consular.svg" },
  { name: "Economic, Trade and Investment Department", abbr: "ETID", tagline: "Economic Diplomacy & Investment Promotion", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/etid.svg" },
  { name: "Finance and Accounts Department", tagline: "Financial Stewardship & Accountability", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ops.svg" },
  { name: "Foreign Service Inspectorate Department", tagline: "Performance Audit & Compliance", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/fsid.svg" },
  { name: "International Organization Department", tagline: "Multilateral Engagement & Global Representation", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/iod.svg" },
  { name: "Protocol Department", tagline: "Diplomatic Protocol & Event Coordination", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/pd.svg" },
  { name: "Regions Department", tagline: "Geographic Diplomacy & Bilateral Relations", icon: "https://foreignaffairs.gov.ng/aboutpage/icons/rd.svg" },
];

const divisions = [
  { name: "Information & Public Diplomacy Division", tagline: "Media relations and public outreach" },
  { name: "Human Resources Division", tagline: "Recruitment, welfare and career management" },
  { name: "Legal Advisory Unit", tagline: "In-house legal counsel and treaty compliance" },
  { name: "Internal Audit Unit", tagline: "Fiduciary oversight and compliance verification" },
  { name: "ICT Unit", tagline: "Digital infrastructure and systems administration" },
];

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="Departments, Divisions & Units"
        lead="The Ministry's work is carried out through 13 specialised departments, each dedicated to a core aspect of Nigeria's foreign service — supported by a network of divisions and units."
        crumbs={[{ label: "About", href: "/about" }, { label: "Departments & Units" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Departments */}
        <section id="departments" className="mb-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Organisational structure"
            title="Departments"
            id="departments-heading"
            icon="building"
            lead="Nigeria's Ministry of Foreign Affairs operates through 13 departments — each responsible for a specific cluster of the nation's foreign policy functions."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {depts.map((d) => (
              <li
                key={d.name}
                className="group flex flex-col rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded bg-brand/5 p-2 transition-colors group-hover:bg-brand/10">
                  <img src={d.icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
                </div>
                <p className="mb-1 font-serif text-sm font-bold leading-tight text-brand-deep">
                  {d.abbr ?? d.name}
                </p>
                {d.abbr && (
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-ink/45">
                    {d.name}
                  </p>
                )}
                <p className="mt-auto text-xs leading-relaxed text-ink/65">{d.tagline}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="mb-16 h-px bg-line" aria-hidden="true" />

        {/* Divisions & Units */}
        <section id="divisions" className="mb-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Supporting functions"
            title="Divisions & Units"
            id="divisions-heading"
            icon="briefcase"
            lead="Cross-cutting divisions and specialised units that support the work of all departments across the Ministry."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((d) => (
              <li
                key={d.name}
                className="flex items-start gap-3 rounded border border-line bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon name="briefcase" className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand-deep">{d.name}</span>
                  <span className="mt-0.5 block text-xs text-ink/60">{d.tagline}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA band */}
        <section className="relative overflow-hidden rounded bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white">
          <div className="relative flex flex-wrap items-center justify-between gap-6 p-8">
            <div>
              <h2 className="font-serif text-xl font-bold">Agencies & Parastatals</h2>
              <p className="mt-1 text-sm text-white/80">
                Discover the specialised agencies and parastatals affiliated with the Ministry.
              </p>
            </div>
            <Link
              href="/about/agencies"
              className="rounded bg-gold px-6 py-3 text-sm font-bold text-brand-dark hover:bg-gold-dark"
            >
              View Agencies <Icon name="arrow" className="inline h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
