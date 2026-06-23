import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Multilateral Diplomacy",
  description: "Nigeria's engagement with the United Nations, African Union, ECOWAS and other international bodies.",
};

type Body = { icon: IconName; name: string; abbr: string; role: string; desc: string };

const bodies: Body[] = [
  {
    icon: "globe",
    name: "United Nations",
    abbr: "UN",
    role: "Founding member · Non-permanent SC member (4 terms)",
    desc: "Nigeria is a founding member of the UN (1960) and has served four terms on the UN Security Council. Nigeria campaigns vigorously for a permanent African seat on a reformed Security Council.",
  },
  {
    icon: "flag",
    name: "African Union",
    abbr: "AU",
    role: "Founding member · Major contributor",
    desc: "Nigeria is the AU's largest financial contributor and a driving force behind AU peacekeeping operations (AMISOM, MNJTF) and the push for AU institutional reform.",
  },
  {
    icon: "map",
    name: "Economic Community of West African States",
    abbr: "ECOWAS",
    role: "Founding member · Chair (multiple terms)",
    desc: "Nigeria founded ECOWAS in 1975 and has consistently led its peacekeeping (ECOMOG), electoral monitoring and sanctions mechanisms across West Africa.",
  },
  {
    icon: "briefcase",
    name: "African Continental Free Trade Area",
    abbr: "AfCFTA",
    role: "Ratified 2019 · Top-3 market",
    desc: "Nigeria ratified the AfCFTA in 2019 and is working to implement its provisions. The AfCFTA Secretariat is in Accra; Nigeria is a primary driver of the continental integration project.",
  },
  {
    icon: "scale",
    name: "Commonwealth of Nations",
    abbr: "Commonwealth",
    role: "Active member",
    desc: "Nigeria re-engaged the Commonwealth in 1999 after Abacha-era suspension. It participates in CHOGM, Commonwealth trade negotiations and democratic peer review mechanisms.",
  },
  {
    icon: "shield",
    name: "Organisation of Islamic Cooperation",
    abbr: "OIC",
    role: "Member · Active participant",
    desc: "Nigeria is an active OIC member, representing the interests of its substantial Muslim population in global Islamic cooperation frameworks including IFSB and IDB.",
  },
  {
    icon: "users",
    name: "Non-Aligned Movement",
    abbr: "NAM",
    role: "Long-standing member",
    desc: "Nigeria's non-aligned tradition underpins its independent foreign policy posture — refusing to become a client state of any major power bloc.",
  },
  {
    icon: "plane",
    name: "G20 (African Union seat)",
    abbr: "G20",
    role: "Represented through the AU seat",
    desc: "With the AU now a permanent G20 member, Nigeria's voice is formally represented at the world's premier economic governance forum.",
  },
];

const priorities = [
  "Reform of the UN Security Council to include two permanent African seats",
  "Strengthening the African Peace and Security Architecture (APSA)",
  "Accelerating the implementation of the African Continental Free Trade Area",
  "Securing climate finance and just energy transition support for Africa",
  "Reform of the global financial architecture to reflect African interests",
  "Combating terrorism and transnational crime through multilateral frameworks",
  "Protecting the rights of migrant workers and diaspora communities internationally",
];

export default function MultilateralPage() {
  return (
    <>
      <PageHeader
        title="Multilateral Diplomacy"
        lead="Nigeria's engagement at the UN, AU, ECOWAS and across global multilateral institutions — championing Africa's voice in a multipolar world."
        crumbs={[{ label: "Policy", href: "/policy" }, { label: "Multilateral" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Key bodies */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="International memberships"
            title="Key Multilateral Bodies"
            id="bodies"
            icon="globe"
            lead="Nigeria's multilateral diplomacy spans the full spectrum of international institutions — from universal bodies like the UN to regional frameworks in Africa and the Islamic world."
          />
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {bodies.map((b) => (
              <li key={b.abbr} className="flex items-start gap-5 rounded border border-line bg-white p-5 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-serif font-bold text-brand-deep">{b.name}</p>
                    <span className="rounded bg-brand px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">{b.abbr}</span>
                  </div>
                  <p className="mb-1.5 text-xs font-semibold text-brand">{b.role}</p>
                  <p className="text-sm text-ink/75">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Priorities */}
        <section className="mb-14 rounded border border-line bg-mist p-8">
          <SectionHeading eyebrow="Nigeria's agenda" title="Multilateral Priorities" id="priorities" icon="flag" />
          <ul className="mt-4 space-y-2.5">
            {priorities.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">{i + 1}</span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/policy/bilateral" className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep">
            Bilateral Relations <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/policy" className="inline-flex items-center gap-2 rounded border border-line px-5 py-2.5 text-sm font-bold text-ink hover:border-brand hover:text-brand">
            Back to Policy
          </Link>
        </div>
      </div>
    </>
  );
}
