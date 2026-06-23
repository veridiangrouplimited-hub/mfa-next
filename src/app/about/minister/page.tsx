import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Accordion from "@/components/Accordion";
import FlagStripe from "@/components/FlagStripe";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Honourable Minister of Foreign Affairs",
  description: "Profile of Ambassador Bianca Odumegwu-Ojukwu, Honourable Minister of Foreign Affairs of the Federal Republic of Nigeria.",
};

const quickFacts = [
  { label: "Full Name", value: "Ambassador Bianca Odumegwu-Ojukwu" },
  { label: "Date of Birth", value: "August 5, 1967" },
  { label: "Sworn In", value: "April 29, 2026" },
  { label: "Previous Tenure", value: "November 4, 2024 – April 29, 2026" },
  { label: "Languages", value: "English, Igbo, Spanish" },
];

const accordionItems = [
  {
    id: "education",
    title: "Educational Background",
    content: (
      <ul className="space-y-2 text-sm text-ink/85">
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />LL.B., University of Nigeria (UNN), Nsukka</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Advanced studies, Universidad Alfonso X El Sabio, Spain</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Certificate in International Peace Studies, University for Peace, Costa Rica</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Advanced studies, Berg Institute, Madrid</li>
      </ul>
    ),
  },
  {
    id: "career",
    title: "Career & Service",
    content: (
      <ul className="space-y-2 text-sm text-ink/85">
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Called to the Nigerian Bar; practiced as a lawyer</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Anambra State gubernatorial candidate, PDP — 2003</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Presidential Aide on Diaspora Matters (2011–2012)</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Ambassador of Nigeria to the Kingdom of Spain &amp; UNWTO (2012–2015)</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Honourable Minister for Foreign Affairs (November 4, 2024 – April 29, 2026)</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Honourable Minister of Foreign Affairs (April 29, 2026 – Present)</li>
      </ul>
    ),
  },
  {
    id: "tenure",
    title: "Tenure as Honourable Minister",
    content: (
      <div className="space-y-3 text-sm leading-relaxed text-ink/85">
        <p>Appointed April 29, 2026 by His Excellency, President Bola Ahmed Tinubu GCFR, as Honourable Minister of Foreign Affairs — having previously served as Honourable Minister for Foreign Affairs from November 4, 2024.</p>
        <p>As Honourable Minister, she is advancing Nigeria's 4D Foreign Policy Framework — centred on Demography, Development, Diaspora and Democracy — positioning Nigeria as a bold and progressive leader in global diplomacy.</p>
        <p>Her tenure is characterised by proactive citizen-centred diplomacy, the protection of Nigerians abroad, the attraction of strategic investment, and the strengthening of Nigeria's bilateral and multilateral engagements across Africa, Europe, the Americas and Asia-Pacific.</p>
      </div>
    ),
  },
  {
    id: "accomplishments",
    title: "Accomplishments",
    content: (
      <ul className="space-y-2 text-sm text-ink/85">
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />First Nigerian woman to serve as Ambassador to the Kingdom of Spain</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Represented Nigeria at the United Nations World Tourism Organisation (UNWTO)</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Championed the rights and welfare of Nigerians in the diaspora across Europe, the Americas and beyond</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Led Nigeria's high-level delegations to the UN General Assembly and major international forums</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Elevated Nigeria's profile in global diplomatic circles under the Renewed Hope administration</li>
      </ul>
    ),
  },
];

export default function MinisterPage() {
  return (
    <>
      <PageHeader
        title="Honourable Minister of Foreign Affairs"
        lead="Ambassador Bianca Odumegwu-Ojukwu — distinguished lawyer, diplomat and political figure."
        crumbs={[{ label: "About", href: "/about" }, { label: "Honourable Minister" }]}
      />

      {/* Hero profile */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr]">

          {/* Portrait */}
          <aside>
            <div className="overflow-hidden rounded shadow-lg">
              <div className="relative aspect-[3/4] bg-mist">
                <Image
                  src={site.ministers.foreign.portrait.src}
                  alt={site.ministers.foreign.portrait.alt}
                  fill
                  sizes="300px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <FlagStripe className="h-1.5" />
            </div>

            {/* Quick facts */}
            <div className="mt-5 rounded border border-line bg-white p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 font-serif text-base font-bold text-brand-deep">
                <Icon name="users" className="h-4 w-4 text-brand" />
                Quick Facts
              </h2>
              <dl className="space-y-3">
                {quickFacts.map((f) => (
                  <div key={f.label} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/55">{f.label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href="/press"
              className="mt-4 flex items-center justify-center gap-2 rounded border-2 border-brand px-4 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <Icon name="newspaper" className="h-4 w-4" />
              Press Releases
            </Link>
          </aside>

          {/* Bio */}
          <div>
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
              {site.ministers.foreign.title}
            </p>
            <h2 className="mb-1 font-serif text-3xl font-bold text-brand-deep">
              {site.ministers.foreign.name}
            </h2>
            <p className="mb-6 text-sm text-ink/60">Sworn in: {site.ministers.foreign.swornIn}</p>

            <div className="mb-8 space-y-4 border-l-4 border-gold pl-6 text-base leading-relaxed text-ink/90">
              <p>
                Her Excellency, Ambassador Bianca Odumegwu-Ojukwu, born on August 5, 1967, is a
                distinguished lawyer, diplomat, and political figure who has dedicated her career to
                advancing Nigeria's interests on the world stage.
              </p>
              <p>
                She currently serves as the Honourable Minister of Foreign Affairs of the Federal
                Republic of Nigeria, having been appointed to the role on April 29, 2026. Prior to
                this appointment, she served as Honourable Minister for Foreign Affairs from
                November 4, 2024.
              </p>
            </div>

            <blockquote className="mb-8 rounded-r border-l-4 border-gold bg-mist px-6 py-5">
              <Icon name="quote" className="mb-2 h-6 w-6 text-gold/60" />
              <p className="font-serif text-base italic leading-relaxed text-ink/85">
                "My mission is clear: to advance Nigeria's national interests, protect our citizens
                abroad, and secure strategic partnerships that drive real development at home."
              </p>
            </blockquote>

            <div className="space-y-4 text-sm leading-relaxed text-ink/85 md:text-base">
              <p>
                Her extensive academic background spanning Nigeria, Spain, Costa Rica and Madrid —
                combined with decades of diplomatic service and political leadership — have made her
                a respected voice in international relations, diaspora engagement, and national
                development.
              </p>
              <p>
                As Nigeria's first female Ambassador to the Kingdom of Spain and the country's
                Permanent Representative to the UNWTO, she has a proven track record of elevating
                Nigeria's profile on the world stage and delivering results for Nigerians both at
                home and in the diaspora.
              </p>
            </div>

            {/* Accordion */}
            <div className="mt-10">
              <h2 className="mb-5 font-serif text-xl font-bold text-brand-deep">
                More About the Honourable Minister
              </h2>
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
