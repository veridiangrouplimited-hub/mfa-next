import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Departments, Divisions & Units",
  description: "The organisational departments, divisions and units of the Federal Ministry of Foreign Affairs, Nigeria.",
};

type Dept = {
  name: string;
  tagline: string;
  icon: string;
  mandate: string;
  divisions: string[];
  units: string[];
};

const depts: Dept[] = [
  {
    name: "Office of the Honourable Minister of Foreign Affairs",
    tagline: "Leadership & Policy Direction",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ohmfa.svg",
    mandate: "The apex office of the Ministry's organogram. Facilitates the day-to-day operations of the Minister and ensures the effective representation of Nigeria on the global stage.",
    divisions: ["Special Duties Division", "Ministerial Correspondence Division"],
    units: ["Protocol Unit", "Public Communications Unit"],
  },
  {
    name: "Office of the Honourable Minister of State",
    tagline: "Policy Support & Diplomatic Coordination",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ohmfa2.svg",
    mandate: "Supports the Minister of State in coordinating diplomatic activities and policy implementation across the Ministry.",
    divisions: ["Policy Coordination Division"],
    units: ["Public Liaison Unit", "Scheduling & Correspondence Unit"],
  },
  {
    name: "Office of the Permanent Secretary",
    tagline: "Administrative Oversight & Coordination",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ops.svg",
    mandate: "Provides administrative leadership and operational oversight across all departments, divisions and units of the Ministry.",
    divisions: ["Internal Management Division"],
    units: ["Legal Advisory Unit", "Internal Audit Unit"],
  },
  {
    name: "Administration Department",
    tagline: "Operational Support & Resource Management",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ad.svg",
    mandate: "Responsible for the overall administration of the Ministry including personnel management, general services and logistical support.",
    divisions: ["Human Resources Division", "General Services Division", "Transport & Logistics Division"],
    units: ["Records Management Unit", "Information & Communications Technology Unit"],
  },
  {
    name: "African Affairs Department",
    tagline: "Regional Diplomacy & African Integration",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/aad.svg",
    mandate: "Manages Nigeria's bilateral and multilateral diplomatic relations across the African continent, including African Union affairs.",
    divisions: ["West Africa Division", "East Africa Division", "Southern Africa Division", "North Africa Division", "Central Africa Division"],
    units: ["African Union Affairs Unit"],
  },
  {
    name: "Planning, Research and Statistics Department",
    tagline: "Policy Analysis & Strategic Insight",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/prs.svg",
    mandate: "Provides research, analysis and statistical data to guide foreign policy formulation and strategic planning across the Ministry.",
    divisions: ["Research & Analysis Division", "Statistics & Data Division"],
    units: ["Policy Documentation Unit", "Strategic Planning Unit"],
  },
  {
    name: "Consular and Legal Department",
    tagline: "Citizen Services & International Law",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/consular.svg",
    mandate: "Administers consular services for Nigerians abroad and handles international legal matters, treaty obligations and nationality affairs.",
    divisions: ["Consular Services Division", "Legal Affairs Division"],
    units: ["Nationality & Citizenship Unit", "Treaty & Conventions Unit", "Visa Processing Unit"],
  },
  {
    name: "Economic, Trade and Investment Department",
    tagline: "Economic Diplomacy & Investment Promotion",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/etid.svg",
    mandate: "Drives Nigeria's economic diplomacy agenda — promoting trade, attracting foreign direct investment and managing commercial attaché functions at missions.",
    divisions: ["Trade & Commerce Division", "Investment Promotion Division"],
    units: ["Economic Intelligence Unit", "Commercial Attaché Coordination Unit"],
  },
  {
    name: "Finance and Accounts Department",
    tagline: "Financial Stewardship & Accountability",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/ops.svg",
    mandate: "Manages the Ministry's budgetary resources, financial transactions, payroll and ensures compliance with public finance regulations.",
    divisions: ["Budget & Planning Division", "Accounts & Payments Division"],
    units: ["Internal Control Unit", "Revenue & Remittance Unit"],
  },
  {
    name: "Foreign Service Inspectorate Department",
    tagline: "Performance Audit & Compliance",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/fsid.svg",
    mandate: "Conducts periodic inspections and performance assessments of Nigerian diplomatic missions worldwide to ensure compliance with established standards.",
    divisions: ["Mission Inspection Division", "Compliance & Standards Division"],
    units: ["Performance Evaluation Unit"],
  },
  {
    name: "International Organization Department",
    tagline: "Multilateral Engagement & Global Representation",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/iod.svg",
    mandate: "Coordinates Nigeria's engagement with international and multilateral organisations including the United Nations, Commonwealth, and African Union bodies.",
    divisions: ["United Nations System Division", "Commonwealth & ECOWAS Division", "Specialised Agencies Division"],
    units: ["Treaty & Convention Unit", "Multilateral Affairs Unit"],
  },
  {
    name: "Protocol Department",
    tagline: "Diplomatic Protocol & Event Coordination",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/pd.svg",
    mandate: "Manages all matters of diplomatic protocol at the federal level — including state visits, accreditation of foreign diplomats and official ceremonies.",
    divisions: ["State Protocol Division", "Diplomatic Corps Affairs Division"],
    units: ["Accreditation & Credentials Unit", "VIP & State Visits Unit"],
  },
  {
    name: "Regions Department",
    tagline: "Geographic Diplomacy & Bilateral Relations",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/rd.svg",
    mandate: "Oversees Nigeria's bilateral diplomatic relations outside Africa — covering the Americas, Europe, Asia-Pacific and the Middle East.",
    divisions: ["Americas & Caribbean Division", "Europe Division", "Asia-Pacific Division", "Middle East & Gulf Division"],
    units: ["Bilateral Relations Coordination Unit"],
  },
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

          <ul className="mt-8 space-y-5">
            {depts.map((d, i) => (
              <li
                key={d.name}
                className="overflow-hidden rounded border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Department header */}
                <div className="flex items-start gap-5 border-b border-line/60 bg-mist/40 px-6 py-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand/8 p-2">
                    <img src={d.icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                      <h2 className="font-serif text-base font-bold leading-snug text-brand-deep">
                        {d.name}
                      </h2>
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold">{d.tagline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{d.mandate}</p>
                  </div>
                </div>

                {/* Divisions & Units */}
                <div className="grid gap-0 sm:grid-cols-2">
                  {/* Divisions */}
                  <div className="border-b border-line/40 px-6 py-4 sm:border-b-0 sm:border-r">
                    <h3 className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                      <Icon name="briefcase" className="h-3.5 w-3.5" />
                      Divisions
                    </h3>
                    {d.divisions.length > 0 ? (
                      <ul className="space-y-1.5">
                        {d.divisions.map((div) => (
                          <li key={div} className="flex items-start gap-2 text-sm text-ink/80">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/40" aria-hidden="true" />
                            {div}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-ink/40 italic">Nil</p>
                    )}
                  </div>

                  {/* Units */}
                  <div className="px-6 py-4">
                    <h3 className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                      <Icon name="building" className="h-3.5 w-3.5" />
                      Units
                    </h3>
                    {d.units.length > 0 ? (
                      <ul className="space-y-1.5">
                        {d.units.map((unit) => (
                          <li key={unit} className="flex items-start gap-2 text-sm text-ink/80">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" aria-hidden="true" />
                            {unit}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-ink/40 italic">Nil</p>
                    )}
                  </div>
                </div>
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
