import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Agencies & Parastatals",
  description: "The agencies and parastatals under the supervision of Nigeria's Federal Ministry of Foreign Affairs.",
};

type Agency = { name: string; abbr: string; tagline: string; icon: string; href: string; desc: string };

const agencies: Agency[] = [
  {
    name: "Foreign Service Academy",
    abbr: "FSA",
    tagline: "Diplomatic Training & Professional Development",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/fsa.svg",
    href: "https://foreignaffairs.gov.ng",
    desc: "The FSA is responsible for training Nigerian diplomats and foreign service officers — equipping them with the skills, knowledge and protocol required for effective international representation.",
  },
  {
    name: "Nigeria Institute of International Affairs",
    abbr: "NIIA",
    tagline: "Africa's Premier Foreign Policy Think Tank",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/niia.svg",
    href: "https://niia.gov.ng",
    desc: "Established in 1961, the NIIA is Africa's foremost foreign policy research institute — publishing scholarship, hosting conferences and informing national foreign policy debates.",
  },
  {
    name: "Nigerian Institute for Peace and Conflict Resolution",
    abbr: "NIPCR",
    tagline: "Peacebuilding & Conflict Management",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/nipcr.svg",
    href: "https://ipcr.gov.ng",
    desc: "NIPCR advances peace research, early warning, mediation and conflict resolution — operationalising Nigeria's commitment to peace on the continent and globally.",
  },
  {
    name: "Nigerians in Diaspora Commission",
    abbr: "NiDCOM",
    tagline: "Diaspora Engagement & Welfare Protection",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/nidcom.svg",
    href: "https://nidcom.gov.ng",
    desc: "NiDCOM coordinates the engagement, mobilisation and support of over 17 million Nigerians living abroad — treating the diaspora as Nigeria's fifth geopolitical zone.",
  },
  {
    name: "Technical Aid Corps",
    abbr: "TAC",
    tagline: "South–South Technical Cooperation",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/tac.svg",
    href: "https://foreignaffairs.gov.ng",
    desc: "The TAC deploys Nigerian professionals — doctors, teachers, engineers and more — to developing nations as a concrete expression of Nigeria's commitment to South–South cooperation.",
  },
  {
    name: "Directorate of Technical Co-Operation in Africa",
    abbr: "DTCA",
    tagline: "Technical Aid & Continental Cooperation",
    icon: "https://foreignaffairs.gov.ng/aboutpage/icons/fsa.svg",
    href: "https://dtca.gov.ng",
    desc: "DTCA coordinates and manages technical assistance programmes across Africa — channelling Nigeria's development expertise to support capacity building on the continent.",
  },
];

export default function AgenciesPage() {
  return (
    <>
      <PageHeader
        title="Agencies & Parastatals"
        lead="Six specialised agencies and parastatals extend the Ministry's reach — focusing on training, research, peacebuilding, diaspora engagement and technical cooperation across Africa and the world."
        crumbs={[{ label: "About", href: "/about" }, { label: "Agencies & Parastatals" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        <SectionHeading
          eyebrow="Affiliated bodies"
          title="Agencies under the Ministry"
          id="agencies-heading"
          icon="globe"
          lead="These institutions operate under the supervision of the Federal Ministry of Foreign Affairs, each fulfilling a distinct dimension of Nigeria's international engagement."
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agencies.map((a) => (
            <li key={a.abbr}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                {/* Logo + name row */}
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-brand/5 p-2 transition-colors group-hover:bg-brand/10">
                    <img src={a.icon} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
                  </div>
                  <div>
                    <p className="font-serif text-base font-bold leading-tight text-brand-deep group-hover:text-brand">
                      {a.abbr}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink/45">
                      {a.tagline}
                    </p>
                  </div>
                </div>

                {/* Full name */}
                <p className="mb-2 text-[11px] font-medium text-ink/60">{a.name}</p>

                {/* Description */}
                <p className="flex-1 text-sm leading-relaxed text-ink/75">{a.desc}</p>

                {/* Visit link */}
                <p className="mt-4 flex items-center gap-1.5 text-xs font-bold text-brand group-hover:underline">
                  Visit {a.abbr} <Icon name="external" className="h-3.5 w-3.5" />
                </p>
              </a>
            </li>
          ))}
        </ul>

        {/* Cross-link CTA */}
        <div className="mt-16 grid gap-4 border-t border-line pt-12 sm:grid-cols-2">
          <Link
            href="/about/departments"
            className="group flex items-start gap-3 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon name="building" className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold text-brand-deep group-hover:text-brand">Departments & Units</span>
              <span className="mt-0.5 block text-xs text-ink/60">Explore the Ministry's internal organisational structure</span>
            </span>
          </Link>
          <Link
            href="/about/mandate"
            className="group flex items-start gap-3 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon name="scale" className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold text-brand-deep group-hover:text-brand">Mandate, Mission & Vision</span>
              <span className="mt-0.5 block text-xs text-ink/60">The legal basis and guiding purpose of the Ministry</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
