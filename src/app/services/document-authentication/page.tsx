import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Document Authentication",
  description: "Apostille, notarisation and legalisation of Nigerian documents at Ministry Headquarters and through our diplomatic missions.",
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
  {
    step: "01",
    title: "Obtain the original document",
    desc: "Ensure the document is an original or a certified true copy issued by the relevant Nigerian authority — Federal or State.",
  },
  {
    step: "02",
    title: "Visit the Ministry Headquarters in Abuja",
    desc: "Bring the original document, one photocopy and a completed application form to the Consular and Legal Department at Tafawa Balewa House, Central Business District, Abuja. Our officers will assess the document and guide you through the process.",
  },
  {
    step: "03",
    title: "Pay the prescribed fee",
    desc: "Authentication fees are paid at the designated bank counter or through the official Remita payment portal. Receipts must be retained and presented at the service window.",
  },
  {
    step: "04",
    title: "Collection",
    desc: "Collect your authenticated document in person at the Ministry on the date indicated on your submission slip. Standard processing: 5–10 working days from date of submission.",
  },
];

export default function DocumentAuthPage() {
  return (
    <>
      <PageHeader
        title="Document Authentication"
        lead="Apostille, notarisation and legalisation of Nigerian public documents — processed at Ministry Headquarters in Abuja and through our global network of diplomatic missions."
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
          <SectionHeading
            eyebrow="Step by step"
            title="How It Works"
            id="process"
            icon="arrow"
            lead="Documents can be authenticated at the Ministry's Headquarters in Abuja or at any Nigerian embassy or high commission abroad."
          />
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.step} className="rounded border border-line bg-white p-6 shadow-sm">
                <span className="mb-3 block font-serif text-3xl font-bold text-brand/30">{s.step}</span>
                <p className="mb-2 font-semibold text-brand-deep">{s.title}</p>
                <p className="text-sm text-ink/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* HQ address callout */}
        <section className="mb-14 rounded border border-brand/20 bg-brand/5 p-8">
          <div className="flex items-start gap-4">
            <Icon name="pin" className="mt-1 h-6 w-6 shrink-0 text-brand" />
            <div>
              <h2 className="font-serif text-lg font-bold text-brand-deep">Ministry Headquarters — Abuja</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/85">
                <strong>Consular and Legal Department</strong><br />
                Tafawa Balewa House, Central Business District, Abuja, FCT<br />
                <span className="text-ink/60">Office hours: Monday – Friday, 8:00 am – 4:00 pm</span>
              </p>
              <p className="mt-3 text-sm text-ink/80">
                Walk-in submissions are accepted during office hours. For overseas applications, contact your nearest Nigerian embassy or high commission.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-between gap-6 rounded border border-line bg-mist p-8">
          <div>
            <h2 className="font-serif text-xl font-bold text-brand-deep">Ready to Authenticate?</h2>
            <p className="mt-1 text-sm text-ink/80">
              Visit the Ministry of Foreign Affairs Headquarters in Abuja — or find your nearest Nigerian mission for overseas authentication.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep">
              Ministry contact <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/missions" className="inline-flex items-center gap-2 rounded border border-line bg-white px-6 py-3 text-sm font-bold text-ink hover:border-brand hover:text-brand">
              Find a mission
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
