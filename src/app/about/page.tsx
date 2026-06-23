import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About the Ministry",
  description: "About the Ministry of Foreign Affairs, Federal Republic of Nigeria — our mandate, structure, history and leadership.",
};

const quickLinks = [
  { label: "Mandate, Mission & Vision", href: "/about/mandate",     icon: "scale" as const,     desc: "Our statutory mandate and guiding purpose" },
  { label: "Core Values",               href: "/about/core-values",  icon: "flag" as const,      desc: "The five values that guide our work" },
  { label: "Departments & Units",        href: "/about/departments",  icon: "building" as const,  desc: "Our 13 specialised departments" },
  { label: "Agencies & Parastatals",     href: "/about/agencies",     icon: "globe" as const,     desc: "Affiliated bodies and institutions" },
  { label: "History of the MFA",         href: "/about/history",      icon: "document" as const,  desc: "Six decades of Nigerian diplomacy" },
  { label: "Minister of Foreign Affairs",href: "/about/minister",     icon: "users" as const,     desc: "Amb. Bianca Odumegwu-Ojukwu" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the Ministry"
        lead="Who we are, what we do, and how the Ministry of Foreign Affairs serves Nigeria and Nigerians across the globe."
        crumbs={[{ label: "About" }]}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">

        {/* Overview prose */}
        <section className="mb-12">
          <p className="mb-5 text-sm leading-relaxed text-ink/90 md:text-base">
            As the principal arm of Nigeria&rsquo;s foreign engagement, the Ministry of Foreign Affairs
            leads the nation&rsquo;s diplomatic missions and international relations. We are driven by a
            deep commitment to advancing Nigeria&rsquo;s global interests, promoting peace and cooperation,
            and representing the values and aspirations of our people.
          </p>
          <p className="text-sm leading-relaxed text-ink/90 md:text-base">
            Grounded in professionalism, service, and strategic policy-making, we serve as the trusted
            bridge between Nigeria and the rest of the world — operating a network of 109 diplomatic and
            consular missions across Africa, the Americas, Asia, Europe and the Middle East.
          </p>
        </section>

        {/* Mandate / Mission / Vision summary strip */}
        <div className="mb-14 grid gap-4 md:grid-cols-3">
          <div className="rounded border-l-4 border-gold bg-mist p-5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Mandate</p>
            <p className="text-sm leading-relaxed text-ink/85">
              The statutory facilitating organ charged with the formulation, articulation, conduct and
              execution of Nigeria&rsquo;s foreign policy.
            </p>
          </div>
          <div className="rounded border-l-4 border-brand bg-mist p-5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Mission</p>
            <p className="text-sm leading-relaxed text-ink/85">
              To develop and manage the Ministry around knowledgeable staff and dynamic missions that
              deliver peace, security and prosperity for Nigeria&rsquo;s citizens.
            </p>
          </div>
          <div className="rounded border-l-4 border-brand-deep bg-mist p-5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Vision</p>
            <p className="text-sm leading-relaxed text-ink/85">
              To facilitate Nigeria&rsquo;s growth as one of the ten most influential and respected
              nations of the world — a beacon of hope for Africa and the developing world.
            </p>
          </div>
        </div>

        {/* Navigation cards */}
        <h2 className="mb-5 font-serif text-xl font-bold text-brand-deep">Explore the Ministry</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full items-start gap-3 rounded border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={l.icon} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand-deep group-hover:text-brand">{l.label}</span>
                  <span className="mt-0.5 block text-xs text-ink/60">{l.desc}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
