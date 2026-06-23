import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Core Values",
  description: "The core values that guide the Federal Ministry of Foreign Affairs and Nigeria's foreign service.",
};

const values = [
  {
    num: "01",
    name: "Accountability",
    icon: "scale" as const,
    tagline: "Responsibility in all our actions",
    desc: "We are answerable to the Nigerian people, to the government, and to the international community. Every decision, expenditure and action is taken with the knowledge that we are stewards of the public trust.",
    color: "from-brand to-brand-deep",
    textAccent: "text-brand",
    borderAccent: "border-brand",
  },
  {
    num: "02",
    name: "Meritocracy",
    icon: "shield" as const,
    tagline: "Excellence and competence rewarded",
    desc: "Appointment, advancement and recognition within the Ministry and the foreign service are anchored on skill, knowledge, performance and demonstrated ability — not on patronage or partiality.",
    color: "from-brand-deep to-[#0d2b1e]",
    textAccent: "text-brand-deep",
    borderAccent: "border-brand-deep",
  },
  {
    num: "03",
    name: "Professionalism",
    icon: "briefcase" as const,
    tagline: "Integrity, skill and conduct",
    desc: "Every member of the Ministry and the foreign service represents Nigeria. We maintain the highest standards of professional conduct, intellectual rigour, and personal integrity in all our engagements at home and abroad.",
    color: "from-[#b07c20] to-[#7a5214]",
    textAccent: "text-amber-700",
    borderAccent: "border-amber-500",
  },
  {
    num: "04",
    name: "Loyalty",
    icon: "flag" as const,
    tagline: "Commitment to Nigeria's interests",
    desc: "Nigeria's national interest is our north star. We are loyal to the constitution, to the democratically expressed will of the Nigerian people, and to the cause of the nation's well-being above all personal, partisan or parochial interests.",
    color: "from-brand to-brand-deep",
    textAccent: "text-brand",
    borderAccent: "border-brand",
  },
  {
    num: "05",
    name: "Efficiency",
    icon: "check" as const,
    tagline: "Speed, precision and impact",
    desc: "We are committed to delivering quality results with the least waste of time and resources. Our processes are designed for impact — matching the pace and demands of an ever-changing global environment.",
    color: "from-brand-deep to-[#0d2b1e]",
    textAccent: "text-brand-deep",
    borderAccent: "border-brand-deep",
  },
];

export default function CoreValuesPage() {
  return (
    <>
      <PageHeader
        title="Core Values"
        lead="Five values that guide every action, decision and engagement of the Ministry and the Nigerian foreign service — at home and across our global network of missions."
        crumbs={[{ label: "About", href: "/about" }, { label: "Core Values" }]}
      />

      {/* Values — editorial row layout */}
      <div className="divide-y divide-line">
        {values.map((v, i) => (
          <div
            key={v.name}
            className={`group flex flex-col md:grid md:grid-cols-[80px_1fr] ${
              i % 2 === 0 ? "bg-white" : "bg-mist/40"
            }`}
          >
            {/* Left accent bar */}
            <div className={`hidden h-full w-full bg-gradient-to-b ${v.color} md:block`} aria-hidden="true" />

            {/* Content */}
            <div className="grid gap-6 px-8 py-10 md:grid-cols-[220px_1fr] md:py-12 lg:px-12">
              {/* Left: number + icon + name */}
              <div className="flex flex-col justify-between gap-6 md:border-r md:border-line md:pr-8">
                <div>
                  <p className={`font-serif text-5xl font-bold leading-none ${v.textAccent} opacity-20`}>
                    {v.num}
                  </p>
                  <div className={`mt-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${v.color} text-white shadow-md`}>
                    <Icon name={v.icon} className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-brand-deep">{v.name}</h2>
                  <p className={`mt-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${v.textAccent}`}>
                    {v.tagline}
                  </p>
                </div>
              </div>

              {/* Right: description */}
              <div className="flex items-center">
                <p className="max-w-2xl text-base leading-[1.85] text-ink/80">
                  {v.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote band */}
      <div className="relative overflow-hidden bg-brand-dark text-white">
        <div className="pattern-diagonal absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-8 py-14 text-center">
          <Icon name="quote" className="mx-auto mb-6 h-8 w-8 text-gold/60" />
          <blockquote>
            <p className="font-serif text-xl font-bold leading-relaxed md:text-2xl">
              &ldquo;These values are not aspirations — they are the daily standard by which every
              member of Nigeria&rsquo;s foreign service is measured and by which the Ministry
              stands accountable to the Nigerian people.&rdquo;
            </p>
            <footer className="mt-6 flex items-center justify-center gap-3 text-sm text-white/55">
              <span className="inline-block h-px w-10 bg-gold" aria-hidden="true" />
              Federal Ministry of Foreign Affairs, Federal Republic of Nigeria
              <span className="inline-block h-px w-10 bg-gold" aria-hidden="true" />
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Cross-links */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/about/mandate"
            className="group flex items-start gap-4 rounded-lg border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon name="scale" className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-serif font-bold text-brand-deep group-hover:text-brand">Mandate, Mission &amp; Vision</span>
              <span className="mt-0.5 block text-sm text-ink/60">Our legal basis and guiding purpose</span>
            </span>
          </Link>
          <Link
            href="/about"
            className="group flex items-start gap-4 rounded-lg border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <Icon name="building" className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-serif font-bold text-brand-deep group-hover:text-brand">About the Ministry</span>
              <span className="mt-0.5 block text-sm text-ink/60">Overview of who we are and what we do</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
