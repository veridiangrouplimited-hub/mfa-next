import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Diaspora Services",
  description: "Services for Nigerians living and working abroad — registration, dual citizenship and diaspora investment.",
};

const serviceCards: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "document",
    title: "Community Registration",
    desc: "Register with the nearest Nigerian mission to stay connected, receive alerts and access consular services faster.",
  },
  {
    icon: "users",
    title: "Dual Citizenship",
    desc: "Nigerian citizens who have naturalised abroad may apply to retain their Nigerian citizenship. Guidance on the Section 28 renunciation exemption.",
  },
  {
    icon: "briefcase",
    title: "Diaspora Investment",
    desc: "The Nigerian Diaspora Investment Initiative — remittance channels, investment bonds, real estate, SME partnerships and tax guidance.",
  },
  {
    icon: "bell",
    title: "Welfare & Emergencies",
    desc: "Support for Nigerians in difficult situations abroad — legal aid referrals, destitution assistance and repatriation.",
  },
  {
    icon: "plane",
    title: "Return Migration",
    desc: "Schemes to support Nigerians who wish to return and invest — including the NIDO network and government incentive programmes.",
  },
  {
    icon: "globe",
    title: "Diaspora Policy Engagement",
    desc: "Mechanisms for the diaspora to contribute to Nigerian policy through the Presidential Advisory Council and NiDCOM.",
  },
];

const stats = [
  { value: "17M+", label: "Nigerians abroad" },
  { value: "$20B+", label: "Annual remittances" },
  { value: "108", label: "Missions worldwide" },
  { value: "54", label: "Diaspora orgs registered" },
];

export default function DiasporaPage() {
  return (
    <>
      <PageHeader
        title="Diaspora Services"
        lead="The Ministry treats over 17 million Nigerians living abroad not as a challenge to be managed — but as a strategic asset to be empowered."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Diaspora" }]}
      />

      {/* Stats strip */}
      <div className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="py-6 text-center">
              <p className="font-serif text-3xl font-bold text-brand">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        <SectionHeading
          eyebrow="Serving Nigerians abroad"
          title="Diaspora Services"
          id="services"
          icon="users"
          lead="From dual citizenship to investment opportunities, the Ministry and its missions offer a range of services designed to keep Nigerians connected and empowered."
        />

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((s) => (
            <li key={s.title} className="rounded border border-line bg-white p-6 shadow-sm">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded bg-brand/10 text-brand">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mb-2 font-serif text-base font-bold text-brand-deep">{s.title}</h3>
              <p className="text-sm text-ink/75">{s.desc}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded border border-line bg-mist p-8">
          <h2 className="mb-2 font-serif text-xl font-bold text-brand-deep">Register with Your Nearest Mission</h2>
          <p className="mb-4 text-sm text-ink/80">Registration is free and helps missions communicate with you during emergencies, elections and policy consultations.</p>
          <Link href="/missions" className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep">
            Find your nearest mission <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white">
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">4D Doctrine — Diaspora Pillar</p>
            <h2 className="font-serif text-2xl font-bold">The Diaspora is Nigeria's Fifth Region</h2>
            <p className="mt-2 max-w-lg text-sm text-white/85">
              Under the 4D Foreign Policy Doctrine, the diaspora is elevated from a welfare concern to a strategic pillar of Nigeria's global engagement and domestic development.
            </p>
          </div>
          <Link href="/policy#diaspora" className="rounded bg-gold px-6 py-3 text-sm font-bold text-brand-dark hover:bg-gold-dark">
            Read the Policy
          </Link>
        </div>
      </section>
    </>
  );
}
