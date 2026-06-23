import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Consular Assistance",
  description: "Emergency consular assistance for Nigerians in distress abroad — 24/7 support.",
};

const situations: { icon: IconName; title: string; action: string }[] = [
  { icon: "passport", title: "Lost or Stolen Passport", action: "Emergency Travel Document issued within 48–72 hrs" },
  { icon: "shield", title: "Arrest or Detention", action: "We will contact and visit you, ensure legal representation is available" },
  { icon: "bell", title: "Hospitalisation", action: "We will liaise with the hospital and notify next of kin" },
  { icon: "users", title: "Death of a Nigerian Abroad", action: "Assistance with repatriation of remains and death registration" },
  { icon: "plane", title: "Deportation / Repatriation", action: "Emergency documentation and coordination with receiving authorities" },
  { icon: "document", title: "Domestic Violence / Trafficking", action: "Safe shelter referrals, legal assistance and repatriation support" },
];

const steps = [
  { title: "Contact the nearest Nigerian mission immediately", desc: "Find the emergency contact number on the mission's website. Save it before you travel." },
  { title: "Provide your full name, location and nature of emergency", desc: "The duty officer will assess the situation and advise on next steps." },
  { title: "If unable to reach a mission, call our Emergency Response Centre", desc: "A 24/7 line is operated for Nigerians who cannot reach a local mission." },
  { title: "Follow guidance from the duty consul", desc: "Do not take any legal, financial or administrative action until you have spoken to a consul." },
];

export default function ConsularAssistancePage() {
  return (
    <>
      <PageHeader
        title="Consular Assistance"
        lead="24/7 emergency support for Nigerians in distress abroad. Our duty consuls are available around the clock to help citizens facing crises overseas."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Consular Assistance" }]}
      />

      {/* Emergency alert bar */}
      <div id="emergency" className="scroll-mt-20 bg-red-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <Icon name="bell" className="h-5 w-5 shrink-0" />
            <div>
              <p className="font-bold">Emergency? You are not alone.</p>
              <p className="text-sm text-white/90">Contact your nearest Nigerian mission immediately. All missions have a 24/7 duty officer.</p>
            </div>
          </div>
          <Link href="/missions" className="shrink-0 rounded bg-white px-5 py-2.5 text-sm font-bold text-red-700 hover:bg-red-50">
            Find a Mission Now
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Situations we handle */}
        <section className="mb-14">
          <SectionHeading eyebrow="We can help with" title="Emergency Situations" id="situations" icon="shield" />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {situations.map((s) => (
              <li key={s.title} className="rounded border border-line bg-white p-5 shadow-sm">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded bg-red-50 text-red-600">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <p className="font-semibold text-brand-deep">{s.title}</p>
                <p className="mt-1.5 text-sm text-ink/70">{s.action}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section className="mb-14">
          <SectionHeading eyebrow="What to do" title="Steps to Take in an Emergency" id="steps" icon="arrow" />
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={i} className="flex items-start gap-5 rounded border border-line bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-brand-deep">{s.title}</p>
                  <p className="mt-1 text-sm text-ink/70">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What we cannot do */}
        <section className="mb-14 rounded border border-line bg-mist p-8">
          <h2 className="mb-4 font-serif text-xl font-bold text-brand-deep">What Consular Officers Cannot Do</h2>
          <ul className="space-y-2">
            {[
              "Pay your legal fees, bail, fines or medical bills",
              "Provide legal advice or interfere with the host country's legal system",
              "Get you out of jail or stop legitimate legal proceedings",
              "Investigate crimes or act as a police force",
              "Provide financial loans or advances",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/85">
                <Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Find a mission */}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded border border-brand/30 bg-brand/5 p-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-brand-deep">Find the Nearest Nigerian Mission</h2>
            <p className="mt-1 text-sm text-ink/80">Our network of 108 missions worldwide covers 91 countries. Find emergency contact numbers for your location.</p>
          </div>
          <Link href="/missions" className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep">
            Mission directory <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
