import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Senior political and administrative leadership of the Ministry of Foreign Affairs, Federal Republic of Nigeria.",
};

const leaders = [
  {
    name: site.ministers.foreign.name,
    title: site.ministers.foreign.title,
    swornIn: site.ministers.foreign.swornIn,
    href: "/about/minister",
    portrait: site.ministers.foreign.portrait,
    useImage: true,
  },
  {
    name: "To Be Announced",
    title: "Honourable Minister of State for Foreign Affairs",
    swornIn: null,
    href: "/about/minister-state",
    portrait: null,
    useImage: false,
  },
  {
    name: "Dr. Dunoma Umar Ahmed, PhD",
    title: "Permanent Secretary",
    swornIn: "July 2024",
    href: "/about/permanent-secretary",
    portrait: { src: "https://foreignaffairs.gov.ng/images/permsec.png", alt: "Official portrait of the Permanent Secretary" },
    useImage: true,
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        title="Ministry Leadership"
        lead="The political and administrative leadership of the Federal Ministry of Foreign Affairs — driving Nigeria's diplomacy under the Renewed Hope agenda."
        crumbs={[{ label: "About", href: "/about" }, { label: "Leadership" }]}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">

        <ul className="grid gap-6 sm:grid-cols-3">
          {leaders.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full flex-col overflow-hidden rounded border border-line bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                {/* Portrait or placeholder */}
                <div className="relative h-56 overflow-hidden bg-mist">
                  {l.useImage && l.portrait ? (
                    <Image
                      src={l.portrait.src}
                      alt={l.portrait.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Icon name="users" className="h-16 w-16 text-brand/20" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" aria-hidden="true" />
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                    {l.title}
                  </p>
                  <h2 className="font-serif text-base font-bold leading-snug text-brand-deep group-hover:text-brand">
                    {l.name}
                  </h2>
                  {l.swornIn && (
                    <p className="mt-1 text-xs text-ink/50">Sworn in: {l.swornIn}</p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand">
                    View profile <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Missions cross-link */}
        <div className="mt-10 rounded border border-line bg-mist p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-serif font-bold text-brand-deep">Permanent Mission Representatives</h2>
              <p className="mt-1 text-sm text-ink/70">
                Heads of Nigeria's embassies, high commissions and consulates across the world.
              </p>
            </div>
            <Link
              href="/missions"
              className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
            >
              View All Missions <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
