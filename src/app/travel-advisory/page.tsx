import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Travel Advisories",
  description: "Official travel advisories from Nigeria's Ministry of Foreign Affairs — safety information for Nigerians abroad and for foreigners visiting Nigeria.",
};

const nigerianAbroadTips = [
  {
    icon: "building" as const,
    title: "Register with the Nearest Mission",
    desc: "Register your presence with the nearest Nigerian Embassy or High Commission upon arrival in a foreign country. This helps the mission reach you quickly in case of an emergency.",
  },
  {
    icon: "document" as const,
    title: "Keep Your Documents Safe",
    desc: "Always keep your passport, travel documents and important identification safe. Make digital copies and store them separately from the originals.",
  },
  {
    icon: "phone" as const,
    title: "Save Emergency Contacts",
    desc: "Save the contact details of the nearest Nigerian mission, local emergency services, and the Ministry's 24-hour hotline before travelling.",
  },
  {
    icon: "shield" as const,
    title: "Know Local Laws",
    desc: "Familiarise yourself with the laws and customs of your host country before travelling. What is acceptable in Nigeria may be illegal elsewhere — ignorance is not a legal defence.",
  },
  {
    icon: "map" as const,
    title: "Monitor Travel Warnings",
    desc: "Check for any security advisories, civil unrest or conflict zones in your destination country before and during your stay. Register for alerts from Nigerian missions.",
  },
  {
    icon: "users" as const,
    title: "Stay in Touch",
    desc: "Inform family members of your travel plans, accommodation details and local contact numbers. Check in regularly, especially during periods of instability.",
  },
];

const visitingNigeriaTips = [
  {
    icon: "passport" as const,
    title: "Entry Requirements",
    desc: "Ensure your passport is valid for at least six months beyond your intended stay. Obtain the appropriate visa before arrival or check eligibility for Visa-on-Arrival or e-Visa.",
  },
  {
    icon: "shield" as const,
    title: "Health Precautions",
    desc: "Consult a travel health clinic well in advance of travel. Yellow fever vaccination is mandatory for entry into Nigeria. Ensure all recommended vaccinations are up to date.",
  },
  {
    icon: "map" as const,
    title: "Know Your Destination",
    desc: "Nigeria is a large and diverse country. While major cities like Lagos and Abuja are generally safe for visitors, some regions may have elevated security risks. Research your specific destination.",
  },
  {
    icon: "document" as const,
    title: "Respect Local Customs",
    desc: "Nigeria is a culturally rich and religiously diverse country. Respect local customs, dress codes and religious practices, particularly when visiting religious sites or rural communities.",
  },
  {
    icon: "phone" as const,
    title: "Emergency Services",
    desc: "The Nigerian Emergency Management Agency (NEMA) and Nigeria Police Force can be reached via local emergency numbers. Keep copies of your travel documents and insurance details.",
  },
  {
    icon: "briefcase" as const,
    title: "Business Travel",
    desc: "Business visitors should verify all investment and business opportunities through official channels. Contact the Nigerian Investment Promotion Commission (NIPC) for guidance.",
  },
];

const advisoryLevels = [
  {
    level: "Exercise Normal Caution",
    color: "border-l-green-500 bg-green-50",
    badge: "bg-green-100 text-green-800",
    desc: "Standard precautions are recommended. The country is generally safe for travellers.",
  },
  {
    level: "Exercise Increased Caution",
    color: "border-l-yellow-500 bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-800",
    desc: "Be vigilant. There may be heightened risk due to crime, civil unrest or other hazards.",
  },
  {
    level: "Reconsider Travel",
    color: "border-l-orange-500 bg-orange-50",
    badge: "bg-orange-100 text-orange-800",
    desc: "Serious risks exist. Carefully consider whether your need to travel outweighs the risks.",
  },
  {
    level: "Do Not Travel",
    color: "border-l-red-600 bg-red-50",
    badge: "bg-red-100 text-red-800",
    desc: "This destination poses extreme risk to personal safety. Travel is strongly discouraged.",
  },
];

export default function TravelAdvisoryPage() {
  return (
    <>
      <PageHeader
        title="Travel Advisories"
        lead="Official safety information and travel guidance from Nigeria's Ministry of Foreign Affairs — for Nigerians travelling abroad and for visitors coming to Nigeria."
        crumbs={[{ label: "Travel Advisories" }]}
      />

      {/* Emergency alert bar */}
      <div className="border-b border-red-200 bg-red-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <Icon name="alert" className="h-5 w-5 shrink-0 text-red-600" />
            <p className="text-sm font-semibold text-red-800">
              Nigerian in distress abroad? Contact your nearest Nigerian mission immediately or call our 24-hour hotline.
            </p>
          </div>
          <a
            href={`tel:${site.emergencyPhone}`}
            className="flex shrink-0 items-center gap-2 rounded bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700"
          >
            <Icon name="phone" className="h-3.5 w-3.5" />
            {site.emergencyPhone}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Advisory levels */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Advisory scale"
            title="Understanding Advisory Levels"
            id="levels"
            icon="shield"
            lead="The Ministry issues travel advisories using a four-level scale to help Nigerians assess risk before and during international travel."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {advisoryLevels.map((a) => (
              <li key={a.level} className={`rounded border-l-4 p-5 ${a.color}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-sm font-bold text-ink">{a.level}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${a.badge}`}>
                    Advisory
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/70">{a.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* For Nigerians Abroad */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="For Nigerians abroad"
            title="Safety Tips for Nigerians Travelling Abroad"
            id="nigerians-abroad"
            icon="plane"
            lead="Whether travelling for business, education or leisure, these guidelines help Nigerians stay safe and informed while abroad."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nigerianAbroadTips.map((tip) => (
              <li key={tip.title} className="group flex gap-4 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={tip.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1.5 font-serif text-sm font-bold text-brand-deep">{tip.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/70">{tip.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* For Foreign Visitors */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="For visitors to Nigeria"
            title="Information for Foreigners Visiting Nigeria"
            id="visiting-nigeria"
            icon="globe"
            lead="Nigeria welcomes millions of visitors every year. These guidelines will help ensure a safe and enjoyable experience."
          />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visitingNigeriaTips.map((tip) => (
              <li key={tip.title} className="group flex gap-4 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={tip.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1.5 font-serif text-sm font-bold text-brand-deep">{tip.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/70">{tip.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Emergency contacts */}
        <section className="mb-16">
          <SectionHeading
            eyebrow="Emergency contacts"
            title="Key Emergency Contacts"
            id="emergency"
            icon="phone"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded border border-red-200 bg-red-50 p-5">
              <Icon name="phone" className="mb-3 h-6 w-6 text-red-600" />
              <h3 className="mb-1 font-serif text-sm font-bold text-ink">24-Hour Hotline</h3>
              <p className="text-[11px] text-ink/60 mb-2">Nigerians in distress abroad</p>
              <a href={`tel:${site.emergencyPhone}`} className="text-sm font-bold text-red-700 hover:underline">
                {site.emergencyPhone}
              </a>
            </div>
            <div className="rounded border border-line bg-white p-5 shadow-sm">
              <Icon name="mail" className="mb-3 h-6 w-6 text-brand" />
              <h3 className="mb-1 font-serif text-sm font-bold text-ink">Ministry Email</h3>
              <p className="text-[11px] text-ink/60 mb-2">General enquiries</p>
              <a href={`mailto:${site.email}`} className="text-sm font-bold text-brand hover:underline">
                {site.email}
              </a>
            </div>
            <div className="rounded border border-line bg-white p-5 shadow-sm">
              <Icon name="building" className="mb-3 h-6 w-6 text-brand" />
              <h3 className="mb-1 font-serif text-sm font-bold text-ink">Find a Mission</h3>
              <p className="text-[11px] text-ink/60 mb-2">109 missions worldwide</p>
              <Link href="/missions" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline">
                Browse missions <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded border border-line bg-mist p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-brand-deep">Need Consular Assistance?</h2>
              <p className="mt-1 text-sm text-ink/75">
                If you are a Nigerian citizen abroad facing a legal, medical or personal emergency, our consular team is available to help.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/services/consular-assistance"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
              >
                Consular Services <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                href="/missions"
                className="inline-flex items-center gap-2 rounded border border-line bg-white px-5 py-2.5 text-sm font-bold text-brand hover:bg-white/80"
              >
                Find a Mission <Icon name="map" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
