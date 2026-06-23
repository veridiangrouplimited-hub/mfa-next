import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Travel Advisory",
  description: "Official travel advisories and safety guidance for Nigerian citizens travelling abroad.",
};

type Level = { level: number; label: string; color: string; bg: string; desc: string };

const levels: Level[] = [
  { level: 1, label: "Normal", color: "text-green-700", bg: "bg-green-50 border-green-200", desc: "Exercise normal travel precautions." },
  { level: 2, label: "Caution", color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200", desc: "Exercise increased caution. Check local conditions." },
  { level: 3, label: "Reconsider", color: "text-orange-700", bg: "bg-orange-50 border-orange-200", desc: "Reconsider travelling to this country." },
  { level: 4, label: "Do Not Travel", color: "text-red-700", bg: "bg-red-50 border-red-200", desc: "Do not travel. Avoid this country for non-essential travel." },
];

const tips = [
  { icon: "document" as const, title: "Carry copies of all documents", desc: "Keep digital and physical copies of your passport, visa, insurance card and emergency contacts." },
  { icon: "bell" as const, title: "Register with the nearest mission", desc: "Let the Nigerian mission know you are in-country so they can reach you in an emergency." },
  { icon: "shield" as const, title: "Get travel insurance", desc: "Comprehensive travel and health insurance is essential. Ensure it covers medical evacuation." },
  { icon: "globe" as const, title: "Know your destination laws", desc: "Research local laws and customs, especially on photography, dress code and controlled substances." },
  { icon: "phone" as const, title: "Save emergency numbers", desc: "Save the local emergency number, your travel insurer's helpline and the nearest Nigerian mission's number." },
  { icon: "plane" as const, title: "Monitor flight and visa conditions", desc: "Check airline notices and destination entry requirements before departure and before your return." },
];

export default function TravelAdvisoryPage() {
  return (
    <>
      <PageHeader
        title="Travel Advisory"
        lead="Official safety and travel advisories for Nigerian citizens travelling abroad. Updated regularly by the Ministry of Foreign Affairs."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Travel Advisory" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Alert levels */}
        <section className="mb-14">
          <SectionHeading eyebrow="How we rate destinations" title="Advisory Levels" id="levels" icon="shield" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map((l) => (
              <li key={l.level} className={`rounded border p-5 ${l.bg}`}>
                <p className={`mb-1 font-serif text-2xl font-bold ${l.color}`}>Level {l.level}</p>
                <p className={`mb-2 font-bold ${l.color}`}>{l.label}</p>
                <p className="text-sm text-ink/75">{l.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Current advisories notice */}
        <section className="mb-14 rounded border border-line bg-mist p-8">
          <div className="flex items-start gap-4">
            <Icon name="bell" className="mt-1 h-6 w-6 shrink-0 text-brand" />
            <div>
              <h2 className="font-serif text-xl font-bold text-brand-deep">Current Advisories</h2>
              <p className="mt-2 text-sm text-ink/80">
                Country-specific advisories are maintained on the Ministry's official portal. These are updated as security situations evolve. Before travelling, always check the latest advisory for your destination.
              </p>
              <p className="mt-3 text-sm font-semibold text-brand">
                For the most current advisories, visit the Ministry of Foreign Affairs at{" "}
                <span className="font-normal text-ink/70">mfa.gov.ng</span> or contact your nearest Nigerian mission.
              </p>
            </div>
          </div>
        </section>

        {/* Travel tips */}
        <section className="mb-14">
          <SectionHeading eyebrow="Before you travel" title="Travel Safety Tips" id="tips" icon="plane" />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((t) => (
              <li key={t.title} className="flex items-start gap-4 rounded border border-line bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-deep">{t.title}</p>
                  <p className="mt-1 text-sm text-ink/70">{t.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded border border-line bg-mist p-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-brand-deep">In distress while abroad?</h2>
            <p className="mt-1 text-sm text-ink/80">Our 24/7 consular assistance team is ready to help Nigerians facing emergencies anywhere in the world.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/consular-assistance" className="rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep">
              Get Consular Help
            </Link>
            <Link href="/missions" className="rounded border border-line bg-white px-6 py-3 text-sm font-bold text-ink hover:border-brand hover:text-brand">
              Find a Mission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
