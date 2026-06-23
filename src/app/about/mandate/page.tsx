import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Mandate, Mission & Vision",
  description: "The statutory mandate, mission statement and vision of Nigeria's Ministry of Foreign Affairs.",
};

const pillars = [
  {
    id: "mandate",
    label: "Mandate",
    accent: "border-gold",
    icon: "scale" as const,
    heading: "Our Statutory Mandate",
    eyebrow: "Legal basis",
    body: [
      "The Ministry of Foreign Affairs is the statutory facilitating organ of the Government charged with the primary responsibility of formulation, articulation, conduct, and execution of Nigeria's foreign policy.",
      "The Ministry derives its authority from the Nigerian Constitution, the Ministry of Foreign Affairs Act, and the express directives of the President and Commander-in-Chief of the Armed Forces of the Federal Republic of Nigeria.",
      "It provides institutional oversight to Nigeria's network of 109 diplomatic and consular missions and is the lead agency responsible for all bilateral and multilateral diplomatic engagements on behalf of the Federal Government.",
    ],
  },
  {
    id: "mission",
    label: "Mission",
    accent: "border-brand",
    icon: "globe" as const,
    heading: "Our Mission Statement",
    eyebrow: "Mission",
    body: [
      "To develop and manage the Ministry of Foreign Affairs around knowledgeable and committed staff, dynamic and client-friendly missions, and policies that deliver Nigeria's basic interests of peace and security, economic, social and cultural development, and respect, well-being, and prosperity for her citizens.",
    ],
  },
  {
    id: "vision",
    label: "Vision",
    accent: "border-brand-deep",
    icon: "shield" as const,
    heading: "Our Vision",
    eyebrow: "Vision",
    body: [
      "To facilitate the growth and development of Nigeria as one of the ten leading, most influential and respected nations of the world — a beacon of hope for Africa, the Black race, and the Developing World.",
    ],
  },
];

export default function MandatePage() {
  return (
    <>
      <PageHeader
        title="Mandate, Mission & Vision"
        lead="The Ministry of Foreign Affairs is the statutory organ charged with formulating, articulating, conducting and executing Nigeria's foreign policy."
        crumbs={[{ label: "About", href: "/about" }, { label: "Mandate, Mission & Vision" }]}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">

        {/* Anchor nav */}
        <nav aria-label="Jump to section" className="mb-12 flex flex-wrap gap-2">
          {pillars.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-ink/75 transition-colors hover:border-brand hover:text-brand"
            >
              {p.label}
            </a>
          ))}
        </nav>

        {/* Pillar sections */}
        <div className="space-y-16">
          {pillars.map((p) => (
            <section key={p.id} id={p.id} className="scroll-mt-24">
              <div className={`mb-6 rounded-l-none rounded border-l-4 ${p.accent} bg-mist px-6 py-5`}>
                <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                  <Icon name={p.icon} className="h-3.5 w-3.5" />
                  {p.eyebrow}
                </div>
                <h2 className="font-serif text-2xl font-bold text-brand-deep">{p.heading}</h2>
              </div>
              <div className="space-y-4">
                {p.body.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-ink/85 md:text-base">{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Cross-links */}
        <div className="mt-16 grid gap-4 border-t border-line pt-12 sm:grid-cols-3">
          {[
            { label: "Core Values",          href: "/about/core-values",  icon: "flag" as const,      desc: "The five values that guide our work" },
            { label: "Departments & Units",   href: "/about/departments",  icon: "building" as const,  desc: "Our organisational structure" },
            { label: "Agencies & Parastatals",href: "/about/agencies",     icon: "globe" as const,     desc: "Affiliated bodies and institutions" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-start gap-3 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={l.icon} className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-bold text-brand-deep group-hover:text-brand">{l.label}</span>
                <span className="mt-0.5 block text-xs text-ink/60">{l.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
