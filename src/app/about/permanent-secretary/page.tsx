import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Permanent Secretary",
  description: "Profile of the Permanent Secretary of the Federal Ministry of Foreign Affairs, Nigeria.",
};

const facts = [
  { label: "Full Name",    value: "Dr. Dunoma Umar Ahmed, PhD" },
  { label: "Date of Birth", value: "October 15, 1968" },
  { label: "Place of Birth", value: "Maiduguri" },
  { label: "Sworn In",     value: "July 2024" },
  { label: "Languages",    value: "English, Hausa, Arabic" },
  { label: "Education",    value: "B.Sc. & M.Sc., University of Maiduguri; PhD, University of Abuja" },
];

export default function PermanentSecretaryPage() {
  return (
    <>
      <PageHeader
        title="Permanent Secretary"
        lead="The Permanent Secretary is the chief administrative officer of the Ministry, responsible for the day-to-day management of the Ministry's affairs under the direction of the Honourable Minister."
        crumbs={[{ label: "About", href: "/about" }, { label: "Leadership", href: "/about/leadership" }, { label: "Permanent Secretary" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Role banner */}
        <div className="mb-12 rounded border-l-4 border-brand bg-mist px-6 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">The Role</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/85 md:text-base">
            The Permanent Secretary coordinates and supervises all departments, divisions and units
            of the Ministry; oversees the implementation of ministerial directives; and serves as the
            accounting officer, ensuring financial probity and accountability across the entire
            Ministry and its overseas missions.
          </p>
        </div>

        {/* Profile layout */}
        <div className="grid gap-10 lg:grid-cols-[300px_1fr]">

          {/* Sidebar: portrait + fact sheet */}
          <div className="space-y-5">
            <div className="overflow-hidden rounded border border-line shadow-md">
              <Image
                src="https://foreignaffairs.gov.ng/images/permsec.png"
                alt="Official portrait of Dr. Dunoma Umar Ahmed, PhD, Permanent Secretary"
                width={300}
                height={380}
                className="w-full object-cover"
                unoptimized
              />
              <div className="bg-brand px-5 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Permanent Secretary</p>
                <p className="mt-0.5 font-serif text-base font-bold text-white">Dr. Dunoma Umar Ahmed, PhD</p>
                <p className="mt-0.5 text-xs text-white/75">Federal Ministry of Foreign Affairs</p>
              </div>
            </div>

            <div className="rounded border border-line bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Personal Details</h2>
              <dl className="space-y-3">
                {facts.map((f) => (
                  <div key={f.label} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/45">{f.label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Main content */}
          <div>
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Profile</p>
            <h2 className="mb-1 font-serif text-2xl font-bold text-brand-deep md:text-3xl">
              Dr. Dunoma Umar Ahmed, PhD
            </h2>
            <p className="mb-8 text-sm text-ink/55">Permanent Secretary, Federal Ministry of Foreign Affairs</p>

            <div className="space-y-5 border-l-4 border-gold pl-6 text-sm leading-relaxed text-ink/90 md:text-base">
              <p>
                Dr. Dunoma Umar Ahmed is a seasoned public administrator and strategic leader currently
                serving as the Permanent Secretary of the Ministry of Foreign Affairs. With decades of
                experience across key government ministries and departments, he brings a wealth of
                institutional knowledge, policy coordination expertise, and reform-oriented leadership
                to Nigeria&rsquo;s diplomatic administration.
              </p>
              <p>
                In his capacity as Permanent Secretary, Dr. Ahmed oversees the daily operations of the
                Ministry, coordinates policy implementation, manages the Ministry&rsquo;s budget and
                human resources, and ensures the efficient functioning of Nigeria&rsquo;s network of
                diplomatic and consular missions across the globe.
              </p>
              <p>
                Dr. Ahmed is committed to strengthening the administrative capacity of the Ministry
                and deepening the professionalism of the Nigerian foreign service in pursuit of
                Nigeria&rsquo;s 4D Foreign Policy Framework.
              </p>
            </div>

            <div className="mt-8">
              <Image
                src="https://foreignaffairs.gov.ng/images/permsecpose.jpg"
                alt="Dr. Dunoma Umar Ahmed at an official function"
                width={560}
                height={360}
                className="w-full rounded border border-line object-cover shadow-sm"
                unoptimized
              />
            </div>

            {/* Cross-links */}
            <div className="mt-10 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
              <Link
                href="/about/minister"
                className="group flex items-start gap-3 rounded border border-line bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name="users" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand-deep group-hover:text-brand">Honourable Minister</span>
                  <span className="mt-0.5 block text-xs text-ink/60">Amb. Bianca Odumegwu-Ojukwu</span>
                </span>
              </Link>
              <Link
                href="/about/departments"
                className="group flex items-start gap-3 rounded border border-line bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name="building" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand-deep group-hover:text-brand">Departments & Units</span>
                  <span className="mt-0.5 block text-xs text-ink/60">The Ministry's organisational structure</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
