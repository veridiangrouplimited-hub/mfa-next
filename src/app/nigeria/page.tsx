import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import NigeriaMap from "@/components/NigeriaMap";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Nigeria",
  description: "About the Federal Republic of Nigeria — Africa's largest economy, history, people, culture and investment opportunities.",
};

const facts = [
  { label: "Capital", value: "Abuja" },
  { label: "Independence", value: "1 October 1960" },
  { label: "Population", value: "Over 220 million" },
  { label: "Official Language", value: "English" },
  { label: "Currency", value: "Naira (₦)" },
  { label: "Area", value: "923,768 km²" },
  { label: "GDP", value: "~$450 billion" },
  { label: "Ethnic Groups", value: "Over 250" },
  { label: "States", value: "36 + FCT" },
  { label: "Religion", value: "Christianity & Islam" },
  { label: "Head of State", value: "President Bola Ahmed Tinubu GCFR" },
  { label: "Motto", value: "Unity and Faith, Peace and Progress" },
];

const sections: { icon: IconName; title: string; href: string; desc: string }[] = [
  { icon: "document", title: "History", href: "/nigeria/history", desc: "From pre-colonial kingdoms to independence and the modern federation." },
  { icon: "users", title: "People & Culture", href: "/nigeria/culture", desc: "Over 250 ethnic groups, languages, music, art and traditions." },
  { icon: "briefcase", title: "Economy & Investment", href: "/nigeria/economy", desc: "Africa's largest economy with abundant resources and growing sectors." },
  { icon: "plane", title: "Tourism", href: "/nigeria/tourism", desc: "Natural wonders, heritage sites and destinations across Nigeria." },
  { icon: "shield", title: "National Symbols", href: "/nigeria/symbols", desc: "The coat of arms, national flag, anthem and other symbols." },
];

export default function NigeriaPage() {
  return (
    <>
      <PageHeader
        title="About Nigeria"
        lead="Africa's most populous nation and largest economy — a land of extraordinary diversity, resources and promise."
        crumbs={[{ label: "Nigeria" }]}
      />

      {/* Hero split */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.6fr]">
          <figure className="mx-auto w-full max-w-sm">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-brand/5 blur-2xl" aria-hidden="true" />
              <NigeriaMap className="relative h-auto w-full text-brand drop-shadow-md" />
            </div>
            <figcaption className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
              Federal Republic of Nigeria
              <span className="mt-1 block font-normal normal-case tracking-normal text-ink/55">
                36 States and the Federal Capital Territory, Abuja
              </span>
            </figcaption>
          </figure>

          <div>
            <SectionHeading eyebrow="Africa's Giant" title="Nigeria at a Glance" id="glance" icon="globe"
              lead="With over 220 million people, a $450 billion GDP and one of the world's fastest-growing youth populations, Nigeria is the defining force of 21st-century Africa."
            />
            <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="border-l-2 border-gold pl-3">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/50">{f.label}</dt>
                  <dd className="mt-0.5 font-serif text-sm font-bold text-brand-deep">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* National symbols strip */}
      <div className="border-y border-line bg-mist">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-6 md:gap-12">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-16 overflow-hidden rounded-sm ring-1 ring-black/10" aria-hidden="true">
              <span className="flex-1 bg-brand" /><span className="flex-1 bg-white" /><span className="flex-1 bg-brand" />
            </span>
            <span className="text-xs"><strong className="block text-brand-deep">National Flag</strong>Green–White–Green</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
              <Icon name="bell" className="h-5 w-5" />
            </span>
            <span className="text-xs"><strong className="block text-brand-deep">National Anthem</strong>"Nigeria, We Hail Thee"</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <span className="text-xs"><strong className="block text-brand-deep">Coat of Arms</strong>Eagle, black shield, Y-shaped river</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
              <Icon name="scale" className="h-5 w-5" />
            </span>
            <span className="text-xs"><strong className="block text-brand-deep">Motto</strong>"Unity and Faith, Peace and Progress"</span>
          </div>
        </div>
      </div>

      {/* Explore sections */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <SectionHeading eyebrow="Discover Nigeria" title="Explore More" id="explore" icon="globe" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <li key={s.title}>
              <Link href={s.href} className="group flex h-full flex-col rounded border border-line bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <span className="mb-2 font-serif text-lg font-bold text-brand-deep">{s.title}</span>
                <span className="mb-4 flex-1 text-sm text-ink/75">{s.desc}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-deep text-white">
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-12">
          <div>
            <h2 className="font-serif text-2xl font-bold">Invest in Nigeria</h2>
            <p className="mt-2 max-w-lg text-sm text-white/85">
              Africa's largest economy offers unmatched opportunities in energy, agriculture, technology, infrastructure and manufacturing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/nigeria/economy" className="rounded bg-gold px-6 py-3 text-sm font-bold text-brand-dark hover:bg-gold-dark">
              Investment Guide
            </Link>
            <Link href="/contact" className="rounded border border-white/50 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
              Contact the Ministry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
