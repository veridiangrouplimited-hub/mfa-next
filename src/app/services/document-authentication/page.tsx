import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Document Authentication",
  description: "Apostille, notarisation and legalisation of Nigerian documents for use abroad.",
};

const docTypes = [
  { label: "Birth & Death Certificates", icon: "document" as const },
  { label: "Marriage Certificates", icon: "document" as const },
  { label: "Educational Certificates", icon: "document" as const },
  { label: "Power of Attorney", icon: "document" as const },
  { label: "Corporate / Business Documents", icon: "briefcase" as const },
  { label: "Court Orders & Judgements", icon: "scale" as const },
  { label: "Police Clearance Certificates", icon: "shield" as const },
  { label: "Medical Records", icon: "document" as const },
];

const steps = [
  { step: "01", title: "Obtain the original document", desc: "Ensure the document is an original or a certified true copy issued by the relevant Nigerian authority." },
  { step: "02", title: "Notarise at your State Ministry of Justice", desc: "Many documents must first be notarised by the State Ministry of Justice or a Commissioner for Oaths in Nigeria." },
  { step: "03", title: "Submit to the Nigerian Embassy / HC", desc: "Bring the document, a photocopy, the completed application form and applicable fees to the nearest Nigerian mission." },
  { step: "04", title: "Collection", desc: "Collect your authenticated document in person or by pre-paid courier (where available). Standard processing: 5–10 working days." },
];

export default function DocumentAuthPage() {
  return (
    <>
      <PageHeader
        title="Document Authentication"
        lead="Apostille, notarisation and legalisation of Nigerian public documents for use abroad — handled through our network of diplomatic missions."
        crumbs={[{ label: "Services", href: "/services" }, { label: "Document Authentication" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* What we authenticate */}
        <section className="mb-14">
          <SectionHeading eyebrow="Document types" title="What We Can Authenticate" id="doc-types" icon="document" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {docTypes.map((d) => (
              <li key={d.label} className="flex items-center gap-3 rounded border border-line bg-white p-4 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon name={d.icon} className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-ink">{d.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section className="mb-14">
          <SectionHeading eyebrow="Step by step" title="How It Works" id="process" icon="arrow" />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.step} className="rounded border border-line bg-white p-6 shadow-sm">
                <span className="mb-3 block font-serif text-3xl font-bold text-brand/30">{s.step}</span>
                <p className="mb-2 font-semibold text-brand-deep">{s.title}</p>
                <p className="text-sm text-ink/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Apostille note */}
        <section className="mb-14 rounded border border-gold/40 bg-gold/5 p-8">
          <div className="flex items-start gap-4">
            <Icon name="scale" className="mt-1 h-6 w-6 shrink-0 text-gold" />
            <div>
              <h2 className="font-serif text-lg font-bold text-brand-deep">Apostille Under the Hague Convention</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">
                Nigeria is a signatory to the Hague Apostille Convention (1961). Documents intended for use in another Hague member country can be given an Apostille certificate by the Federal Ministry of Justice in Abuja, eliminating the need for further consular legalisation in the destination country. If you are submitting a document for use in a non-Hague country, full consular legalisation at the relevant embassy is required instead.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded border border-line bg-mist p-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-brand-deep">Ready to Authenticate?</h2>
            <p className="mt-1 text-sm text-ink/80">Find your nearest Nigerian mission to begin the process.</p>
          </div>
          <Link href="/missions" className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep">
            Find a mission <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
