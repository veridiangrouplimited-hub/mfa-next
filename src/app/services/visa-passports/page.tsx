import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Accordion from "@/components/Accordion";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Visas & Passports",
  description: "Nigerian passport applications, renewals, visa categories, and consular services — processed through Nigeria's global network of missions.",
};

const passportTypes = [
  {
    label: "Enhanced e-Passport",
    validity: "10 years (adult) / 5 years (minor)",
    pages: "64 pages",
    badge: "Most Common",
    badgeColor: "bg-brand text-white",
    features: [
      "Biometric chip with holder's data",
      "ICAO-compliant machine-readable zone",
      "ECOWAS standard — accepted across West Africa",
      "Enhanced security features and holographic overlays",
      "Available in 32-page and 64-page formats",
    ],
    desc: "The standard Nigerian travel document issued to all eligible citizens. Features an embedded electronic chip storing biometric data and is ICAO-compliant for international travel.",
  },
  {
    label: "Official Passport",
    validity: "5 years",
    pages: "48 pages",
    badge: "Government Officials",
    badgeColor: "bg-brand-deep text-white",
    features: [
      "Issued to Nigerian government officials",
      "Used for official duties and assignments abroad",
      "Endorsed by the issuing Ministry or Agency",
      "Distinct cover colour — dark blue",
      "Requires Ministerial or HoD authorisation",
    ],
    desc: "Issued to Nigerian government officials and civil servants travelling on official government assignments. Requires authorisation from the relevant Ministry or Agency.",
  },
  {
    label: "Diplomatic Passport",
    validity: "5 years",
    pages: "48 pages",
    badge: "Diplomats Only",
    badgeColor: "bg-gold text-brand-dark",
    features: [
      "Issued to senior officials and diplomats",
      "Confers diplomatic privileges and immunities",
      "Issued to diplomats' eligible dependants",
      "Distinct cover — dark green",
      "Issued only with Presidential or Ministerial authority",
    ],
    desc: "Issued to diplomats, senior government officials and their eligible dependants. Confers diplomatic immunity and privileges under the Vienna Convention on Diplomatic Relations.",
  },
];

const visaTypes = [
  {
    label: "Tourist / Visitor Visa",
    code: "C",
    duration: "90 days",
    desc: "For short-stay visits for tourism, family visits, sightseeing or medical treatment in Nigeria. Single or multiple entry available.",
  },
  {
    label: "Business Visa",
    code: "B",
    duration: "90 days",
    desc: "For business meetings, conferences, trade fairs and short-term commercial activities. Does not permit long-term employment.",
  },
  {
    label: "Transit Visa",
    code: "T",
    duration: "48 hours",
    desc: "For passengers in transit through Nigeria to a third country. Required if you will pass through Nigerian immigration control during a stopover.",
  },
  {
    label: "Diplomatic / Official Visa",
    code: "D/O",
    duration: "As endorsed",
    desc: "Issued to foreign government officials and diplomats on official assignments to Nigeria. Requires a note verbale from the sending government.",
  },
  {
    label: "Subject to Regularisation (STR)",
    code: "STR",
    duration: "90 days",
    desc: "Issued to individuals who will apply for a residence permit or work permit (Expatriate Quota) upon arrival in Nigeria. Must be regularised within 90 days.",
  },
  {
    label: "Temporary Work Permit (TWP)",
    code: "TWP",
    duration: "3 months",
    desc: "Issued to foreign nationals undertaking short-term technical, professional or skilled employment assignments in Nigeria that do not exceed 3 months.",
  },
];

const consularServices = [
  {
    icon: "document" as const,
    title: "Birth Registration",
    desc: "Registering births abroad and obtaining Nigerian birth certificates for children born to Nigerian parents outside Nigeria.",
  },
  {
    icon: "document" as const,
    title: "Marriage Registration",
    desc: "Registration of marriages involving Nigerian citizens contracted in foreign countries.",
  },
  {
    icon: "shield" as const,
    title: "Emergency Travel Documents",
    desc: "Issuing Emergency Travel Certificates (ETC) to Nigerians who have lost their passport abroad and need to travel urgently.",
  },
  {
    icon: "scale" as const,
    title: "Attestation & Notarisation",
    desc: "Legalisation, attestation and notarisation of documents for use in Nigeria or abroad.",
  },
  {
    icon: "users" as const,
    title: "Welfare & Protection",
    desc: "Consular assistance to Nigerians in distress, including those detained, hospitalised, trafficked or facing deportation.",
  },
  {
    icon: "building" as const,
    title: "Death Registration",
    desc: "Registration of deaths of Nigerian citizens abroad and repatriation of remains to Nigeria.",
  },
];

const faqItems = [
  {
    id: "how-long",
    title: "How long does passport processing take?",
    content: (
      <p className="text-sm text-ink/85">
        Standard processing of the Enhanced e-Passport typically takes 6–8 weeks from the date of a complete application.
        Processing times may vary by mission. Contact your nearest Nigerian mission for current turnaround times.
        Emergency Travel Documents can be issued within 48–72 hours in most missions.
      </p>
    ),
  },
  {
    id: "documents",
    title: "What documents do I need for a passport?",
    content: (
      <ul className="space-y-1.5 text-sm text-ink/85">
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Completed application form (NIS Form 1)</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Original and photocopy of current or expired passport</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Two recent passport-sized photographs (white background)</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Valid proof of Nigerian citizenship (birth certificate, NIN)</li>
        <li className="flex items-start gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />Payment receipt (fee schedule varies by mission)</li>
      </ul>
    ),
  },
  {
    id: "renewal",
    title: "Can I renew my passport at any Nigerian mission?",
    content: (
      <p className="text-sm text-ink/85">
        Yes. Passport renewals are handled by all Nigerian embassies, high commissions and consulates.
        You do not need to return to Nigeria to renew. Contact your nearest mission for the current fee
        schedule and appointment availability.
      </p>
    ),
  },
  {
    id: "visa-apply",
    title: "How do I apply for a visa to visit Nigeria?",
    content: (
      <p className="text-sm text-ink/85">
        Visa applications for Nigeria are submitted at the nearest Nigerian Embassy, High Commission or Consulate
        in your country of residence. Many nationalities are also eligible for Visa on Arrival (VoA) at Nigerian
        international airports or may apply for an e-Visa online at the Nigerian Immigration Service website.
        Check eligibility with your nearest mission before travelling.
      </p>
    ),
  },
  {
    id: "str",
    title: "What is the difference between STR and TWP?",
    content: (
      <p className="text-sm text-ink/85">
        An STR (Subject to Regularisation) visa is for foreigners who will reside in Nigeria long-term and must
        apply for a residence or work permit within 90 days of arrival. A TWP (Temporary Work Permit) is for
        short-term technical or professional assignments not exceeding 3 months and does not need to be regularised.
      </p>
    ),
  },
  {
    id: "minors",
    title: "What about passports for children?",
    content: (
      <p className="text-sm text-ink/85">
        Children under 16 require their own individual passport. Both parents (or legal guardians) must sign
        the application form. Additional documents such as the child&apos;s birth certificate, parents&apos; passports and
        a consent letter are required.
      </p>
    ),
  },
];

export default function VisaPassportsPage() {
  return (
    <>
      <PageHeader
        title="Visas & Passports"
        lead="Nigerian passport applications, renewals, and visa information for travel to Nigeria — all processed through Nigeria's global network of 109 diplomatic missions."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Visas & Passports" }]}
      />

      {/* Section tabs strip */}
      <div className="sticky top-[var(--header-height,0)] z-30 border-b border-line bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2">
          {[
            { label: "Passports", href: "#passports" },
            { label: "Visas", href: "#visas" },
            { label: "Consular Services", href: "#consular" },
            { label: "FAQ", href: "#faq" },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className="whitespace-nowrap rounded px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:bg-mist hover:text-brand"
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Passports */}
        <section id="passports" className="mb-16 scroll-mt-24">
          <SectionHeading
            eyebrow="Nigerian travel documents"
            title="Passport Types"
            id="passports-heading"
            icon="passport"
            lead="Nigeria issues three categories of passports. The Enhanced e-Passport is the standard travel document for all Nigerian citizens."
          />
          <ul className="mt-8 grid gap-6 lg:grid-cols-3">
            {passportTypes.map((p) => (
              <li key={p.label} className="flex flex-col rounded border border-line bg-white shadow-sm">
                <div className="border-b border-line px-6 py-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded bg-brand/10 text-brand">
                      <Icon name="passport" className="h-5 w-5" />
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-brand-deep">{p.label}</h3>
                  <p className="mt-1 text-xs text-ink/55">{p.validity} · {p.pages}</p>
                  <p className="mt-2 text-sm text-ink/75">{p.desc}</p>
                </div>
                <div className="flex-1 px-6 py-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-ink/40">Key Features</p>
                  <ul className="space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-ink/70">
                        <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Appointment */}
        <section id="appointment" className="mb-14 scroll-mt-24 rounded border border-brand/30 bg-brand/5 p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-brand-deep">Apply or Renew Your Passport</h2>
              <p className="mt-1 text-sm text-ink/80">
                All passport applications require an in-person appointment at a Nigerian mission.
                Book your slot or contact the nearest mission in your country.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://portal.immigration.gov.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
              >
                Apply Online <Icon name="external" className="h-4 w-4" />
              </a>
              <Link href="/missions" className="inline-flex items-center gap-2 rounded border border-line bg-white px-5 py-2.5 text-sm font-bold text-brand hover:bg-mist">
                Find a Mission <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Visa types */}
        <section id="visas" className="mb-14 scroll-mt-24">
          <SectionHeading
            eyebrow="Travel to Nigeria"
            title="Visa Categories"
            id="visa-heading"
            icon="visa"
            lead="Nigeria issues six principal visa categories to foreign nationals wishing to visit, transit through, or work in Nigeria."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visaTypes.map((v) => (
              <li key={v.label} className="flex flex-col rounded border border-line bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand text-xs font-bold text-white">
                    {v.code}
                  </span>
                  <div>
                    <p className="font-semibold text-brand-deep">{v.label}</p>
                    <p className="text-[11px] text-ink/50">Up to {v.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-ink/70">{v.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded border border-line bg-mist p-5">
            <div className="flex items-start gap-3">
              <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <p className="text-sm text-ink/80">
                <strong>Visa on Arrival & e-Visa:</strong> Nationals of eligible countries may apply for a Visa on Arrival
                at Nigerian international airports, or apply for an e-Visa before travel through the Nigeria Immigration
                Service portal. Check eligibility at your nearest Nigerian mission before travelling.
              </p>
            </div>
          </div>
        </section>

        {/* Consular Services */}
        <section id="consular" className="mb-14 scroll-mt-24">
          <SectionHeading
            eyebrow="Nigerian missions"
            title="Consular Services"
            id="consular-heading"
            icon="shield"
            lead="Nigeria's missions worldwide provide a wide range of consular services to Nigerian citizens and foreign nationals."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {consularServices.map((s) => (
              <li key={s.title} className="group flex gap-4 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-sm font-bold text-brand-deep">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-ink/65">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded border border-line bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-base font-bold text-brand-deep">Emergency Consular Assistance</h3>
                <p className="mt-0.5 text-sm text-ink/70">Nigerian abroad facing an emergency? Our consular team operates 24 hours a day.</p>
              </div>
              <Link
                href="/services/consular-assistance"
                className="inline-flex items-center gap-2 rounded bg-red-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-red-700"
              >
                <Icon name="alert" className="h-4 w-4" />
                Emergency Help
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently Asked Questions"
            id="faq-heading"
            icon="document"
          />
          <div className="mt-6">
            <Accordion items={faqItems} />
          </div>
        </section>
      </div>
    </>
  );
}
