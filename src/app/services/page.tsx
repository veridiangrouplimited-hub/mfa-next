import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Consular Services",
  description: "Visas, passports, document authentication and consular assistance from the Ministry of Foreign Affairs.",
};

type Service = {
  icon: IconName;
  title: string;
  href: string;
  desc: string;
  tags: string[];
  cta: string;
};

const services: Service[] = [
  {
    icon: "passport",
    title: "Visa & Passports",
    href: "/services/visa-passports",
    desc: "Apply for a Nigerian passport, renew an existing one, or get information on visa requirements for travel to Nigeria.",
    tags: ["Nigerian Passport", "Passport Renewal", "Visa on Arrival", "e-Visa"],
    cta: "Apply now",
  },
  {
    icon: "document",
    title: "Document Authentication",
    href: "/services/document-authentication",
    desc: "Legalise certificates, affidavits, corporate documents and other records for use abroad. We handle apostilles and notarisation.",
    tags: ["Apostille", "Notarisation", "Birth Certificate", "Corporate Docs"],
    cta: "Get started",
  },
  {
    icon: "shield",
    title: "Consular Services",
    href: "/services/consular-assistance",
    desc: "Consular support for Nigerians overseas — lost passport replacement, legal assistance, welfare support, and citizen registration.",
    tags: ["Lost Passport", "Repatriation", "Citizen Registration", "Welfare Support"],
    cta: "Learn more",
  },
  {
    icon: "users",
    title: "Diaspora Services",
    href: "/services/diaspora",
    desc: "Services for Nigerians living and working abroad — community registration, diaspora investment, dual citizenship guidance.",
    tags: ["Dual Citizenship", "Community Registration", "Diaspora Bond", "Welfare"],
    cta: "Learn more",
  },
  {
    icon: "plane",
    title: "Travel Advisory",
    href: "/services/travel-advisory",
    desc: "Official safety and travel advisories for Nigerians travelling abroad, updated regularly by the Ministry.",
    tags: ["Safety Alerts", "Country Guides", "Health Requirements", "Insurance"],
    cta: "View advisories",
  },
];

const quickLinks = [
  { label: "Book an appointment", icon: "bell" as IconName, href: "/services/visa-passports#appointment" },
  { label: "Check application status", icon: "document" as IconName, href: "/services/visa-passports#status" },
  { label: "Consular services", icon: "shield" as IconName, href: "/services/consular-assistance" },
  { label: "Download forms", icon: "arrow" as IconName, href: "/services/visa-passports#forms" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Ministry Services"
        lead="The Ministry of Foreign Affairs provides a full range of services to Nigerian citizens and foreign nationals — from passports and visas to document authentication and consular support."
        crumbs={[{ label: "Services" }]}
      />

      {/* Quick links strip */}
      <div className="border-b border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-4">
          {quickLinks.map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className="inline-flex items-center gap-2 rounded border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm transition-all hover:border-brand hover:text-brand"
            >
              <Icon name={q.icon} className="h-4 w-4 text-brand" />
              {q.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeading
          eyebrow="How can we help?"
          title="All Services"
          id="services"
          icon="passport"
          lead="Select the service you need. All services are available at Nigerian embassies and high commissions worldwide."
        />

        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="mb-2 font-serif text-lg font-bold text-brand-deep">{s.title}</span>
                <span className="mb-4 flex-1 text-sm leading-relaxed text-ink/75">{s.desc}</span>
                <ul className="mb-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded bg-brand/8 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand">
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  {s.cta} <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Diplomatic Missions CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white">
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">Global Presence</p>
            <h2 className="font-serif text-2xl font-bold">Need to Reach a Nigerian Mission?</h2>
            <p className="mt-2 max-w-lg text-sm text-white/85">
              Nigeria maintains 109 missions worldwide. Find your nearest embassy, high commission or consulate for in-person consular and passport services.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/missions"
              className="rounded bg-gold px-6 py-3 text-sm font-bold text-brand-dark hover:bg-gold-dark"
            >
              Find a Mission
            </Link>
            <Link
              href="/contact"
              className="rounded border border-white/50 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Contact the Ministry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
